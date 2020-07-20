const Discord = require('discord.js');

module.exports = {
    name: 'kiss',
    description: 'kisses people',
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
        .setDescription(`${message.author} forced their tongue into ${member.user}s mouth`)
        .setImage('https://i.imgur.com/wnLvSaV.gif');
        const num2 = new Discord.MessageEmbed()
        .setDescription(`${message.author} kissed ${member.user} ♥`)
        .setImage('https://i.imgur.com/ASXyZ4m.gif');
        const num3 = new Discord.MessageEmbed()
        .setDescription(`${message.author} kissed ${member.user} ♥`)
        .setImage('https://i.imgur.com/009FWCb.gif');
        const num4 = new Discord.MessageEmbed()
        .setDescription(`${message.author} kissed ${member.user} ♥`)
        .setImage('https://i.imgur.com/8FGdVdE.gif');
        const num5 = new Discord.MessageEmbed()
        .setDescription(`${message.author} kissed ${member.user} ♥`)
        .setImage('https://i.imgur.com/62aXlM9.gif');
        const num6 = new Discord.MessageEmbed()
        .setDescription(`${message.author} kissed ${member.user} ♥`)
        .setImage('https://i.imgur.com/rwSM6FM.gif');
        const num7 = new Discord.MessageEmbed()
        .setDescription(`${message.author} kissed ${member.user} ♥`)
        .setImage('https://i.imgur.com/K2pV6lO.gif');
        const num8 = new Discord.MessageEmbed()
        .setDescription("b-ba-BAKA BAKA BAKAAAAA")
        .setImage('https://i.imgur.com/K2pV6lO.gif');


        if(member.user.id === LolikaBot){
            message.channel.send(num8)
        }
        else if(ran == 1) {
            
            message.channel.send(num1)
        }
        else if(ran < 10) {
           
            message.channel.send(num2)
        }
        else if(ran < 20) {
           
            message.channel.send(num3)
        }
        else if (ran < 30){
         
            message.channel.send(num4)
        }
        else if (ran < 40){
            
            message.channel.send(num5)
        }
        else if (ran < 50){
        
            message.channel.send(num6)
        }
        else if (ran < 60 ){
      
            message.channel.send(num7)
        }
    }
}