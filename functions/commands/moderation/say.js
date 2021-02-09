module.exports = {
    name: "say",
    category: "moderation",
    description: "",
    aliases: [],
    run: async (client, msg, args) => {
        
        msg.reply("ERROR: Command not created.")
        
        
        /*
        if (args[0] == undefined) {
            msg.reply("You've provided no arguments for the embed. Proper usuage: `ram!say channel:{CHANNEL} color:{COLOR} {MESSAGE}` // `channel:{CHANNEL}` must be a channel mention (#channel_name) -- `color:{COLOR}` must be either an RGB or Hex code. (#FFFFFF or 20, 20, 20)")
            return;
        }

        let channel = false
        let color = false
        let customChannel = false

        if (args[0].includes("channel:")) {
            console.log("custom channel")
            args[0].slice("channel:<#")
            args[0].slice(">")
            channel = msg.guild.channels.cache.find(iChannel => {
                if (iChannel.id == msg.mentions.channels.first()) return iChannel;
            })
            args.slice(channel)
            customChannel = true

        } else {



        }

        if (args[0].includes('color:#')) {
            console.log("hex color")
            args[0].slice("color:")
            color = args[0]
            args.slice(args[0])

        } else if (args[0].includes('color:') && !args[0].includes('color:#')) {
            console.log("RGB color")
            args[0].slice("color:")
            color = `${args[0]},${args[1]},${args[2]}`
            for (let i = 0; i <= 3; i++) {
                console.log(args[0])
                args.slice(args[0]);
            }

        } else {
            console.log("default color")
            color = 83,12,176

        }


        let embed = new MessageEmbed()
            .setAuthor(name, msg.author.displayAvatarURL())
            .setColor(color)
            .addField("Message from ram!say", args.join(' '), { inline: true })

        if (!customChannel) msg.channel.send(embed);    
        if (customChannel) channel.send(embed);
    */
    }
}