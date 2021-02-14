const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const { prefix, owner, maid, keywords, specKeywords, meanKeywords, niceKeywords, botemojis } = require("../../../config/config.json")
const { sleep, formatDate } = require('../../basic');


module.exports = {
    name: "rr",
    description: "Reaction Role command",
    aliases: ["reactionroles", "reactionrole", "reactionr", "rroles"],
    usage: "<create | delete | addRole | list>",
    run: async (client, msg, args) => {

        let event;
        client.manualEvents.each(e => {
            if (event.name === "$reactionAddRemove") event = e;
        });
        

        if (args[0] == "create") {
            if (args[1] == "acquirerole") {
                if (msg.guild.id != '755657350962085888') {
                    msg.reply("You do not have permission to run this command!");
                    return;
                }

                let embed = new MessageEmbed()
                .setAuthor(msg.author.username, msg.author.displayAvatarURL())
                .setColor(msg.member.displayHexColor == "#000000" ? msg.member.displayHexColor : "#FFFFFF")
                .setThumbnail(client.user.displayAvatarURL())
                .addField("Age", `Use 👮 for 13-16 role.\nUse 😁 for 17-20 role.\nUse 🍻 for 21+ role.`)
                .setFooter("ReactionRoles");

                let embed2 = new MessageEmbed()
                .setAuthor(msg.author.username, msg.author.displayAvatarURL())
                .setColor(msg.member.displayHexColor == "#000000" ? msg.member.displayHexColor : "#FFFFFF")
                .setThumbnail(client.user.displayAvatarURL())
                .addField("Pronouns", `Use 👨 for He/Him role.\nUse 👩 for She/Her role.\nUse 🤷 for They/Them role.`)
                .setFooter("ReactionRoles");

                let embed3 = new MessageEmbed()
                .setAuthor(msg.author.username, msg.author.displayAvatarURL())
                .setColor(msg.member.displayHexColor == "#000000" ? msg.member.displayHexColor : "#FFFFFF")
                .setThumbnail(client.user.displayAvatarURL())
                .addField("Other", `Use 🎄 for Greench Lookout role. (may not come back. if so, will be deleted.)`)
                .setFooter("ReactionRoles");

                let emSend = await msg.channel.send(embed);
                let emSend2 = await msg.channel.send(embed2);
                let emSend3 = await msg.channel.send(embed3);

                let emojis = ["👮", "😁", "🍻",
                "👨", "👩", "🤷",
                "🎄"];

                emojis.forEach((emoji, index) => {
                    if (index < 3) emSend.react(emoji);
                    if (index < 6 && index > 2) emSend2.react(emoji);
                    if (index == 6) emSend3.react(emoji);
                });

            };
        };

        if (args[0] === "list") {

            let currentEmbed = 0;

            let emojis = botemojis["embedControl"]
            let addEmojis = async () => emojis.forEach(e => message.react(e))

            let oldFile = await client.guildsR.get(msg.guild.id)

            if (!oldFile) {
                msg.reply("You're guild doesn't have any reaction role messages!").then(m => m.delete({ timeout: 180000 }))
                return;
            }

            let embeds = [];
            await oldFile["message"].forEach(message => {
                message["embed"].push(embeds)
            });

            let message = await msg.reply(`These are the embeds you use for ReactionRoles: (Current Number: ${currentEmbed + 1})`, { embed: embeds[currentEmbed] })
            addEmojis()

            let awaitReact = async () => {
                if (message.deleted) return;

                message.awaitReactions(m => m.author.id == msg.author.id, { max: 1 })
                .then(collected => {
                    coll = collected.array()[0]

                    if (currentEmbed == 0 && coll == emojis[0] || emojis[1]) {
                        msg.reply("You're already at the beginning of the list!").then(m => m.delete({ timeout: 180000 }))
                        message.reactions.removeAll()
                        addEmojis()
                        awaitReact()
                    } else if (currentEmbed > 0 && coll == emojis[0]) {
                        currentEmbed = 0
                        message.edit(`These are the embeds you use for ReactionRoles: (Current Number: ${currentEmbed + 1})`, { embed: embeds[currentEmbed] })
                        message.reactions.removeAll()
                        addEmojis()
                        awaitReact()
                    } else if (currentEmbed > 0 && coll == emojis[1]) {
                        currentEmbed -= 1;
                        message.edit(`These are the embeds you use for ReactionRoles: (Current Number: ${currentEmbed + 1})`, { embed: embeds[currentEmbed] })
                        message.reactions.removeAll()
                        addEmojis()
                        awaitReact()
                    } else if (currentEmbed == embeds.length && coll == emojis[2] || emojis[3]) {
                        msg.reply(`You're already at the end of the list!`).then(m => m.delete({ timeout: 180000 }))
                        message.reactions.removeAll()
                        addEmojis()
                        awaitReact()
                    } else if (currentEmbed < embeds.length && coll == emojis[2]) {
                        currentEmbed += 1;
                        message.edit(`These are the embeds you use for ReactionRoles: (Current Number: ${currentEmbed + 1})`, { embed: embeds[currentEmbed] })
                        message.reactions.removeAll()
                        addEmojis()
                        awaitReact()
                    } else if (currentEmbed < embeds.length && coll == emojis[3]) {
                        currentEmbed = embeds.length - 1;
                        message.edit(`These are the embeds you use for ReactionRoles: (Current Number: ${currentEmbed + 1})`, { embed: embeds[currentEmbed] })
                        message.reactions.removeAll()
                        addEmojis()
                        awaitReact()
                    }
                })
            }

        } else {
            msg.reply("You're missing something... Try adding `create`, `remove`, `addrole`, or `list`!").then(m => m.delete({ timeout: 180000 }))
        };
    }
};