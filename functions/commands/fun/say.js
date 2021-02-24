const { sleep } = require('../../basic'); 
const { MessageEmbed } = require('discord.js')
const { prefix, master, maid, dogwater } = require('../../../config/config.json');

module.exports = {
    name: "say",
    category: "fun",
    description: "Creates an embed with your own message.",
    aliases: "none",
    usage: "<MESSAGE> [hexColor] [channel_ID | channel_MENTION]\nFor <MESSAGE>, write it like this: `Hi\~there\~people\~how\~are\~you?`. Using commas INSTEAD of space.",
    run: async (client, msg, args) => {
        
        if (args[0] == undefined) {
            msg.reply(`Please provide the proper arguments! Use \`${prefix}say info\` to know what I need.`)
            return;
        }

        let defaultColor = '#bc22e3'
        let channel;
        let color = false;
        let customColor = args[1] ? true : false
        let customChannel;

        if (customColor)
            args[1].includes('#') && !args[1].includes('<#!') ? null : customColor = false

        if (customColor)
            color = args[1]


        if (customChannel)
            channel = msg.mentions.channels.first() || msg.guild.channels.get(args[1])

        args = args.filter(i => i !== args[1] || args[2])
        args = args[0].split('~').join(' ')

        let embed = new MessageEmbed()
            .setAuthor(msg.member.displayName, msg.author.displayAvatarURL())
            .setColor(color ? color : defaultColor)
            .addField(`Message from ${msg.author.username}`, args, { inline: true })
            .setFooter('emi!say')

        if (!customChannel) msg.channel.send(embed);    
        if (customChannel) channel.send(embed);
    }
}