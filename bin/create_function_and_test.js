const fs = require('fs');

const camelCaseName = require('../lib/camel_case_name');
const createProjectDir = require('../lib/create_project_dir');
const createFolders = require('../lib/create_folders');


const createFunctionAndTest = async (name) => {
	const projectName = name
	if (projectName === undefined) return "Error. Please enter";
	createProjectDir(name);
	const functionName = camelCaseName(name);
	await createFolders(name);
	const testContent = `const ${functionName} = require('../lib/${name}');


describe('', () => {
	test('should ', () => {
		expect(${functionName}()).toBe(0)
	});
});`
	const functionContent = `// What are we trying to do?

const ${functionName} = () => {
	return 0;
};

module.exports = ${functionName};`
	const packageJson = `{
		"name": "${name}",
		"version": "1.0.0",
		"main": "index.js",
		"license": "MIT",
		"dependencies": {
		  "jest": "^27.3.1"
		},
		"scripts": {
			"test": "jest --watch --coverage"
		}
	  }`
	fs.writeFile(`${name}/__test__/${name}.test.js`, testContent, err => {
		if (err) {
			console.error(err);
			return
		} else {
			console.log(`Created __test__/${name}.test.js!`)
		}
	});
	fs.writeFile(`${name}/lib/${name}.js`, functionContent, err => {
		if (err) {
			console.error(err);
			return;
		} else {
			console.log(`Created ${name}.js!`)
		}
	});

	fs.writeFile(`${name}/package.json`, packageJson, err => {
		if (err) {
			console.error(err);
		} else {
			console.log('Created package.json!');
		}
	});
	return "Files written!"
}

module.exports = createFunctionAndTest;