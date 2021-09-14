const { Message, Client, MessageEmbed } = require("discord.js");
const moment = require('moment');

module.exports = {
  name: 'snipe',

  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {

    const snipes = client.snipes.get(message.channel.id);
    if (!snipes) return message.reply(' offfo!! no message to snipe ');

    const snipe = +args[0] - 1 || 0;
    const target = snipes[snipe];
    if (!target) return message.reply(`There are only ${snipes.length} messages to snipe!`);

    const { msg, time, image } = target;
    message.channel.send(
      new MessageEmbed()
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
        .setDescription(msg.content)
        .setFooter(` ${moment(time).fromNow()} | ( ${snipe + 1} / ${snipes.length} )`)
        .setColor("RANDOM")
    )



  }




}