const Discord = require("discord.js");

/**
 * 
 * @param {Discord.Client} client 
 */
module.exports = async (client) => {
  console.log(`🚀 Client successfully logged in ${client.user.username} !`)

  //We are setting random spam delay between two numbers to look like a human
  const pickRandomNumberBetweenTwoNumbers = (min, max) => {
    const timeInMinute = Math.floor(Math.random() * (max - min + 1) + min)
    return timeInMinute*60*1000 //returns delay in ms
  }

  const slowModes = []

  //Step one: Get slowmodes per channel
  for (channelID of client.config.CHANNELS) {
    channel = client.channels.cache.get(channelID)
    if (!channel) return console.log("❌ I can't find the channel with the ID " + channelID)
    if (channel.type !== "text") continue //If it's not text channel continue
    slowModes.push({
      "channelID": channelID,
      "slowModeInMs": channel.rateLimitPerUser * 1000
    }); //Push it in ms
  }
  
  //Step 2: Sending messages
  slowModes.forEach(item =>  {
    const channel = client.channels.cache.get(item.channelID)
    channel.send(client.config.ADMESSAGE)
    .then(() => console.log(`✅ Sent ad to ${channel.name} !`))
    .catch(err => console.log(`❌ I can't send the ad to ${channel.name}:`, err))
    client.emit("spamAds", item, pickRandomNumberBetweenTwoNumbers) //Sending an event to split different channels and timers
  })
}