const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('makemod')
		.setDescription('Make a user a mod or promote a current mod.')
		.addSubcommand(subcommand =>
			subcommand
				.setName('new')
				.setDescription('Add a new mod to the team.')
				.addUserOption(option => option.setName('target').setDescription('The user')).setRequired(true))
		.addSubcommand(subcommand =>
			subcommand
				.setName('promote')
				.addUserOption(option => option.setName('target').setDescription('The user').setRequired(true))
				.addChoices(
					{ name: 'Tier 1', value: 'tier1' },
					{ name: 'Tier 2', value: 'tier2' },
					{ name: 'Head Mod (3)', value: 'head' }
				.setRequired(true)))
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
		if (interaction.options.getSubcommand() === 'new') {
			const user = interaction.options.getUser('target');

			if (user){
				await user.roles.add(1048365232587821087);
				await interaction.reply(':tada: ${user.mention} is now a **Tier 0 Moderator**.')
			} else {
				await interaction.reply({ content: 'Action failed.', ephemeral: true})
			}
		} else if (interaction.options.getSubcommand() === 'promote') {
			const user = interaction.options.getUser('target');
			const tier = interaction.options.getChoice('tier');
			if (tier() === 'tier1') {
				await user.role.add(1038294749737648221);
				await interaction.reply(':tada: ${user.mention} is now a **Tier 1 Moderator**!');
			} else if (tier() === 'tier2') {
				await user.role.add(1048365256499540028);
				await interaction.reply(':tada: ${user.mention} is now a **Tier 2 Moderator**!');
			} else if (tier() === 'head') {
				await user.role.add(1046982388816822272);
				await interaction.reply(':tada: ${user.mention} is now a **Head Mod**!');
			} else {
				await interaction.reply({ content: 'Action failed.', ephemeral: true})
			}
		}
	},
};