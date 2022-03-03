const { SlashCommandBuilder } = require('@discordjs/builders');
const { clientId, guildId, token } = require('../config.json');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const {IRL_QUOTE, MOVIE_QUOTE} = require('./enums/slash-command-names');

const commands = [
	new SlashCommandBuilder().setName(IRL_QUOTE).setDescription('Replies with a real-life Seagal Quote!'),
	new SlashCommandBuilder().setName(MOVIE_QUOTE).setDescription('Replies with a Seagal Movie Quote')
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
