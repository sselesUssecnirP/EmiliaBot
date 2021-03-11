const func = require('../../basic');
const { prefix, master, maid, dogwater } = require('../../../config/config.json');

module.exports = {
    name: "subaru",
    category: "fun",
    description: "Sends a video of Subaru denying Rem over Emilia",
    aliases: [],
    usage: "[mention]",
    run: async (client, msg, args) => {
        
        if (args.length == 0) {
            msg.author.send({ files: ["./files/videos/iloveemilia.mp4"]})
        } else {
            if (msg.mentions.members.first()) {
                let user = msg.mentions.members.first()

                user.send(`__**${msg.author.username}:**__`, { files: ["./files/videos/iloveemilia.mp4"]})
            }
        }
    }
}

