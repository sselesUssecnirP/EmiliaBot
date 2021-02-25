const { sleep, formatDate, formatDateTime, mentionUser } = require('../../basic'); 
const { MessageEmbed } = require('discord.js')
const { prefix, master, maid, dogwater } = require('../../../config/config.json');

module.exports = {
    name: "say",
    category: "fun",
    description: "Creates an embed with your own message.",
    aliases: "none",
    usage: "[hexColor] [channel_ID | channel_MENTION] <MESSAGE>",
    run: async (client, msg, args) => {
        
        if (args[0] == undefined) {
            msg.reply(`Please provide the proper arguments for the command! Use \`${prefix}say info\` to know what the command requires.`)
            return;
        }

        let defaultColor = '#bc22e3'
        let channel;
        let color = false;
        let customColor = args[0] ? true : false
        let customChannel = false;

        if (customColor) {
            args[0].includes('#') && !args[0].includes('<#!') ? customColor = args[0] : customColor = false
            if (customColor)
                if (args[1].includes('<#!'))
                    customChannel = true
        }

        if (customChannel)
            channel = msg.mentions.channels.first() || msg.guild.channels.get(args[1])

        if (!customColor || !customChannel) args = args.filter(i => i !== args[0]).join(' ')
        if (customColor && customChannel) args = args.filter(i => i !== args[0] || args[1]).join(' ')

        let embed = new MessageEmbed()
            .setAuthor(msg.member.displayName, msg.author.displayAvatarURL())
            .setColor(color ? color : defaultColor)
            .addField(`Message from ${msg.author.username}`, args, { inline: true })
            .setFooter('emi!say')

        if (!customChannel) msg.channel.send(embed);    
        if (customChannel) channel.send(embed);
    }
}