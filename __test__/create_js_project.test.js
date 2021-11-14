const createJSProject = require('../lib/create_js_project');
const fs = require('fs');

describe('createJSProject', () => {
	test('empty params should return an error', async () => {
		const error = "Error: no project name provided. Please enter a name for your project.";
		expect(await createJSProject()).toBe(error);

	});

})
