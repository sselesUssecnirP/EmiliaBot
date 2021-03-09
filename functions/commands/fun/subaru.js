const func = require('../../basic');
const { prefix, master, maid, dogwater } = require('../../../config/config.json');

module.exports = {
    name: "subaru",
    category: "fun",
    description: "Sends a video of Subaru denying Rem over Emilia",
    aliases: [],
    usage: "[mention]",
    run: async (client, msg, args) => {
        
        if (msg.mentions.members.first()) {
            let user = msg.mentions.users.first()

            user.send(`**${msg.author.username}**:::`, { files: ["files/videos/iloveemilia.mp4"] })
        } else if (!msg.mentions.users.first()) {
            msg.author.send(``, { files: ["files/videos/iloveemilia.mp4"] })
        } else if (!msg.mentions.members.first() && msg.mentions.users.first()) {
            msg.reply('The user you mentioned is not in this guild.').then(m => m.delete({ timeout: 15000 }))
        }
    }
}