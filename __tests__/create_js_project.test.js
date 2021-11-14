const createJSProject = require('../lib/create_js_project');
const fs = require('fs');




afterAll(() => {
	fs.rmdirSync('./test_project', {recursive: true, force: true})
})

describe('createJSProject', () => {
	test('empty params should return an error', async () => {
		const error = "Error: no project name provided. Please enter a name for your project.";
		expect(await createJSProject()).toBe(error);
	});

	test('should return error if project already exists', async () => {
		const projectName = 'test_project'
		createJSProject(projectName);
		const error = `Oops! There's already a project called "${projectName}". \nTo access it, please enter the following command in your terminal:\n\n\`cd ${projectName}\`\nTo delete it, please enter:\`rm -rf ${projectName}\``
		expect( await createJSProject(projectName)).toBe(error);
		
	})
})
