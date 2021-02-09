const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const { prefix, owner, maid, keywords, specKeywords, meanKeywords, niceKeywords } = require("../../../config/config.json")
const { sleep, formatDate } = require('../../basic');


module.exports = {
    name: "rr",
    description: "Reaction Role command",
    aliases: ["reactionroles", "reactionrole", "reactionr", "rroles"],
    usage: "<create | delete>",
    run: async (client, msg, args) => {

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

            await msg.reply("Now what would like the message to be?\n(Required: Please use '|' to separate field title and field message.)\n(Not Required: Use a '/' to signify a new field in the embed.)\nType `end` to leave this menu.")
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

            let sentMsg = channel.send(embed)

            let oldFile = client.guildsR.cache.get(msg.guild.id)

            oldFile["message"].push({ id: sentMsg.id, emojis: [], roles: [], channel: channel.id, embed: sentMsg.embeds[0] })

            fs.writeFile(`../../../config/GuildSaves/${msg.guild.id}`, JSON.stringify(oldFile, null, '\t'), (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            });


        } else if (args[0] === "remove") {

            if (Number.isInteger(args[1])) {
                
                let removeE = args[1] - 1

                let oldFile = client.guildsR.cache.get(msg.guild.id)

                let embed = oldFile["message"][removeE]["embed"]

                let reply = msg.reply("Are you sure you want to delete this message? (Type `yes` or `no`!)", { embed: embed })
                .awaitMessages(m => m.author.id == msg.author.id, { max: 1, timeout: 60000, errors: ["time"] })
                .then(collected => {
                    coll = collected.array()[0]

                    if (coll == "yes") {
                        reply.delete({ timeout: 10 })
                        msg.reply("Deleting message").delete({ timeout: 10000 })
                        oldFile["message"].slice(removeE, removeE)
                        fs.writeFile(`../../../config/GuildSaves/${msg.guild.id}`, JSON.stringify(oldFile, null, '\t'), (err) => {
                            if (err) throw err;
                            console.log('The file has been saved!');
                        });
                    } else if (coll == "no") {
                        reply.delete({ timeout: 10 })
                        msg.reply("Cancelling deletion").delete({ timeout: 5000 })
                    }
                })
                .catch(() => {
                    msg.reply("Cancelling Deletion. Timed out!").delete({ timeout: 5000 })
                })
            } else {
                return msg.reply(`You need to provide a number a number between 1 and ${oldFile["message"].length}`)
            }
        } else if (args[0] === "addRole") {

            if (args[1] === "info") {
                msg.reply(`For this command, provide this information: \`emi!rr addRole {INDEX} {ROLE ID} {EMOJI ID}\`!`)
            }

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

            let oFIndex = args[1] - 1
            let role = msg.guild.roles.cache.get(args[2])
            let emoji = msg.guild.roles.cache.get(args[3])

            let oldFile = client.guildsR.cache.get(msg.guild.id)

            oldFile["message"][oFIndex]["roles"].push(role.id)
            oldFile["message"][oFIndex]["emojis"].push(emoji)

            fs.writeFile(`../../../config/GuildSaves/${msg.guild.id}`, JSON.stringify(oldFile, null, '\t'), (err) => {
                if (err) throw err;
                    console.log('The file has been saved!');
                });

            let rEvent = client.events.cache.get('reactionAddRemove')

            let channel = msg.guild.channels.cache.get(oldFile["message"][oFIndex]["channel"])
            

            rEvent.run(client, oldFile["message"][oFIndex]["emojis"], oldFile["message"][oFIndex]["roles"], oldFile["message"][oFIndex]["channel"], oldFile["message"][oFIndex]["id"])
            
        } else if (args[0] === "list") {

            let currentEmbed = 0;

            let emojis = ["⏮️", "⏪", "⏩", "⏭️"]
            let addEmojis = async () => emojis.forEach(e => message.react(e))

            let oldFile = client.guildsR.cache.get(msg.guild.id)

            let embeds = [];
            await oldFile["message"].forEach(message => {
                message["embed"].push(embeds)
            });

            let message = msg.reply(`These are the embeds you use for ReactionRoles: (Current Number: ${currentEmbed + 1})`, { embed: embeds[currentEmbed] })
            addEmojis()

            let awaitReact = () => {
                if (message.deleted) return;

                message.awaitReactions(async m => m.author.id == msg.author.id, { max: 1 })
                .then(collected => {
                    coll = collected.array()[0]

                    if (currentEmbed == 0 && coll == emojis[0] || emojis[1]) {
                        msg.reply("You're already at the beginning of the list!").delete({ timeout: 5000 })
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
                        msg.reply(`You're already at the end of the list!`).delete({ timeout: 5000 })
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
            msg.reply("You're missing something...").delete({ timeout: 15000 })
        };
    }
};