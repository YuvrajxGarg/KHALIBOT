const { Client, Message, MessageAttachment } = require("discord.js");

const { Canvas } = require("canvacord");

module.exports = {
  name: "slap",
  alias: ["thappad, Chaped, chanta"],

  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

  run: async (client, message, args) => {

    const member = message.mentions.members.first();
    if (!member) return message.reply("please mention a member to slap");

    const avatar = member.user.displayAvatarURL({ format: "png" });

    const image = await Canvas.slap(message.author.displayAvatarURL(
      { format: "png" }), avatar);

    message.channel.send(new MessageAttachment(image, "image.gif"));





  },





};