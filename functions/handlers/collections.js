const { sleep, formatDate, formatDateTime, mentionUser, mentionChannel, mentionRole, grabms } = require('../../basic'); 
const { readdirSync } = require('fs');
const { Collection } = require('discord.js');

module.exports = (client) => {
    client.guildsColl = new Collection
    client.usersColl = new Collection
    client.events = new Collection
    client.manualEvents = new Collection
    client.commands = new Collection
    client.aliases = new Collection

    const guildSaves = readdirSync(`./saves/GuildSaves`).filter(f => f.endsWith('.json'))

    for (let file of guildSaves) {
        let pull = require(`../../saves/GuildSaves/${file}`);

        if (pull) {
            client.guildsColl.set(pull.id, pull)
        } 
    }


    const userSaves = readdirSync(`./saves/UserSaves`).filter(f => f.endsWith('.json'))

    for (let file of userSaves) {
        let pull = require(`../../saves/UserSaves/${file}`);

        if (pull) {
            client.usersColl.set(pull.id, pull)
        } 
    }
}