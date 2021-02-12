module.exports = {
    name: "emiReactionAdd",
    description: "Event emits on reaction add received.",
    run: async (client) => {

        let emojis = ["<:EmiRee:801972190374658068>", "<:EmiLove:801972190195089428>", "<:EmiPout:801972190803132467>", "<:EmiYeah:801972189673816104>"]

        client.on('messageReactionAdd', async (reaction, user) => {
            

            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();

                if (reaction.emoji.name === emojis[0]) {
                    await reaction.message.react(emoji[0])
                } else if (reaction.emoji.name === emojis[1]) {
                    await reaction.message.react(emoji[1])
                } else if (reaction.emoji.name === emojis[2]) {
                    await reaction.message.react(emoji[2])
                } else if (reaction.emoji.name === emojis[3]) {
                    await reaction.message.react(emoji[3])
                } 
        });
    }
}