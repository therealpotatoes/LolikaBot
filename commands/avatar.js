const Discord = require('discord.js');
module.exports = {
    name: 'avatar',
    description: 'gives avatar',
    cooldown: 2,
    
   async execute(message, args) {
    const avatar = new Discord.MessageEmbed()
    .setAuthor(message.author.username)
    .setImage(message.author.avatarURL({size: 1024}, {dynamic : true}))
    let userID = args[0]
    let member = message.mentions.members.first() || message.guild.members.cache.get(userID);{
      if(!member)
          return message.channel.send(avatar);}
          const Mavatar = new Discord.MessageEmbed()
          .setAuthor(member.user.username)
          .setImage(member.user.avatarURL({size: 1024, dynamic : true}))
    if(member){
        message.channel.send(Mavatar)
    } 

    
   }
}