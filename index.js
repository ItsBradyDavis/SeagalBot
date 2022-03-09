import { Client, Intents } from 'discord.js';
import { token } from './config.js';
import commandMap from './src/enums/command-map.js';

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	const handler = commandMap[commandName].handler;

	if (handler) {
		await interaction.reply(handler());
	}
});

// Login to Discord with your client's token
client.login(token);
