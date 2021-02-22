const { prefix, owner, maid, keywords, specKeywords, meanKeywords, niceKeywords } = require("../../../config/config.json")

module.exports = {
    name: "invite",
    category: "owner",
    description: "Grab an invite for the bot (and, if not the owner's server, an invite to the owner's server)",
    aliases: ["inv"],
    usage: "none",
    run: async (client, msg, args) => {
        const { MessageEmbed } = require('discord.js')


        if (msg.author.id == owner) {
        
            /*
                        ********************************************
                        ***          Owner Only Embeds           ***
                        ********************************************
            */
            
                    if (msg.guild.id != guilds[0]["id"][0]) {
                            
                        let embed = new MessageEmbed()
                        .setAuthor(client.user.username, client.user.displayAvatarURL())
                        .setColor(83,12,176)
                        .addField("Use this link to invite me to your server:", "https://discord.com/api/oauth2/authorize?client_id=762354168132010044&permissions=8&scope=bot\n\nUse this link to join my Owner's server:\nhttps://discord.brokenkingdom.net", true)
                        .setDescription("Invite links for myself and my Owner's server!")
            
                        msg.reply(embed).catch(() => {
                            msg.author.send(`I was unable to send messages in ${msg.channel.name} on the server ${msg.guild.name}`)
                            if (msg.guild.members.cache.find((user, index) => {
                                if (user.id === owner) {
                                    return true
                                } else {
                                    if (index === msg.guild.members.cache.array().length - 1) return false;
                                };
                            })) client.users.cache.find((user) => {
                                if (user.id === owner) user.send(`I was unable to send messages in ${msg.channel.name} on the server ${msg.guild.name}`);
                            });
                        })
                    } else if (msg.guild.id == guilds[0]["id"][0]) {
            
                        let embed = new MessageEmbed()
                        .setAuthor(client.user.username, client.user.displayAvatarURL())
                        .setColor(83,12,176)
                        .addField("Use this link to invite me to your server:", "https://discord.com/api/oauth2/authorize?client_id=762354168132010044&permissions=8&scope=bot", true)
                        .setDescription("Invite link for myself!")
            
                        msg.reply(embed).catch(() => {
                            msg.author.send(`I was unable to send messages in ${msg.channel.name} on the server ${msg.guild.name}`)
                        })
            
                        
                    };
            
            /*
                        ********************************************
                        ***           Maid Only Embeds           ***
                        ********************************************
            */
            
                } else if (msg.author.id == maid) {
                    if (msg.guild.id != guilds[0]["id"][0]) {
                        
                        let embed = new MessageEmbed()
                        .setAuthor(client.user.username, client.user.displayAvatarURL())
                        .setColor(83,12,176)
                        .addField("Use this link to invite me to your server:", "https://discord.com/api/oauth2/authorize?client_id=762354168132010044&permissions=8&scope=bot\n\nUse this link to join my Owner's server:\nhttps://discord.brokenkingdom.net", true)
                        .setDescription("Invite links for myself and my Owner's server!")
            
                        msg.reply("You are not my Owner, but I did recognize you as my Owner's maid! You're permitted to use this command!")
                        msg.react("<:EmiThumbsUp:801972190496423977>")
                        msg.reply(embed).catch(() => {
                            msg.author.send(`I was unable to send messages in ${msg.channel.name} on the server ${msg.guild.name}`)
                        })
                    } else if (msg.guild.id == guilds[0]["id"]) {
            
                        let embed = new MessageEmbed()
                        .setAuthor(client.user.username, client.user.displayAvatarURL())
                        .setColor(83,12,176)
                        .addField("Use this link to invite me to your server:", "https://discord.com/api/oauth2/authorize?client_id=762354168132010044&permissions=8&scope=bot", true)
                        .setDescription("Invite link for myself!")
            
                        msg.reply("You are not my Owner, but I did recognize you as a fellow maid! You're permitted to use this command!").catch(() => {
                            msg.author.send(`I was unable to send messages in ${msg.channel.name} on the server ${msg.guild.name}`)
                        })
                        msg.react("<:EmiThumbsUp:801972190496423977>").catch(() => {
                            msg.author.send(`I was unable to react to messages in ${msg.channel.name} on the server ${msg.guild.name}`)
                        })
                        msg.reply(embed).catch(() => {
                            msg.author.send(`I was unable to send messages in ${msg.channel.name} on the server ${msg.guild.name}`)
                        })
                    }
                } else {
                    msg.react("<:BettyHmph:801972187706818650>").catch(() => {
                        msg.author.send(`I was unable to send messages in ${msg.channel.name} on the server ${msg.guild.name}`)
                    })
                    msg.reply("You're not permitted to use my Owner's command. If you were his one of his maids, maybeeeee...").catch(() => {
                        msg.author.send(`I was unable to react to messages in ${msg.channel.name} on the server ${msg.guild.name}`)
                    })
                };
    }
}