const { SlashCommandBuilder, PermissionFlagsBits, Client } = require('discord.js');
const { execute } = require('./ping');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dm')
        .setDescription('Messages a user!')
        .addUserOption (option =>
            option
                .setName('user')
                .setDescription('The user you want to DM.')
                .setRequired(true))
        .addStringOption (option =>
            option
                .setName('message')
                .setDescription('Themessage you want sent.')
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
        .setDMPermission(true),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        const message = interaction.options.getString('message');

        client.users.send('${user.id}', '${message}')
        await interaction.reply({ content: '${user.username} has been messaged!', ephemeral: true });
    }
};