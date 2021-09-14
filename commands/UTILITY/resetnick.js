const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "resetnick",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const member = message.mentions.members.first();
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('**ara bhai par tu ha kaun**')

    if (!member) return message.reply("Please specify a member!");

    try {
      member.setNickname(null);
    } catch (err) {
      message.reply(
        "I do not have permission to reset " + member.toString() + " nickname!"
      );
    }

    message.delete()

     await member.setNickname(arguments) 
       const nicresetkbed = new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor(message.guild.name, message.guild.iconURL())
                    .setDescription(`***NICK RESET SUCCESSFULL FOR ${member}. ✅***`)
                message.channel.send(nicresetkbed) 
  },
};