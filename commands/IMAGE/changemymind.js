const { Client,  Message, MessageAttachment } = require("discord.js");

const { Canvas } = require("canvacord");

module.exports = {
    name: "changemymind",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
     run : async(client, message, args) => {
         const member = message.mentions.members.first() || message.member;

         const query = args.join(" ")

         const avatar = member.user.displayAvatarURL({ format: "png" });

         const image = await Canvas.changemymind(query);

         message.channel.send(new MessageAttachment(image, "image.gif"));





     },





};