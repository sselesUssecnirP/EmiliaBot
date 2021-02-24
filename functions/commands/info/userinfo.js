const { formatDate } = require('../../basic');
const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');

module.exports = {
    name: "userinfo",
    category: "info",
    description: "A command to acquire information about a user.",
    aliases: ["whois", "who"],
    usage: "<username | id | mention>",
    run: async (client, msg, args) => {
        

        let ram = await msg.guild.members.cache.get('762354168132010044')
        if (ram) {
            msg.reply(`The wonderful little maid, <@!${ram.id}>, is in the discord. You should use her for this command instead!`)
            return;
        }

        if (!args[0]) {
            msg.reply("You did not provide a required argument. You must give me a username, mention, or ID.")
            return;
        }

        let member = msg.mentions.members.first() ? msg.mentions.members.first() : undefined 
        
        if (!member)
            msg.guild.members.cache.find(user => {
                if (user.id == args[0]) {
                    member = user;
                } else if (user.tag == args[0]) {
                    member = user;
                } else if (user.username == args[0]) {
                    member = user;
                }
            });

        if (!member) {
            msg.reply("Could not find a member with the argument you gave me.")
            return;
        }

        const joined = formatDate(member.joinedAt);

        const roles = member.roles.cache
            .filter(r => r.id != msg.guild.id)
            .map(r => r)
            .join(", ") || "none"
        
        const created = formatDate(member.user.createdAt)

        const embed = new MessageEmbed()
            .setTitle('Userinfo')
            .setFooter(member.displayName, member.user.displayAvatarURL())
            .setThumbnail(member.user.displayAvatarURL())
            .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)

            .addField("Member Information", stripIndents`**> Display name:** ${member.displayName}
            **> Joined at:** ${joined}
            **> Roles:** ${roles}`, true)

            .addField("User Information", stripIndents`**> ID:** ${member.user.id}
            **> Username:** ${member.user.username}
            **> Discord Tag:** ${member.user.tag}
            **> Created at:** ${created}`, true)

            .setTimestamp()

        if (member.user.presence.activities.type === "PLAYING") {
            embed.addField('Currently Playing', `**> Name:** ${member.user.presence.activities.name}`, true)
        } else if (member.user.presence.activities.type === "STREAMING") {
            embed.addField('Currently Streaming', `**> Name:** ${member.user.presence.activities.name}`, true)
        } else if (member.user.presence.activities.type === "LISTENING") {
            embed.addField('Currently Listening', `**> Name:** ${member.user.presence.activities.name}`, true)
        }

        msg.channel.send("Here's the user information!", embed)

    }
}