const { Client, Message, MessageAttachment } = require("discord.js");

const { Canvas } = require("canvacord");

module.exports = {
  name: "beautiful",
  aliases: ["beauty"],

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
     
    run: async (client, message, args) => {
    const member = message.mentions.members.first() || message.member;

    const avatar = member.user.displayAvatarURL({ format: "png" });

    const image = await Canvas.beautiful(avatar);

    message.channel.send(new MessageAttachment(image, "image.gif"));





  },





};