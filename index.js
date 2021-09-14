const {
    Collection,
    Client,
    Discord
} = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true
})



const maxMessageCount = parseInt('5');
let lastStickyMessage = "";
let messageCount = 0;
let stickyMessageChannel = "";
let stickyMessageContent = "";


const mongoose = require('mongoose');
mongoose.connect('mongdbconnect link here', {
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then(console.log("DATABASE SE CONNECT HO GYA BOSH"))
const config = require('./config.json')

const prefix = config.prefix
const dba = require('./models/toggle')

const db = require('quick.db')
const token = config.token
client.commands = new Collection();
client.aliases = new Collection();
client.snipes = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
client.on('ready', () => {
    client.user.setActivity(`${prefix} help | Control Your BP after watching my new DP`);
    console.log(`${client.user.username} ✅`);
});





client.on('message', async message => {
    if (message.author.bot) return;
    
    if (!message.content.toLowerCase().startsWith(prefix)) return;
    if (!message.guild) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length == 0) return;
    let command = client.commands.get(cmd)
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) {
      const check = await dba.findOne({ Guild: message.guild.id })
      if(check) {
        if(check.Cmds.includes(command.name)) return message.channel.send("**THIS COMMAND IS DISABLED BY THE ADMINS **")
        command.run(client, message, args)

      } else { command.run(client, message, args)}
    }
    
});

client.on('message', async message => {
if(db.has(`afk-${message.author.id}+${message.guild.id}`)) {
        const info = db.get(`afk-${message.author.id}+${message.guild.id}`)
        await db.delete(`afk-${message.author.id}+${message.guild.id}`)
        message.reply(`Your afk status have been removed (${info})`)
    }
    //checking for mentions
    if(message.mentions.members.first()) {
        if(db.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)) {
            message.channel.send(message.mentions.members.first().user.tag + " : " + db.get(`afk-${message.mentions.members.first().id}+${message.guild.id}`))
        }else return;
    }else;

})





client.on('messageDelete', (message) => {
    let snipes = client.snipes.get(message.channel.id) || [];
    if (snipes.length > 5) snipes = snipes.slice(0, 4);

    snipes.unshift({
        msg: message,
        time: Date.now(),


    });
    client.snipes.set(message.channel.id, snipes);


})


client.on("message", async function (message) {
  if (message.author.bot) {
    return;
  }

  if (message.content.indexOf(`${prefix}`) !== 0) {
    if (stickyMessageContent !== "") {
      if (message.channel.id === stickyMessageChannel) {
        messageCount++;
        if (messageCount === maxMessageCount) {
          await lastStickyMessage.delete();
          lastStickyMessage = await message.channel.send(stickyMessageContent);
          messageCount = 0;
        }
      }
    }

    return;
  }

  const args = message.content.slice(1).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "stick") {
    if (
      message.author.id === "admin id"
      || message.member.roles.cache.has('admin id')
    ) {
      try {
        stickyMessageChannel = message.channel.id;
        stickyMessageContent = args.slice(0).join(" ");
        lastStickyMessage = await message.channel.send(stickyMessageContent);
        await message.delete();
      } catch (error) {
        console.error(error);
      }
    }
  } else if (command === "unstick") {
    if (
      message.author.id === 'admin id'
      || message.member.roles.cache.has('admin id')
    ) {
      lastStickyMessage = "";
      messageCount = 0;
      stickyMessageChannel = "";
      stickyMessageContent = "";
      message.delete();
    }
  }
});



client.login(token)