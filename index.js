// require the discord.js module
Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}
const Discord = require('discord.js');
require('dotenv').config()
const {id_dictionaries} = require('./dict')

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// login to Discord with your app's token
client.login(process.env.Token);
client.on('message', message => {
  const word = message.content.toLowerCase()
  if (word.includes('sg') && word.includes('-') && message.channel.name == 'kenalan'){
    if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!')
    else {
      // let SGRole = message.guild.roles.find('name', "SG AI");
      const Name = message.content.split("-")[0]
      message.member.setNickname(Name)
      message.member.roles.add("808672118534570014");
      message.reply("Selamat datang di Discord Artificial Intelligence Laboratory")
    }
  }else if (word.includes('fg') && word.includes('-') && message.channel.name == 'kenalan'){
    if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!')
    else {
      // let FGRole = message.guild.roles.find('name', "FG AI");
      const Name = message.content.split("-")[0]
      message.member.setNickname(Name)
      message.member.roles.add("808672392515813396");
      message.reply("Selamat datang di Discord Artificial Intelligence Laboratory")
    }
  }else if (word.includes("eliz4")){
    const words = word.slice(6)
    for (let i = 0; i < id_dictionaries.length; i++) {
      const verb = words.match(id_dictionaries[i][0])
      if (verb){
        let answer = id_dictionaries[i][1].random()
        answer = answer.replace('%',verb[1])
        message.reply(answer)
      }
    }
  }else if (message.channel.name == 'eliza-room'){
    const words = word
    for (let i = 0; i < id_dictionaries.length; i++) {
      const verb = words.match(id_dictionaries[i][0])
      if (verb){
        let answer = id_dictionaries[i][1].random()
        answer = answer.replace('%',verb[1])
        message.reply(answer)
      }
    }
  }
  
});