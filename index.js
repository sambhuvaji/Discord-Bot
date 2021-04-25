const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = '!';
const token = 'ODMzMjI5MzUzODAyMTM3NjIw.YHvTTg.aBigQ4vQnLMZaBBjwM7Eqn-b7UA';
//const ms = require9('ms');

bot.on('ready',()=>{
    console.log('This bot is online')
})

bot.on('message',msg=>{
    if (msg.content === "Hello"){
        msg.reply('Hello Friend!');
    }
})

bot.on('message',msg=>{
    if (msg.content === "Day"){
        msg.reply('Sunday');
    }
})

bot.on('message',message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.reply("Pong!")
            break;
        case 'info':
            if(args[1] === "version"){
                message.reply("1.9.8.4");
            }
            else{
                message.reply('Invalid Arg');
            }
        break;
        case 'clear':
            if(!args[1]){
                message.reply("Enter second argument");
            }
            else{
            message.channel.bulkDelete(args[1])
            break;
            }
            //case 'embed':
                //const embed = new Discord.richEmbed()
                //.setTitle('User information')
                //message.channel.sendEmbed(embed);
    

    }
    
})
bot.login(token);