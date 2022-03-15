module.exports = client => {
    //We are setting random spam delay between two numbers to look like a human
    client.pickRandomNumberBetweenTwoNumbers = (min, max) => {
      const timeInMinute = Math.floor(Math.random() * (max - min + 1) + min)
      return timeInMinute*60*1000 //returns delay in ms
    }
}