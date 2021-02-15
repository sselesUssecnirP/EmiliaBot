const { Client, MessageEmbed, Message, Collection } = require('discord.js');
//const { token } = require("./config/token.json")
const { readdirSync } = require('fs');
const { sleep } = require('./functions/basic');
const token = process.env.TOKEN;
const handlers = ["collections", "commands", "events"]

const client = new Client({
    disableMentions: 'everyone',
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    presence: {
        status: "online",
        activity: {
            name: "emi! | Emilia 1.2.6",
            type: "LISTENING"
        },
        afk: false
    }
});

client.on('ready', async () => {
    console.log(`${client.user.username} is ready to receive requests.`);

    handlers.forEach(handler => {
        require(`./functions/handlers/${handler}`)(client);
    }); 
    

    client.events.each(event => event.run(client));
});

client.login(token)