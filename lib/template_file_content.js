const camelCaseName = require('../lib/camel_case_name');

const templateFileContent = (name) => {
	const functionName = camelCaseName(name);
	const testContent =  (
`const ${functionName} = require('../lib/${name}');

// Add your test suites here
	describe('', () => {
		test('should ', () => {
			expect(${functionName}()).toBe(0)
		});
	});`
);
	const functionContent  =  (
`// What are we trying to do?

const ${functionName} = () => {
	return 0;
};`
	);
	const packageJsonContent =  (
`{
	"name": "${name}",
	"version": "1.0.0",
	"main": "index.js",
	"license": "MIT",
	"scripts": {
		"test": "jest --watch --coverage"
	},
	"devDependencies": {
		"jest": "^27.3.1"
	}
}`
	);
	const dotGitIgnore = (
`node_modules
.env
.DS_Store
coverage

`
	)
	return {
		test: testContent,
		function: functionContent,
		packageJson: packageJsonContent,
		gitIgnore: dotGitIgnore
	};
}

module.exports = templateFileContent;