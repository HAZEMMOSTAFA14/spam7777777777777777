const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("612063106591621140")
setInterval(function() {
channel.send(`#daily credits`);
}, 30)
})

client.login(process.env.BOT_TOKEN);