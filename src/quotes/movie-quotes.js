import { pickRandomFromArray } from './pick-random-from-array.js';

const quotes = [
	'Well I\'m sorry to hear that. Because now, **I will snatch every motherfucker birthday**.',
	'I\'d like to make something very clear. I don\'t have rage. I\'m a happy guy. You see this face? This is a happy face. You all would be lucky to be as happy as I am!',
	'Women. You can\'t trust em.',
	'What kind of damn fool do you think I am? I\'m still in prison for doing the same thing you\'re about to ask me to do again.',
	'Are you really that good? \n\n_Every once in a while._',
	'*sits*',
	'You gotta live to talk about old times.',
];

const pickRandomMovieQuote = () => pickRandomFromArray(quotes);

export { pickRandomMovieQuote };
