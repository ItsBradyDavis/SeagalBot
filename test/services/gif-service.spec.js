import Chance from 'chance';

import { pickRandomGif } from '../../src/services/gif-service';
import { getRandomGifFromGiphy } from '../../src/repositories/gif-repository';

jest.mock('../../src/repositories/gif-repository');

const chance = new Chance();

describe('gif-service', () => {
	describe('pickRandomGif', () => {
		let expectedQuery;

		beforeEach(() => {
			expectedQuery = chance.word();
		});

		test('should call gif repository with query', async () => {
			await pickRandomGif(expectedQuery);

			expect(getRandomGifFromGiphy).toHaveBeenCalledTimes(1);
			expect(getRandomGifFromGiphy).toHaveBeenCalledWith(expectedQuery);
		});
	});
});
