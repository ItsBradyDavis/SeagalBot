const { pickRandomMovieQuote } = require('../../src/quotes/movie-quotes');
const { pickRandomFromArray } = require('../../src/quotes/pick-random-from-array');

jest.mock('../../src/quotes/pick-random-from-array');

describe('irl-quotes', () => {
	test('should pick a random quote from the array', () => {
		pickRandomMovieQuote();

		expect(pickRandomFromArray).toHaveBeenCalledTimes(1);
		expect(pickRandomFromArray).toHaveBeenCalledWith(expect.any(Array));
	});
});
