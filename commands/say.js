const Discord = require('discord.js')
const client = new Discord.Client
module.exports = {
    name: 'say',
    description: 'Talk through the bot',
    cooldown: 2,
   async execute(message, args){
    let userID = args[0]
    let member = message.mentions.members.first() || message.guild.members.cache.get(userID);{
    }
        if (!message.member.hasPermission(['Moderator'])) return message.reply("you are not my master!");

        const sayMessage = args.join(" ");
        if(!sayMessage){
            message.channel.send("Give me something to say you baka!");
            message.delete().catch(O_o=>{});
        }
        else if(message.mentions.channels.first()){
            let channel = message.mentions.channels.first();
            let announcement = args.slice(1).join(" ");
            channel.send(announcement);
            message.delete().catch(O_o=>{});
          }
        else if(message.mentions.members.first()){
            message.delete().catch(O_o=>{});
            let user = message.mentions.members.first();
            let announcement = args.slice(1).join(" ");
            (user).send(announcement)
          }
         else{
            const sayMessage = args.join(" ");
            message.delete().catch(O_o=>{});
            message.channel.send(sayMessage);   
        }
    }
}