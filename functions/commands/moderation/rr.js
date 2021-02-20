const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const { writeFile } = require('fs')
const { prefix, owner, maid, keywords, specKeywords, meanKeywords, niceKeywords, botemojis } = require("../../../config/config.json")
const { sleep, formatDate } = require('../../basic');


module.exports = {
    name: "rr",
    description: "Reaction Role command",
    aliases: ["reactionroles", "reactionrole", "reactionr", "rroles"],
    usage: "<create | delete | addRole | list>",
    run: async (client, msg, args) => {

        if (args[0] == "embed") {
            msg.reply("Embeds are things you see for websites and videos and such which show a little bit of the content directly in discord. For the purpose of reaction roles, they can show information in neat little boxes within the message and it looks cool!\n\nWhen using emi!rr create to make a new embed rr message, remember to separate each field's title and message with `|`.\nA field on an embed is a small space where a title and a message can go. i.e Age Roles: {List of Age roles and emojis}\nType a message like: `{TITLE} | {MESSAGE}` for each embed field.\nTo create a new field, simply create a new message and again put a title and message.")
        }

        let event;
        client.manualEvents.each(e => {
            if (e.name === "$reactionAddRemove") event = e;
        });
        

        if (args[0] == "create") {
            if (args.length == 1) {
                let channel;
                let message = [];
                let emojis;
                let roles;

                let filter = (m) => m.author.id === msg.author.id

                msg.reply("What channel would you like the message in? (Use a '#' to tag it or I won't know that's the one you want.)")

                await msg.channel.awaitMessages(filter, { max: 1, timeout: 30000, errors: ["time"] }).then(collected => {
                    let coll = collected.first()

                    if (coll.mentions.channels.first()) {
                        channel == coll.mentions.channels.first()
                    }
                }).catch((err) => {
                    console.log(err)
                });
                
                msg.reply("What roles/emojis would you like added? (Max 20 per embed / provide them all in one message.)\nYou'll be asked for emojis after this. Please provide the emojis in the same order as you did the roles. (i.e Role #1 should match Emoji #1 how you'd like)")

                await msg.channel.awaitMessages(filter, { max: 1, timeout: 10000, errors: ["time"] }).then(collected => {
                    if (collected) {
                        collected.each(role => {
                            if (!role.mentions.roles) return msg.reply("No roles were provide in any message.")

                            role.mentions.roles.each((r, ind) => {
                                if (ind < 21) roles.push(r)
                                if (ind == 21) msg.reply("You've provide too many roles. I've only added up to the first 20 you sent... The rest have been ignored.")
                            });
                        })
                    }

                }).catch((err) => {
                    console.log(err)
                });

                msg.reply("What emojis would you like added? (Max 20 per message // Include them in all in the same message.)\n(Separate the emojis using a space)")

                await msg.channel.awaitMessages(filter, { max: 1, timeout: 10000, errors: ["time"] }).then(collected => {
                    if (collected) {
                        collected.each(role => {
                            let emoji = role.content.split(' ')

                            emoji.forEach((e, ind) => {
                                if (ind < 21) emojis.push(e)
                                if (ind == 21) msg.reply("You've provide too many emojis. I've only added up to the first 20 you sent... The rest have been ignored.")
                            });
                        });
                    }

                }).catch((err) => {
                    console.log(err)
                });

                msg.reply("Okay, now finally, what's the message for the embed?\n(Use `|` in between the title and message for the embed field. For more information, use `emi!rr embed`)\n(To use a different embed field, send a new message. There is a maximum cap of 5 fields per embed currently. When my website goes live, you can head there to make an embed with as many fields as you want and discord allows.)")
            
                await msg.channel.awaitMessages(filter, { max: 5, timeout: 10000, errors: ["time"] }).then(collected => {
                    if (collected) {
                        let msgs;
                        
                        collected.each(m => {
                            msgs.push(m.split('|'))
                        })

                        message.push(msgs)
                        
                    }

                }).catch((err) => {
                    console.log(err)
                });

                let embed = new MessageEmbed()
                .setAuthor(msg.author.username, msg.author.displayAvatarURL())
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setThumbnail(msg.guild.iconURL())
                .setColor(msg.member.displayHexColor == "#000000" ? "#FFFFFF" : msg.member.displayHexColor)
                .addFields(message)

                let rr = await channel.send(embed);

                let guild;

                if (client.guildsColl.has(msg.guild.id)) {
                    guild = client.guildsColl.get(msg.guild.id)
                } else {
                    guild = { name: member.guild.name, id: member.guild.id, message: [{ id: rr.id, roles: roles, emojis: emojis, channel: channel.id }], channels: { report: "", welcome: "" }, banNWord: true, permissions: false }
                }

                guild["message"].push({ id: rr.id, roles: roles, emojis: emojis, channel: channel.id })

                writeFile(`./saves/GuildSaves/${msg.guild.id}.json`, JSON.stringify(guild, null, '\t'), err => {
                    if (err) throw err;
                    console.log('The file has been saved.')
                });

                event.run(client, emojis, roles, channel.id, rr.id)
            }
        };

        if (args[0] === "list") {

            let currentEmbed = 0;

            let emojis = botemojis["embedControl"]
            let addEmojis = async () => emojis.forEach(e => message.react(e))

            let oldFile = await client.guildsColl.get(msg.guild.id)

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