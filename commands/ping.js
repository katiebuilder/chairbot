const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
		await interaction.followUp({ content: 'Secret Pong!', ephemeral: true });
		await wait(2000);
		await interaction.editReply('Pong again!');
		await wait(2000);
		await interaction.followUp(`Actual ping: ${client.ws.ping}ms.`);
		return;
	},
};