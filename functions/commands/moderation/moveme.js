const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const { prefix, owner, maid, keywords, specKeywords, meanKeywords, niceKeywords } = require("../../../config/config.json")
const { sleep, formatDate } = require('../../basic');

module.exports = {
    name: "pull",
    description: "Pulls the user to the same voice channel as the one they mention.",
    aliases: ["pullme", "moveme", "takemeaway"],
    run: (client, msg, args) => {
        
    }
}