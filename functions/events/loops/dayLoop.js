const { sleep, formatDate, formatDateTime, mentionUser } = require('../../basic'); 
const { prefix, owner, maid, dogwater } = require('../../../config/config.json');
const fs = require('fs')
const aZip = require('adm-zip')

module.exports = {
    name: "dayLoop",
    description: "Loops constantly runs if it's the next day.",
    run: async (client) => {
        /*
            let ready = true;

            while (ready) {
                client.usersColl.each(async user => {
                    if (!user) return;
                    if (user == []) return;
                    if (user == {}) return;

                    if (Object.keys(user).includes('DM')) {
                        if (user["DM"]["lastMessage"] == formatDate()) return;
                        let u = await client.users.cache.get(user.id)

                        user["DM"]["days"] += 1

                        user["DM"]["lastMessage"] = formatDate()

                        fs.writeFile(`./saves/UserSaves/${user.id}.json`, JSON.stringify(user, null, '\t'), (err) => {
                            if (err) throw err;
                            console.log('The file has been saved!');
                        });

                        if (user.id == owner) {
                            let zip = new aZip();
                            zip.addLocalFolder('./saves')
                            zip.writeZip('./functions/commands/owner/BotSaves.zip')

                            u.send(`Day ${user["DM"]["days"]} of sending you my save files!`, { files: ["functions/commands/owner/BotSaves.zip"] })
                        }

                        if (user.id == maid) {
                            u.send(`Day ${user["DM"]["days"]} of sending you this:`, { files: ["files/videos/iloveemilia.mp4"] })
                        }

                        if (user.id == owner || user.id == maid) return;

                        u.send(`Day ${user["DM"]["days"]} of sending you this:\n\n${user['DM']['message']}`)
                    }
                });

                await sleep(360000)
                continue;
        }
        */
    }
}