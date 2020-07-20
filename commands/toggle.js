var state = 'bot';
module.exports = {
    name: 'toggle',
    description: 'toggles between human and bot mode',
    cooldown: 2,
    execute(message, args){
        
            console.log(state)
        if(state == 'bot') {
            console.log(state)
            message.channel.send('Switching from bot to human');
           state = 'human';
           console.log(state)
        }
    
         
        else if(state == 'human') {
            console.log(state)
            message.channel.send('Switching from human to bot');
            state = 'bot';
            console.log(state)
            }
    }
}