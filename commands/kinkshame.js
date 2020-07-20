const Discord = require('discord.js');

module.exports = {
    name: 'kinkshame',
    description: 'shames people for their kinks/fetishes',
    cooldown: 2,
    async execute(message, args){    
        let userID = args[0]
        let member = message.mentions.members.first() || message.guild.members.cache.get(userID);{   
        if(!member){
            return message.reply("Please mention a valid member of this server");
          }
        }
        const num1 = new Discord.MessageEmbed()
        .setDescription(`${member.user} your kink is garbage`)
        .setImage('https://i.imgur.com/0fGf5L4.png');

        message.channel.send(num1)
    }
}
