const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'helps people',
    cooldown: 2,
    async execute(message, args){
        const help = new Discord.MessageEmbed()
        .setTitle('Help')
        .setDescription('simple help command')
        .addFields(
            {name: '8ball', value: 'answers lifes biggest questions, $8ball'},
            {name: 'ban', value: 'bans people from the server, $ban @user'},
            {name: 'bite', value: 'bites people, $bite @user'},
            {name: 'cuddle', value: 'cuddles people, $cuddle @user'},
            {name: 'dice', value: 'rolls the dice, $dice'},
            {name: 'disable', value: 'Permanently disables LolikaBot, $disable'},
            {name: 'hug', value: 'hugs people, $hug @user'},
            {name: 'kick', value: 'kicks people from the server, $kick @user'},
            {name: 'kinkshame', value: 'shames people for their disgusting kinds, $kinkshame @user'},
            {name: 'kiss', value: 'kisses people, $kiss @user'},
            {name: 'lewd', value: 'lewds people, $lewd @user'},
            {name: 'love', value: 'tells people their compatibility, $love @user'},
            {name: 'pat', value: 'pats people, $pat @user'},
            {name: 'ping', value: 'responds with pong, $ping'},
            {name: 'poke', value: 'pokes people, $poke @user'},
            {name: 'pout', value: 'lets people pout, $pout @user'},
            {name: 'purge', value: 'bulkdeletes messages, $purge'},
            {name: 'qt', value: 'responds with no u and pings the servers qt\'s, $qt'},
            {name: 'say', value: 'copies what you said, $say'},
            {name: 'toggle', value: 'switches the bot between human and bot mode, $toggle'},

        )
        message.channel.send(help);
    }
}