import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

import commandMap from './enums/command-map.js';

const clientId = process.env.BOT_CLIENT_ID;
const guildId = process.env.BOT_GUILD_ID;
const token = process.env.BOT_TOKEN;

const commands = Object.keys(commandMap).map((key) => (
	new SlashCommandBuilder().setName(key).setDescription(commandMap[key].description)),
).map((command) => command.toJSON());


const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		if (process.env.NODE_ENV === 'development') {
			await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });

			console.log('Successfully registered dev application commands.');
		}
		else {
			await rest.put(Routes.applicationCommands(clientId), { body: commands });

			console.log('Successfully registered global application commands.');
		}
	}
	catch (error) {
		console.error(error);
	}
})();
