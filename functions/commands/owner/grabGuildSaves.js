const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const { prefix, owner, maid, keywords, specKeywords, meanKeywords, niceKeywords } = require("../../../config/config.json")
const { sleep, formatDate } = require('../../basic');
const aZip = require('adm-zip')

module.exports = {
    name: "grabguildsaves",
    description: "Grabs a .zip of all the GuildSaves",
    aliases: ["guildsaves", "ggsaves", "gguildsaves", "grabgsaves"],
    run: (client, msg, args) => {

        if (msg.author.id == owner) {
            let zip = new aZip();
            zip.addLocalFolder('./config/GuildSaves')
            zip.writeZip('./functions/commands/owner/GuildSaves.zip')

            msg.author.send(`Here are the GuildSaves as you asked! Updated as of ${formatDate(new Date())}`, { files: ["GuildSaves.zip"] })
        }
    }
}