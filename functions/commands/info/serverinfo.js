const { formatDate } = require('../../basic');
const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');

module.exports = {
    name: "serverinfo",
    category: "info",
    description: "A command to acquire information about a user.",
    aliases: ["whatis", "what", "sinfo"],
    usage: "<username | id | mention>",
    run: async (client, msg, args) => {
        

        let ram = await msg.guild.members.cache.get('762354168132010044')
        if (ram) {
            msg.reply(`The wonderful little maid, <@!${ram.id}>, is in the discord. You should use her for this command instead!`)
            return;
        }

        if (msg.channel.type == 'DM')
        return msg.reply("This is a direct message. You cannot get information about the server you're in from here.")

        const roles = [];
    
        await msg.guild.roles.cache.each(r => {
            f (roles.name != '@everyone')
                roles.push(`<@&${r.id}>`)
        });

        roles.join(', ')

        const embed = new MessageEmbed()
            .setTitle('Serverinfo')
            .setFooter(msg.guild.name, msg.guild.iconURL)
            .setThumbnail(msg.guild.iconURL)
            .setColor(msg.member.displayHexColor === "#000000" ? "#ffffff" : msg.member.displayHexColor)

            .addField("Guild Information #1", `**>> Name:** ${msg.guild.name}
            **>> ID:** ${msg.guild.id}
            **>> Created At:** ${msg.guild.createdAt}${msg.guild.description ? `
            **>> Description:** ${msg.guild.description}` : ``}${msg.guild.rulesChannel ? `
            **>> Rules Channel:** <#${msg.guild.rulesChannelID}>` : ``}
            **>> Population:** ${msg.guild.memberCount}
            **>> Joined At:** ${msg.member.joinedAt}
            **>> Voice Region:** ${msg.guild.region}${msg.guild.vanityURLCode ? `
            **>> Vanity URL:** ${msg.guild.vanityURLCode}
            **>> Vanity URL Uses:** ${msg.guild.vanityURLUses}` : ``}${msg.guild.partnered ? `
            **>> Partnered:** Yes` : ``}${msg.guild.verified ? `
            **>> Verified:** Yes` : ``}`, true)
        
            .setTimestamp()

        if (msg.guild.bannerURL) {
            embed.setImage(msg.guild.bannerURL)
        }

        msg.channel.send("Here's the server information!", embed)

    }
}