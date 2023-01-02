const { SlashCommandBuilder, Guild, PermissionFlagsBits  } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Bans a user.')
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .setDMPermission(false)
        .addUserOption(option =>
            option.setName('user')
                .setDescription('User to ban.')
                .setRequired(true))
         .addStringOption(option =>
            option.setName('reason')
                .setDescription('Why?')
                .setRequired(true)),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
        guild.members.ban(user);
        return;
	},
};