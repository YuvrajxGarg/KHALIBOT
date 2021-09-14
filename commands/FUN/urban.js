const { Client, Message, MessageEmbed } = require("discord.js");
const axios = require('axios')
module.exports = {
    name: "urban",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        let query = args.join(" ");
        if(!query) return message.reply('please specify a word to search');

        query = encodeURIComponent(query);

        const { data: { list }} = await axios.get(`API FROM URBAN DICTIONARY`);

        const [answer] = list;

        message.channel.send(
            new MessageEmbed()
            .setTitle(query)
            .setURL(answer.permalink)
            .setColor("RANDOM")
            .setThumbnail('https://images.newrepublic.com/a0a10f8123e4aeb5617a37ffd2f7f1449d1b69e1.jpeg')
            .addField("**DEFINITION**", trim(answer.definition))
            .addField("\u200B", '\u200B')
            .addField("**EXAMPLE**", trim(answer.example))
            .addField("\u200B", '\u200B')
            .addField("**RATINGS**", `${answer.thumbs_up} 👍 || ${answer.thumbs_down} 👎 `)

        )




    },

};

function trim(input) {
    return input.length > 1024 ? `$input.slice(0, 1020)}...` : input;
}