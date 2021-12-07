const nameHeadline = require('../lib/name_headline');


describe('nameHeadline', () => {
	test('should return capitalized words for the readme', () => {
		expect(nameHeadline('name_headline')).toBe('Name Headline');
	});
	test('should return capitalized words with dashes', () => {
		expect(nameHeadline('name-headline')).toBe('Name Headline');
	})
	
})
