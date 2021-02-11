// require the discord.js module
const Discord = require('discord.js');
require('dotenv').config()

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
  const word = message.content.toLocaleUpperCase()
  if (word.includes('SG') && word.includes('-')){
    if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!')
    else {
      // let SGRole = message.guild.roles.find('name', "SG AI");
      const Name = message.content.split("-")[0]
      message.member.setNickname(Name)
      message.member.roles.add("808672118534570014");
      message.reply("Selamat datang di Discord Artificial Intelligence Laboratory")
    }
  }else if (word.includes('FG') && word.includes('-')){
    if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!')
    else {
      // let FGRole = message.guild.roles.find('name', "FG AI");
      const Name = message.content.split("-")[0]
      message.member.setNickname(Name)
      message.member.roles.add("808672392515813396");
      message.reply("Selamat datang di Discord Artificial Intelligence Laboratory")
    }
  }
  
});