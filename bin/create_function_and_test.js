const fs = require('fs');

const createProjectDir = require('../lib/create_project_dirs');
const createTestAndLibDir = require('../lib/create_test_and_lib_dir');
const templateFileContent = require('../lib/template_file_content');

const createFunctionAndTest = async (name) => {
	const projectName = name;
	if (projectName === undefined) return "Error. Please enter";
	createProjectDir(name);
	await createTestAndLibDir(name);
	const content = await templateFileContent(name);
	await fs.writeFile(`${name}/__test__/${name}.test.js`, content.test, err => {
		if (err) {
			console.error(err);
			return
		} else {
			console.log(`Created __test__/${name}.test.js!`)
		}
	});
	await fs.writeFile(`${name}/lib/${name}.js`, content.function, err => {
		if (err) {
			console.error(err);
			return;
		} else {
			console.log(`Created ${name}.js!`)
		}
	});

	fs.writeFile(`${name}/package.json`, content.packageJson, err => {
		if (err) {
			console.error(err);
		} else {
			console.log('Created package.json!');
		}
	});
	console.log("Files written!");
}

module.exports = createFunctionAndTest;