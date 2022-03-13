const { Client } = require('discord.js-selfbot');
const { loadEvents } = require('./Utils/loader')

const client = new Client();

require('./Utils/functions.js')(client);
client.config = require('./Ignore/config.js')
loadEvents(client);

client.login(client.config.TOKEN)