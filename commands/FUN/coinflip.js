const { MessageEmbed } = require('discord.js');

module.exports = {
  
        name: "coinflip",
        aliases: ['cf', 'coin', 'flip'],
        category: 'fun',
        description: 'flips a coin',
        usage: ' ',
        accessableby: "everyone",

         /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */



    
    run: async (client, message, args) => {
        const n = Math.floor(Math.random() * 2);
        let result;
        if (n === 1) result = 'Heads';
        else result = 'Tails';
        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`**${message.member.displayName} Flipped ${result}**!`)
        message.channel.send(embed);
    }
};