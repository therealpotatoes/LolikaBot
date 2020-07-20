module.exports = {
    name: 'purge',
    description: 'purges messages',
    cooldown: 2,
  async execute(message, args) {
 {

    const deleteCount = parseInt(args[0], 10);
   
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    

    const fetched = await message.channel.messages.fetch({limit: deleteCount + 1});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    message.channel.send(`${deleteCount} messages have been purged`);
 }}}
