const createTestAndLibDir = require('../../lib/create_test_and_lib_dir');
const fs = require('fs');

describe('createProjectDir', () => {
	test('should create directory marked test', async () => {
	 	createTestAndLibDir('./__test__/lib/example')
		const dir = './__test__/lib/example/__test__';
		await expect(fs.existsSync(dir)).toBe(true);
	})
})

