module.exports = {
	name: 'declanbyrd.co.uk', // optional, falls back to object key
	description: 'Declan’s Personal web site',
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: 'site',
	},
	urls: [
		'https://declanbyrd.co.uk/',
		'https://declanbyrd.co.uk/journal/',
		'https://declanbyrd.co.uk/photos/',
		'https://declanbyrd.co.uk/colophon.html',
		'https://declanbyrd.co.uk/tags/',
		// Journal Posts
		'https://declanbyrd.co.uk/journal/2020/foobar/',
		'https://declanbyrd.co.uk/journal/2020/responsive-sizings-css/',
	],
};
