module.exports = {
    name: "itemid",
    description: "Tells the user how to get an item's ID in discord.",
    aliases: ["id", "getid"],
    run: (client, msg, args) => {

        msg.reply("In order to get a user's ID, channel's ID, message's ID, or guild's ID... you need to enable developer mode in Discord settings.\nDiscord User Settings > Appearance > Developer Mode > On").then(m => m.delete({ timeout: 180000 }))
    }
}