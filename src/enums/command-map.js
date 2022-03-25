import { IRL_QUOTE, MOVIE_QUOTE, SEAGAL_GIF } from './slash-command-names.js';
import { pickRandomIrlQuote } from '../quotes/irl-quotes.js';
import { pickRandomMovieQuote } from '../quotes/movie-quotes.js';
import { pickRandomGif } from '../services/gif-service.js';

const commandMap = {
	[IRL_QUOTE]: {
		description: 'Replies with something Steven Seagal has said in real life!',
		handler: pickRandomIrlQuote,
	},
	[MOVIE_QUOTE]: {
		description: 'Replies with something Steven Seagal has said in a movie!',
		handler: pickRandomMovieQuote,
	},
	[SEAGAL_GIF]: {
		description: 'Posts a random Steven Seagal Gif!',
		handler: pickRandomGif,
	},
};

export default commandMap;
