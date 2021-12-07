const camelCaseName = require('../lib/camel_case_name');

const templateFileContent = (name) => {
	const functionName = camelCaseName(name);
	const testContent =  (
`const ${functionName} = require('../lib/${name}');

// Add your test suites here
describe('', () => {\n
  test('should ', () => {
    expect(${functionName}()).toBe(0);
  });
});`
);
	const functionContent  =  (
`// Function

const ${functionName} = () => {
	return 0;
};

module.exports = ${functionName};`
	);
	const packageJsonContent =  (
`{
	"name": "${name}",\n	"version": "1.0.0",\n	"main": "index.js",\n	"license": "MIT",\n
	"scripts": {
		"test": "jest --watch --coverage"
	},
	"devDependencies": {
		"jest": "^27.3.1"
	}
}`
	);
	const dotGitIgnore = (`node_modules\n.env\n.DS_Store\ncoverage`);
	const readme = (`# ${name}`);
	return {
		test: testContent,
		function: functionContent,
		packageJson: packageJsonContent,
		gitIgnore: dotGitIgnore,
		readme: readme
	};
}

module.exports = templateFileContent;