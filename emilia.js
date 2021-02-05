const { Client, MessageEmbed, Message } = require('discord.js');
const { guilds } = require("./config/RRoles.json")
//const { token } = require("./config/token.json")
const { prefix, owner, maid, keywords, specKeywords, meanKeywords, niceKeywords } = require("./config/config.json")
const token = process.env.TOKEN;

const client = new Client({
    disableMentions: 'everyone',
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    presence: {
        status: "online",
        activity: {
            name: "emi! | Emilia 1.0.5",
            type: "LISTENING"
        },
        afk: false
    }
});

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

client.on('message', async msg => {
    if (msg.author.id == client.user.id) return;
    if (msg.author.bot) return;

    if (msg.content.includes("Although, she can be annoying sometimes.") && msg.author.id == '762354168132010044') {
        msg.reply("Heeeey! Ruuuuude.")
        msg.react('<:EmiRee:801972190374658068>')
    }

    if (!msg.content.startsWith(prefix)) {
        let content = msg.content.toLowerCase().split(' ')

        if (msg.mentions.has(client.user)) {

/*
            ********************************************
            ***       Naughty Words or Insults       ***
            ********************************************
*/

            if (content.some((word) => { 
                if (keywords.includes(word)) return true;
            })) {
                index = 0;
                if (content.some((word) => { 
                    if (specKeywords.includes(word)) return true;
                })) {
                    msg.delete({ timeout: 10 });
                }

                msg.react('<:EmiRee:801972190374658068>')
                msg.reply(`Naughty!`)
            
/*
            ********************************************
            ***               Insults                ***
            ********************************************
*/

            } else if (content.some(word => {
                if (meanKeywords.includes(word)) return true;
            })) {
                msg.react('<:EmiRee:801972190374658068>')
                msg.reply(`Meanie!`)
            
/*
            ********************************************
            ***             Compliments              ***
            ********************************************
*/

            } else if (content.some(word => {
                if (niceKeywords.includes(word)) return true;
            })) {
                msg.react("<:EmiLove:801972190195089428>");
                msg.reply(`Thank you!`)
            
            };

/*  
            ********************************************
            ***            Naughty Words             ***
            ********************************************
*/

        } else if (content.some((word) => { 

            if (msg.member.hasPermission("MANAGE_GUILD") || msg.member.hasPermission("ADMINISTRATOR")) return;

            if (keywords.includes(word)) return true;
        })) {
            if (content.some((word) => { 
                if (specKeywords.includes(word)) return true;
            })) {
                msg.delete({ timeout: 10 });
            }

            if (msg.author.id == owner) return;

            msg.react('<:EmiRee:801972190374658068>')
            msg.reply(`Naughty!`)


        } else if (msg.content.includes("Felix Argyle") || msg.content.includes("Felix")) {
            
            if (msg.content.includes("Felix Argyle")) {
                msg.reply("I love hiiimmm... <:EmiLove:801972190195089428>")
                msg.react("<:FelixLove:801972190551081002>")
            } else if (msg.content.includes("<:FelixLove:801972190551081002>")) {
                msg.reply("I love hiiimmm... <:EmiLove:801972190195089428>")
                msg.react("<:FelixLove:801972190551081002>")
            } else if (msg.content.includes("ReZero")) {
                msg.reply("Are you talking about Felix Argyle? I love hiiimmm... <:EmiLove:801972190195089428>")
                msg.react("<:FelixLove:801972190551081002>")
            } else {
                msg.reply("I know a Felix... and he's absolutely adorable! <:EmiLove:801972190195089428>")
                msg.react("<:FelixLove:801972190551081002>")
            }
        }

        return;
    };


    let args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    args = args.slice(command)
    console.log(args)
    
    if (command === 'invite') {
        if (msg.author.id == owner) {

/*
            ********************************************
            ***          Owner Only Embeds           ***
            ********************************************
*/

            if (msg.guild.id != guilds[0]["id"]) {
                
                let embed = new MessageEmbed()
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .setColor(83,12,176)
                .addField("Use this link to invite me to your server:", "https://discord.com/api/oauth2/authorize?client_id=765440066495184896&permissions=8&scope=bot\n\nUse this link to join my Owner's server:\nhttps://discord.brokenkingdom.net", true)
                .setDescription("Invite links for myself and my Owner's server!")

                 msg.reply(embed)
            } else if (msg.guild.id == guilds[0]["id"]) {

                let embed = new MessageEmbed()
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .setColor(83,12,176)
                .addField("Use this link to invite me to your server:", "https://discord.com/api/oauth2/authorize?client_id=765440066495184896&permissions=8&scope=bot", true)
                .setDescription("Invite link for myself!")

                msg.reply(embed)

            
            };

/*
            ********************************************
            ***           Maid Only Embeds           ***
            ********************************************
*/

        } else if (msg.author.id == maid) {
            if (msg.guild.id != guilds[0]["id"]) {
            
                let embed = new MessageEmbed()
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .setColor(83,12,176)
                .addField("Use this link to invite me to your server:", "https://discord.com/api/oauth2/authorize?client_id=765440066495184896&permissions=8&scope=bot\n\nUse this link to join my Owner's server:\nhttps://discord.brokenkingdom.net", true)
                .setDescription("Invite links for myself and my Owner's server!")

                msg.reply("You are not my Owner, but I did recognize you as my Owner's maid! You're permitted to use this command!")
                msg.react("<:EmiThumbsUp:801972190496423977>")
                msg.reply(embed)
            } else if (msg.guild.id == guilds[0]["id"]) {

                let embed = new MessageEmbed()
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .setColor(83,12,176)
                .addField("Use this link to invite me to your server:", "https://discord.com/api/oauth2/authorize?client_id=765440066495184896&permissions=8&scope=bot", true)
                .setDescription("Invite link for myself!")

                msg.reply("You are not my Owner, but I did recognize you as my Owner's maid! You're permitted to use this command!")
                msg.react("<:EmiThumbsUp:801972190496423977>")
                msg.reply(embed)
            }
        } else {
            msg.react("<:BettyHmph:801972187706818650>")
            msg.reply("You're not permitted to use my Owner's command. If you were one of his maids, maybeeeee...")
        };
    };

/*
            ********************************************
            ***            Reaction Roles            ***
            ********************************************
*/

    if (command === 'rr' && args.includes('bkroles')) {

        if (msg.guild.id === guilds[0]["id"] && msg.member.hasPermission("ADMINISTRATOR")) {

            if (msg.channel.id === guilds[0]["channels"][0] || msg.author.id == owner) {
                const rChannel = guilds[0]["channels"][0];
                const roles = [];
                const roleEmoji = guilds[0]["emojis"];

                guilds[0]["roles"].forEach((rrole, index) => {
                    msg.guild.roles.cache.find(role => {
                        if (role.id == rrole) {
                        roles.push(role)
                        //console.log(`Pushed /${role.name}/ to /${roles}/ array. Index: ${index}`)
                        };
                    });
                });

                let embed = new MessageEmbed()
                .setAuthor(msg.author.username, msg.author.displayAvatarURL())
                .setColor(83,12,176)
                .addField("Reaction Roles:", `
                            Use ${roleEmoji[0]} for the "13-16" role!
                          \nUse ${roleEmoji[1]} for the "17-20" role!
                          \nUse ${roleEmoji[2]} for the "21+" role!
                          \nUse ${roleEmoji[3]} for the "He/Him" role!
                          \nUse ${roleEmoji[4]} for the "She/Her" role!
                          \nUse ${roleEmoji[5]} for the "They/Them" role!
                          \nUse ${roleEmoji[6]} for the "Greench Lookout" role! (Only useful during X-Mas. Unsure if he will return!)`, true)
                .setDescription("React to this message to acquire certain roles.")
                .setFooter("ReactionRoles")

                let messageEmbed = await msg.channel.send(embed)
                let msgEmbed = messageEmbed

                roleEmoji.forEach(emoji => {
                    msgEmbed.react(emoji)
                });
                
                /*
                if (RRoles["guilds"][0]['embeds'].length > 0) {
                    for (let i = 0; i <= RRoles["guilds"][0]['embeds'].length - 1; i++) {
                        let fEmbed = false;
                        
                        if (RRoles["guilds"][0][`embeds`][i]['messageID'] == msgEmbed.id && RRoles["guilds"][0][`embeds`][i]['channelID'] == msgEmbed.channel.id) {

                            RRoles["guilds"][0]['embeds'][i] = { channelName: msgEmbed.channel.name, channelID: msgEmbed.channel.id, messageID: msgEmbed.id, dataCreated: new Date(), author: msg.author.tag, Emojis: roleEmoji, Roles: roles };
                            fEmbed = true;

                        } else if (i == RRoles["guilds"][1]['embeds'].length - 1) {

                            if (fEmbed == false) RRoles["guilds"][0]['embeds'].push({ channelName: msgEmbed.channel.name, channelID: msgEmbed.channel.id, messageID: msgEmbed.id, dataCreated: new Date(), author: msg.author.tag, Emojis: roleEmoji, Roles: roles });
                        }
            
                    } 
                } else {
                    RRoles["guilds"][0]['embeds'].push({ channelName: msgEmbed.channel.name, channelID: msgEmbed.channel.id, messageID: msgEmbed.id, dataCreated: new Date(), author: msg.author.tag, Emojis: roleEmoji, Roles: roles });
                }

                fs.writeFile('./config/RRoles.json', JSON.stringify(RRoles, null, '\t'), (err) => {
                if (err) throw err;
                    console.log('The file has been saved!');
                });
                */

                client.on('messageReactionAdd', async (reaction, user) => {
                    if (reaction.message.partial) await reaction.message.fetch();
                    if (reaction.partial) await reaction.fetch();
                    if (user.bot) return;
                    if (!reaction.message.guild) return;

                    if (reaction.message.channel.id == rChannel) {

                        if (reaction.emoji.name === roleEmoji[0]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[0])
                        } else if (reaction.emoji.name === roleEmoji[1]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[1])
                        } else if (reaction.emoji.name === roleEmoji[2]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[2])
                        } else if (reaction.emoji.name === roleEmoji[3]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[3])
                        } else if (reaction.emoji.name === roleEmoji[4]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[4])
                        } else if (reaction.emoji.name === roleEmoji[5]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[5])
                        } else if (reaction.emoji.name === roleEmoji[6]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[6])
                        } else {
                            return;
                        }
                    }
                });

                client.on('messageReactionRemove', async (reaction, user) => {
                    if (reaction.message.partial) await reaction.message.fetch();
                    if (reaction.partial) await reaction.fetch();
                    if (user.bot) return;
                    if (!reaction.message.guild) return;

                    if (reaction.message.channel.id == rChannel) {

                        if (reaction.emoji.name === roleEmoji[0]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[0])
                        } else if (reaction.emoji.name === roleEmoji[1]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[1])
                        } else if (reaction.emoji.name === roleEmoji[2]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[2])
                        } else if (reaction.emoji.name === roleEmoji[3]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[3])
                        } else if (reaction.emoji.name === roleEmoji[4]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[4])
                        } else if (reaction.emoji.name === roleEmoji[5]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[5])
                        } else if (reaction.emoji.name === roleEmoji[6]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[6])
                        } else {
                            return;
                        }
                    }
                });
            };
        };



    
    } else if (command == 'rr' && args.includes('bkrules')) {

        if (msg.guild.id === guilds[0]["id"] && msg.member.hasPermission("ADMINISTRATOR")) {

            if (msg.channel.id === guilds[0]["channels"][1] || msg.author.id == owner) {
                const rChannel = guilds[0]["channels"][1];
                const roles = [];
                const roleEmoji = guilds[0]["emojis"];

                guilds[0]["roles"].forEach((rrole, index) => {
                    msg.guild.roles.cache.find(role => {
                        if (role.id == rrole) {
                        roles.push(role)
                        //console.log(`Pushed /${role.name}/ to /${roles}/ array. Index: ${index}`)
                        };
                    });
                });

                let embed = new MessageEmbed()
                .setAuthor(msg.author.username, msg.author.displayAvatarURL())
                .setColor(83,12,176)
                .addField("Rules:", `\n1. Use common sense. \n2. Do not spam or advertise.\n3. Be respectful to all other people.\n4. Do not excessively use explicit language (even if it is "harmless" use). (Additionally, no NSFW allowed here.)\n5. Please use the correct channel for whatever activity you wish to do here!`, true)
                .setDescription("Read the rules and then react to this message to gain access to the server!")
                .setFooter("ReactionRoles")

                let messageEmbed = await msg.channel.send(embed)

                let msgEmbed = messageEmbed

                msgEmbed.react('❤️')

                /*
                if (RRoles["guilds"][0]['embeds'].length > 0) {
                    for (let i = 0; i <= RRoles["guilds"][0]['embeds'].length - 1; i++) {
                        let fEmbed = false;

                        if (RRoles["guilds"][0][`embeds`][i]['messageID'] == msgEmbed.id && RRoles["guilds"][0][`embeds`][i]['channelID'] == msgEmbed.channel.id) {

                            RRoles["guilds"][0]['embeds'][i] = { channelName: msgEmbed.channel.name, channelID: msgEmbed.channel.id, messageID: msgEmbed.id, dataCreated: new Date(), author: msg.author.tag, Emojis: ['❤️'], Roles: roles };
                            fEmbed = true;

                        } else if (i == RRoles["guilds"][1]['embeds'].length - 1) {

                            if (fEmbed == false) RRoles["guilds"][0]['embeds'].push({ channelName: msgEmbed.channel.name, channelID: msgEmbed.channel.id, messageID: msgEmbed.id, dataCreated: new Date(), author: msg.author.tag, Emojis: ['❤️'], Roles: roles });
                        }
            
                    } 
                } else {
                    RRoles["guilds"][0]['embeds'].push({ channelName: msgEmbed.channel.name, channelID: msgEmbed.channel.id, messageID: msgEmbed.id, dataCreated: new Date(), author: msg.author.tag, Emojis: ['❤️'], Roles: roles });
                }

                fs.writeFile('./config/RRoles.json', JSON.stringify(RRoles, null, '\t'), (err) => {
                if (err) throw err;
                    console.log('The file has been saved!');
                });
                */

                client.on('messageReactionAdd', async (reaction, user) => {
                    if (reaction.message.partial) await reaction.message.fetch();
                    if (reaction.partial) await reaction.fetch();
                    if (user.bot) return;
                    if (!reaction.message.guild) return;

                    if (reaction.message.channel.id == rChannel) {

                        if (reaction.emoji.name === '❤️') {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[0])
                        } else {
                            return;
                        }
                    }
                });

                client.on('messageReactionRemove', async (reaction, user) => {
                    if (reaction.message.partial) await reaction.message.fetch();
                    if (reaction.partial) await reaction.fetch();
                    if (user.bot) return;
                    if (!reaction.message.guild) return;

                    if (reaction.message.channel.id == rChannel) {

                        if (reaction.emoji.name === '❤️') {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[0])
                        } else {
                            return;
                        }
                    }
                });
            }
        }




    } else if (command == 'rr' && args.includes('fbroles')) {

        if (msg.guild.id === guilds[1]["id"] || msg.member.hasPermission("MANAGE_GUILD")) {

            if (msg.channel.id === guilds[1]["channels"][0] || msg.author.id == guilds[1]["owner"]) {
                const rChannel = guilds[1]["channels"][0];
                const roles = [];
                const roleEmoji = guilds[1]["emojis"];

                guilds[1]["roles"].forEach((rrole, index) => {
                    msg.guild.roles.cache.find(role => {
                        if (role.id == rrole) {
                        roles.push(role)
                        //console.log(`Pushed /${role.name}/ to /${roles}/ array. Index: ${index}`)
                        };
                    });
                });
                
                let embed = new MessageEmbed()
                .setAuthor(msg.author.username, msg.author.displayAvatarURL())
                .setColor(83,12,176)
                .addField("Pronouns:", `Use ${roleEmoji[0]} for He/Him!\nUse ${roleEmoji[1]} for She/Her!\nUse ${roleEmoji[2]} for They/Them!`, true)
                .setDescription("Reaction Roles! Click a reaction, get a role! Free roles here! Get 'em hot or get 'em cold!")
                .setFooter("ReactionRoles")

                let embed2 = new MessageEmbed()
                .setAuthor(msg.author.username, msg.author.displayAvatarURL())
                .setColor(83,12,176)
                .addField("Age:", `Use ${roleEmoji[3]} for 13!\nUse ${roleEmoji[4]} for 14-16!\nUse ${roleEmoji[5]} for 17-19!\nUse ${roleEmoji[6]} for 20+`, true)
                .setDescription("Reaction Roles! Click a reaction, get a role! Free roles here! Get 'em hot or get 'em cold!")
                .setFooter("ReactionRoles")

                let embed3 = new MessageEmbed()
                .setAuthor(msg.author.username, msg.author.displayAvatarURL())
                .setColor(83,12,176)
                .addField("Relationship Status:", `Use ${roleEmoji[11]} for Taken❤️!\nUse ${roleEmoji[12]} for Single (It's Complicated)!\nUse ${roleEmoji[13]} for Single (Not Interested)!\nUse ${roleEmoji[14]} for Single and Ready to Mingle!`, true)
                .setDescription("Reaction Roles! Click a reaction, get a role! Free roles here! Get 'em hot or get 'em cold!")
                .setFooter("ReactionRoles")

                let embed4 = new MessageEmbed()
                .setAuthor(msg.author.username, msg.author.displayAvatarURL())
                .setColor(83,12,176)
                .addField("Choose Your Faction:", `Use ${roleEmoji[7]} for 👿Phantom👿!\nUse ${roleEmoji[8]} for 🧝🏻‍♂️Vicouses Drafarten🧝🏻‍♂️!\nUse ${roleEmoji[9]} for 🤺Muerdan Warrior🤺!\nUse ${roleEmoji[10]} for 🕵️‍♂️Cartel Member🕵️‍♂️!`, false)
                .setDescription("Reaction Roles! Click a reaction, get a role! Free roles here! Get 'em hot or get 'em cold!")
                .setFooter("ReactionRoles")

                let embed5 = new MessageEmbed()
                .setAuthor(msg.author.username, msg.author.displayAvatarURL())
                .setColor(83,12,176)
                .addField("What Games Do You Play?", `Use ${roleEmoji[15]} for Minecraft!\nUse ${roleEmoji[16]} for Fighting Games!\nUse ${roleEmoji[17]} for Among Us!`, false)
                .setDescription("Reaction Roles! Click a reaction, get a role! Free roles here! Get 'em hot or get 'em cold!")
                .setFooter("ReactionRoles")

                let embed6 = new MessageEmbed()
                .setAuthor(msg.author.username, msg.author.displayAvatarURL())
                .setColor(83,12,176)
                .addField("What Platform Do You Play On?", `Use ${roleEmoji[18]} for Xbox!\nUse ${roleEmoji[19]} for Playstation!\nUse ${roleEmoji[20]} for Switch!\nUse ${roleEmoji[21]} for PC`, true)
                .setDescription("Reaction Roles! Click a reaction, get a role! Free roles here! Get 'em hot or get 'em cold!")
                .setFooter("ReactionRoles")

                let embed7 = new MessageEmbed()
                .setAuthor(msg.author.username, msg.author.displayAvatarURL())
                .setColor(83,12,176)
                .addField("Choose Your Path:", `Use ${roleEmoji[22]} for Dark Path!\nUse ${roleEmoji[23]} for Grey Path!\nUse ${roleEmoji[24]} for Light Path!`, true)
                .setDescription("Reaction Roles! Click a reaction, get a role! Free roles here! Get 'em hot or get 'em cold!")
                .setFooter("ReactionRoles")

                let messageEmbed = await msg.channel.send(embed)
                let messageEmbed2 = await msg.channel.send(embed2)
                let messageEmbed3 = await msg.channel.send(embed3)
                let messageEmbed4 = await msg.channel.send(embed4)
                let messageEmbed5 = await msg.channel.send(embed5)
                let messageEmbed6 = await msg.channel.send(embed6)
                let messageEmbed7 = await msg.channel.send(embed7)

                let msgEmbed = messageEmbed
                let msgEmbed2 = messageEmbed2
                let msgEmbed3 = messageEmbed3
                let msgEmbed4 = messageEmbed4
                let msgEmbed5 = messageEmbed5
                let msgEmbed6 = messageEmbed6
                let msgEmbed7 = messageEmbed7

                roleEmoji.forEach((emoji, index) => {
                    if (index <= 2) msgEmbed.react(emoji);
                    if (index > 2 && index <= 6) msgEmbed2.react(emoji);
                    if (index > 10 && index <= 14) msgEmbed3.react(emoji);
                    if (index > 6 && index <= 10) msgEmbed4.react(emoji);
                    if (index > 14 && index <= 17) msgEmbed5.react(emoji);
                    if (index > 17 && index <= 21) msgEmbed6.react(emoji);
                    if (index > 21 && index <= 24) msgEmbed7.react(emoji);
                });

                /*
                if (RRoles["guilds"][1]['embeds'].length > 0) {
                    for (let i = 0; i <= RRoles["guilds"][1]['embeds'].length - 1; i++) {
                        let fEmbed = false;
                        let fEmbed2 = false;
                        let fEmbed3 = false;
                        let fEmbed4 = false;
                        let fEmbed5 = false;
                        let fEmbed6 = false;
                        let fEmbed7 = false;


                        if (RRoles["guilds"][1][`embeds`][i]['messageID'] == msgEmbed.id && RRoles["guilds"][1][`embeds`][i]['channelID'] == msgEmbed.channel.id) {

                            RRoles["guilds"][1]['embeds'][i] = { channelName: msgEmbed.channel.name, channelID: msgEmbed.channel.id, messageID: msgEmbed.id, dataCreated: new Date(), author: msg.author.tag, Emojis: roleEmoji.slice(0, 2), Roles: roles };
                            fEmbed = true;

                        } else if (RRoles["guilds"][1][`embeds`][i]['messageID'] == msgEmbed2.id && RRoles["guilds"][1][`embeds`][i]['channelID'] == msgEmbed2.channel.id) {

                            RRoles["guilds"][1]['embeds'][i] = { channelName: msgEmbed2.channel.name, channelID: msgEmbed2.channel.id, messageID: msgEmbed2.id, dataCreated: new Date(), author: msg.author.tag, Emojis: roleEmoji.slice(3, 6), Roles: roles };
                            fEmbed2 = true;

                        } else if (RRoles["guilds"][1][`embeds`][i]['messageID'] == msgEmbed3.id && RRoles["guilds"][1][`embeds`][i]['channelID'] == msgEmbed3.channel.id) {

                            RRoles["guilds"][1]['embeds'][i] = { channelName: msgEmbed3.channel.name, channelID: msgEmbed3.channel.id, messageID: msgEmbed3.id, dataCreated: new Date(), author: msg.author.tag, Emojis: roleEmoji.slice(11, 14), Roles: roles };
                            fEmbed3 = true;

                        } else if (RRoles["guilds"][1][`embeds`][i]['messageID'] == msgEmbed4.id && RRoles["guilds"][1][`embeds`][i]['channelID'] == msgEmbed4.channel.id) {

                            RRoles["guilds"][1]['embeds'][i] = { channelName: msgEmbed4.channel.name, channelID: msgEmbed4.channel.id, messageID: msgEmbed4.id, dataCreated: new Date(), author: msg.author.tag, Emojis: roleEmoji.slice(7, 10), Roles: roles };
                            fEmbed4 = true;

                        } else if (RRoles["guilds"][1][`embeds`][i]['messageID'] == msgEmbed5.id && RRoles["guilds"][1][`embeds`][i]['channelID'] == msgEmbed5.channel.id) {

                            RRoles["guilds"][1]['embeds'][i] = { channelName: msgEmbed5.channel.name, channelID: msgEmbed5.channel.id, messageID: msgEmbed5.id, dataCreated: new Date(), author: msg.author.tag, Emojis: roleEmoji.slice(15, 17), Roles: roles };
                            fEmbed5 = true;

                        } else if (RRoles["guilds"][1][`embeds`][i]['messageID'] == msgEmbed6.id && RRoles["guilds"][1][`embeds`][i]['channelID'] == msgEmbed6.channel.id) {

                            RRoles["guilds"][1]['embeds'][i] = { channelName: msgEmbed6.channel.name, channelID: msgEmbed6.channel.id, messageID: msgEmbed6.id, dataCreated: new Date(), author: msg.author.tag, Emojis: roleEmoji.slice(18, 21), Roles: roles };
                            fEmbed6 = true;

                        } else if (RRoles["guilds"][1][`embeds`][i]['messageID'] == msgEmbed7.id && RRoles["guilds"][1][`embeds`][i]['channelID'] == msgEmbed7.channel.id) {

                            RRoles["guilds"][1]['embeds'][i] = { channelName: msgEmbed7.channel.name, channelID: msgEmbed7.channel.id, messageID: msgEmbed7.id, dataCreated: new Date(), author: msg.author.tag, Emojis: roleEmoji.slice(22, 24), Roles: roles };
                            fEmbed7 = true;
                            
                        } else if (i == RRoles["guilds"][1]['embeds'].length - 1) {

                            if (fEmbed == false) RRoles["guilds"][1]['embeds'].push({ channelName: msgEmbed.channel.name, channelID: msgEmbed.channel.id, messageID: msgEmbed.id, dataCreated: new Date(), author: msg.author.tag, Emojis: roleEmoji.slice(0, 2), Roles: roles });
                            if (fEmbed2 == false) RRoles["guilds"][1]['embeds'].push({ channelName: msgEmbed2.channel.name, channelID: msgEmbed2.channel.id, messageID: msgEmbed2.id, dataCreated: new Date(), author: msg.author.tag, Emojis: roleEmoji.slice(3, 6), Roles: roles });
                            if (fEmbed3 == false) RRoles["guilds"][1]['embeds'].push({ channelName: msgEmbed3.channel.name, channelID: msgEmbed3.channel.id, messageID: msgEmbed3.id, dataCreated: new Date(), author: msg.author.tag, Emojis: roleEmoji.slice(11, 14), Roles: roles });
                            if (fEmbed4 == false) RRoles["guilds"][1]['embeds'].push({ channelName: msgEmbed4.channel.name, channelID: msgEmbed4.channel.id, messageID: msgEmbed4.id, dataCreated: new Date(), author: msg.author.tag, Emojis: roleEmoji.slice(7, 10), Roles: roles });
                            if (fEmbed5 == false) RRoles["guilds"][1]['embeds'].push({ channelName: msgEmbed5.channel.name, channelID: msgEmbed5.channel.id, messageID: msgEmbed5.id, dataCreated: new Date(), author: msg.author.tag, Emojis: roleEmoji.slice(15, 17), Roles: roles });
                            if (fEmbed6 == false) RRoles["guilds"][1]['embeds'].push({ channelName: msgEmbed6.channel.name, channelID: msgEmbed6.channel.id, messageID: msgEmbed6.id, dataCreated: new Date(), author: msg.author.tag, Emojis: roleEmoji.slice(18, 21), Roles: roles });
                            if (fEmbed7 == false) RRoles["guilds"][1]['embeds'].push({ channelName: msgEmbed7.channel.name, channelID: msgEmbed7.channel.id, messageID: msgEmbed7.id, dataCreated: new Date(), author: msg.author.tag, Emojis: roleEmoji.slice(22, 24), Roles: roles });
                        }
            
                    } 
                } else {
                        RRoles["guilds"][1]['embeds'].push({ channelName: msgEmbed2.channel.name, channelID: msgEmbed2.channel.id, messageID: msgEmbed2.id, dataCreated: new Date(), author: msg.author.tag, Emojis: roleEmoji.slice(3, 6) });
                        RRoles["guilds"][1]['embeds'].push({ channelName: msgEmbed3.channel.name, channelID: msgEmbed3.channel.id, messageID: msgEmbed3.id, dataCreated: new Date(), author: msg.author.tag, Emojis: roleEmoji.slice(11, 14) });
                        RRoles["guilds"][1]['embeds'].push({ channelName: msgEmbed4.channel.name, channelID: msgEmbed4.channel.id, messageID: msgEmbed4.id, dataCreated: new Date(), author: msg.author.tag, Emojis: roleEmoji.slice(7, 10) });
                        RRoles["guilds"][1]['embeds'].push({ channelName: msgEmbed5.channel.name, channelID: msgEmbed5.channel.id, messageID: msgEmbed5.id, dataCreated: new Date(), author: msg.author.tag, Emojis: roleEmoji.slice(15, 17) });
                        RRoles["guilds"][1]['embeds'].push({ channelName: msgEmbed6.channel.name, channelID: msgEmbed6.channel.id, messageID: msgEmbed6.id, dataCreated: new Date(), author: msg.author.tag, Emojis: roleEmoji.slice(18, 21) });
                        RRoles["guilds"][1]['embeds'].push({ channelName: msgEmbed7.channel.name, channelID: msgEmbed7.channel.id, messageID: msgEmbed7.id, dataCreated: new Date(), author: msg.author.tag, Emojis: roleEmoji.slice(22, 24) });
                    }

                fs.writeFile('./config/RRoles.json', JSON.stringify(RRoles, null, '\t'), (err) => {
                    if (err) throw err;
                        console.log('The file has been saved!');
                });
                */

                client.on('messageReactionAdd', async (reaction, user) => {
                    if (reaction.message.partial) await reaction.message.fetch();
                    if (reaction.partial) await reaction.fetch();
                    if (user.bot) return;
                    if (!reaction.message.guild) return;

                    if (reaction.message.channel.id == rChannel) {

                        if (reaction.emoji.name === roleEmoji[0]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[0])
                        } else if (reaction.emoji.name === roleEmoji[1]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[1])
                        } else if (reaction.emoji.name === roleEmoji[2]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[2])
                        } else if (reaction.emoji.name === roleEmoji[3]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[3])
                        } else if (reaction.emoji.name === roleEmoji[4]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[4])
                        } else if (reaction.emoji.name === roleEmoji[5]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[5])
                        } else if (reaction.emoji.name === roleEmoji[6]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[6])
                        } else if (reaction.emoji.name === roleEmoji[7]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[7])
                        } else if (reaction.emoji.name === roleEmoji[8]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[8])
                        } else if (reaction.emoji.name === roleEmoji[9]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[9])
                        } else if (reaction.emoji.name === roleEmoji[10]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[10])
                        } else if (reaction.emoji.name === roleEmoji[11]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[11])
                        } else if (reaction.emoji.name === roleEmoji[12]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[12])
                        } else if (reaction.emoji.name === roleEmoji[13]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[13])
                        } else if (reaction.emoji.name === roleEmoji[14]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[14])
                        } else if (reaction.emoji.name === roleEmoji[15]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[15])
                        } else if (reaction.emoji.name === roleEmoji[16]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[16])
                        } else if (reaction.emoji.name === roleEmoji[17]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[17])
                        } else if (reaction.emoji.name === roleEmoji[18]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[18])
                        } else if (reaction.emoji.name === roleEmoji[19]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[19])
                        } else if (reaction.emoji.name === roleEmoji[20]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[20])
                        } else if (reaction.emoji.name === roleEmoji[21]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[21])
                        } else if (reaction.emoji.name === roleEmoji[22]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[22])
                        } else if (reaction.emoji.name === roleEmoji[23]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[23])
                        } else if (reaction.emoji.name === roleEmoji[24]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(roles[24])
                        } else {
                            return;
                        }
                    }
                });

                client.on('messageReactionRemove', async (reaction, user) => {
                    if (reaction.message.partial) await reaction.message.fetch();
                    if (reaction.partial) await reaction.fetch();
                    if (user.bot) return;
                    if (!reaction.message.guild) return;

                    if (reaction.message.channel.id == rChannel) {

                        if (reaction.emoji.name === roleEmoji[0]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[0])
                        } else if (reaction.emoji.name === roleEmoji[1]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[1])
                        } else if (reaction.emoji.name === roleEmoji[2]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[2])
                        } else if (reaction.emoji.name === roleEmoji[3]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[3])
                        } else if (reaction.emoji.name === roleEmoji[4]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[4])
                        } else if (reaction.emoji.name === roleEmoji[5]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[5])
                        } else if (reaction.emoji.name === roleEmoji[6]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[6])
                        } else if (reaction.emoji.name === roleEmoji[7]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[7])
                        } else if (reaction.emoji.name === roleEmoji[8]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[8])
                        } else if (reaction.emoji.name === roleEmoji[9]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[9])
                        } else if (reaction.emoji.name === roleEmoji[10]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[10])
                        } else if (reaction.emoji.name === roleEmoji[11]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[11])
                        } else if (reaction.emoji.name === roleEmoji[12]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[12])
                        } else if (reaction.emoji.name === roleEmoji[13]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[13])
                        } else if (reaction.emoji.name === roleEmoji[14]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[14])
                        } else if (reaction.emoji.name === roleEmoji[15]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[15])
                        } else if (reaction.emoji.name === roleEmoji[16]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[16])
                        } else if (reaction.emoji.name === roleEmoji[17]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[17])
                        } else if (reaction.emoji.name === roleEmoji[18]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[18])
                        } else if (reaction.emoji.name === roleEmoji[19]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[19])
                        } else if (reaction.emoji.name === roleEmoji[20]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[20])
                        } else if (reaction.emoji.name === roleEmoji[21]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[21])
                        } else if (reaction.emoji.name === roleEmoji[22]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[22])
                        } else if (reaction.emoji.name === roleEmoji[23]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[23])
                        } else if (reaction.emoji.name === roleEmoji[24]) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[24])
                        } else {
                            return;
                        }
                    }
                });
            }
        }
    }; // End of commands
});


client.login(token)