const { MessageEmbed } = require('discord.js')
const messages = [
    "Hold still. I’m trying to imagine you with a partner.", 
    "Your face makes onions cry", 
    " I’m not insulting you; I’m describing you.", 
    "Your face is just fine, but you are so poor that you can't afford a bag to hide it.", 
    "You bring everyone so much joy… when you leave the room.",
    "I thought of you today. It reminded me to take out the trash",
    " If you’re going to be two-faced, at least make one of them pretty.", 
    "You are like a cloud. When you disappear, it’s a beautiful day.", 
    "When you look in the mirror, say hi to the clown you see in there for me, would ya?.",
    "I wish i was the admin of this server , ek member kam hota",
    "ek din tu boht aage tak jayga, pls vahi ruk jaio",
    "no animal cruelity",
    "The last time I saw something like you… I flushed.",
    "My phone battery lasts longer than your relationships.",
    "if I had a face like yours I would sue my parents",
    "If laughter is the best medicine, your face must be curing the world.",
"You're so ugly that when you were born they had to put dark tints on your incubator.",
"Mirrors don't lie, and lucky for you they don't laugh.",
"You're so ugly that blind people cry when you walk past them.",
"You're so ugly that when you walk into your local bank they have to turn off the security cameras so they don't break.",
"You're so ugly that when you went to the haunted house you came out with a job application.",
    "even jokes on you cant make anyone smile",
    
];


module.exports = {
    name : 'roast',
    category : 'FUN',
    description : 'replies to some messages',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
      if (message.content.includes('BOT OWNER ID')) {
   return message.channel.send('Papa ko roast ni krta me'); }
      const member = message.mentions.members.first() || message.member;

      const randomMessage = messages[Math.floor(Math.random() * messages.length)];

        const msg = await message.channel.send(`${member.user}` + randomMessage)
        

    }
}
