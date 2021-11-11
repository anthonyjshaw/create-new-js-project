const createFunctionAndTest = require('../bin/create_function_and_test');

describe('createFunctionAndTest', () => {
	test('empty params should return an error', () => {
		expect(createFunctionAndTest('', '')).toBe("E")
	})
	
})
