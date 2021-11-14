const createProjectDir = require('../lib/create_project_dir');
const fs = require('fs');


afterAll(() => {
	fs.rmdirSync('./__tests__/example', {recursive: true, force: true})
})


describe('createProjectDir', () => {
	test('should create directory marked example', async () => {
	 	createProjectDir('__tests__/example');
		const dir = './__tests__/example/';
		expect(await fs.existsSync(dir)).toBe(true);
	});
});