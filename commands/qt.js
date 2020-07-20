module.exports = {
    name: 'qt',
    description: 'says no u and pings lily and hana',
    cooldown: 2,
    execute(message, args) {
            message.reply('no u');
            message.channel.send(`<@509683395224141827> qt`);
            message.channel.send('<@702806312316174456> qt ♥');;
    }
}