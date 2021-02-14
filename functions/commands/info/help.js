const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const { prefix, owner, maid, keywords, specKeywords, meanKeywords, niceKeywords, botemojis } = require("../../../config/config.json")
const { sleep, formatDate } = require('../../basic');

module.exports = {
    name: "help",
    category: "info",
    description: "Displays a wonderful embed of help pages",
    aliases: ["?", "h"],
    run: async (client, msg, args) => {

        let name = msg.author.username
        let command = client.commands.get('help')

        let embed = new MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL())
            .setColor(msg.member.displayHexColor == "#000000" ? "#FFFFFF" : msg.member.displayHexColor)
            .addField("Info", `**>> Help**: Displays this page.\n**>> ItemID**: Gives you the ID of a channel, user, role, or guild.`, { inline: true })
            .addField("Moderation", `**>> Moveme**: With permission, this command will allow you to get pulled from one voice to channel to the one that the person you @ is in.\n**>> Report**: If guild has a report channel, this will send your message there along with the @'d user's information.\n**>> RR**: Reaction Roles (creation, deletion, or list)\n**>> Say**: Sends an embed message to a channel.\n**>> TempAdmin**: IF guild has set up the command, this will give you an admin role for a time up to 2 hours.\n**>> UserInfo**: This command will provide information on a particular user.`, { inline: true })
            .addField("sselesUssecnirP Only", `**>> grabGuildSaves**: Allows sselesUssecnirP to grab a .zip file of ALL of my saves.\n**>> invite**: sselesUssecnirP and one of his maids has access to display an embed that gives a link to invite me to your server. If I'm not in The Broken Kingdom, I'll also provide an invite link there.`, { inline: true })
            .setFooter(`${name} used ${prefix}!${command.name}! It made the help embed appear!`, msg.author.displayAvatarURL())
            
        msg.reply(embed)
    }
}