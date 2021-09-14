const { Client, Message, MessageEmbed } = require("discord.js");
const translate = require("@iamtraction/google-translate");


module.exports = {
    name: "translate",

    run: async(client, message, args) => {
        const query = args.join(" ");
        if (!query) return message.reply("Please give me some text to translate");
        if(message.content.includes('@')) {
        return message.reply('Mere se kisi aur ko ping mat karwao')
  
      }
        const translated = await translate(query, { to: 'en'});
        message.channel.send(translated.text);



    },



};