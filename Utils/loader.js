const { readdirSync, writeFile } = require('fs');
const inquirer = require("inquirer")

const loadEvents = (client, dir = './Events') => {
    readdirSync(dir).forEach(dirs => {
        const events = readdirSync(`${dir}/${dirs}`).filter(files => files.endsWith(".js"));

        for (const event of events) {
        const evt = require(`../${dir}/${dirs}/${event}`);
        const evtName = event.split(".")[0];
        client.on(evtName, evt.bind(null, client));

        console.log(`✅ Successfully loaded the ${evtName} event !`);
        };
    });
};

const loadData = async () => {
    inquirer.prompt([
        {
            type: 'password',
            name: 'TOKEN',
            message: "Please, enter the Discord account token:",
            mask: '*'
        },
        {
            type: 'input',
            name: 'ADMESSAGE',
            message: 'Please, enter your publicity, you can change it later in the data.json file located in the Data folder:',
        },
        {
            type: 'input',
            name: 'CHANNELS',
            message: "Please, enter the channels IDs: <Channel ID> <Another channel ID>",
        }
    ])
    .then(res => {
        const data = {
            TOKEN: res.TOKEN,
            ADMESSAGE: res.ADMESSAGE,
            CHANNELS: res.CHANNELS.split(" "),
            REPLYING: []  //It will be use later
        }
        dataString = `module.exports = ${JSON.stringify(data)}`
        writeFile("./config.js", dataString, ((err, result) => {
            console.log("✅ I've successfully created your data ! You can run node .\\index.js or manually modify these values in the config.js file !");    
        }))
    })
    .catch(err => console.log(err + "❌ An error has occurred !"))
}

module.exports = {
    loadEvents,
    loadData
}