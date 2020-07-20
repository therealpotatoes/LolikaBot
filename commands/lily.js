const Discord = require('discord.js');
module.exports = {
    name: 'lily',
    description: 'tells lily she is a qt',
    cooldown: 2,
    async execute(message, args){    
        
        message.channel.send("LILY! you're the worlds biggest qt <a:HugLolika:710424781345783839>");
    }
}