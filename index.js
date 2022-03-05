import { Client, Intents } from 'discord.js';
import { token } from './config.js';
import { IRL_QUOTE, MOVIE_QUOTE } from './src/enums/slash-command-names.js';
import { pickRandomMovieQuote } from './src/quotes/movie-quotes.js';
import { pickRandomIrlQuote } from './src/quotes/irl-quotes.js';

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === IRL_QUOTE) {
		await interaction.reply(pickRandomIrlQuote());
	}
	else if (commandName === MOVIE_QUOTE) {
		await interaction.reply(pickRandomMovieQuote());
	}
});

// Login to Discord with your client's token
client.login(token);
