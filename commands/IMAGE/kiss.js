const { Client, Message, MessageAttachment } = require("discord.js");

const { Canvas } = require("canvacord");

module.exports = {
  name: "kiss",
  aliases: ["puchi", "chumma"],

  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

  run: async (client, message, args) => {

    const member = message.mentions.members.first();
    if (!member) return message.reply("please mention a member to kiss");

    const avatar = member.user.displayAvatarURL({ format: "png" });

    const image = await Canvas.kiss(message.author.displayAvatarURL(
      { format: "png" }), avatar);

    message.channel.send(new MessageAttachment(image, "image.gif"));





  },





};