const { pickRandomIrlQuote } = require('../../src/quotes/irl-quotes');
const { pickRandomFromArray } = require('../../src/quotes/pick-random-from-array');

jest.mock('../../src/quotes/pick-random-from-array');

describe('irl-quotes', () => {
	test('should pick a random quote from the array', () => {
		pickRandomIrlQuote();

		expect(pickRandomFromArray).toHaveBeenCalledTimes(1);
		expect(pickRandomFromArray).toHaveBeenCalledWith(expect.any(Array));
	});
});
