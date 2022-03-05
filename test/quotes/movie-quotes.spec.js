import { pickRandomMovieQuote } from '../../src/quotes/movie-quotes.js';
import { pickRandomFromArray } from '../../src/quotes/pick-random-from-array.js';

jest.mock('../../src/quotes/pick-random-from-array');

describe('irl-quotes', () => {
	test('should pick a random quote from the array', () => {
		pickRandomMovieQuote();

		expect(pickRandomFromArray).toHaveBeenCalledTimes(1);
		expect(pickRandomFromArray).toHaveBeenCalledWith(expect.any(Array));
	});
});
