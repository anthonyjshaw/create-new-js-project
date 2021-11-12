const camelCaseName = require('../lib/camel_case_name');

describe('Camel Case Name', () => {
	test('should change underscores to camelCase', () => {
		expect(camelCaseName('name')).toBe('name')
		expect(camelCaseName('my_name')).toBe('myName')
		expect(camelCaseName('camel_case_name')).toBe('camelCaseName')
	});
	
	test('should change dashed-names to camelCase', () => {
		expect(camelCaseName('my-name')).toBe('myName')
	})
})
