const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token} = require('./config.json');
const config = require('./config.json')
const punchsaint = require('./commands/punchsaint.js');
const { log } = require('console');
var Punch = 'off';
const client = new Discord.Client();
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {

    console.log(`Bot has started`);

    client.user.setActivity(`I'm your personnal assistant`, { type: 'PLAYING' });

});


client.on('message', message => {

    if(message.content.includes('egg')){
        message.react('🥚');
      }
  
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!cooldowns.has(command.name)) {
      cooldowns.set(command.name, new Discord.Collection());
    }
   
    if (!client.commands.has(command)) return;
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;
    
    if (timestamps.has(message.author.id)) {
      const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

	if (now < expirationTime) {
		const timeLeft = (expirationTime - now) / 1000;
		return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command}\` command.`);
  }
    }
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    
	try {
    client.commands.get(command).execute(message, args, client);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});



client.login(token);
client.on('join', join => {
  message.channel.send("welcome to the server");
});

client.on('message', message => {

if(message.content.startsWith(prefix + 'sainton')){
    
    if (!message.member.hasPermission(['Administrator'])) 

  return message.reply("You are not my master!");

   if(Punch == 'off') {
    console.log(Punch)
    message.channel.send('Punching saint shall begin')
    Punch = 'on';
    console.log(Punch)
   }
 }
   if(message.content.startsWith(prefix + 'saintoff')){
    if (!message.member.hasPermission(['Administrator'])) 
  return message.reply("You are not my master!");
   if(Punch == 'on') {
    console.log(Punch)
    message.channel.send('no longer punching saint')
    Punch = 'off';
    console.log(Punch)
}
}
});
client.on('message', async message => {
if(message.content.startsWith('gay')){
    message.channel.send('uwu fuck me daddy')
  }
if (Punch == 'on'){
var saint = '351670351459254275'
    if (message.author.id === saint) {
  const getFuckedSaint = new Discord.MessageEmbed()
        .setDescription('Get fucked Saint')
        .setImage('https://i.imgur.com/Ut9NogL.gif');
    message.channel.send(getFuckedSaint)
    }
}
});
client.on('message', async message => {
    
  if(message.channel instanceof Discord.DMChannel){
    console.log(message.author.username + ":"+ " " + message.content);
  } else{
    console.log("[" + message.guild.name + "]" + "[" + message.channel.name + "]" + message.author.username + ":"+ " " + message.content);
  }
});

client.on('message', async message => {
if(message.content.startsWith(prefix + "test")){
  const test = new Discord.MessageEmbed()
        .setDescription('testing the absolute limits of the description for embeds, maybe we can even write the help within one, or maybe it won\'t allow that')
    message.channel.send(test); 
 
}
});
client.on('message', async message => {
var cody = '242501757333143555';
var lily = '509683395224141827'
if(message.content.startsWith("hi lolikabot")){
  message.reply("hi");
}
if(message.content.startsWith("how are you lolikabot")){
  message.reply("fine, you?");
}
if(message.content.startsWith("i'm also fine")){
  message.reply("thats good.");
}
if(message.content.startsWith("who is your master")){
  if(message.author.id === cody){
  message.reply("you are");
} else{
  message.reply(`not you, Cody is my master`);
}
}
if(message.content.startsWith("I'm horny")){
  if(message.author.id === saint){
    message.channel.send("<a:Gimme:733183501204979744> come here saint")
    message.channel.send("lemme succ you uwu")
    message.channel.send("<a:lemmesucc:733183577507889253>")
  }
}
if(message.content.startsWith("goodmorning lolikabot")){
  if(message.author.id === cody){
    message.channel.send("Goodmorning master")
  }
  else if(message.author.id === lily){
    message.channel.send("Goodmorning lily")
  }
  else if(message.author.id === saint){
    message.channel.send("Goodmorning scum")
  }
  else{
    message.channel.send("GoodMorning")
  }
}
if(message.content.startsWith("goodnight lolikabot")){
  if(message.author.id === cody){
    message.channel.send("Goodnight master, sleep well.")
  }
  else if(message.author.id === lily){
    message.channel.send("Goodmorning lily, sweet dreams")
  }
  else if(message.author.id === saint) {
    message.channel.send("Night Night scum")
  }
  else{
    message.channel.send("Goodnight!")
  }
}

});

client.on('messageDelete', async message => {
    console.log(`A message by ${message.author.tag} was deleted`);
    var log = message.guild.channels.cache.find(c => c.name === config["messages-log"]);

    if(!message.guild) return;
    if(message.channel.name === 'logs') return;
    if(message.channel.id === '729595565146636388') return;
    if(message.channel.id === '727507872404996163') return;
    if(message.channel.id === '729603189669888062') return;
    if(message.channel.id === '727512162469150793') return;
    const fetchedLogs = await message.guild.fetchAuditLogs({
      limit: 1,
      type: 'MESSAGE_DELETE',
    });

    const deletionLog = fetchedLogs.entries.first();
    if (!deletionLog) return console.log(`A message by ${message.author.tag} has been deleted, no audit logs available for this message`)

    const {executor, target} = deletionLog;
    let deletedm = new Discord.MessageEmbed()
    .setAuthor(message.author.username + '#' + message.author.discriminator, message.author.avatarURL())
    .setDescription(`Message sent by <@${message.author.id}> deleted in <#${message.channel.id}>`)
    .addField('Message content : ', ` ${message.cleanContent} \u200b`, false)
    .setFooter('Author : ' + message.author.id + ' | Message ID : ' + message.id)
    .setTimestamp()
    .setColor('#ff0000')

    if (target.id === message.author.id) {
      if (log != null)
      log.send(deletedm)
      console.log('[' + message.guild.name + ']' + '[#' + message.channel.name + '] [DELMSG]' + message.author.username + '#' + message.author.discriminator + ':' + message.cleanContent)
    }
    else {
      if (log != null)
      log.send(deletedm)
      console.log('[' + message.guild.name + ']' + '[#' + message.channel.name + '] [DELMSG]' + message.author.username + '#' + message.author.discriminator + ':' + message.cleanContent);

    
    }   
});

client.on('messageUpdate', function (oldMessage, newMessage) {
  function formatConsoleMessage(message) {
    return message.cleanContent.replace(new RegExp('\n', 'g'), '\n\t');
}
  const channel = oldMessage.guild.channels.cache.find(chan => chan.name === config["messages-log"]);
  if (newMessage.channel.type == 'text' && newMessage.cleanContent != oldMessage.cleanContent) {
    const editedm = new Discord.MessageEmbed()
    .setAuthor(oldMessage.author.username + '#' + oldMessage.author.discriminator, oldMessage.author.avatarURL())
    .setDescription(`Message sent by <@${oldMessage.author.id}> edited in <#${oldMessage.channel.id}>`)
    .addField("Before", oldMessage.cleanContent, false)
    .addField("After", newMessage.cleanContent, false)
    .setFooter('User ID : ' + newMessage.author.id)
    .setTimestamp()
    
    console.log('[' + newMessage.guild.name + '][#' + newMessage.channel.name + '][UPDMSG] ' +
            newMessage.author.username + '#' + newMessage.author.discriminator + ':\n\tOLDMSG: ' +
            formatConsoleMessage(oldMessage) + '\n\tNEWMSG: ' + formatConsoleMessage(newMessage));
var log = newMessage.guild.channels.cache.find(c => c.name === config["messages-log"]);
if (log != null)
    log.send(editedm);
}
});

client.on('guildMemberRemove', async member => {
  var log = member.guild.channels.cache.find(c => c.name === config["messages-log"]);
	const fetchedLogs = await member.guild.fetchAuditLogs({
		limit: 1,
    type: 'MEMBER_KICK',
  });

  const kickLog = fetchedLogs.entries.first();
const kickembed = new Discord.MessageEmbed()
  .setAuthor(member.user.tag, member.user.avatarURL())
  .setDescription(member.user.tag + " has left the server")
  .setFooter('User ID :' + member.user.id)
  .setTimestamp()
  .setColor('#ff0000');
  if (!kickLog) return console.log(`${member.user.tag} left the guild, most likely of their own will.`);
  log.send(kickembed);

  const { executor, target } = kickLog;
  if(target.id === member.id) {
    console.log(`${member.user.tag} left the guild; kicked by ${executor.tag}`);
    
	} else {
    console.log(`${member.user.tag} left the guild, audit log fetch was inconclusive.`);
	}
});
