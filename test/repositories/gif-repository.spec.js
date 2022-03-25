import fetch from 'cross-fetch';
import Chance from 'chance';
import { pickRandomFromArray } from '../../src/quotes/pick-random-from-array';
import { getRandomGifFromGiphy } from '../../src/repositories/gif-repository';

jest.mock('cross-fetch');
jest.mock('../../src/quotes/pick-random-from-array');

const chance = new Chance();

describe('gif repository', () => {
	let processEnv;

	beforeAll(() => {
		processEnv = process.env;
	});

	afterAll(() => {
		process.env = processEnv;
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('getRandomGifFromGiphy', () => {
		let expectedResult,
			expectedRandomArrayResult;

		beforeEach(() => {
			process.env.GIPHY_API_KEY = chance.string();

			expectedResult = {
				data: chance.n(chance.string, chance.d6()),
			};

			fetch.mockResolvedValue({
				json: jest.fn().mockResolvedValue(expectedResult),
			});

			expectedRandomArrayResult = chance.string();
			pickRandomFromArray.mockReturnValue(expectedRandomArrayResult);
		});


		test('should fetch response from giphy', async () => {
			await getRandomGifFromGiphy();

			expect(fetch).toHaveBeenCalledTimes(1);
			expect(fetch).toHaveBeenCalledWith(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=steven+seagal&limit=10=offset=0&lang=en`);
		});

		test('should return random gif from giphy', async () => {
			const result = await getRandomGifFromGiphy();

			expect(pickRandomFromArray).toHaveBeenCalledTimes(1);
			expect(pickRandomFromArray).toHaveBeenCalledWith(expectedResult.data);

			expect(result).toBe(expectedRandomArrayResult);
		});

		describe('given an error occurs', () => {
			test('should return undefined', async () => {
				fetch.mockRejectedValue(chance.string());

				const result = await getRandomGifFromGiphy();

				expect(result).toBeUndefined();
			});
		});
	});
});
