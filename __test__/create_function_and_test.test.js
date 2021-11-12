const createFunctionAndTest = require('../bin/create_function_and_test');

describe('createFunctionAndTest', () => {
	test('empty params should return an error', async () => {
		const error = "Error: no project name provided. Please enter a name for your project."
		expect(await createFunctionAndTest('')).toBe(error);
	});

	test('project that already exists should return an error', async () => {
		process.argv.push('example-project');
		createFunctionAndTest();
		const project2 = await createFunctionAndTest();
		const error = `Oops! There's already a project called "example-project". \nTo access it, please enter the following command in your terminal:\n\n\`cd example-project\`\nTo delete it, please enter:\`rm -rf example-project\``
		expect(project2).toBe(error)
	})
	
})
