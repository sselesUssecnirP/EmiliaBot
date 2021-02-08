const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const { prefix, owner, maid, keywords, specKeywords, meanKeywords, niceKeywords } = require("../../../config/config.json")
const { sleep, formatDate } = require('../../basic');

module.exports = {
    name: "tempadmin",
    category: "moderation",
    description: "Gives the user temporary admin powers for a time up to two hours.",
    run: async (client, msg, args, guilds, collSubmissions, ownerid, maid) => {
        if (msg.guild.id != guilds[1]["id"]) return;

        if (args[0] === "info") {
            await msg.reply("This command will give the user temporary god powers. This command is only usable by very few people selected by Cole.")
            return;
        }

        let time = args[0] * 1000

        if (guilds[1]["tempgod"].forEach((id, index) => {
            if (msg.author.id == id) {
                return true;
            } else if (index == guilds[1]["tempgod"].length - 1) return false;
        })) {
            if (args.length = 0) {
                msg.reply("You must provide a value up to 7200 seconds (2 hours). The value MUST be in seconds...")
                return;
            } 

            msg.member.roles.add('794697849295732746')
            sleep(time)
            msg.member.roles.remove('794697849295732746')

        } else {
            msg.reply("You're unable to use this command.")
            return;
        }
            

    }
}