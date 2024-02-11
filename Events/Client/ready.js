const { Client } = require("discord.js-selfbot-v13");

/**
 * 
 * @param {Client} client 
 */
module.exports = async (client) => {
  console.log(`🚀 Client successfully logged in ${client.user.username} !`)

  const slowModes = []

  //Step one: Get slowmodes per channel
  for (const channelID of client.config.CHANNELS) {
    const channel = client.channels.cache.get(channelID)
    if (!channel) return console.log("❌ I can't find the channel with the ID " + channelID)
    if (channel.type !== "GUILD_TEXT" && !channel.isThread()) continue //If it's not text channel continue
    slowModes.push({
      "channelID": channelID,
      "slowModeInMs": channel.rateLimitPerUser * 1000
    }); //Push it in ms
  }
  
  //Step 2: Sending messages
  for (let i = 0; i < slowModes.length; i++) {
    const item = slowModes[i]
    const channel = client.channels.cache.get(item.channelID)
    channel.sendTyping()
    setTimeout(() => {
      channel.send(client.config.ADMESSAGE)
      .then(() => console.log(`✅ Sent ad to ${channel.name} !`))
      .catch(err => console.log(`❌ I can't send the ad to ${channel.name}:`, err))
      client.emit("spamAds", item) //Sending an event to split different channels and timers
    }, client.pickRandomNumberBetweenTwoNumbers(0, 10))
  }
}