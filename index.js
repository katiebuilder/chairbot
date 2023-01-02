const Discord = require('discord.js');
const client = new Discord.Client();

// Environment variables
const token = process.env['TOKEN']
const prefix = process.env['PREFIX']
const owner = process.env['ownerid']

client.on('ready', () => {
    console.log(`I'm a goofball!`);
});

client.on("message", message => {
    
    if(message.author.bot) return;

    if(message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    //Commands
    if(command === "ping") {
        message.channel.send('Pong!');
    }
});

client.login(token);
