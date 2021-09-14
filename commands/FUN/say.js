const { Client, Message, MessageEmbed } = require("discord.js");
const Discord = require('discord.js')
const { Util } = require('discord.js')



module.exports = {
  name: "say",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {

message.channel.send(Util.cleanContent((args.join(" ")), message))
    message.channel.send
    
    message.delete();
    
  },
};