const createFolders = require('../lib/create_folders');
const fs = require('fs');

describe('createFolders', () => {
	test('should create directory marked test', async () => {
	 	createFolders();
		const dir = './__test__/example/__test__';
		await expect(fs.existsSync(dir)).toBe(true);
	})
})

