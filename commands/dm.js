const { Client, SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, EmbedBuilder } = require('discord.js');
const { execute } = require('./dm');

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
        .setDMPermission(false),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        const message = interaction.options.getString('message');

        const button = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('src')
                    .setLabel('Sent from a staff memeber.')
                    .setStyle(ButtonStyle.Link)
                    .setDisabled(true)
            )
        
            const embed = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Message')
                .setDescription('${message}')

        Client.users.send('${user.id}', {embeds: [embed], componenents: [button] });
        await interaction.reply({ content: '${user.username} has been messaged!', ephemeral: true });
    }
};