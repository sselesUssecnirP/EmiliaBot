const { readdirSync } = require('fs');
const { MessageEmbed, Collection } = require('discord.js');
//const { guilds } = require("../../../config/RRoles.json")
const { prefix, owner, maid, keywords, specKeywords, meanKeywords, niceKeywords } = require("../../../config/config.json")

module.exports = {
    name: "reactionRestart",
    description: "Event emits on reactionRoleAdd and reactionRoleRemove. // Events will only emit for certain guilds if said guilds have reactionRole messages saved in the bots archives.",
    run: async (client) => {

        console.log("reactionRestart online!")

        const guilds = readdirSync(`./config/GuildSaves`).filter(f => f.endsWith('.json'))

        client.guildsR = new Collection;

        for (let file of guilds) {
            let pull = require(`../../../config/GuildSaves/${file}`);

            if (pull) {
                client.guildsR.set(pull.id, pull)
            } 
        }

        console.log(client.guildsR.array())

        client.guildsR.each(async (guild, index) => {
            client.guilds.fetch(guild["id"]).catch(() => {
                console.log(`Error finding guild ${guild["id"]} - ${guild["name"]}`)
                return;
            });
            let g = client.guildsR.get(guild["id"])

            console.log("Found a guild")
            
            guild["message"].forEach((message) => {

                console.log("forEach message")

                let emojis = message["emojis"]
                let roles = []
                let rChannel = message["channel"]
                let rMessage = message["id"]

                message["roles"].forEach(async r => {
                    g.roles.cache.each(role => {
                        if (role.id === r) roles.push(role)
                    })
                })

                client.on('messageReactionAdd', async (reaction, user) => {

                    console.log("messageReactionAdd")

                    if (reaction.message.partial) await reaction.message.fetch();
                    if (reaction.partial) await reaction.fetch();
                    if (user.bot) return;
                    if (!reaction.message.guild) return;
                    if (reaction.message.id != rMessage) return;
        
                    if (reaction.message.channel.id == rChannel) {
        
                        if (reaction.emoji.name === emojis[0]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[0])
                        } else if (reaction.emoji.name === emojis[1]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[1])
                        } else if (reaction.emoji.name === emojis[2]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[2])
                        } else if (reaction.emoji.name === emojis[3]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[3])
                        } else if (reaction.emoji.name === emojis[4]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[4])
                        } else if (reaction.emoji.name === emojis[5]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[5])
                        } else if (reaction.emoji.name === emojis[6]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[6])
                        } else if (reaction.emoji.name === emojis[7]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[7])
                        } else if (reaction.emoji.name === emojis[8]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[8])
                        } else if (reaction.emoji.name === emojis[9]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[9])
                        } else if (reaction.emoji.name === emojis[10]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[10])
                        } else if (reaction.emoji.name === emojis[11]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[11])
                        } else if (reaction.emoji.name === emojis[12]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[12])
                        } else if (reaction.emoji.name === emojis[13]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[13])
                        } else if (reaction.emoji.name === emojis[14]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[14])
                        } else if (reaction.emoji.name === emojis[15]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[15])
                        } else if (reaction.emoji.name === emojis[16]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[16])
                        } else if (reaction.emoji.name === emojis[17]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[17])
                        } else if (reaction.emoji.name === emojis[18]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[18])
                        } else if (reaction.emoji.name === emojis[19]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[19])
                        } else {
                            return;
                        }
                    }
                });
        
            client.on('messageReactionRemove', async (reaction, user) => {
                let emojis = message["emojis"]
                let roles = []
                    
                await reaction.message.guild.roles.cache.each((role, index) => {
                    if (role.id === message["roles"][index]) roles.push(role);
                })
        
                let rChannel = message["channel"]
                let rMessage = message["id"]

                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;
        
                if (reaction.message.channel.id == rChannel) {
        
                    if (reaction.emoji.name === emojis[0]) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[0])
                    } else if (reaction.emoji.name === emojis[1]) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[1])
                    } else if (reaction.emoji.name === emojis[2]) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[2])
                    } else if (reaction.emoji.name === emojis[3]) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[3])
                    } else if (reaction.emoji.name === emojis[4]) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[4])
                    } else if (reaction.emoji.name === emojis[5]) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[5])
                    } else if (reaction.emoji.name === emojis[6]) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[6])
                    } else if (reaction.emoji.name === emojis[7]) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[7])
                    } else if (reaction.emoji.name === emojis[8]) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[8])
                    } else if (reaction.emoji.name === emojis[9]) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[9])
                    } else if (reaction.emoji.name === emojis[10]) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[10])
                    } else if (reaction.emoji.name === emojis[11]) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[11])
                    } else if (reaction.emoji.name === emojis[12]) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[12])
                    } else if (reaction.emoji.name === emojis[13]) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[13])
                    } else if (reaction.emoji.name === emojis[14]) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[14])
                    } else if (reaction.emoji.name === emojis[15]) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[15])
                    } else if (reaction.emoji.name === emojis[16]) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[16])
                    } else if (reaction.emoji.name === emojis[17]) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[17])
                    } else if (reaction.emoji.name === emojis[18]) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[18])
                    } else if (reaction.emoji.name === emojis[19]) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[19])
                    } else {
                        return;
                    }
                }
        
                });
            });
        });
    }
}