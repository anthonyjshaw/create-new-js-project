const createTestAndLibDir = require('../lib/create_test_and_lib_dir');
const fs = require('fs');

afterAll(() => {
	fs.rmdirSync('./__test__/example1', {recursive: true, force: true});
})

describe('createProjectDir', () => {
	test('should create a directory marked test', async () => {
	 	createTestAndLibDir('./__test__/example1')
		const dir = './__test__/example1/__test__';
		await expect(fs.existsSync(dir)).toBe(true);
	});

	test('should create a directory marked lib', async () => {
		createTestAndLibDir('./__test__/example1')
	   const dir = './__test__/example1/lib';
	   await expect(fs.existsSync(dir)).toBe(true);
   })
})
