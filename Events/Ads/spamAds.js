module.exports = async (client, item, pickRandomNumberBetweenTwoNumbers) => {
    setInterval(() => {
        const channel = client.channels.cache.get(item.channelID)
        channel.send(client.config.ADMESSAGE)
        .then(() => console.log(`✔ Sent ad to ${channel.name} !`))
        .catch(err => console.log(`❌ I can't send the ad to ${channel.name}:`, err))
    }, item.slowModeInMs + pickRandomNumberBetweenTwoNumbers(30, 60)) //add it some minutes to act like a human
    //You can change the values like: pickRandomNumberBetweenTwoNumbers(15, 30) and it will send your ad more often
    // pickRandomNumberBetweenTwoNumbers(<min minutes to wait after the slowmode ends>, <max minutes to wait after the slowmode ends>)
}