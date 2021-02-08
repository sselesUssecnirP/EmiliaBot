const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const { prefix, owner, maid, keywords, specKeywords, meanKeywords, niceKeywords } = require("../../../config/config.json")
const { sleep, formatDate } = require('../../basic');


module.exports = {
    name: "rr",
    description: "Reaction Role command",
    aliases: ["reactionroles", "reactionrole", "reactionr", "rroles"],
    usage: "<create | delete>",
    run: (client, msg, args) => {

        const event = client.events.each(event => {
            if (event.name === "reactionAddRemove") return event;
        });
        

        if (args[0] === "create") {
            let channel = "";
            let rawMessage = [];

            await msg.reply("What channel would you like this message to be sent in? (Reply with the channel's ID or mention)\n\nType `end` to leave this menu.")
            .awaitMessages(m => m.author.id == msg.author.id, { max: 1 })
            .then(collected => {
                if (collected.array()[0] == "end") return;

                channel = collected.array()[0]

                if (channel.includes('<@!')) channel.slice('<@!');
                if (channel.includes('>')) channel.slice('>');

                channel = msg.guild.channels.cache.get(channel)
            })
            .catch(() => {
                msg.reply("Alright, if you don't have everything you need before you run this command... then don't even bother.")
            });

            await msg.reply("Now what would like the message to be?\n(Required: Please use '|' to separate field title and field message.)\n(Not Required: Use a '/' to signify a new field in the embed.)")
            .awaitMessages(m => m.author.id == msg.author.id, { max: 1 })
            .then(collected => {
                if (collected.array()[0] == "end") return;

                rawMessage.push(collected.array()[0].split('/'));
            })

            let message = [];
            rawMessage.forEach(mssg => {
                mssg.split('|')
                mssg = [mssg[0], mssg[1]]
                message.push(mssg)
            })

            let embed = new MessageEmbed()
            .setAuthor(msg.author.username, msg.author.displayAvatarURL())
            .setColor(msg.member.displayHexColor == '#000000' ? '#FFFFFF' : msg.member.displayHexColor)
            .setDescription(`A reaction role embed for ${msg.guild.name}`)
            .setFooter(msg.member.displayName, msg.author.displayAvatarURL)
            .setThumbnail(msg.guild.iconURL)
            .addFields(mssg)


        } else if (args[0] === "remove") {

        } else if (args[0] === "addRole") {

            if (args[1] === "") {
                msg.reply("You didn't provide a reactionrole message number!")
                return;
            } else if (args[2] === "") {
                msg.reply("You're missing an argument for `roleID`.").delete({ timeout: 15000 })
                return;
            } else if (args[3] === "") {
                msg.reply("You're missing an argument for `EmojiID`.").delete({ timeout: 15000 })
                return;
            } else if (args[2].includes("<>") || args[3].includes("<>")) {
                msg.reply("You didn't provide a valid ID for either the emoji or the role.").delete({ timeout: 15000 })
                return;
            }

            let oFIndex = args[1]
            let role = msg.guild.roles.cache.get(args[2])
            let emoji = msg.guild.roles.cache.get(args[3])

            let oldFile = require(`../../../config/GuildSaves${msg.guild.id}`)

            oldFile["message"][oFIndex]["roles"].push(role.id)
            oldFile["message"][oFIndex]["emojis"].push(emoji)

            fs.writeFile(`../../../config/GuildSaves/${msg.guild.id}`, JSON.stringify(oldFile["message"][oFIndex], null, '\t'), (err) => {
                if (err) throw err;
                    console.log('The file has been saved!');
                });

            let rEvent = client.events.cache.get('reactionAddRemove')

            rEvent.run(client, oldFile["message"][oFIndex]["emojis"], oldFile["message"][oFIndex]["roles"], oldFile["message"][oFIndex]["channel"])

        } else if (args[0] === "list") {

        } else {
            msg.reply("You're missing something...").delete({ timeout: 15000 })
        };
    }
};