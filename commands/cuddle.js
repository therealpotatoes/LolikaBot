const Discord = require('discord.js');

module.exports = {
    name: 'cuddle',
    description: 'like hugs, but cuddles',
    cooldown: 2,
    async execute(message, args){
 
        let userID = args[0]
        let member = message.mentions.members.first() || message.guild.members.cache.get(userID);{
            if(!member){
            return message.reply("Please mention a valid member of this server");
          }
        var ran = Math.floor((Math.random()* 60)+1);
        }
        var LolikaBot = '727081967744450580';
        
        const num1 = new Discord.MessageEmbed()
        .setDescription(`${message.author} cuddled ${member.user}`)
        .setImage('https://i.imgur.com/eeijBW0.gif');
        const num2 = new Discord.MessageEmbed()
        .setDescription(`${message.author} cuddled ${member.user}`)
        .setImage('https://i.imgur.com/I2ft0l0.gif');
        const num3 = new Discord.MessageEmbed()
        .setDescription(`${message.author} cuddled ${member.user}`)
        .setImage('https://i.imgur.com/7gNIUbq.gif');
        const num4 = new Discord.MessageEmbed()
        .setDescription(`${message.author} cuddled ${member.user}`)
        .setImage('https://i.imgur.com/SrU1qo0.gif');
        const num5 = new Discord.MessageEmbed()
        .setDescription(`${message.author} cuddled ${member.user}`)
        .setImage('https://i.imgur.com/81FBQao.gif');
        const num6 = new Discord.MessageEmbed()
        .setDescription(`${message.author} cuddled ${member.user}`)
        .setImage('https://i.imgur.com/xXuenkl.gif');



        if(ran < 10) {
           
            message.channel.send(num1)
        }
        else if(ran < 20) {
           
            message.channel.send(num2)
        }
        else if (ran < 30){
         
            message.channel.send(num3)
        }
        else if (ran < 40){
            
            message.channel.send(num4)
        }
        else if (ran < 50){
        
            message.channel.send(num5)
        }
        else if (ran < 60 ){
      
            message.channel.send(num6)
        }
    }
}

    
