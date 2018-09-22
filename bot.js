const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');

client.on('ready', () => {
    console.log('The bot is online');
    client.setPresence({ game: { name: 'name_of_the_playing_status', type: 0} });
}

    //embed
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
  .setColor(0xffff00)//the color for more colors search on google: "discord.js embed colors"
  .setThumbnail('THE_INTERNET_LINK_TO_YOUR_PICTURE') //a picture in the embed
  .setTitle('Title')//the title of the embed
  .setDescription('row 1')//a row text in the embed
  .setFooter('footer')//small text on the footer of the embed
  .addField('row 2', 'row 3')//first section row 2, second section row 3
  .addField('row 4', 'row 5')//first section row 4, second section row 5
  .addField('row 6', 'row 7')//first section row 6, second section row 7
  message.channel.sendEmbed(embed);
});

//message with mention
client.on('message', message => {
    if(message.content == "command that you wand") {
        message.reply('message that wil be sand be the bot')
    }
});

//message without mention
client.on('message', message => {
    if(message.content == "command that you wand") {
        message.channel.sendMessage('message that wil be sand be the bot')
    }
});
