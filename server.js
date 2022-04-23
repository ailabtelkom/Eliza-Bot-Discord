const { getSheetData } = require("./getSheetData")

const bodyParser = require("body-parser")
const express = require('express');
const cors = require('cors')

const createServer = client => {
  const app = express();

  app.use(bodyParser.urlencoded({extended:true}))
  app.use(bodyParser.json())
  app.use(cors())

  // app.get("/", (_, res) => {
  //   res.send(`${client.user.username} says hello`)
  // })

  app.post("/getSheetAI", getSheetData)


  return app
}

module.exports = {
  createServer
}