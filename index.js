const Discord = require('discord.js');
const { Client, Intents } = require('discord.js-selfbot');
const { loadEvents } = require('./Utils/loader')

const userClient = new Client();
const client = new Discord.Client()

require('./Utils/functions.js')(userClient);
userClient.config = require('./Ignore/config')
loadEvents(userClient);

userClient.login(userClient.config.TOKEN)