const { Client, MessageEmbed, Message, Collection } = require('discord.js');
//const { token } = require("./config/token.json")
const { readdirSync } = require('fs');
const { sleep } = require('./functions/basic');
const token = process.env.TOKEN;
const handlers = ["commands", "events"]

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

client.guildsColl = new Collection
client.usersColl = new Collection
client.events = new Collection
client.manualEvents = new Collection
client.commands = new Collection
client.aliases = new Collection

const guildSaves = readdirSync(`./saves/GuildSaves`).filter(f => f.endsWith('.json'))

for (let file of guildSaves) {
    let pull = require(`./saves/GuildSaves/${file}`);

    if (pull) {
        client.guildsColl.set(pull.id, pull)
    } 
}

/*
const userSaves = readdirSync(`./saves/UserSaves`)

for (let file of userSaves) {
    let pull = require(`./saves/GuildSaves/${file}`);

    if (pull) {
        client.usersColl.set(pull.id, pull)
    } 
}

console.log(client.usersColl.array())
*/

client.on('ready', async () => {
    console.log(`${client.user.username} is ready to receive requests.`);

    handlers.forEach(handler => {
        require(`./functions/handlers/${handler}`)(client);
    }); 
    
    console.log(`Aliases Key Array:\n${client.aliases.keyArray()}`)
    console.log(`Aliases:\n${client.aliases.array()}`)
    console.log(`Commands:\n${client.commands.keyArray()}`)

    client.events.each(event => event.run(client));
});

client.login(token)