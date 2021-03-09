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
            let user = msg.mentions.members.first()

            user.send(`**${msg.author.username}**:::`, { files: ["files/videos/iloveemilia.mp4"] })
        }
    }
}