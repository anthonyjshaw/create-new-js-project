const createProjectDir = require('../lib/create_project_dir');
const fs = require('fs');

describe('createProjectDir', () => {
	test('should create directory marked test', async () => {
	 	createProjectDir('./__test__/example');
		const dir = './__test__/example/';
		await expect(fs.existsSync(dir)).toBe(true);
	});
});