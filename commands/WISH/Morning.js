const {
    MessageEmbed
  } = require('discord.js')
  const images = [
  "https://i.imgur.com/H5fed7o.png",

  ];
  module.exports = {
    name: 'Morning',
    category: 'WISH',
    description: 'Wishes Good Morning',
     aliases: ['gm'],
  
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
  
  
    run: async (client, message, args) => {
      const member = message.mentions.members.first() || message.member
      const randomImage = images[Math.floor(Math.random() * images.length)];
      const msg = await message.channel.send(`<a:vibing_parrot:856652764977692672> wishing...`)
      const embed = new MessageEmbed()
      .setDescription(`${member.user} *Meri taraf se aapko aur aapke parivaar ko* \n <a:yele_pappi:850960674442969148>  **SUPRABHAT** <a:yele_pappi:850960674442969148> `)
      .setImage( randomImage, ({
          dynamic: true,
          size: 512
        }))
      .setColor("RANDOM")
      .setFooter('Aapka din mangal may hoe')
      await message.channel.send(embed)
  
      msg.delete(), 10000000
  
    }
  }