const { SlashCommandBuilder, Guild } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Kicks a user.')
        .setDefaultMemberPermissions(KickMembers)
        .setDMPermission(false)
        .addUserOption(option =>
            option.setName('user')
                .setDescription('User to kick.')
                .setRequired(true))
         .addStringOption(option =>
            option.setName('reason')
                .setDescription('Why?')
                .setRequired(true)),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
        guild.members.kick(user);
	},
};