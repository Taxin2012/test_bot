const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am loaded!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(process.env.NTE5ODYxMDI5MDkwNDkyNDI3.DuleEw.ZEfMCdYDIK6HhaxzXt1WUT9bib0);
