const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const { prefix, owner, maid, keywords, specKeywords, meanKeywords, niceKeywords, botemojis } = require("../../../config/config.json")
const { sleep, formatDate } = require('../../basic');

module.exports = {
    name: "help",
    category: "info",
    description: "Displays a wonderful embed of help pages",
    aliases: ["?", "h"],
    usage: "none",
    run: async (client, msg, args) => {

        let name = msg.author.username
        let command = client.commands.get('help')

        let fun = [];
        let info = [];
        let moderation = [];
        let owneronly = [];

        await client.commands.each(cmd => {
            if (cmd.category == "fun") {
                fun.push(`**>> ${cmd.name}**: ${cmd.description}`)
            } else if (cmd.category == "info") {
                info.push(`**>> ${cmd.name}**: ${cmd.description}`)
            } else if (cmd.category == "moderation") {
                moderation.push(`**>> ${cmd.name}**: ${cmd.description}`)
            } else if (cmd.category == "owner") {
                owneronly.push(`**>> ${cmd.name}**: ${cmd.description}`)
            }
        });

        fun.join('\n')
        info.join('\n')
        moderation.join('\n')
        owneronly.join('\n')

        // Temporary
        fun = "None yet"

        let embed = new MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL())
            .setDescription('Some commands will be disabled if my owner\'s lovely little maid Ram is in the discord.')
            .setColor(msg.member.displayHexColor == "#000000" ? "#FFFFFF" : msg.member.displayHexColor)
            .addField("Fun", fun)

            .addField("Info", info)
            
            .addField("Moderation", moderation)
            
            .addField("Owner Only", owneronly)
            .setFooter(`${msg.author.id == owner ? "My owner" : name} used ${prefix}${command.name}! It made the help embed appear! Use ${prefix}{cmd} info for more information on a specific command.`, msg.author.displayAvatarURL())
            
        msg.reply(embed)
        
    }
}