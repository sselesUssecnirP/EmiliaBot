const { Client, MessageEmbed, Message, Collection } = require('discord.js');
const { prefix, owner, maid, dogwater } = require('./config/config.json');
const { readdirSync, writeFile } = require('fs');
const aZip = require('adm-zip')
const { sleep, formatDate } = require('./functions/basic');
const { token } = process.env || require("./config/token.json");
const handlers = ["collections", "commands", "events"]

const client = new Client({
    disableMentions: 'everyone',
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    presence: {
        status: "online",
        activity: {
            name: "emi! | Emilia 1.3.0",
            type: "LISTENING"
        },
        afk: false
    }
});

client.on('ready', async () => {
    console.log(`${client.user.username} is ready to receive requests.`);

    handlers.forEach(handler => require(`./functions/handlers/${handler}`)(client)); 

    client.events.each(event => event.run(client));
});

client.login(token)