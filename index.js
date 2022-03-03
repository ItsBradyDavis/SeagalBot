const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const { pickRandomMovieQuote } = require('./src/quotes/movie-quotes');
const { pickRandomIrlQuote } = require('./src/quotes/irl-quotes');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;
	console.log("got a command!");

	if (commandName === 'real-quote') {
		await interaction.reply(pickRandomIrlQuote());
	} else if (commandName === 'movie-quote') {
		await interaction.reply(pickRandomMovieQuote());
	}
});

// Login to Discord with your client's token
client.login(token);
