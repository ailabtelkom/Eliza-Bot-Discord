id_dictionaries = [
  [
    "aku ingin (.*)",
    2,
    ["kenapa kamu ingin %?", "Lalu apa?", "Kamu yakin ingin %?"],
  ],

  [
    "aku butuh (.*)",
    2,
    [
      "kenapa kamu butuh %?",
      "Lalu apa ?",
      "Apakah aku bisa membantu ?",
      "Kamu yakin butuh %?",
    ],
  ],

  [
    "kenapa (kamu|lo|elo|lu) ([^?]*)??",
    2,
    ["Kamu yakin aku %?", "Kamu ingin aku untuk %?"],
  ],

  [
    "kenapa (aku|gw|saya) ([^?]*)??",
    2,
    [
      "Kamu yakin, kamu %?",
      "Aku tidak tahu, kenapa kamu %?",
      "Kenapa kamu berpikir begitu ?",
    ],
  ],

  [
    "kenapa sih (aku|gw|saya) ([^?]*)??",
    2,
    [
      "Kamu yakin, kamu %?",
      "Aku tidak tahu, kenapa kamu %?",
      "Kenapa kamu berpikir begitu ?",
    ],
  ],

  [
    "aku (gabisa|ngga bisa|tidak bisa) (.*)",
    2,
    [
      "Darimana kamu bisa tahu, kamuu gabisa %?",
      "Mungkin kamu bisa % jika kamu berusaha.",
      "Yuk bisa yuk wkwkwk",
      "Kamu pasti %?",
    ],
  ],

  [
    "aku (.*)",
    1,
    [
      "Kamu ngobrol sama aku karena %?",
      "Sudah berapa lama kamu %?",
      "Apakah kamu menikmatinya ?",
      "Apakah menyenangkan ?",
      "Apakah menyedihkan ?",
      "Kenapa kamu berpikir seperti itu ?",
      "Apa yang kamu rasakan ketika kamu %?",
    ],
  ],

  [
    "apakah kamu ([^?]*)??",
    2,
    [
      "Gapapa kan kalo aku %?",
      "Apa kamu lebih suka jika aku tidak %?",
      "Kenapa kamu berpikir begitu ?",
      "Hmm... aku tidak yakin",
      "Sepertinya tidak",
    ],
  ],

  [
    "(apa|bagaimana) (kabar|kabarmu)?",
    0,
    ["Baik, kamu?", "Baik.", "Baik, tentu saja.", "Menurut kamu?"],
  ],

  ["(.*) maaf (.*)", 
    0, 
    ["Tak apa.", "Engga papa.", "Kenapa :( ?"]],

  ["(hello|hai|hi|halo|hallo)(.*)",
    0,
    ["Hai", "Hi?", "Halo, Apa kabarmu?"]],

  [
    "(.*) (temen|teman|temenku|temanku) (.*)",
    0,
    [
      "Ceritain temanmu dong.",
      "Bisa kamu ceritakan?",
      "Kamu punya banyak teman ya?",
    ],
  ],

  ["iya",
    0,
    ["Hmm, iya.", "Sudah kuduga"]],

  ["(baik|alhamdulillah)",
    0,
    ["Alhamdulillah", "Semoga tetap baik saja.", "Aku juga baik"],
  ],

  ["bisakah kamu ([^?]*)??",
    2,
    [
      "Apa akmu berpikir saya tidak bisa %?",
      "Kalo aku bisa %, Lalu apa ?",
      "Entahlah.",
    ],
  ],

  ["bisa (ngga|tidak|nga) (kamu|lo|elo|lu) ([^?]*)??",
    3,
    [
      "Apa akmu berpikir saya tidak bisa %?",
      "Kalo aku bisa %, Lalu apa ?",
      "Entahlah.",
    ],
  ],

  ["(aku|gw|saya) (pengen|ingin|kepengen) bisa ([^?]*)??",
    3,
    [
      "Kenapa kamu ingin bisa %.",
      "Aku yakin kamu pasti bisa %",
      "Yuk bisa yuk wkwkw....",
    ],
  ],

  [
    "(kamu|lo|elo|lu) (.*)",
    1,
    [
      "Kenapa kamu berpikir aku %?",
      "Kenapa begitu ?",
      "Kenapa kamu berpikir seperti itu?",
      "Kamu yakin aku %?",
    ],
  ],

  [
    "(aku|gw|saya) punya (.*)",
    2,
    [
      "Kenapa kamu memberitahuku kamu punya %?",
      "Setelah punya %, kamu akan melakukan apa?",
    ],
  ],

  [
    "(aku|gw|saya) akan (.*)",
    2,
    ["Kenapa kamu harus %?", "Kenapa kamu %?", "Apakah aku harus % juga?"],
  ],

  [
    "(aku|gw|saya) (pengen|ingin|kepengen) (.*)",
    2,
    [
      "Kenapa kamu ingin %?",
      "Setelah %, apa yang kamu lakukan?",
      "Kenapa %?",
      "Apakah aku bisa membantu?",
    ],
  ],

  ["Selamat malam (.*)|selamat malam|malam (.*)|malam",
    0,
    ["Malam.", "Selamat malam.", "Iya?"],
  ],

  ["Selamat pagi (.*)|selamat pagi|pagi (.*)|pagi",
    0,
    ["pagi.", "Selamat pagi.", "Pagi yang cerah", "Iya?"],
  ],

  ["(developer|pengembang)",
    0,
    [
      "Bot ini diciptakan oleh https://github.com/raisoturu dan https://github.com/alifnaufalyasin",
    ],
  ],
  ["(tentang|about)",
    0,
    [
      "Eliza merupakan pertama yang dibuat pada tahun 1964 sampai 1966 oleh Professor Joseph Weizenbaum di MIT (Massachusetts Institute of Technology), dengan tujuan untuk mempelajari komunikasi natural language antara manusia dengan mesin.",
      "Baca lebih lanjut disini https://en.wikipedia.org/wiki/ELIZA",
      "Baca lebih lanjut disini https://github.com/raisoturu/eliza-line-chatbot",
    ],
  ],

  ["(quit|keluar|exit|dadah|bye)",
    0,
    ["Dadah.", "Good-bye.", "Terima kasih sudah mengobrol"],
  ],
  ["(.*)?",
    0,
    ["Kenapa kamu bertanya itu?", "Kenapa?", "Hmmm... Aku tidak yakin.", "Ada pertanyaan lain ga, aku bingung..."],
  ],
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
  aku: "Kamu",
  gw: "Kamu",
  gue: "Kamu",
  gua: "Kamu",
  lu: "Aku",
  kamu: "Aku",
  eLo: "Aku",
  elu: "Aku",
}

module.exports = {
  id_dictionaries,
  id_reflections,
  id_default_responses,
}
