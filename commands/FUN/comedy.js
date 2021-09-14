const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'comedy',
    category : 'FUN',
 
    description : 'replies to some messages',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
 run : async(client, message, args) => {
      const member = message.mentions.members.first() || message.member;

        const msg = await message.channel.send(`${member.user}` + ` aapne itni bhari comedy krdi ki meri hass hass ke pant gili hogyi`)
        

    }
}
