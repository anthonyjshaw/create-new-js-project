// What are we trying to do?

const execSync = require('child_process').execSync

const createProjectDir = (projectName) => {
	const cmd = `mkdir -p ${projectName}`;
	execSync(cmd);
};

module.exports = createProjectDir;
