const {
  MessageEmbed
} = require('discord.js')
module.exports = {
  name: 'night',
  category: 'WISH',
  description: 'Wishes GoodNight',
   aliases: ['gn'],

  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */


  run: async (client, message, args) => {
    const member = message.mentions.members.first() || message.member;
  
    const embed = new MessageEmbed()
      .setDescription(`${member.user} *Meri taraf se aapko aur aapke parivaar ko* \n <a:yele_pappi:850960674442969148>  **SHUBH RATRI** <a:yele_pappi:850960674442969148> `)
      .setImage('https://media1.giphy.com/media/OjmrBW4ZQbWjkq6RkC/200.gif?cid=95b279441bf970171bc611d1386a81b4fdbe374d2703b4c4&rid=200.gif&ct=g', ({
        dynamic: true,
        size: 512
      }))
      .setColor("RANDOM")
      .setFooter('Soja varna, Mukka mar ke space me bhej dunga')
    await message.channel.send(embed)

    message.delete()

  }
}