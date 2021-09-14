const {Message, MessageEmbed}= require('discord.js')

module.exports=  {
    name : 'unmute', 
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!Member) return message.channel.send('Member not found')

        const reason = args.slice(1).join(" ");

        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

        await Member.roles.remove(role)

        try {
        Member.roles.remove(role).then(() => {
            Member.send(`**Hello, You Have Been Unmuted In ${message.guild.name} for ${reason || "No Reason"}**`).catch(() => null)
           
        })
        } catch {
                 Member.roles.remove(role)                               
            }
            const sembed = new MessageEmbed()
                .setColor("GREEN")
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setDescription(`${Member.user.username} was successfully unmuted.`)
            message.channel.send(sembed);
        

    }
}