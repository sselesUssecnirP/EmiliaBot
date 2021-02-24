module.exports = {
    name: "ping",
    category: "info",
    description: "Gives Latency and API Latency",
    aliases: [],
    usage: "none",
    run: async (client, msg, args) => {
        let reply = await msg.reply(`Pinging... 🏓`)
        reply.edit(`🏓Pong! Latency is: ${Math.floor(reply.createdAt - msg.createdAt)}ms\nAPI Latency is: ${Math.round(client.ws.ping)}ms`)
    }
}