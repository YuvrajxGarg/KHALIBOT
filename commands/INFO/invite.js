const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'invite',
    category : 'info',
    description : 'provides bot invite link',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
       
        const embed = new MessageEmbed()
            .setTitle('The Great Khali Bot')
            .setDescription(`A fun discord bot`)
            .setFooter('Developed by Yuvraj Garg')
            .setURL('BOT INVITE LINK')
            await message.channel.send(embed)
          

    }
}
