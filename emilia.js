const { Client, MessageEmbed, Message } = require('discord.js');
const { guilds } = require("./config/RRoles.json")
//const { token } = require("./config/token.json")
const { prefix, owner, maid } = require("./config/config.json")
const token = process.env.TOKEN;

const client = new Client({
    disableMentions: 'everyone',
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    presence: {
        status: "online",
        activity: {
            name: "emi! | Emilia 1.0.4",
            type: "LISTENING"
        },
        afk: false
    }
});

client.on('ready', () => {
    console.log(`${client.user.username} is ready to receive requests.`);
});

client.on('message', async msg => {
    if (msg.author.bot) return;

    if (!msg.content.startsWith(prefix)) {
        let keywords = ["genocide", "hitler", "kill", "communism", "racism", "fuck you", "cunt", "ass", "bitch", "shit", "fuck", "cock", "blowjob", "dick", "nigger", "nigga", "ni🅱️🅱️a", "fuc", "bitc"]
        let specKeywords = ["genocide", "hitler", "nigger", "nigga", "ni🅱️🅱️a"]
        let meanKeywords = ["idiot", "stupid", "bad", "terrible", "horrible", "dumb", "poop", "poo", "pee", "ugly", "annoying", "suck", "the worst"]
        let niceKeywords = ["beautiful", "pretty", "gorgeous", "stunning", "wonderful", "amazing", "best", "great", "good"]
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
            } else if (msg.content.includes("ReZero")) {
                msg.reply("Are you talking about Felix Argyle? I love hiiimmm... <:EmiLove:801972190195089428>")
                msg.react("<:FelixLove:801972190551081002>")
            } else {
                msg.reply("I know a Felix... and he's absolutely adorable! <:EmiLove:801972190195089428>")
                msg.react("<:FelixLove:801972190551081002>")
            }
        } else if (msg.content.includes("hi")) msg.reply("Hewwo! How are you?");

        
        return;
    };


    const args = msg.content.slice(prefix.length).split(/ +/);
    console.log(args)
    const command = args.shift().toLowerCase();

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
            msg.reply("You're not permitted to use my Owner's command. If you were his maid, maybeeeee...")
        };
    };

/*
            ********************************************
            ***            Reaction Roles            ***
            ********************************************
*/

    if (command === 'rr' && args.includes('bk')) {

        if (msg.guild.id === guilds[0]["id"] || msg.author.id == owner) {

            if (msg.channel.id === guilds[0]["channels"][0] || msg.author.id == owner) {
                const rChannel = guilds[0]["channels"][0];
                const roles = [];
                const roleEmoji = guilds[0]["emojis"];

                guilds[0]["roles"].forEach((rrole, index) => {
                    msg.guild.roles.cache.find(role => {
                        if (role.id == rrole) {
                        roles.push(role)
                        console.log(`Pushed /${role.name}/ to /${roles}/ array. Index: ${index}`)
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

                let messageEmbed = await msg.channel.send(embed)

                roleEmoji.forEach(emoji => {
                    messageEmbed.react(emoji)
                });

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
            
                let embed2 = new MessageEmbed()
                .setAuthor(msg.author.username, msg.author.displayAvatarURL())
                .setColor(83,12,176)
                .addField("Rules:", `
                            1. Use common sense. 
                            2. Do not spam or advertise.
                            3. Be respectful to all other people.
                            4. Do not excessively use explicit language (even if it is "harmless" use). (Additionally, no NSFW allowed here.)
                            5. Please use the correct channel for whatever activity you wish to do here!`, true)
                .setDescription("Read the rules and then react to this message to gain access to the server!")

                let messageEmbed2 = await msg.channel.send(embed2)

                    messageEmbed2.react('❤️')

                client.on('messageReactionAdd', async (reaction, user) => {
                    if (reaction.message.partial) await reaction.message.fetch();
                    if (reaction.partial) await reaction.fetch();
                    if (user.bot) return;
                    if (!reaction.message.guild) return;

                    if (reaction.message.channel.id == '759607225022283806') {

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
                    if (reaction.message.channel.id == '759607225022283806') {
                        if (reaction.emoji.name === '❤️') {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(roles[0])
                        } else {
                            return;
                        }
                    }
                });

            };
        };
    };
});


client.login(token)