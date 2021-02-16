const { sleep } = require('../../basic'); 
const { MessageEmbed } = require('discord.js')
const { prefix, ownerid, maid, dogwater } = require('../../../config/config.json');

module.exports = {
    name: "say",
    category: "moderation",
    description: "",
    aliases: [],
    usage: "<MESSAGE> [hexColor] [channel_ID | channel_MENTION]\nFor <MESSAGE>, write it like this: `Hi,there,people,how,are,you?`. Using commas INSTEAD of space.",
    run: async (client, msg, args) => {
        
       
        if (args[0] == undefined) {
            msg.reply(`You didn't provide any arguments! Use \`${prefix}say info\` to know what to give me.`)
            return;
        }

        let defaultColor = '#bc22e3'
        let channel;
        let color = false;
        let customColor = args[1] ? true : false
        let customChannel;

        if (customColor)
            args[1].includes('#') ? null : customColor = false

        if (customColor)
            customChannel = args[2] ? true : false

        if (!customColor)
            customChannel = args[1] ? true : false

        if (customColor && !customChannel) {
            if (msg.mentions.channels.first()) {
                customColor = false
                customChannel = true
            }
        }

        if (customColor) {
            color = args[1]
            args.slice(args[1])
        }

        if (customChannel) {
            channel = msg.mentions.channels.first() || msg.guild.channels.get(args[1])
            args.slice(args[1])
        }

        let embed = new MessageEmbed()
            .setAuthor(msg.member.displayName, msg.author.displayAvatarURL())
            .setColor(color ? color : defaultColor)
            .addField(`Message from ${msg.author.username}`, args.join(' '), { inline: true })
            .setFooter('ram!say')

        if (!customChannel) msg.channel.send(embed);    
        if (customChannel) channel.send(embed);
    }
}