const createProjectDir = require('../../lib/create_project_dir');
const fs = require('fs');

describe('createProjectDir', () => {
	test('should create directory marked test', async () => {
	 	createProjectDir('./__test__/lib/example')
		const dir = './__test__/lib/example/';
		await expect(fs.existsSync(dir)).toBe(true);
	})
})

