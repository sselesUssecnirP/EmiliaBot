const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const { prefix, owner, maid, keywords, specKeywords, meanKeywords, niceKeywords } = require("../../../config/config.json")
const { sleep, formatDate } = require('../../basic');

module.exports = {
    name: "pull",
    description: "Pulls the user to the same voice channel as who they mention is in.",
    aliases: ["pullme", "moveme", "takemeaway"],
    run: async (client, msg, args) => {
        if (!msg.member.voice.channel) msg.reply("You're not connected to a voice channel!")

        if (msg.guild.id == '755657350962085888') {

            if (msg.member.roles.cache.has("777488811168628737")) {
                let mention = args[0]
                mention.slice("<@!")
                mention.slice(">")
                let channel = (await msg.mentions.members.first()).voice.channelID ? (await msg.mentions.members.first()).voice.channelID : null

                msg.member.voice.setChannel(channel)
            }
        }
    }
}