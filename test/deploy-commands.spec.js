import Chance from 'chance';
import * as DiscordRest from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

jest.genMockFromModule('@discordjs/rest');
jest.mock('@discordjs/rest', () => {
	const setToken = jest.fn();
	const put = jest.fn();

	return {
		mocks: {
			setToken,
			put,
		},
		REST: jest.fn().mockReturnValue({
			setToken: setToken.mockReturnValue({
				put,
			}),
		}),
	};
});

describe('deploy-commands', () => {
	const chance = new Chance();

	let clientId,
		guildId,
		token,
		oldEnv;

	beforeAll(() => {
		oldEnv = process.env;
	});

	afterAll(() => {
		process.env = oldEnv;
	});

	describe('given dev environment', () => {
		beforeAll(async () => {
			clientId = chance.string();
			guildId = chance.string();
			token = chance.string();

			process.env.NODE_ENV = 'development';
			process.env.BOT_CLIENT_ID = clientId;
			process.env.BOT_GUILD_ID = guildId;
			process.env.BOT_TOKEN = token;

			await require('../src/deploy-commands.js');
		});

		test('should create rest client & set token', () => {
			expect(DiscordRest.REST).toHaveBeenCalledTimes(1);
			expect(DiscordRest.REST).toHaveBeenCalledWith({ version: '9' });

			expect(DiscordRest.mocks.setToken).toHaveBeenCalledTimes(1);
			expect(DiscordRest.mocks.setToken).toHaveBeenCalledWith(token);
		});

		test('should put guild commands', () => {
			expect(DiscordRest.mocks.put).toHaveBeenCalledTimes(1);
			expect(DiscordRest.mocks.put).toHaveBeenCalledWith(Routes.applicationGuildCommands(process.env.BOT_CLIENT_ID, process.env.BOT_GUILD_ID), {
				body: expect.anything(),
			},
			);
		});
	});
});
