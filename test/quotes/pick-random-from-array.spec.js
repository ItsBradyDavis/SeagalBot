const Chance = require('chance');

const { pickRandomFromArray } = require('./../../src/quotes/pick-random-from-array');

describe('pick-random-from-array', () => {
	const chance = new Chance();

	let array;

	beforeEach(() => {
		array = chance.n(chance.string, chance.d6());
	});

    test('should pick a random element from an array', () => {
    	const element = pickRandomFromArray(array);

    	expect(array).toContain(element);
    });
});
