const { Client, MessageEmbed, Message, Collection } = require('discord.js');
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

    useless = client.usersColl.get('160424636369207296')

    uselessUser = client.users.cache.get(useless.id)

    while (ready == true) {
        if (useless["savesDM"]["lastMessage"] != formatDate(new Date())) {
                    useless["savesDM"]["days"] += 1

            let zip = new aZip();
            zip.addLocalFolder('./saves')
            zip.writeZip('./functions/commands/owner/BotSaves.zip')

            uselessUser.send(`Day ${useless["savesDM"]["days"]} of sending you my save files!`, { files: ["functions/commands/owner/BotSaves.zip"] })
                    
            useless["savesDM"]["lastMessage"] = formatDate(new Date())

            writeFile(`./saves/UserSaves/${dwUser.id}.json`, JSON.stringify(dw, null, '\t'), (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            });
        }

        await sleep(240000)
    }
});

client.login(token)