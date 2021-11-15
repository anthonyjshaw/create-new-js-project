// Dependencies
const createFiles = require('./create_files');
const createProjectDir = require('./create_project_dir');
const createTestAndLibDir = require('./create_test_and_lib_dir');
const templateFileContent = require('./template_file_content');
const {execSync} = require('child_process');
const { existsSync } = require('fs');

const createJSProject = async (name) => {

	let projectName = name;
	// Guard clauses
	if (projectName === undefined) {
		const error = "Error: no project name provided. Please enter a name for your project."
		console.log(error);
		return error;
	}

	projectName = projectName.trim();
		
	if (existsSync(`./${projectName}`)) {
		const error = (
			`Oops! There's already a project called "${projectName}". \nTo access it, please enter the following command in your terminal:\n\n\`cd ${projectName}\`\nTo delete it, please enter:\`rm -rf ${projectName}\``
		);
		console.log(error);
		return error;
	}

	console.log('Creating project directories...');
	console.log('Test and lib directories added!');
	createProjectDir(projectName);
	createTestAndLibDir(projectName);
	
	const content = templateFileContent(projectName);
	console.log('Creating files...');
	createFiles(projectName, content);
	console.log('\n');


	console.log('installing node modules and initializing git...')
	execSync('yarn install && git init && git add . && git commit -m "Initialized project"', {
		cwd: `./${projectName}`
	});
	console.log('\n');
	console.log(`Success! 😃 Visit your project by entering the command: \`cd ${projectName}\`.`);
}


module.exports = createJSProject;

