const { Client, Message } = require("discord.js");

/**
 * 
 * @param {Client} client 
 * @param {Message} message 
 */
module.exports = async (client, message) => {
    //If its the client or a bot return
    if (message.author.bot || message.author.id === client.user.id) return
    //If its not from an ad channel return
    if (!client.config.CHANNELS.includes(message.channel.id)) return  

    setTimeout(() => {
        message.channel.send(client.config.ADMESSAGE).then(() => console.log(`✅ I've successfully replied to the message sent in ${message.channel.name}`)).catch(err => null)
    }, client.pickRandomNumberBetweenTwoNumbers(3, 15))
}