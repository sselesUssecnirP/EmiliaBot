const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const { prefix, owner, maid, keywords, specKeywords, meanKeywords, niceKeywords } = require("../../../config/config.json")
const { sleep, formatDate } = require('../../basic');

module.exports = {
    name: "pull",
    description: "Pulls the user to the same voice channel as who they mention is in.",
    aliases: ["pullme", "moveme", "takemeaway"],
    run: (client, msg, args) => {
        
        if (msg.guild.id == '755657350962085888') {
            if (msg.member.roles.cache.has("777488811168628737")) {
                let mention = msg.mentions.users.first()
                mention.slice("<@!")
                mention.slice(">")
                let user = msg.guild.members.cache.get(mention)
                let channel = user.voice.channelID ? null : user.voice.channelID

                msg.member.voice.setChannel(channel)
            }
        }
    }
}