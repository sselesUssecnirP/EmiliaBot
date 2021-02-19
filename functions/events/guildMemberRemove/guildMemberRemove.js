const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "guildMemberRemove",
    description: "Event emits on guild member leaving!",
    run: async (client) => {
        client.on('guildMemberRemove', async member => {

            if (member.user.bot) return;

            let guildSave = client.guildsColl.get(member.guild.id)

            if (guildSave["channels"]["welcome"] != "") {
                let channel = member.guild.channels.get(guildSave["channels"]["welcome"])

                let embed = new MessageEmbed()
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .setColor(member.displayHexColor == "#000000" ? "#FFFFFF" : member.displayHexColor)
                .addField("Goodbye!", `${member.displayName}!`)
                .setThumbnail(member.user.displayAvatarURL())
                .setFooter(member.displayName, member.user.displayAvatarURL())

                channel.send(embed)
            } else if (guildSave["channels"]["welcome"] == "") {
                let channel = member.guild.channels.find(c => c.name == "general")

                let embed = new MessageEmbed()
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .setColor(member.displayHexColor == "#000000" ? "#FFFFFF" : member.displayHexColor)
                .addField("Goodbye!", `${member.displayName}!`)
                .setThumbnail(member.user.displayAvatarURL())
                .setFooter(member.displayName, member.user.displayAvatarURL())

                channel.send(embed)
            }
        })
    }
}