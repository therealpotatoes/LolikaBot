var Punch = 'off'
var saint = '242501757333143555'
const Discord = require('discord.js');
const client = new Discord.Client;
const getFuckedSaint = new Discord.MessageEmbed()
.setDescription('Get fucked Saint')
.setImage('https://i.imgur.com/Ut9NogL.gif');
module.exports = {
    name:'punchsaint',
    descriptuon: 'punches saint',
    execute(message, args){

        if (!message.member.hasPermission(['Administrator'])){
            return message.reply('you are not my master!');
        }
            
    

        console.log(Punch)
        if(Punch == 'off'){
            console.log(Punch)
            message.channel.send('Punching saint will begin');
           Punch = 'on';
           console.log(Punch)
           const filter = m => m.content.includes('discord');
           const collector = message.channel.createMessageCollector(filter, {ID: '242501757333143555'})
           collector.on('collect', m => {
                if (message.author.id === saint) {
                message.channel.send(getFuckedSaint)
    }
           })
        
    
         
     if (Punch == 'on') {
         console.log(Punch)
         message.channel.send('No longer punching saint');
        Punch = 'off';
        console.log(Punch)
            
    }}}}
