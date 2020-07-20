const Discord = require('discord.js');

module.exports = {
    name: 'lewd',
    description: 'lewds people',
    cooldown: 2,
    async execute(message, args){
        let userID = args[0]
        let member = message.mentions.members.first() || message.guild.members.cache.get(userID);{
            if(!member){
            return message.reply("Please mention a valid member of this server");
          }
        var ran = Math.floor((Math.random()* 5)+1);
        
        const num1 = new Discord.MessageEmbed()
        .setDescription(`${member.user} you have been hugged by ${message.author}`)
        .setImage('https://i.imgur.com/2Yq1bQe.gif');
        const num2 = new Discord.MessageEmbed()
        .setDescription(`${member.user} you have been hugged by ${message.author}`)
        .setImage('https://i.imgur.com/2V3nIWe.gif');
        const num3 = new Discord.MessageEmbed()
        .setDescription(`${member.user} you have been hugged by ${message.author}`)
        .setImage('https://i.imgur.com/H8CIrJv.gif');
        const num4 = new Discord.MessageEmbed()
        .setDescription(`${member.user} you have been hugged by ${message.author}`)
        .setImage('https://i.imgur.com/EFMJpW3.gif');

        if(ran == 1){
            message.channel.send(`${message.author} forcefully stuck their hand down ${member.user} pants`)
        }
        else if (ran == 2){
            message.channel.send(`${message.author} and ${member.user} lewded each other`)
        }
        else if (ran == 3){
            message.channel.send(`${message.author} lewded ${member.user}`)
        }
        else if (ran == 4){
            message.channel.send(`${message.author} is being lewd`)
        }
        else if (ran == 5){
            message.channel.send(`${message.author} is making ${member.user} uncomfortable`)
        }
    }
}
}
