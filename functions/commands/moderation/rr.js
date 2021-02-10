const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const { prefix, owner, maid, keywords, specKeywords, meanKeywords, niceKeywords } = require("../../../config/config.json")
const { sleep, formatDate } = require('../../basic');


module.exports = {
    name: "rr",
    description: "Reaction Role command",
    aliases: ["reactionroles", "reactionrole", "reactionr", "rroles"],
    usage: "<create | delete | addRole | list>",
    run: async (client, msg, args) => {

        const event = client.events.each(event => {
            if (event.name === "reactionAddRemove") return event;
        });
        

        if (args[0] === "create") {

            if (args[1] === "info") {
                msg.reply(`For this command, provide this information: \`emi!rr create\`!`)
                return;
            }

            let channel = "";
            let rawMessage = [];

            (await msg.reply("What channel would you like this message to be sent in? (Reply with the channel's ID or mention)\n\nType `end` to leave this menu."))
            .channel
            .awaitMessages(m => m.author.id == msg.author.id, { max: 1, time: 240000, errors: ["time"] })
            .catch((collected) => {
                coll = collected.array()[0]

                if (coll == "end") return;

                if (!coll) msg.reply("Alright, if you don't have everything you need before you run this command... then don't even bother.").then(m => m.delete({ timeout: 30000 }))

                channel = collected.array()[0]

                if (channel.includes('<@!')) channel.slice('<@!');
                if (channel.includes('>')) channel.slice('>');

                channel = msg.guild.channels.cache.get(channel)

                getMessage()

                });

            let getMessage = async () => {
                (await msg.reply("Now what would you like the message to be?\n(Required: Please use '|' to separate field title and field message.)\n(Not Required: Use a '/' to signify a new field in the embed.)\n\nType `end` to leave this menu."))
                .channel
                .awaitMessages(m => m.author.id == msg.author.id, { max: 1, time: 240000, errors: ["time"] })
                .then(collected => {
                    if (collected.array()[0] == "end") return;

                    let coll = collected.array()[0]
                    rawMessage.push(coll.split('/'));
                    createMessage()
                })
                .catch(() => {
                    msg.reply("Alright, if you don't have everything you need before you run this command... then don't even bother.").then(m => m.delete({ timeout: 30000 }))
                });
            }

            let createMessage = async () => {
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

                let oldFile = await client.guildsR.get(msg.guild.id)
                if (!oldFile) {
                    oldFile = {
                        name: msg.guild.name,
                        id: msg.guild.id,
                        message: []
                    }
                }

                oldFile["message"].push({ id: sentMsg.id, emojis: [], roles: [], channel: channel.id, embed: sentMsg.embeds[0] })

                fs.writeFile(`../../../config/GuildSaves/${msg.guild.id}`, JSON.stringify(oldFile, null, '\t'), (err) => {
                    if (err) throw err;
                    console.log('The file has been saved!');
                }); 
            }

        } else if (args[0] === "remove") {

            if (args[1] === "info") {
                msg.reply(`For this command, provide this information: \`emi!rr remove {INDEX}\`!`)
                return;
            }

            if (Number.isInteger(args[1])) {
                
                let removeE = args[1] - 1

                let oldFile = await client.guildsR.get(msg.guild.id)
                if (!oldFile) {
                    msg.reply("Your guild doesn't have a save file.").then(m => m.delete({ timeout: 10000 }))
                    return;
                } else if (!oldFile["message"][0]) {
                    msg.reply("Your guild doesn't have any reaction roles!").then(m => m.delete({ timeout: 10000 }))
                    return;
                }

                let embed = oldFile["message"][removeE]["embed"]

                let reply = await msg.reply("Are you sure you want to delete this message? (Type `yes` or `no`!)", { embed: embed })
                
                await reply.channel.awaitMessages(m => m.author.id == msg.author.id, { max: 2, time: 60000, errors: ["time"] })
                .then(collected => {
                    coll = collected.array()[0]

                    if (coll == "yes") {
                        reply.delete({ timeout: 10 })
                        msg.reply("Deleting message").then(m => m.delete({ timeout: 10000 }))
                        oldFile["message"].slice(removeE, removeE)
                        fs.writeFile(`../../../config/GuildSaves/${msg.guild.id}`, JSON.stringify(oldFile, null, '\t'), (err) => {
                            if (err) throw err;
                            console.log('The file has been saved!');
                        });
                    } else if (coll == "no") {
                        reply.delete({ timeout: 10 })
                        msg.reply("Cancelling deletion").then(m => m.delete({ timeout: 10000 }))
                    }
                })
                .catch(() => {
                    msg.reply("Cancelling Deletion. Timed out!").then(m => m.delete({ timeout: 5000 }))
                })
            } else {
                return msg.reply(`You need to provide a number a number between 1 and ${oldFile["message"].length}`).then(m => m.delete({ timeout: 5000 }))
            }
        } else if (args[0] === "addRole") {

            if (args[1] === "info") {
                msg.reply(`For this command, provide this information: \`emi!rr addRole {INDEX} {ROLE ID} {EMOJI ID}\`!`)
                return;
            }

            if (args[1] === "") {
                msg.reply("You didn't provide a reactionrole message number!").then(m => m.delete({ timeout: 15000 }))
                return;
            } else if (args[2] === "") {
                msg.reply("You're missing an argument for `roleID`.").then(m => m.delete({ timeout: 15000 }))
                return;
            } else if (args[3] === "") {
                msg.reply("You're missing an argument for `EmojiID`.").then(m => m.delete({ timeout: 15000 }))
                return;
            } else if (args[2].includes("<>") || args[3].includes("<>")) {
                msg.reply("You didn't provide a valid ID for either the emoji or the role.").then(m => m.delete({ timeout: 15000 }))
                return;
            }

            let oFIndex = args[1] - 1
            let role = msg.guild.roles.cache.get(args[2])
            let emoji = msg.guild.roles.cache.get(args[3])

            let oldFile = await client.guildsR.get(msg.guild.id)

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

            if (args[1] === "info") {
                msg.reply(`For this command, provide this information: \`emi!rr list\`!`)
                return;
            }


            let currentEmbed = 0;

            let emojis = ["⏮️", "⏪", "⏩", "⏭️"]
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