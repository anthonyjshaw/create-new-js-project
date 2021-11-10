const fs = require('fs');
const camelCaseName = require('../../camel_case_name/lib/camel_case_name');

const createFunctionAndTest = (path, name) => {
	const functionName = camelCaseName(name);
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
	fs.writeFile(`${path}/__test__/${name}.test.js`, testContent, err => {
		if (err) {
			console.error(err);
			return
		} else {
			console.log('Created test file!')
		}
	});
	fs.writeFile(`${path}/lib/${name}.js`, functionContent, err => {
		if (err) {
			console.error(err);
			return
		} else {
			console.log('Created function!')
		}
	});

	fs.writeFile(`${path}/package.json`, packageJson, err => {
		if (err) {
			console.error(err);
		} else {
			console.log('Created package.json!');
		}
	})
}

module.exports = createFunctionAndTest;