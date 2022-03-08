import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

import { clientId, guildId, token } from '../config.js';
import commandMap from './enums/command-map.js';

const commands = Object.keys(commandMap).map((key) => (
	new SlashCommandBuilder().setName(key).setDescription(commandMap[key].description))
).map((command) => command.toJSON());


const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
