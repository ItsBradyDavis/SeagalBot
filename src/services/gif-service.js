import { getRandomGifFromGiphy } from '../repositories/gif-repository.js';

const pickRandomGif = async (query) => {
	try {
		console.log('trying...');
		const response = await getRandomGifFromGiphy(query);

		console.log('response', response);

		return response?.embed_url || 'Looks like giphy might be **Out of Reach**';
	}
	catch (error) {
		console.log(error);

		return (JSON.stringify(error));
	}
};

export { pickRandomGif };
