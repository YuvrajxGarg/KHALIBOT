const { MessageEmbed } = require('discord.js')
module.exports = {
  name: 'bring',
  category: 'FUN',
  description: 'to request someone in chat',

  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

  run: async (client, message, args) => {
 

  if(message.member.roles.cache.some(r=>["President", "Vice President"].includes(r.name)) ) {
    
    
} else {
  message.channel.send("You Don't have required role to use this Command ( Required Role = President)")
}

    
  





  }
}
