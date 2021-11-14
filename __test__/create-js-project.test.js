const createFunctionAndTest = require('../lib/create_function_and_test');
const fs = require('fs');

describe('createFunctionAndTest', () => {
	test('empty params should return an error', async () => {
		const error = "Error: no project name provided. Please enter a name for your project.";
		expect(await createFunctionAndTest()).toBe(error);

	});

})
