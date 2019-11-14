const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", () => {
    console.log("I am ready!");
    client.user.setStatus('dnd');
    client.user.setActivity('UD being a weirdo', { type: 3 });
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`Your bot is in ${client.guilds.size} servers!`);
   

});

client.login(process.env.token);
