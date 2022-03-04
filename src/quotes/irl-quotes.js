const { pickRandomFromArray } = require('./pick-random-from-array');

const quotes = [
	'My people are my people. They love me and I love them. I would not be here without them.',
	'I am hoping that I can be known as a great writer and actor some day, rather than a sex symbol.',
	'Any great warrior is also a scholar, and a poet, and an artist',
	'Can I laugh in your face?',
	'I have no fear of death. More important, I don\'t fear life.',
	'Aikido is not merely about fighting and the development of the physical self but the perfection of the spiritual man at the same time. It has very harmonious movements, very beautiful to watch and beautiful for your body to feel.',
	'You can say that I lived in Asia for a long time and in Japan I became close to several CIA agents. And you could say that I became an adviser to several CIA agents in the field and, through my friends in the CIA, met many powerful people and did special works and special favors.',
	'I\'m a hip-hop fan.',
	'I was born in Detroit, in an all black neighborhood',
	'Zen Master Steven Seagal has become the Brand Ambassador of Bitcoiin2gen',
	'I have made a lot of mistakes.',
	'Most of the kids that I meet in the street are serious hardened criminals that I meet in the street, never had a mother and a father to love them, to protect them, to teach them right from wrong and lead them out of crime and gangs and stuff like that.',
	'I think we\'re living in a world where society is very difficult.',
	'My ancestors were Russian mongols.',
	'I look at both as one family.',
	'[Vladimir Putin is] one of the great living world leaders',
	'Looks like you\'re buying rounds tonight!',
	'See how it goes where I want it to? Right there!',
	'Notice how you\'re no longer doing this? Now you\'re doing _this_.',
];

module.exports.pickRandomIrlQuote = () => pickRandomFromArray(quotes);
