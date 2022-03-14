const Discord = require('discord.js');
const { Client, Intents } = require('discord.js-selfbot');
const { loadEvents } = require('./Utils/loader.js')

const userClient = new Client();
const client = new Discord.Client()

userClient.config = require('./config.js')
loadEvents(userClient);

userClient.login(userClient.config.TOKEN)