const { Client } = require('discord.js-selfbot');
const { loadEvents } = require('./Utils/loader.js')

console.log(`
      ______                                                        
    /       \\                                                       
    /$$$$$$  |  ______    ______   _____  ____    ______    ______  
    $$ \\__$$/  /      \\  /      \\ /     \\/    \\  /      \\  /      \\ 
    $$      \\ /$$$$$$  | $$$$$$  |$$$$$$ $$$$  |/$$$$$$  |/$$$$$$  |
    $$$$$$  | $$ |  $$ | /    $$ |$$ | $$ | $$ |$$    $$ |$$ |  $$/ 
    /  \\__$$| $$ |__$$ |/$$$$$$$ |$$ | $$ | $$ |$$$$$$$$/ $$ |      
    $$    $$/ $$    $$/ $$    $$ |$$ | $$ | $$ |$$       |$$ |      
     $$$$$$/  $$$$$$$/   $$$$$$$/ $$/  $$/  $$/  $$$$$$$/ $$/       
              $$ |                                                  
              $$ |                                                  
              $$/                                                     

By RenardNocturne & Nat \n\n`);

const userClient = new Client();

userClient.config = require("./config.js")
require('./Utils/functions')(userClient);
loadEvents(userClient);

userClient.login(userClient.config.TOKEN).catch(err => console.error("❌ I can't log in ! Have you forgot to run node .\\init.js ? Have you provided a valid token ?"))
