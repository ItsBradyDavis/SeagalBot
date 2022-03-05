import Chance from 'chance';

import { pickRandomFromArray } from './../../src/quotes/pick-random-from-array.js';

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
