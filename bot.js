const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "+"
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === prefix + 'ping') {
       const m = await message.channel.send("Ping?");
       m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
