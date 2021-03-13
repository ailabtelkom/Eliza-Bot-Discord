id_dictionaries = [
  ['Aku ingin  (.*)',
   ["kenapa kamu ingin %?",
    "Lalu apa?",
    "Kamu yakin ingin %?"]],

  ['Aku butuh (.*)',
   ["kenapa kamu butuh %?",
    "Lalu apa ?",
    "Apakah aku bisa membantu ?",
    "Kamu yakin butuh %?"]],

  ['Kenapa (kamu|lo|elo|lu) ([^\?]*)\??',
   ["Kamu yakin aku %?",
    "Kamu ingin aku untuk %?"]],

  ['Kenapa (aku|gw|saya) ([^\?]*)\??',
      ["Kamu yakin, kamu %?",
       "Aku tidak tahu, kenapa kamu %?",
       "Kenapa kamu berpikir begitu ?"]],

  ['Kenapa sih (aku|gw|saya) ([^\?]*)\??',
      ["Kamu yakin, kamu %?",
       "Aku tidak tahu, kenapa kamu %?",
       "Kenapa kamu berpikir begitu ?"]],

  ['Aku (gabisa|ngga bisa|tidak bisa) (.*)',
      ["Darimana kamu bisa tahu, kamuu gabisa %?",
       "Mungkin kamu bisa % jika kamu berusaha.",
       "Yuk bisa yuk wkwkwk",
       "Kamu pasti %?"]],

  ['Aku (.*)',
      ["Kamu ngobrol sama aku karena %?",
       "Sudah berapa lama kamu %?",
       "Apakah kamu menikmatinya ?",
       "Apakah menyenangkan ?",
       "Apakah menyedihkan ?",
       "Kenapa kamu berpikir seperti itu ?",
       "Apa yang kamu rasakan ketika kamu %?"]],

  ['Apakah kamu ([^\?]*)\??',
      ["Gapapa kan kalo aku %?",
       "Apa kamu lebih suka jika aku tidak %?",
       "Kenapa kamu berpikir begitu ?",
       "Hmm... aku tidak yakin",
       "Sepertinya tidak"]],

  ['(Apa|bagaimana) (kabar|kabarmu)?',
      ["Baik, kamu?",
       "Baik.",
       "Baik, tentu saja.",
       "Menurut kamu?"]],

  ['(.*) maaf (.*)',
      ["Tak apa.",
       "Engga papa.",
       "Kenapa :( ?"]],

  ['(Hello|Hai|Hi|Halo|Hallo)(.*)',
      ["Hai",
       "Hi?",
       "Halo, Apa kabarmu?"]],

  ['(.*) (temen|teman|temenku|temanku) (.*)',
      ["Ceritain temanmu dong.",
       "Bisa kamu ceritakan?",
       "Kamu punya banyak teman ya?"]],

  ['Iya',
      ["Hmm, iya.",
       "Sudah kuduga"]],

  ['(Baik|Alhamdulillah)',
      ["Alhamdulillah",
       "Semoga tetap baik saja.",
       "Aku juga baik"]],

  ['Bisakah kamu ([^\?]*)\??',
      ["Apa akmu berpikir saya tidak bisa %?",
       "Kalo aku bisa %, Lalu apa ?",
       "Entahlah."]],

  ['Bisa (ngga|tidak|nga) (kamu|lo|elo|lu) ([^\?]*)\??',
      ["Apa akmu berpikir saya tidak bisa %?",
       "Kalo aku bisa %, Lalu apa ?",
       "Entahlah."]],

  ['(aku|gw|saya) (pengen|ingin|kepengen) bisa ([^\?]*)\??',
      ["Kenapa kamu ingin bisa %.",
       "Aku yakin kamu pasti bisa %",
       "Yuk bisa yuk wkwkw...."]],

  ['(kamu|lo|elo|lu) (.*)',
      ["Kenapa kamu berpikir aku %?",
       "Kenapa begitu ?",
       "Kenapa kamu berpikir seperti itu?",
       "Kamu yakin aku %?"]],

  ['(aku|gw|saya) punya (.*)',
      ["Kenapa kamu memberitahuku kamu punya %?",
       "Setelah punya %, kamu akan melakukan apa?", ]
   ],

  ['(aku|gw|saya) akan (.*)',
      ["Kenapa kamu harus %?",
       "Kenapa kamu %?",
       "Apakah aku harus % juga?"]],

  ['(aku|gw|saya) (pengen|ingin|kepengen) (.*)',
      ["Kenapa kamu ingin %?",
       "Setelah %, apa yang kamu lakukan?",
       "Kenapa %?",
       "Apakah aku bisa membantu?"]],

  ['(.*)\?',
      ["Kenapa kamu bertanya itu?",
       "Kenapa?",
       "Hmmm... Aku tidak yakin."
       ]],

  ['Selamat malam (.*)|selamat malam|malam (.*)|malam',
      ["Malam.",
       "Selamat malam.",
       "Iya?"]],

  ['Selamat pagi (.*)|selamat pagi|pagi (.*)|pagi',
      ["pagi.",
       "Selamat pagi.",
       "Pagi yang cerah",
       "Iya?"]],

  ['(developer|pengembang)',
      ["Bot ini diciptakan oleh https://github.com/raisoturu dan https://github.com/alifnaufalyasin"]],
  ['(tentang|about)',
      ["Eliza merupakan pertama yang dibuat pada tahun 1964 sampai 1966 oleh Professor Joseph Weizenbaum di MIT (Massachusetts Institute of Technology), dengan tujuan untuk mempelajari komunikasi natural language antara manusia dengan mesin.",
       "Baca lebih lanjut disini https://en.wikipedia.org/wiki/ELIZA",
       "Baca lebih lanjut disini https://github.com/raisoturu/eliza-line-chatbot"]],

  ['(quit|keluar|exit)',
      ["Dadah.",
       "Good-bye.",
       "Terima kasih sudah mengobrol"]],
]
id_default_responses = [
  "Menarik.",
  "Aku tidak yakin",
  "Aku tidak mengerti",
  "Iya?",
  "Lalu?",
  "Hmm...",
]
id_reflections = {
  "aku": "Kamu",
  "gw": "Kamu",
  "gue": "Kamu",
  "gua": "Kamu",
  "lu": "Aku",
  "kamu": "Aku",
  "eLo": "Aku",
  "elu": "Aku",
}

module.exports ={
  id_dictionaries,
  id_reflections,
  id_default_responses
}
