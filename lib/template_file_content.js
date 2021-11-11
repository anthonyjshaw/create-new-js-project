const camelCaseName = require('../lib/camel_case_name');

const templateFileContent = async (name) => {
	const functionName = camelCaseName(name);
	const testContent = await (
`const ${functionName} = require('../lib/${name}');
	describe('', () => {
		test('should ', () => {
			expect(${functionName}()).toBe(0)
		});
	});`
);
	const functionContent  = await (
`// What are we trying to do?

const ${functionName} = () => {
	return 0;
};`
	);
	const packageJsonContent = await (
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
	return {
		test: testContent,
		function: functionContent,
		packageJson: packageJsonContent
	};
}

module.exports = templateFileContent;