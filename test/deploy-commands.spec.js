const { clientId, guildId, token } = require('../config.json');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

jest.mock('@discordjs/rest');
jest.mock('../config.json', () => {
	const mockChance = require('chance');

	const c = new mockChance();

	return {
		clientId: c.string(),
		guildId: c.string(),
		token: c.string(),
	};
});
jest.mock('@discordjs/builders');

describe('deploy-commands', () => {
	let mockRestClient;

	beforeAll(() => {
		mockRestClient = {
			put: jest.fn().mockResolvedValue(undefined),
			setToken: jest.fn(),
		};

		mockRestClient.setToken.mockReturnValue(mockRestClient);

		REST.mockReturnValue(mockRestClient);

		require('../src/deploy-commands');
	});


	test('should create a new rest client & set the config token', () => {
		expect(REST).toHaveBeenCalledTimes(1);
		expect(REST).toHaveBeenCalledWith({
			version: '9',
		});


		expect(mockRestClient.setToken).toHaveBeenCalledTimes(1);
		expect(mockRestClient.setToken).toHaveBeenCalledWith(token);
	});

	test('should call PUT to create commands', () => {
		expect(mockRestClient.put).toHaveBeenCalledTimes(1);
		expect(mockRestClient.toHaveBeenCalledWith(Routes.applicationGuildCommands(clientId, guildId), expect.anything()));
	});
});
