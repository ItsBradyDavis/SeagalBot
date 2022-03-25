import fetch from 'cross-fetch';
import { pickRandomFromArray } from '../quotes/pick-random-from-array.js';

const giphyBaseUrl = 'https://api.giphy.com/v1/gifs';

const limit = 10;

const getRandomGifFromGiphy = async () => {
	const url = `${giphyBaseUrl}/search?api_key=${process.env.GIPHY_API_KEY}&q=steven+seagal&limit=${limit}=offset=0&lang=en`;

	try {
		const response = await fetch(url);

		const result = await response.json();

		const gifArray = result.data;

		return pickRandomFromArray(gifArray);
	}
	catch (error) {
		console.log('Error fetching from giphy:', error);

		return undefined;
	}
};

export { getRandomGifFromGiphy };
