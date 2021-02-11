const { Client, MessageEmbed, Message, Collection } = require('discord.js');
const { guilds } = require("./config/RRoles.json")
//const { token } = require("./config/token.json")
const { prefix, owner, maid, keywords, specKeywords, meanKeywords, niceKeywords } = require("./config/config.json")
const token = process.env.TOKEN;
const handlers = ["commands", "events"]
const donotrun = ["reactionAddRemove"]

const client = new Client({
    disableMentions: 'everyone',
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    presence: {
        status: "online",
        activity: {
            name: "emi! | Emilia 1.2.1",
            type: "LISTENING"
        },
        afk: false
    }
});

client.guildsR = new Collection
client.events = new Collection
client.manualEvents = new Collection
client.commands = new Collection
client.aliases = new Collection

const guilds = readdirSync(`./config/GuildSaves`).filter(f => f.endsWith('.json'))

    for (let file of guilds) {
        let pull = require(`../../../config/GuildSaves/${file}`);

        if (pull) {
            client.guildsR.set(pull.id, pull)
        } 
    }

console.log(client.guildsR.array())

client.on('ready', () => {
    console.log(`${client.user.username} is ready to receive requests.`);

    handlers.forEach(handler => {
        require(`./functions/handlers/${handler}`)(client);
    }); 
    
    
    client.events.each(event => event.run(client));
});

client.login(token)