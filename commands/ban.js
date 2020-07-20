module.exports = {
    name: 'ban',
    description: 'bans people!',
    cooldown: 2,

   async execute(message, args) {

            if (!message.member.hasPermission(['BAN_MEMBERS']))
            return message.reply("You are not my master");

            let userID = args[0]
            let member = message.mentions.members.first() || message.guild.members.cache.get(userID);{
              if(!member)
                  return message.reply("Please mention a valid member of this server");}
            if(!member.bannable)
               return message.reply("I can't ban this user!");
            
              let reason = args.slice(1).join(' ');
              if(!reason) reason = "No reason provided";
        
              message.delete();
             await member.ban(reason)
             .catch(error => message.reply(`sorry I could not ban because of : ${error}`));
             message.channel.send (`${member.user} has been banned, Reason : ${reason}`);


             
        }
      }
        
    