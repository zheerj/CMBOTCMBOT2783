const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "+"
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === prefix + 'slaw') {
    	message.reply('Slaw la to');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
