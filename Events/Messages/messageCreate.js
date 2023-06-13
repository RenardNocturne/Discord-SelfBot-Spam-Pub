const { Message, Client } = require("discord.js-selfbot-v13")

/**
 * 
 * @param {Client} client 
 * @param {Message} message 
 */
module.exports = (client, message) => {
    //If its the client or a bot return
    if (message.author.bot || message.author.id === client.user.id) return
    //If its not from an ad channel return
    if (!client.config.CHANNELS.includes(message.channel.id)) return
    //If we are already replying return  
    if (client.config.REPLYING.includes(message.channel.id)) return

    client.config.REPLYING.push(message.channel.id)
    setTimeout(() => {
      const channel = message.channel
        channel.sendTyping()
        setTimeout(() => {
          channel.send(client.config.ADMESSAGE)
          .then(() => console.log(`✅ I've successfully replied to the message sent in ${message.channel.name}`))
          .catch(err => null)
          client.config.REPLYING = client.config.REPLYING.filter(id => id !== message.channel.id)
        }, 1000 * 5)
    }, client.pickRandomNumberBetweenTwoNumbers(3, 5))
}