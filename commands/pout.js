const Discord = require('discord.js');

module.exports = {
    name: 'pout',
    description: 'pouts at people',
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
        .setDescription(`${message.author} is pouting at ${member.user}`)
        .setImage('https://i.imgur.com/FEgxzN8.gif');
        const num2 = new Discord.MessageEmbed()
        .setDescription(`${message.author} is pouting at ${member.user}`)
        .setImage('https://i.imgur.com/G3yK1iS.gif');
        const num3 = new Discord.MessageEmbed()
        .setDescription(`${message.author} is pouting at ${member.user}`)
        .setImage('https://i.imgur.com/ktU2sZw.gif');
        const num4 = new Discord.MessageEmbed()
        .setDescription(`${message.author} is pouting at ${member.user}`)
        .setImage('https://i.imgur.com/7HCZw8J.gif');
        const num5 = new Discord.MessageEmbed()
        .setDescription(`${message.author} is pouting at ${member.user}`)
        .setImage('https://i.imgur.com/vNYOJoz.gif');
        const num6 = new Discord.MessageEmbed()
        .setDescription(`${message.author} is pouting at ${member.user}`)
        .setImage('https://i.imgur.com/ggmeiwP.gif');



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

    
