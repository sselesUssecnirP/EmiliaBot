const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const { prefix, owner, maid, keywords, specKeywords, meanKeywords, niceKeywords } = require("../../../config/config.json")
const { sleep, formatDate } = require('../../basic');

module.exports = {
    name: "tempadmin",
    category: "moderation",
    description: "Gives the user temporary admin powers for a time up to two hours.",
    run: async (client, msg, args, guilds, collSubmissions, ownerid, maid) => {

        let time = parseInt(args[0]) > 7200 ? 7200 * 1000 : args[0] * 1000

        let coll = await client.guildsColl.get(msg.guild.id)

        let userIs = false;

        coll["tempadmin"]["members"].forEach(id => {
            if (id == msg.author.id) userIs = true;
        });

        if (coll["tempadmin"]["enabled"] && userIs) {
            if (args.length = 0) {
                msg.reply("You must provide a value up to 7200 seconds (2 hours). The value MUST be in seconds...")
                return;
            } 

            msg.member.roles.add(coll["tempadmin"]["role"])
            sleep(time)
            msg.member.roles.remove(coll["tempadmin"]["role"])

        } else {
            if (!coll["tempadmin"]["enabled"]) {
                msg.reply(`This command is not used on ${msg.guild.name}!`)
                return;
            }
            if (!userIs) msg.reply("You're unable to use this command.");
            return;
        }
    }
}