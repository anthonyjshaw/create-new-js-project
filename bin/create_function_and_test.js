#!/usr/bin/env node
'use strict';

// Dependencies
const createFiles = require('../lib/create_files');
const createProjectDir = require('../lib/create_project_dir');
const createTestAndLibDir = require('../lib/create_test_and_lib_dir');
const templateFileContent = require('../lib/template_file_content');
const {exec, execSync} = require('child_process');

const { existsSync } = require('fs');

const createFunctionAndTest = async () => {
	const projectName = process.argv[2];
	
	// Guard clauses
	if (projectName === undefined) {
		const error = "Error: no project name provided. Please enter a name for your project."
		console.log(error);
		return error;
	};
		
	if (existsSync(`./${projectName}`)) {
		const error = (
			`Oops! There's already a project called "${projectName}". \nTo access it, please enter the following command in your terminal:\n\n\`cd ${projectName}\`\nTo delete it, please enter:\`rm -rf ${projectName}\``
		);
		console.log(error);
		return error;
	}
	console.log('creating project directories...')
	console.log('Test and lib directories added!');
	createProjectDir(projectName);
	createTestAndLibDir(projectName);
	
	console.log()
	const content = templateFileContent(projectName);
	createFiles(projectName, content)

	console.log('installing yarn and initializing git...')
	const yarnMessage = execSync('yarn install && git init && git add . && git ci -m "Initialized project"', {
		cwd: `./${projectName}`
	  });
	console.log('\n');
	console.log(`Success! 😃 Visit your project by entering the command: \`cd ${projectName}\`.`)
}

// createFunctionAndTest();
module.exports = createFunctionAndTest;
process.exit(0);
