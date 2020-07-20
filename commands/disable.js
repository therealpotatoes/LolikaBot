module.exports = {
    name: 'disable',
    description: 'disables bot',
    cooldown: 2,
    execute(message, args) {
            message.channel.send('Permanently shutting down *slits wrist*')
            }
    }
