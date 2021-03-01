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

        let guild = msg.guild

        const joined = formatDate(msg.member.joinedAt);

        const roles = guild.roles.cache
            .filter(r => r.id != msg.guild.id)
            .map(r => r)
            .join(", ") || "none"
        
        const created = formatDate(guild.createdAt)

        const embed = new MessageEmbed()
            .setTitle('Serverinfo')
            .setFooter(guild.name, guild.iconURL)
            .setThumbnail(guild.iconURL)
            .setColor(msg.member.displayHexColor === "#000000" ? "#ffffff" : msg.member.displayHexColor)

            .addField("Guild Information #1", stripIndents`**> Name:** ${guild.name}
            **>> ID:** ${guild.id}
            **>> Created At:** ${created}
            **>> Description:** ${guild.id}`, true)
            
            .addField("Info #2", `${guild.rulesChannel ? `
            **>> Rules Channel:** <#!${guild.rulesChannelID}>` : ``}
            **>> Population:** ${guild.membersCount}
            **>> Joined At:** ${joined}
            **>> Voice Region:** ${guild.region}`, true)

            .addField("Info #3", `**>> Roles:** ${roles}${guild.vanityURLCode ? `
            **>> Vanity URL:** ${guild.vanityURLCode}
            **>> Vanity URL Uses:** ${guild.vanityURLUses}` : ``}${guild.partnered ? `
            **>> Partnered:** Yes` : ``}${guild.verified ? `
            **>> Verified:** Yes` : ``}`, true)

            .setTimestamp()

        if (guild.bannerURL) {
            embed.setImage(guild.bannerURL)
        }

        msg.channel.send("Here's the server information!", embed)

    }
}