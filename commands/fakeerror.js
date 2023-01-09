const { Client, SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const internal = require('stream');
const { execute } = require('./fakeerror');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fakeerror')
        .setDescription('Fakes an error.'),
    async execute(interaction) {
        await interaction.reply('Shit! I ran into an issue.');
    }
};