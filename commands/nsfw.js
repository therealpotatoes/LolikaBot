const Discord = require('discord.js');
module.exports = {
    name: 'nsfw',
    description: 'sends nsfw images',
    cooldown: 2,
    async execute(message, args){  

        var ran = Math.floor((Math.random()* 134)+1);

        if(!message.channel.nsfw){ 
        message.channel.send("Master doesn't like it when I post NSFW images here"); 
        return; 
    }

        const nsfw1 = new Discord.MessageEmbed()
        .attachFiles(['./images/1.png'])
        .setImage('attachment://1.png');
        const nsfw2 = new Discord.MessageEmbed()
        .attachFiles(['./images/2.png'])
        .setImage('attachment://2.png');
        const nsfw3 = new Discord.MessageEmbed()
        .attachFiles(['./images/3.png'])
        .setImage('attachment://3.png');
        const nsfw4 = new Discord.MessageEmbed()
        .attachFiles(['./images/4.png'])
        .setImage('attachment://4.png');
        const nsfw5 = new Discord.MessageEmbed()
        .attachFiles(['./images/5.png'])
        .setImage('attachment://5.png');
        const nsfw6 = new Discord.MessageEmbed()
        .attachFiles(['./images/6.png'])
        .setImage('attachment://6.png');
        const nsfw7 = new Discord.MessageEmbed()
        .attachFiles(['./images/7.png'])
        .setImage('attachment://7.png');
        const nsfw8 = new Discord.MessageEmbed()
        .attachFiles(['./images/8.png'])
        .setImage('attachment://8.png');
        const nsfw9 = new Discord.MessageEmbed()
        .attachFiles(['./images/9.png'])
        .setImage('attachment://9.png');
        const nsfw10 = new Discord.MessageEmbed()
        .attachFiles(['./images/10.png'])
        .setImage('attachment://10.png');
        const nsfw11 = new Discord.MessageEmbed()
        .attachFiles(['./images/11.png'])
        .setImage('attachment://11.png');
        const nsfw12 = new Discord.MessageEmbed()
        .attachFiles(['./images/12.png'])
        .setImage('attachment://12.png');
        const nsfw13 = new Discord.MessageEmbed()
        .attachFiles(['./images/13.png'])
        .setImage('attachment://13.png');
        const nsfw14 = new Discord.MessageEmbed()
        .attachFiles(['./images/14.png'])
        .setImage('attachment://14.png');
        const nsfw15 = new Discord.MessageEmbed()
        .attachFiles(['./images/15.jpg'])
        .setImage('attachment://15.jpg');
        const nsfw16 = new Discord.MessageEmbed()
        .attachFiles(['./images/16.png'])
        .setImage('attachment://16.png');
        const nsfw17 = new Discord.MessageEmbed()
        .attachFiles(['./images/17.png'])
        .setImage('attachment://17.png');
        const nsfw18 = new Discord.MessageEmbed()
        .attachFiles(['./images/18.png'])
        .setImage('attachment://18.png');
        const nsfw19 = new Discord.MessageEmbed()
        .attachFiles(['./images/19.png'])
        .setImage('attachment://19.png');
        const nsfw20 = new Discord.MessageEmbed()
        .attachFiles(['./images/20.png'])
        .setImage('attachment://20.png');
        const nsfw21 = new Discord.MessageEmbed()
        .attachFiles(['./images/21.png'])
        .setImage('attachment://21.png');
        const nsfw22 = new Discord.MessageEmbed()
        .attachFiles(['./images/22.png'])
        .setImage('attachment://22.png');
        const nsfw23 = new Discord.MessageEmbed()
        .attachFiles(['./images/23.png'])
        .setImage('attachment://23.png');
        const nsfw24 = new Discord.MessageEmbed()
        .attachFiles(['./images/24.png'])
        .setImage('attachment://24.png');
        const nsfw25 = new Discord.MessageEmbed()
        .attachFiles(['./images/25.png'])
        .setImage('attachment://25.png');
        const nsfw26 = new Discord.MessageEmbed()
        .attachFiles(['./images/26.png'])
        .setImage('attachment://26.png');
        const nsfw27 = new Discord.MessageEmbed()
        .attachFiles(['./images/27.png'])
        .setImage('attachment://27.png');
        const nsfw28 = new Discord.MessageEmbed()
        .attachFiles(['./images/28.png'])
        .setImage('attachment://28.png');
        const nsfw29 = new Discord.MessageEmbed()
        .attachFiles(['./images/29.png'])
        .setImage('attachment://29.png');
        const nsfw30 = new Discord.MessageEmbed()
        .attachFiles(['./images/30.png'])
        .setImage('attachment://30.png');
        const nsfw31 = new Discord.MessageEmbed()
        .attachFiles(['./images/31.png'])
        .setImage('attachment://31.png');
        const nsfw32 = new Discord.MessageEmbed()
        .attachFiles(['./images/32.png'])
        .setImage('attachment://32.png');
        const nsfw33 = new Discord.MessageEmbed()
        .attachFiles(['./images/33.png'])
        .setImage('attachment://33.png');
        const nsfw34 = new Discord.MessageEmbed()
        .attachFiles(['./images/34.png'])
        .setImage('attachment://34.png');
        const nsfw35 = new Discord.MessageEmbed()
        .attachFiles(['./images/35.png'])
        .setImage('attachment://35.png');
        const nsfw36 = new Discord.MessageEmbed()
        .attachFiles(['./images/36.png'])
        .setImage('attachment://36.png');
        const nsfw37 = new Discord.MessageEmbed()
        .attachFiles(['./images/37.png'])
        .setImage('attachment://37.png');
        const nsfw38 = new Discord.MessageEmbed()
        .attachFiles(['./images/38.png'])
        .setImage('attachment://38.png');
        const nsfw39 = new Discord.MessageEmbed()
        .attachFiles(['./images/39.png'])
        .setImage('attachment://39.png');
        const nsfw40 = new Discord.MessageEmbed()
        .attachFiles(['./images/40.png'])
        .setImage('attachment://40.png');
        const nsfw41 = new Discord.MessageEmbed()
        .attachFiles(['./images/41.png'])
        .setImage('attachment://41.png');
        const nsfw42 = new Discord.MessageEmbed()
        .attachFiles(['./images/42.png'])
        .setImage('attachment://42.png');
        const nsfw43 = new Discord.MessageEmbed()
        .attachFiles(['./images/43.png'])
        .setImage('attachment://43.png');
        const nsfw44 = new Discord.MessageEmbed()
        .attachFiles(['./images/44.png'])
        .setImage('attachment://44.png');
        const nsfw45 = new Discord.MessageEmbed()
        .attachFiles(['./images/45.png'])
        .setImage('attachment://45.png');
        const nsfw46 = new Discord.MessageEmbed()
        .attachFiles(['./images/46.png'])
        .setImage('attachment://46.png');
        const nsfw47 = new Discord.MessageEmbed()
        .attachFiles(['./images/47.png'])
        .setImage('attachment://47.png');
        const nsfw48 = new Discord.MessageEmbed()
        .attachFiles(['./images/48.png'])
        .setImage('attachment://48.png');
        const nsfw49 = new Discord.MessageEmbed()
        .attachFiles(['./images/49.png'])
        .setImage('attachment://49.png');
        const nsfw50 = new Discord.MessageEmbed()
        .attachFiles(['./images/50.png'])
        .setImage('attachment://50.png');
        const nsfw51 = new Discord.MessageEmbed()
        .attachFiles(['./images/51.png'])
        .setImage('attachment://51.png');
        const nsfw52 = new Discord.MessageEmbed()
        .attachFiles(['./images/52.png'])
        .setImage('attachment://52.png');
        const nsfw53 = new Discord.MessageEmbed()
        .attachFiles(['./images/53.png'])
        .setImage('attachment://53.png');
        const nsfw54 = new Discord.MessageEmbed()
        .attachFiles(['./images/54.png'])
        .setImage('attachment://54.png');
        const nsfw55 = new Discord.MessageEmbed()
        .attachFiles(['./images/55.png'])
        .setImage('attachment://55.png');
        const nsfw56 = new Discord.MessageEmbed()
        .attachFiles(['./images/56.png'])
        .setImage('attachment://56.png');
        const nsfw57 = new Discord.MessageEmbed()
        .attachFiles(['./images/57.png'])
        .setImage('attachment://57.png');
        const nsfw58 = new Discord.MessageEmbed()
        .attachFiles(['./images/58.png'])
        .setImage('attachment://58.png');
        const nsfw59 = new Discord.MessageEmbed()
        .attachFiles(['./images/59.jpg'])
        .setImage('attachment://59.jpg');
        const nsfw60 = new Discord.MessageEmbed()
        .attachFiles(['./images/60.png'])
        .setImage('attachment://60.png');
        const nsfw61 = new Discord.MessageEmbed()
        .attachFiles(['./images/61.png'])
        .setImage('attachment://61.png');
        const nsfw62 = new Discord.MessageEmbed()
        .attachFiles(['./images/62.png'])
        .setImage('attachment://62.png');
        const nsfw63 = new Discord.MessageEmbed()
        .attachFiles(['./images/63.png'])
        .setImage('attachment://63.png');
        const nsfw64 = new Discord.MessageEmbed()
        .attachFiles(['./images/64.png'])
        .setImage('attachment://64.png');
        const nsfw65 = new Discord.MessageEmbed()
        .attachFiles(['./images/65.jpg'])
        .setImage('attachment://65.jpg');
        const nsfw66 = new Discord.MessageEmbed()
        .attachFiles(['./images/66.png'])
        .setImage('attachment://66.png');
        const nsfw67 = new Discord.MessageEmbed()
        .attachFiles(['./images/67.png'])
        .setImage('attachment://67.png');
        const nsfw68 = new Discord.MessageEmbed()
        .attachFiles(['./images/68.png'])
        .setImage('attachment://68.png');
        const nsfw69 = new Discord.MessageEmbed()
        .attachFiles(['./images/69.jpg'])
        .setImage('attachment://69.jpg');
        const nsfw70 = new Discord.MessageEmbed()
        .attachFiles(['./images/70.jpg'])
        .setImage('attachment://70.jpg');
        const nsfw71 = new Discord.MessageEmbed()
        .attachFiles(['./images/71.png'])
        .setImage('attachment://71.png');
        const nsfw72 = new Discord.MessageEmbed()
        .attachFiles(['./images/72.png'])
        .setImage('attachment://72.png');
        const nsfw73 = new Discord.MessageEmbed()
        .attachFiles(['./images/73.png'])
        .setImage('attachment://73.png');
        const nsfw74 = new Discord.MessageEmbed()
        .attachFiles(['./images/74.png'])
        .setImage('attachment://74.png');
        const nsfw75 = new Discord.MessageEmbed()
        .attachFiles(['./images/75.png'])
        .setImage('attachment://75.png');
        const nsfw76 = new Discord.MessageEmbed()
        .attachFiles(['./images/76.png'])
        .setImage('attachment://76.png');
        const nsfw77 = new Discord.MessageEmbed()
        .attachFiles(['./images/77.png'])
        .setImage('attachment://77.png');
        const nsfw78 = new Discord.MessageEmbed()
        .attachFiles(['./images/78.png'])
        .setImage('attachment://78.png');
        const nsfw79 = new Discord.MessageEmbed()
        .attachFiles(['./images/79.png'])
        .setImage('attachment://79.png');
        const nsfw80 = new Discord.MessageEmbed()
        .attachFiles(['./images/80.png'])
        .setImage('attachment://80.png');
        const nsfw81 = new Discord.MessageEmbed()
        .attachFiles(['./images/81.png'])
        .setImage('attachment://81.png');
        const nsfw82 = new Discord.MessageEmbed()
        .attachFiles(['./images/82.png'])
        .setImage('attachment://82.png');
        const nsfw83 = new Discord.MessageEmbed()
        .attachFiles(['./images/83.png'])
        .setImage('attachment://83.png');
        const nsfw84 = new Discord.MessageEmbed()
        .attachFiles(['./images/84.png'])
        .setImage('attachment://84.png');
        const nsfw85 = new Discord.MessageEmbed()
        .attachFiles(['./images/85.png'])
        .setImage('attachment://85.png');
        const nsfw86 = new Discord.MessageEmbed()
        .attachFiles(['./images/86.png'])
        .setImage('attachment://86.png');
        const nsfw87 = new Discord.MessageEmbed()
        .attachFiles(['./images/87.png'])
        .setImage('attachment://87.png');
        const nsfw88 = new Discord.MessageEmbed()
        .attachFiles(['./images/88.png'])
        .setImage('attachment://88.png');
        const nsfw89 = new Discord.MessageEmbed()
        .attachFiles(['./images/89.png'])
        .setImage('attachment://89.png');
        const nsfw90 = new Discord.MessageEmbed()
        .attachFiles(['./images/90.png'])
        .setImage('attachment://90.png');
        const nsfw91 = new Discord.MessageEmbed()
        .attachFiles(['./images/91.png'])
        .setImage('attachment://91.png');
        const nsfw92 = new Discord.MessageEmbed()
        .attachFiles(['./images/92.png'])
        .setImage('attachment://92.png');
        const nsfw93 = new Discord.MessageEmbed()
        .attachFiles(['./images/93.png'])
        .setImage('attachment://93.png');
        const nsfw94 = new Discord.MessageEmbed()
        .attachFiles(['./images/94.png'])
        .setImage('attachment://94.png');
        const nsfw95 = new Discord.MessageEmbed()
        .attachFiles(['./images/95.png'])
        .setImage('attachment://95.png');
        const nsfw96 = new Discord.MessageEmbed()
        .attachFiles(['./images/96.png'])
        .setImage('attachment://96.png');
        const nsfw97 = new Discord.MessageEmbed()
        .attachFiles(['./images/97.png'])
        .setImage('attachment://97.png');
        const nsfw98 = new Discord.MessageEmbed()
        .attachFiles(['./images/98.png'])
        .setImage('attachment://98.png');
        const nsfw99 = new Discord.MessageEmbed()
        .attachFiles(['./images/99.png'])
        .setImage('attachment://99.png');
        const nsfw100 = new Discord.MessageEmbed()
        .attachFiles(['./images/100.png'])
        .setImage('attachment://100.png');
        const nsfw101 = new Discord.MessageEmbed()
        .attachFiles(['./images/101.png'])
        .setImage('attachment://101.png');
        const nsfw102 = new Discord.MessageEmbed()
        .attachFiles(['./images/102.png'])
        .setImage('attachment://102.png');
        const nsfw103= new Discord.MessageEmbed()
        .attachFiles(['./images/103.png'])
        .setImage('attachment://103.png');
        const nsfw104 = new Discord.MessageEmbed()
        .attachFiles(['./images/104.png'])
        .setImage('attachment://104.png');
        const nsfw105 = new Discord.MessageEmbed()
        .attachFiles(['./images/105.png'])
        .setImage('attachment://105.png');
        const nsfw106 = new Discord.MessageEmbed()
        .attachFiles(['./images/106.png'])
        .setImage('attachment://106.png');
        const nsfw107 = new Discord.MessageEmbed()
        .attachFiles(['./images/107.png'])
        .setImage('attachment://107.png');
        const nsfw108 = new Discord.MessageEmbed()
        .attachFiles(['./images/108.png'])
        .setImage('attachment://108.png');
        const nsfw109 = new Discord.MessageEmbed()
        .attachFiles(['./images/109.jpg'])
        .setImage('attachment://109.jpg');
        const nsfw110 = new Discord.MessageEmbed()
        .attachFiles(['./images/110.jpg'])
        .setImage('attachment://110.jpg');
        const nsfw111 = new Discord.MessageEmbed()
        .attachFiles(['./images/111.png'])
        .setImage('attachment://111.png');
        const nsfw112 = new Discord.MessageEmbed()
        .attachFiles(['./images/112.png'])
        .setImage('attachment://112.png');
        const nsfw113 = new Discord.MessageEmbed()
        .attachFiles(['./images/113.jpg'])
        .setImage('attachment://113.jpg');
        const nsfw114 = new Discord.MessageEmbed()
        .attachFiles(['./images/114.png'])
        .setImage('attachment://114.png');
        const nsfw115 = new Discord.MessageEmbed()
        .attachFiles(['./images/115.png'])
        .setImage('attachment://115.png');
        const nsfw116 = new Discord.MessageEmbed()
        .attachFiles(['./images/116.png'])
        .setImage('attachment://116.png');
        const nsfw117 = new Discord.MessageEmbed()
        .attachFiles(['./images/117.png'])
        .setImage('attachment://117.png');
        const nsfw118 = new Discord.MessageEmbed()
        .attachFiles(['./images/118.png'])
        .setImage('attachment://118.png');
        const nsfw119 = new Discord.MessageEmbed()
        .attachFiles(['./images/119.png'])
        .setImage('attachment://119.png');
        const nsfw120 = new Discord.MessageEmbed()
        .attachFiles(['./images/120.png'])
        .setImage('attachment://120.png');
        const nsfw121 = new Discord.MessageEmbed()
        .attachFiles(['./images/121.png'])
        .setImage('attachment://121.png');
        const nsfw122 = new Discord.MessageEmbed()
        .attachFiles(['./images/122.png'])
        .setImage('attachment://122.png');
        const nsfw123 = new Discord.MessageEmbed()
        .attachFiles(['./images/123.png'])
        .setImage('attachment://123.png');
        const nsfw124 = new Discord.MessageEmbed()
        .attachFiles(['./images/124.png'])
        .setImage('attachment://124.png');
        const nsfw125 = new Discord.MessageEmbed()
        .attachFiles(['./images/125.png'])
        .setImage('attachment://125.png');
        const nsfw126 = new Discord.MessageEmbed()
        .attachFiles(['./images/126.jpg'])
        .setImage('attachment://126.jpg');
        const nsfw127 = new Discord.MessageEmbed()
        .attachFiles(['./images/127.png'])
        .setImage('attachment://127.png');
        const nsfw128 = new Discord.MessageEmbed()
        .attachFiles(['./images/128.png'])
        .setImage('attachment://128.png');
        const nsfw129 = new Discord.MessageEmbed()
        .attachFiles(['./images/129.png'])
        .setImage('attachment://129.png');
        const nsfw130 = new Discord.MessageEmbed()
        .attachFiles(['./images/130.jpg'])
        .setImage('attachment://130.jpg');
        const nsfw131 = new Discord.MessageEmbed()
        .attachFiles(['./images/131.png'])
        .setImage('attachment://131.png');
        const nsfw132 = new Discord.MessageEmbed()
        .attachFiles(['./images/132.jpg'])
        .setImage('attachment://132.jpg');
        const nsfw133 = new Discord.MessageEmbed()
        .attachFiles(['./images/133.png'])
        .setImage('attachment://133.png');
        const nsfw134 = new Discord.MessageEmbed()
        .attachFiles(['./images/134.png'])
        .setImage('attachment://134.png');

        
        switch(ran) {
        case 1: 
        message.channel.send(nsfw1)
        break;
        case 2:
        message.channel.send(nsfw2)
        break;
        case 3: 
        message.channel.send(nsfw3)
        break;
        case 4:
        message.channel.send(nsfw4)
        break;
        case 5: 
        message.channel.send(nsfw5)
        break;
        case 6:
        message.channel.send(nsfw6)
        break;
        case 7:
        message.channel.send(nsfw7)
        break;
        case 8:
        message.channel.send(nsfw8)
        break;
        case 9: 
        message.channel.send(nsfw9)
        break;
        case 10:
        message.channel.send(nsfw10)
        break;
        case 11: 
        message.channel.send(nsfw11)
        break;
        case 12:
        message.channel.send(nsfw12)
        break;
        case 13: 
        message.channel.send(nsfw13)   
        break;
        case 14:
        message.channel.send(nsfw14)
        break;
        case 15: 
        message.channel.send(nsfw15) 
        break;
        case 16:
        message.channel.send(nsfw16)   
        break;
        case 17: 
        message.channel.send(nsfw17) 
        break;
        case 18:
        message.channel.send(nsfw18)
        break;
        case 19: 
        message.channel.send(nsfw19) 
        break;
        case 20:
        message.channel.send(nsfw20)
        break;
        case 21: 
        message.channel.send(nsfw21)
        break;
        case 22:
        message.channel.send(nsfw22)
        break;
        case 23: 
        message.channel.send(nsfw23) 
        break;
        case 24:
        message.channel.send(nsfw24)
        break;
        case 25: 
        message.channel.send(nsfw25)
        break;
        case 26:
        message.channel.send(nsfw26)
        break;
        case 27: 
        message.channel.send(nsfw27)
        break;
        case 28:
        message.channel.send(nsfw28)
        break;
        case 29: 
        message.channel.send(nsfw29)
        break;
        case 30:
        message.channel.send(nsfw30)
        break;
        case 31: 
        message.channel.send(nsfw31)
        break;
        case 32:
        message.channel.send(nsfw32)
        break;
        case 33: 
        message.channel.send(nsfw33)       
        break;
        case 34:
        message.channel.send(nsfw34)
        break;
        case 35: 
        message.channel.send(nsfw35)     
        break;
        case 36:
        message.channel.send(nsfw36) 
        break;
        case 37: 
        message.channel.send(nsfw37)      
        break;
        case 38:
        message.channel.send(nsfw38)
        break;
        case 39: 
        message.channel.send(nsfw39)      
        break;
        case 40:
        message.channel.send(nsfw40)
        break;
        case 41: 
        message.channel.send(nsfw41)
        break;
        case 42:
        message.channel.send(nsfw42)
        break;
        case 43: 
        message.channel.send(nsfw43)          
        break;
        case 44:
        message.channel.send(nsfw44)
        break;
        case 45: 
        message.channel.send(nsfw45)        
        break;
        break;
        case 46: 
        message.channel.send(nsfw46)         
        break;
        case 47: 
        message.channel.send(nsfw47)          
        break;
        case 48:
        message.channel.send(nsfw48)
        break;
        case 49: 
        message.channel.send(nsfw49)
        break;
        case 50:
        message.channel.send(nsfw50)
        break;
        case 51: 
        message.channel.send(nsfw51)             
        break;
        case 52:
        message.channel.send(nsfw52)
        break;
        case 53: 
        message.channel.send(nsfw53)              
        break;
        case 54:
        message.channel.send(nsfw54)  
        break;
        case 55: 
        message.channel.send(nsfw55)              
        break;
        case 56:
        message.channel.send(nsfw56)
        break;
        case 57: 
        message.channel.send(nsfw57)               
        break;
        case 58:
        message.channel.send(nsfw58)
        break;
        case 59: 
        message.channel.send(nsfw59)
        break;
        case 60:
        message.channel.send(nsfw60)
        break;
        case 61: 
        message.channel.send(nsfw61)                
        break;
        case 62:
        message.channel.send(nsfw62)
        break;
        case 63: 
        message.channel.send(nsfw63)                  
        break;
        case 64: 
        message.channel.send(nsfw64)                  
        break;
        case 65:
        message.channel.send(nsfw65)
        break;
        case 66: 
        message.channel.send(nsfw66)                   
        break;
        case 67:
        message.channel.send(nsfw67)
        break;
        case 68: 
        message.channel.send(nsfw68)
        break;
        case 69:
        message.channel.send(nsfw69)
        break;
        case 70: 
        message.channel.send(nsfw70)
        break;
        case 71:
        message.channel.send(nsfw71)
        break;
        case 72: 
        message.channel.send(nsfw72)
        break;
        case 73:
        message.channel.send(nsfw73)
        break;
        case 74: 
        message.channel.send(nsfw74)
        break;
        case 75:
        message.channel.send(nsfw75)
        break;
        case 76: 
        message.channel.send(nsfw76)
        break;
        case 77:
        message.channel.send(nsfw77)
        break;
        case 78: 
        message.channel.send(nsfw78)
        break;
        case 79:
        message.channel.send(nsfw79)
        break;
        case 80: 
        message.channel.send(nsfw80)
        break;
        case 81:
        message.channel.send(nsfw81)
        break;
        case 82: 
        message.channel.send(nsfw82)
        break;
        case 83:
        message.channel.send(nsfw83)
        break;
        case 84: 
        message.channel.send(nsfw84)
        break;
        case 85:
        message.channel.send(nsfw85)
        break;
        case 86: 
        message.channel.send(nsfw86)
        break;
        case 87:
        message.channel.send(nsfw87)
        break;
        case 88: 
        message.channel.send(nsfw88)
        break;
        case 89:
        message.channel.send(nsfw89)
        break;
        case 90: 
        message.channel.send(nsfw90)
        break;
        case 91:
        message.channel.send(nsfw91)
        break;
        case 92: 
        message.channel.send(nsfw92)
        break;
        case 93:
        message.channel.send(nsfw93)
        break;
        case 94: 
        message.channel.send(nsfw94)
        break;
        case 95:
        message.channel.send(nsfw95)
        break;
        case 96: 
        message.channel.send(nsfw96)
        break;
        case 97:
        message.channel.send(nsfw97)
        break;
        case 98: 
        message.channel.send(nsfw98)
        break;
        case 99:
        message.channel.send(nsfw99)
        break;
        case 100: 
        message.channel.send(nsfw100)
        break;
        case 101:
        message.channel.send(nsfw101)
        break;
        case 102: 
        message.channel.send(nsfw102)
        break;
        case 103:
        message.channel.send(nsfw103)
        break;
        case 104: 
        message.channel.send(nsfw104)
        break;
        case 105:
        message.channel.send(nsfw105)
        break;
        case 106: 
        message.channel.send(nsfw106)
        break;
        case 107:
        message.channel.send(nsfw107)
        break;
        case 108: 
        message.channel.send(nsfw108)
        break;
        case 109:
        message.channel.send(nsfw109)
        break;
        case 110: 
        message.channel.send(nsfw110)
        break;
        case 111:
        message.channel.send(nsfw111)
        break;
        case 112: 
        message.channel.send(nsfw112)
        break;
        case 113:
        message.channel.send(nsfw113)
        break;
        case 114: 
        message.channel.send(nsfw114)
        break;
        case 115:
        message.channel.send(nsfw115)
        break;
        case 116: 
        message.channel.send(nsfw116)
        break;
        case 117:
        message.channel.send(nsfw1117)
        break;
        case 118: 
        message.channel.send(nsfw118)
        break;
        case 119:
        message.channel.send(nsfw119)
        break;
        case 120: 
        message.channel.send(nsfw120)
        break;
        case 121:
        message.channel.send(nsfw121)
        break;
        case 122: 
        message.channel.send(nsfw122)
        break;
        case 123:
        message.channel.send(nsfw123)
        break;
        case 124: 
        message.channel.send(nsfw124)
        break;
        case 125:
        message.channel.send(nsfw125)
        break;
        case 126: 
        message.channel.send(nsfw126)
        break;
        case 127:
        message.channel.send(nsfw127)
        break;
        case 128: 
        message.channel.send(nsfw128)
        break;
        case 129:
        message.channel.send(nsfw129)
        break;
        case 130: 
        message.channel.send(nsfw130)
        break;
        case 131:
        message.channel.send(nsfw131)
        break;
        case 132: 
        message.channel.send(nsfw132)
        break;
        case 133:
        message.channel.send(nsfw133)
        break;   
        case 133:
        message.channel.send(nsfw134)
        break;        
        }
    }
}