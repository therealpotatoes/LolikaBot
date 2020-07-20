module.exports = {
    name: 'love',
    description: 'loves people!',
    cooldown: 2,
  async execute(message, args) {
         var x = Math.floor((Math.random()* 10)+1);
         var cody = '242501757333143555'
         var lily = '509683395224141827'
         var mantaro = '213466096718708737'
         var dyno = '155149108183695360'
         let userID = args[0]
            let member = message.mentions.members.first() || message.guild.members.cache.get(userID);{
              if(!member)
                  return message.reply("Please mention a valid member of this server");
                }
             
            
            if(message.author.id === cody){         
              if(member.user.id === lily){
                console.log(member.user);  
                message.channel.send(`${message.author} loves ${member.user} they have a 10 out of 10 chance of working, **perfect match**`)
              } else {
                if(member.user.id === dyno){
                  message.channel.send(`${member.user} and <@213466096718708737> love each other, they have a 5 in 10 chance of working`)
                }
                else if(member.user.id === mantaro){
                  message.channel.send(`${member.user} and <@155149108183695360> love each other, they have a 5 in 10 chance of working`)
                }
                else if (x == 10){
                  message.channel.send(`${message.author} loves ${member.user} they have a 0 in 10 chance of working`)
                }
                else if( x > 5 || x <10) {
                  message.channel.send(`${message.author} loves  ${member.user} they have a ${x} out of 10 chance of working`) 
                } else if ( x < 5){
                  message.channel.send(`${message.author} loves  ${member.user} they have a ${x} in 10 chance of working`)
                }
              }
        }else if(message.author.id === lily){
          if(member.user.id === cody) {
            message.channel.send(`${message.author} loves ${member.user} they have a 10 out of 10 chance of working, **perfect match**`)
          }else {
            if(member.user.id === dyno){
              message.channel.send(`${member.user} and <@213466096718708737> love each other, they have a 5 in 10 chance of working`)
            }
            else if(member.user.id === mantaro){
              message.channel.send(`${member.user} and <@155149108183695360> love each other, they have a 5 in 10 chance of working`)
            }
            else if (x == 10){
              message.channel.send(`${message.author} loves ${member.user} they have a 0 in 10 chance of working`)
            }
            else if( x > 5 || x <10) {
              message.channel.send(`${message.author} loves  ${member.user} they have a ${x} out of 10 chance of working`) 
            } else if ( x < 5){
              message.channel.send(`${message.author} loves  ${member.user} they have a ${x} in 10 chance of working`)
            }
      }
    }
        else {
          if(member.user.id === dyno){
            message.channel.send(`${member.user} and <@213466096718708737> love each other, they have a 5 in 10 chance of working`)
          }
          else if(member.user.id === mantaro){
            message.channel.send(`${member.user} and <@155149108183695360> love each other, they have a 5 in 10 chance of working`)
          }
          else if(message.author.id === member.user.id){
            message.channel.send(`${message.author} hates themselves, 0/10`)
          }
          else if(x == 10) {
            message.channel.send(`${message.author} loves  ${member.user} they have a ${x} in 10 chance of working, **perfect match**`)
           } else if( x > 5) {
            message.channel.send(`${message.author} loves  ${member.user} they have a ${x} out of 10 chance of working`) 
          } else if ( x < 5 || x == 5){
            message.channel.send(`${message.author} loves  ${member.user} they have a ${x} in 10 chance of working`)
          }

          }     
          }
              } 
    

