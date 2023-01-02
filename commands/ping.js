const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	name: "ping",
	aliases: ["Replies with Pong!"],
	execute(message, args) {
		message.reply("Pong!")
	},
};