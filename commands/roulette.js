module.exports = {
    name: 'roulette',
    description: 'Russian roulette',
    cooldown: 2,
  async execute(message, args) {

    var x = Math.floor((Math.random()* 6)+1);


    switch(x){
    case 1: 
        message.channel.send("*click*")
    break;
    case 2: 
        message.channel.send("*click*")
    break;
    case 3: 
        message.channel.send("*click*")
    break;
    case 4: 
        message.channel.send("*click*")
    break;
    case 5: 
        message.channel.send("*click*")
    break;
    case 6: 
        message.channel.send("***BANG***")
    break;

  }
  }
}