const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "guildMemberAdd",
    description: "Event emits on guild member joining!",
    run: async (client) => {
        client.on('guildMemberAdd', async member => {

            if (member.user.id == client.user.id) {
                let guildSave = { name: member.guild.name, id: member.guild.id, message: [], channels: { report: "", welcome: "" }, banNWord: true }
                
                fs.writeFile(`../../../config/GuildSaves/${msg.guild.id}`, JSON.stringify(guildSave, null, '\t'), (err) => {
                    if (err) throw err;
                    console.log('The file has been saved!');
                }); 
            }

            if (member.user.bot) return;

            let guildSave = client.guildsR.get(member.guild.id)

            if (guildSave["channels"]["welcome"] != "") {
                let channel = member.guild.channels.get(guildSave["channels"]["welcome"])

                let embed = new MessageEmbed()
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .setColor(member.displayHexColor == "#000000" ? member.displayHexColor : "#FFFFFF")
                .addField("Everyone say welcome to", `${member.displayName}!`)
                .setThumbnail(member.user.displayAvatarURL())
                .setFooter(member.displayName, member.user.displayAvatarURL())

                channel.send(embed)
            } else if (guildSave["channels"]["welcome"] == "") {
                let channel = member.guild.channels.find(c => c.name == "general")

                let embed = new MessageEmbed()
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .setColor(member.displayHexColor == "#000000" ? member.displayHexColor : "#FFFFFF")
                .addField("Everyone say welcome to", `${member.displayName}!`)
                .setThumbnail(member.user.displayAvatarURL())
                .setFooter(member.displayName, member.user.displayAvatarURL())

                channel.send(embed)
            }
        })
    }
}