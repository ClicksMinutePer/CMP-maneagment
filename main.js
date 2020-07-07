const Discord = require("discord.js");
const client = new Discord.Client();
const sequelize = require("sequelize");

//collection defining


//events

client.once("ready", () => {
    client.user.setActivity(`Serving ${client.guilds.size}`);

});

client.on("message", async message => {

    const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();



})