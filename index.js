// require the discord.js module
Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}
const Discord = require('discord.js');
require('dotenv').config()
const {id_dictionaries} = require('./dict')
const dataLolos = require("./dataLolos")

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Bot: Hosting ' + `${client.users.size}` + ' users, in ' + `${client.channels.size}` + ' channels of ' + `${client.guilds.size}` + ' guilds.');
    client.user.setStatus('online')
    client.user.setActivity(`Raisa Siap Membantu`, {type: "playing"});
});

// login to Discord with your app's token
client.login(process.env.Token);
client.on('message', message => {
  var pengirim = message.author
  var pengirim_IDvoiceChannel = ''
  message.guild.voiceStates.cache.forEach(bruh => {
    if (pengirim.id == bruh.id){
      pengirim_IDvoiceChannel = bruh.channelID
    }
  })
  console.log(pengirim_IDvoiceChannel)
  message.guild.voiceStates.cache.forEach(bruh => {
    if (bruh.channelID == pengirim_IDvoiceChannel){
      bruh.setDeaf(true)
    }

    setTimeout(() => {
      bruh.setDeaf(false)
    }, 2000)
  })

  const word = message.content.toLowerCase()
  // console.log(message.channel)
  if (word.includes('sg') && word.includes('-') && message.channel.id == '809355029714436116'){
    if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!')
    else {
      // let SGRole = message.guild.roles.find('name', "SG AI");
      const MSG = message.content.split("-")
      if(dataLolos[MSG[MSG.length -1]]){
        const Name = dataLolos[MSG[MSG.length -1]].nama
        message.member.setNickname(Name)
        message.member.roles.add("808672118534570014");
        message.reply("Selamat datang di Discord Artificial Intelligence Laboratory")
      }else{
        message.reply("Maaf NIM tidak terdaftar")
      }
    }
  }else if (word.includes('fg') && word.includes('-') && message.channel.id == '809355029714436116'){
    if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!')
    else {
      // let FGRole = message.guild.roles.find('name', "FG AI");
      const MSG = message.content.split("-")
      if(dataLolos[MSG[MSG.length -1]]){
        const Name = dataLolos[MSG[MSG.length -1]].nama
        message.member.setNickname(Name)
        message.member.roles.add("808672392515813396");
        message.reply("Selamat datang di Discord Artificial Intelligence Laboratory")
      }else{
        message.reply("Maaf NIM tidak terdaftar")
      }
    }
  }else if (word.includes('alumni') && word.includes('-') && message.channel.id == '809355029714436116'){
    if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!')
    else {
      // let FGRole = message.guild.roles.find('name', "FG AI");
      const MSG = message.content.split("-")
      const Name = MSG[0]
      message.member.setNickname(Name)
      message.member.roles.add("815902752206094336");
      message.reply("Selamat datang kakak alumni di Discord Artificial Intelligence Laboratory")
    }
  }else if (word.includes("eliz4")){
    const words = word.slice(6)
    for (let i = 0; i < id_dictionaries.length; i++) {
      const verb = words.split(" ")
      if (words.match(id_dictionaries[i][0])){
        let answer = id_dictionaries[i][2].random()
        answer = answer.replace('%',verb[id_dictionaries[i][1]])
        message.reply(answer, {disableMentions: false})
        break
      }
    }
  }else if (message.channel.id == '820201188267130950' && message.author.id != "809329609182412810" && message.author.id != "159985870458322944"){
    const words = word
    for (let i = 0; i < id_dictionaries.length; i++) {
      const verb = words.split(" ")
      if (words.match(id_dictionaries[i][0])){
        let answer = id_dictionaries[i][2].random()
        answer = answer.replace('%',verb[id_dictionaries[i][1]])
        message.reply(answer)
        break
      }
    }
  }
  
});