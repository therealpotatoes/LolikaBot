module.exports = {
    name: 'kick',
    description: 'kicks people!',
    cooldown: 2,

   async execute(message, args) {
            if (!message.member.hasPermission(['KICK_MEMBERS']))
            return message.reply("You are not my master");

            let userID = args[0]
            let member = message.mentions.members.first() || message.guild.members.cache.get(userID);{
              if(!member)
                  return message.reply("Please mention a valid member of this server");}
            if(!member.kickable)
               return message.reply("I can't kick this user!");
            
              let reason = args.slice(1).join(' ');
              if(!reason) reason = "No reason provided";
        
              message.delete();
             await member.kick(reason)
             .catch(error => message.reply(`sorry I could not kick because of : ${error}`));
             message.channel.send (`${member.user} has been kicked, Reason : ${reason}`);

          
             
        }
      }
        
    