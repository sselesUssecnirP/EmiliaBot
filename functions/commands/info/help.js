module.exports = {
    name: "help",
    category: "info",
    description: "Displays a wonderful embed of help pages",
    run: async (client, msg, args) => {
        const { MessageEmbed } = require('discord.js')

            //let embed = new MessageEmbed()
            //    .setAuthor(client.user.username, client.user.displayAvatarURL())
            //    .setColor(83,12,176)
            //    .addField("General", '', { inline: true })
            //    .setFooter(`${name} used ${prefix}!${command}! It made the help embed appear!`, msg.author.displayAvatarURL())
            //
            //    msg.reply(embed)
            msg.reply("Currently, I don't have enough commands to fill a help embed.\nThe available commands are `submissions`, and `invite`!")
    }
}