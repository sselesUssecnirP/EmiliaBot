const { Client, MessageEmbed, Message, Collection } = require('discord.js');
const { prefix, owner, maid, dogwater } = require('./config/config.json');
//const { token } = require("./config/token.json")
const { readdirSync, writeFile } = require('fs');
const aZip = require('adm-zip')
const { sleep, formatDate } = require('./functions/basic');
const token = process.env.TOKEN;
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
    let ready = true

    console.log(`${client.user.username} is ready to receive requests.`);

    handlers.forEach(handler => {
        require(`./functions/handlers/${handler}`)(client);
    }); 
    

    client.events.each(event => event.run(client));

    let useless = client.usersColl.get('160424636369207296')

    let uselessUser = client.users.cache.get(useless.id)

    while (ready == true) {
        client.usersColl.each(user => {
            if (Object.keys(user).includes('DM')) {
                if (user["DM"]["lastMessage"] == formatDate(new Date())) return;
                let u = client.users.cache.get(user.id)

                user["DM"]["days"] += 1

                user["DM"]["lastMessage"] = formatDate(new Date())

                await fs.writeFile(`./saves/UserSaves/${user.id}.json`, JSON.stringify(user, null, '\t'), (err) => {
                    if (err) throw err;
                    console.log(`${user.id}/${user.name} has been saved!`);
                });

                if (user.id == owner) {
                    let zip = new aZip();
                    zip.addLocalFolder('./saves')
                    zip.writeZip('./functions/commands/owner/BotSaves.zip')

                    user.send(`Day ${user["DM"]["days"]} of sending you my save files!`, { files: ["functions/commands/owner/BotSaves.zip"] })
                }

                if (user.id == owner) return;

                await u.send(`Day ${user["DM"]["days"]} of sending you this:\n\n${user['DM']['message']}${user.id == dogwater ? "\n\nI think some dogs are thirsty over there. You should go quench their thirst!" : ""}`)
            }
        });

        sleep(360000)
    }
});

client.login(token)