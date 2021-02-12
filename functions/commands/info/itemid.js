const message = require("../../events/message/message");

module.exports = {
    name: "itemid",
    description: "Tells the user how to get an item's ID in discord.",
    aliases: ["id", "getid"],
    run: (client, msg, args) => {
        msg.delete({ timeout: 10 })

        let userMentions = message.mentions.members.array() ?  undefined : message.mentions.members.array()

        if (userMentions) {
            let IDs = [];

            await userMentions.forEach(user => {
                user.slice("<@!")
                user.slice(">")
                IDs.push(user)
            })

            msg.reply(`The user IDs you requested are:\n\n${userMentions.join(", ")}`)
            return;
        }

        let channelMentions = message.mentions.channels.array() ?  undefined : message.mentions.channels.array()

        if (channelMentions) {
            let IDs = [];

            await channelMentions.forEach(c => {
                c.slice("<@!")
                c.slice(">")
                IDs.push(c)
            })

            msg.reply(`The user IDs you requested are:\n\n${channelMentions.join(", ")}`)
            return;
        }

        let rMentions = message.mentions.roles.array() ?  undefined : message.mentions.roles.array()

        if (rMentions) {
            let IDs = [];

            await rMentions.forEach(r => {
                r.slice("<@!")
                r.slice(">")
                IDs.push(r)
            })

            msg.reply(`The user IDs you requested are:\n\n${rMentions.join(", ")}`)
            return;
        }

        if (args[0]) {
            if (args[0] == 'user') {
                let user;
                msg.guild.members.cache.each(u => {
                    if (u.name == msg.args[1]) {
                        return u;
                    } else if (u.tag == msg.args[1]) {
                        return u
                    } else if (u.id == args[1]) {
                        msg.reply("You already have the ID of this user.")
                    }

                    msg.reply(`<@!${user.id}>'s ID is ${user.id}`)
                })
            } else if (args[0] == 'channel') {
                let channel;
                msg.guild.channels.cache.each(c => {
                    if (c.name == msg.args[1]) {
                        return c;
                    } else if (c.id == args[1]) {
                        msg.reply("You already have the ID of this channel.")
                    }

                    msg.reply(`${channel.name}'s ID is ${channel.id}.`)
                })
            } else if (args[0] == 'role') {
                let role;
                msg.guild.roles.cache.each(r => {
                    if (r.name == msg.args[1]) {
                        return r;
                    } else if (r.id == args[1]) {
                        msg.reply("You already have the ID of this role.")
                    }

                    msg.reply(`${channel.name}'s ID is ${channel.id}.`)
                })
            } else if (args[0] == 'guild') {
                msg.reply(`You're currently in ${msg.guild.name} and the ID is ${msg.guild.id}.`)
            }
        }

        if (!args[0]) msg.reply("In order to get a user's ID, role's ID, channel's ID, message's ID, or guild's ID... you need to enable developer mode in Discord settings.\n**`Discord User Settings > Appearance > Developer Mode > On`**").then(m => m.delete({ timeout: 180000 }))
    }
}