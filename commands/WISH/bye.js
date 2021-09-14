const {
    MessageEmbed
  } = require('discord.js')
  module.exports = {
    name: 'Bye',
    category: 'WISH',
    description: 'Wishes Goodbye',
    aliases: ['gb'],
  
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
  
  
    run: async (client, message, args) => {
      const member = message.mentions.members.first() || message.member
      const msg = await message.channel.send(`<a:vibing_parrot:856652764977692672> wishing...`)
      const embed = new MessageEmbed()
      .setDescription(`${member.user} *Tusi jaa rahe ho? tusi daffa ho jao* \n <a:yele_pappi:850960674442969148>  **GOODBYE** <a:yele_pappi:850960674442969148> `)
      .setImage('https://akm-img-a-in.tosshub.com/sites/lallantop/wp-content/uploads/2018/01/feature-image-1_310118-081620.jpg?size=1200:675', ({
          dynamic: true,
          size: 512
        }))
      .setColor("RANDOM")
      .setFooter('chale jaiye manushya')
      await message.channel.send(embed)
  
      msg.delete(), 10000000
  
    }
  }