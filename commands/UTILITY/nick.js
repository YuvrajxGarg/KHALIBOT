const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "nick",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const member = message.mentions.members.first();
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('**ara bhai par tu ha kaun**')

    if (!member) return message.reply("Please specify a member!");

    const arguments = args.slice(1).join(" ");

    if (!arguments) return message.reply("Please specify a nickname!");

    try {
      member.setNickname(arguments);
    } catch (err) {
      console.log(err);
      message.reply(
        "I do not have permission to set " + member.toString() + " nickname!"
      );
    }
       

        await member.setNickname(arguments) 
       const nickbed = new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor(message.guild.name, message.guild.iconURL())
                    .setDescription(`***NICK NAME UPDATED FOR ${member}. ✅***`)
                message.channel.send(nickbed) 
                 message.delete()
        
  },
};