// https://docs.google.com/spreadsheets/d/1fWgSQuMgG0dLg3_Nbp7QHCpu1yrzFhlunGaz0g8t4VU/edit?usp=sharing
const { GoogleSpreadsheet } = require('google-spreadsheet')
require('dotenv').config()


// const config = require('../qna-prodi-d7b8ab0dd396.json')


async function getSheetData(req,res) {
  const payload = req.body
  console.log(payload);
  // const doc = new GoogleSpreadsheet('1SaXnuRt-1KXyDGS18KqU7cus4_IWNxpGhiVy0J1vz-U')
  try {
    const doc = new GoogleSpreadsheet(payload.id_spreadsheet)
  
    const config = {
      client_email: payload.email,
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDoj7DNZYOGUa0j\nxlkIu2Y8StDEYplGyezy3qh2fKKNjdVeX+CMCoyGPgzhc1p5Nx8YwDg2/A+p2LW1\nT7VrrzBDZPrRU/TZlEQGkIJshkO+QTdDJyvze/gQX5UvSWLAV0KOUjkFMHAq2jkI\nW43p65TnM/SE4XwuQSB1/bDfZTD0w2OQVR8SR1Vn2enybD5MUWlCaHwiMDIxBoLn\nJEH6HLa/k37QAQH1361vsuc7GdBoE9VT++pkvb4pPTzqVKMnwYUnG+Ge2Ywj7UxY\nNDhtmM/Qb24/4V2Tm4nEPPwfQ1JKWpdwK4fzx/sOYn9URES27h6+f7ISxxPijXZb\ndrT2WDk/AgMBAAECggEAB3x7UYaqCYyJiUmc8MYE5X33DctVaczy6WKM2RDsCVMp\nLNo4l+l4WpNBcOR4uMbdzmXUVBjLHEmTQoc9V35n4ajXgMjgweb0RaMolPvBeddk\nQwTOH7lm491f0l+HY++rKc+wcYqnTF8tT306/+5geGIuGzTy/WjaoFG5UYeoCsj2\nWLZ5Jg4g/8WfNvflyFKvJvFJOA6ZBmwxIEDUQXlXvRRziRuWKy3vD5nyPlN/cxyu\nrfnUuWzvk+Q4sObG1DQ6FchQfA6DvrP37Qo10y5H/YE0KSfKUcQOGghti7jghvhH\nWo4pGyvFwsV57fODXG/BnCHPKlYDXRXoBUFFPjJAOQKBgQD5V91lL7teZT7C2J4h\nwwgWhvv/gspuSV8WE9NEdm115sL9tQPyTejWQNw3DJM1BCM7UYKOiJIfhCTf4BUo\n4yza7o93JUjz95wciXNQJOjtve3AUDCYe8yG8kCy796j+UQVxXRuzjymcxe5yHN5\nU9g0T6JeRWnAH/sRdaAVQiUEtQKBgQDuxSE5HOvIBVJYvZvdKrN735J9MBB9R2kG\n6+ol939gbTKjnwnuRhs3GlSLBEnMn5Xw2qaoRupVxvmh8yKrniCfddxZw9Qq+cAk\nZmt0ok781bqhowFyrAH+E7s27K62WBvthfdAI7LGujTifvrndu6DV8IHYH7QkqXW\nS+VJaRuSowKBgQCRy/fP/+4OjyL4qdMlKLZk/b8CM8cMX+iyrxr80EbHBw0DbsIE\n/9ti1IAvzDGTcXzsZYfyshbHSOyK36tfwh5rUc0fvPSAe0uUQCbmOP7ebQ1FQ152\n+wSn76U3PB0yQkG2fUPMutkp9uhroLMswYMNa3ckqm/ggJK9LctSQuAEdQKBgF1p\n8l2N2xEeQ+FEDT6x/hZwmbcwnsLktUpn8et4sPTgw/cPuarm8q7UNk9NFjJgHSFl\n6d3cIMH+Xpvlq6LI8qpwSg00eEV4AJw9Fb1D4vM4CxRB2ccrVHw66/vJDXF5dzOu\nPdVyIfdt0lLqqu7zsMziAJ8yOWsQdKEqgEIARTFRAoGBAOFpaGAOK+f+3JEkTiTu\n5uifwCQlcdhX/LqPd5XuHJc2W0zlW7QoUrV1xl9CJEPMp0Q3dZN4iTrMNMlHWbxu\nFmfKINr0Zd2YAXZMk38gfmFaaUT7Cf8GFy3H6M9yvnxbNkMY5oqdhq30mQiRVC3G\n7K9JY3l8CsldOKKy6M9pLqmq\n-----END PRIVATE KEY-----\n",
    }
    await doc.useServiceAccountAuth(config)
    await doc.loadInfo()
  
    // const sheet = doc.sheetsByTitle["web"]
    const sheet = doc.sheetsByTitle[payload.sheet_title]
    console.log(sheet);
    const rows = await sheet.getRows()
    const dataFinal = rows.map((data,idx)=> {
      return {
        nama: data.nama,
        linkedin: data.linkedin,
        instagram: data.instagram,
        angkatan_telu: data.angkatan_telu,
        angkatan_ai: data.angkatan_ai,
        foto_id: data.foto_id
      }
    })

    res.status(200).json({data: dataFinal})
  } catch (error) {
    console.log(error);
    
  }

  // return rows
}

module.exports = {
  getSheetData
}