const createProjectDir = require('../lib/create_project_dir');
const fs = require('fs');


afterAll(() => {
	fs.rmdirSync('./__test__example', {recursive: true, force: true})
})


describe('createProjectDir', () => {
	test('should create directory marked example', async () => {
	 	createProjectDir('example');
		const dir = './__test__/example/';
		await expect(fs.existsSync(dir)).toBe(true);
	});
});