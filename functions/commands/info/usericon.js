const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "usericon",
    category: "info",
    description: "Makes a user's icon bigger and displays the full picture instead of a cut-off circular version.",
    aliases: ["grabicon", "uicon"],
    usage: "[user_ID | user_MENTION]",
    run: async (client, msg, args) => {
        let user = msg.channel.type == 'DM' ? msg.user : undefined

        if (msg.mentions.users.first() && !user) {
            user = msg.mentions.users.first()
        } else if (args[0] && !user) {
            user = await client.users.fetch(args[0]).catch(() => {
                user = false
            });
        } else 
            user = false;
            
        let embed = new MessageEmbed()
        .setAuthor(client.user.username, client.user.displayAvatarURL())
        .setDescription(`This image is ${func.mentionUser(user)}'s avatar.`)
        .setImage(user ? user.displayAvatarURL() : msg.author.displayAvatarURL())
        .setFooter(msg.author.username, msg.author.displayAvatarURL())

        msg.reply(embed)
    }
}