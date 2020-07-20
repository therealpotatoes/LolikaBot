const Discord = require('discord.js');
module.exports = {
    name: 'ping',
    description: 'ping!',
    cooldown: 2,
   async execute(message, args, client) {

    let msg = await message.channel.send('Pinging...')
    let ping = Math.round(msg.createdTimestamp - message.createdTimestamp);
    let embed = new Discord.MessageEmbed()
      .setAuthor(`Your ping is ${ping}`)
    return msg.edit(`your ping is \`${ping}\`ms \n API Latency is \`${Math.round(client.ws.ping)}\`ms `)

    },
};

