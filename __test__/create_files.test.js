const createFiles = require("../lib/create_files");
const fs = require('fs');
const templateFileContent = require("../lib/template_file_content");
const createTestAndLibDir = require("../lib/create_test_and_lib_dir");

afterAll(() => {
	const testProjects = ['test_project', 'test_project1', 'test_project2'];
	testProjects.forEach(e => {
		fs.rmdirSync(`./${e}`, { recursive: true, force: true });
	});
})

describe('createFiles', () => {
	test('should create a file in the lib directiory with a template function', () => {
		const projectName = 'test_project';
		createTestAndLibDir(projectName);
		const content = templateFileContent(projectName);
		createFiles(projectName, content);
		const projectLibFile = `${projectName}/lib/${projectName}.js`;
		expect(fs.existsSync(projectLibFile)).toBe(true);
	});

	test('should create a test file in the __test__ directiory with a template test suite', () => {
		const projectName = 'test_project1';
		createTestAndLibDir(projectName);
		const content = templateFileContent(projectName);
		createFiles(projectName, content);
		const projectTestFile = `${projectName}/__test__/${projectName}.test.js`;
		expect(fs.existsSync(projectTestFile)).toBe(true);
	});

	test('should create a package.json with jest installed', () => {
		const projectName = 'test_project2';
		createTestAndLibDir(projectName);
		const content = templateFileContent(projectName);
		createFiles(projectName, content);
		const packageJson = `${projectName}/package.json`;
		expect(fs.existsSync(packageJson)).toBe(true);
	});
	
})
