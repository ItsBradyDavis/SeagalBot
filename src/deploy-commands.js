import { SlashCommandBuilder } from '@discordjs/builders';
import { clientId, guildId, token } from '../config.js';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { IRL_QUOTE, MOVIE_QUOTE } from './enums/slash-command-names.js';

const commands = [
	new SlashCommandBuilder().setName(IRL_QUOTE).setDescription('Replies with a real-life Seagal Quote!'),
	new SlashCommandBuilder().setName(MOVIE_QUOTE).setDescription('Replies with a Seagal Movie Quote'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
