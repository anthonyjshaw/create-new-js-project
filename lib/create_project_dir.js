// What are we trying to do?

const exec = require('child_process').execSync

const createProjectDir = (projectName) => {
	const cmd = `mkdir ${projectName}
	cd ${projectName}
	`;
	execSync(cmd);
}

module.exports(createProjectDir);
