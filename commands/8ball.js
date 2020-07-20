const Discord = require('discord.js');

module.exports = {
    name: '8ball',
    description: 'answers lifes biggest questions',
    cooldown: 2,
    async execute(message, args){       
        var ran = Math.floor((Math.random()* 18)+1);
        if(ran == 1) {
        message.channel.send("Outlook good");
        }
        else if(ran == 2) {
        message.channel.send("Ask again later");
        }
        else if(ran == 3) {
        message.channel.send("It is decidedly so");
        }
        else if(ran == 4) {
        message.channel.send("Very doubtful");
        }
        else if(ran == 5) {
        message.channel.send("My reply is no");
        }
        else if(ran == 6) {
        message.channel.send("Try again later");
        }
        else if(ran == 7) {
        message.channel.send("most likely");
        }
        else if(ran == 8) {
        message.channel.send("Concentrate and ask again");
        }
        else if(ran == 9) {
        message.channel.send("Reply hazy, try again");
        }
        else if(ran == 10) {
        message.channel.send("Better not tell you now");
        }
        else if(ran == 11) {
        message.channel.send("Cannot predict now");
        }
        else if(ran == 12) {
        message.channel.send("Don't count on it");
        }
        else if(ran == 12) {
        message.channel.send("My sources say no");
        }
        else if(ran == 13) {
        message.channel.send("It is certain");
        }
        else if(ran == 14) {
        message.channel.send("Outlook not so good");
        }
        else if(ran == 15) {
        message.channel.send("Signs point to yes");
        }
        else if(ran == 16) {
        message.channel.send("As I see it, yes");
        }
        else if(ran == 17) {
        message.channel.send("You may rely on it");
        }
        else if(ran == 18) {
        message.channel.send("Yes, definitely");
        }
    
    }
}