module.exports = { 
    name: "ready",
    description: "Event emits when bot is ready to start work",
    run: (client) => {
        client.on('ready', () => {
            console.log(`${client.user.username} is ready to receive requests.`);
        
            /*
            let reactionCollector = (pEmojis, pRoles, pChannel, pMessage) => {
                client.on('messageReactionAdd', async (reaction, user) => {
                    let emojis = pEmojis;
                    let roles = pRoles;
        
                    let rChannel = pChannel
                    let rMessage = pMessage
        
        
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
                let emojis = pEmojis;
                let roles = pRoles;
        
        
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
            
            }
            
            let guildNum = 0
        
            
            for (let i = 0; i <= RRoles["guilds"][guildNum][`embeds`].length; i++) {
                if (i == RRoles["guilds"][guildNum][`embeds`].length && guildNum < RRoles["guilds"].length) {
                    guildNum++
                    i = 0
                }
        
                if (RRoles["guilds"][guildNum]["embeds"] != []) {
                    
        
                    if (RRoles["guilds"][guildNum][`embeds`][i]['messageID'] != '' && RRoles["guilds"][guildNum][`embeds`][i]['channelID'] != '') {
                            const rChannel = RRoles["guilds"][guildNum][`embeds`][i]['channelID']
                            const rMessage = RRoles["guilds"][guildNum][`embeds`][i]['messageID']
                            const roles = RRoles["guilds"][guildNum][`embeds`][i]["Roles"];
                            const roleEmoji = RRoles["guilds"][guildNum][`embeds`][i]["Emojis"];
        
                            reactionCollector(roleEmoji, roles, rChannel, rMessage)
                    }
        
                }
            }
            */
        });
    }
}