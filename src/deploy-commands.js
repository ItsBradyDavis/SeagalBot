import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

import { clientId, guildId, token } from '../config.js';
import commandMap from './enums/command-map.js';

const commands = Object.keys(commandMap).map((key) => (
	new SlashCommandBuilder().setName(key).setDescription(commandMap[key].description)),
).map((command) => command.toJSON());


const rest = new REST({ version: '9' }).setToken(token);

if (process.env.NODE_ENV === 'development') {
	rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
		.then(() => console.log('Successfully registered dev application commands.'))
		.catch(console.error);
}
else {
	rest.put(Routes.applicationCommands(clientId), { body: commands })
		.then(() => console.log('Successfully registered global application commands.'))
		.catch(console.error);
}

