const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const { prefix, owner, maid, keywords, specKeywords, meanKeywords, niceKeywords } = require("../../../config/config.json")
const { sleep, formatDate } = require('../../basic');
const aZip = require('adm-zip')

module.exports = {
    name: "grabbotsaves",
    description: "Grabs a .zip of all the GuildSaves",
    aliases: ["botsaves", "gbsaves", "gbotsaves", "grabbsaves"],
    run: async (client, msg, args) => {

       if (msg.author.id == owner) {
            let zip = new aZip();
            zip.addLocalFolder('./saves')
            zip.writeZip('./functions/commands/owner/BotSaves.zip')

            msg.author.send(`Here are the GuildSaves as you asked! Updated as of ${formatDate(new Date())}`, { files: ["functions/commands/owner/BotSaves.zip"] })
            msg.reply("I've sent you a .zip file of the saved content.")
        }
    }
}