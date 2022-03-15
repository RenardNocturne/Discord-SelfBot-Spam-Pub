const { Client } = require('discord.js-selfbot');
const { loadEvents } = require('./Utils/loader.js')

const userClient = new Client();

userClient.config = require("./config.js")
loadEvents(userClient);

userClient.login(userClient.config.TOKEN).catch(err => console.error("I can't log in ! Have you forgot to run node .\\init.js ? Have you provided a valid token ?"))

//       ______                                                        
//     /      \                                                       
//     /$$$$$$  |  ______    ______   _____  ____    ______    ______  
//     $$ \__$$/  /      \  /      \ /     \/    \  /      \  /      \ 
//     $$      \ /$$$$$$  | $$$$$$  |$$$$$$ $$$$  |/$$$$$$  |/$$$$$$  |
//     $$$$$$  |$$ |  $$ | /    $$ |$$ | $$ | $$ |$$    $$ |$$ |  $$/ 
//     /  \__$$ |$$ |__$$ |/$$$$$$$ |$$ | $$ | $$ |$$$$$$$$/ $$ |      
//     $$    $$/ $$    $$/ $$    $$ |$$ | $$ | $$ |$$       |$$ |      
//      $$$$$$/  $$$$$$$/   $$$$$$$/ $$/  $$/  $$/  $$$$$$$/ $$/       
//                $$ |                                                  
//               $$ |                                                  
//               $$/                                                     
// 
// By RenardNocturne & Nat