const { MessageEmbed } = require('discord.js');
const { guilds } = require("../../../config/RRoles.json")
const { prefix, owner, maid, keywords, specKeywords, meanKeywords, niceKeywords, banKeywords } = require("../../../config/config.json")
const func = require('../../basic');
const aZip = require('adm-zip')

module.exports = {
    name: "message",
    description: "Event emits on receiving a message.",
    run: async (client) => {
        client.on('message', async msg => {

            msg.author.fetch()

            if (msg.author.id == client.user.id) return;

            if (msg.content.includes("she can be annoying sometimes") && msg.author.bot) {
                msg.reply("Heeeey! Ruuuuude.")
                msg.react('<:EmiRee:801972190374658068>')
            }
            
            if (msg.author.bot) return;

            if (msg.channel.type == 'dm' && msg.author.id == owner) {
                if (msg.content == 'grabGuildSaves') {
                    let zip = new aZip();
                    zip.addLocalFolder('./saves')
                    zip.writeZip('./functions/commands/owner/BotSaves.zip')
        
                    msg.author.send(`Here are the GuildSaves as you asked! Updated as of ${func.formatDate(new Date())}`, { files: ["functions/commands/owner/BotSaves.zip"] })
                }
            }
        
            if (!msg.content.startsWith(prefix)) {
                guildS = client.guildsColl.get(msg.guild.id)
    

                let content = msg.content.toLowerCase().split(' ')
        
                if (content.some(word => {
                    if (banKeywords.includes(word)) return true;
                })) {
                    if (guildS["banNWord"])
                        msg.member.ban({ days: 21, reason: "They said the n word. Very naughty!" })
                }

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
                            msg.delete({ timeout: 200 });
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
                        msg.delete({ timeout: 200 });
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
        
            
            if (msg.content.startsWith(prefix)) {
        
                let args = msg.content.slice(prefix.length).split(/ +/);
                const command = args.shift().toLowerCase();
                args = args.slice(command)
        
                console.log(args)
                console.log(command)
        
                if (command.length === 0) return;
        
                let cmd = client.commands.get(command);
                if (!cmd) cmd = client.commands.get(client.aliases.get(command));
        
       
       
                msg.delete({ timeout: 200 })

                if (cmd) {
                    if (args[0] == "info") {
                        msg.reply(`Command Usage: ${prefix}${cmd.name}${cmd.usage != "" ? ` ${cmd.usage}` : ""}\nCommand Aliases: ${cmd.aliases}`)
                    } else {
                        cmd.run(client, msg, args);
                    }

                    
                } else {
                    msg.reply("That command is not valid.")
                }
            }
        });
    }
}