import {IRL_QUOTE, MOVIE_QUOTE} from './slash-command-names.js';
import {pickRandomIrlQuote} from '../quotes/irl-quotes.js';
import {pickRandomMovieQuote} from '../quotes/movie-quotes.js';

const commandMap = {
	[IRL_QUOTE]: {
		description: 'Replies with something Steven Seagal has said in real life!',
		handler: pickRandomIrlQuote
	},
	[MOVIE_QUOTE]: {
		description: 'Replies with something Steven Seagal has said in a movie!',
		handler: pickRandomMovieQuote
	}
};

export default commandMap;
