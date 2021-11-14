const mkdirSync = require('fs').mkdirSync;

const createProjectDir = (projectName) => {
	mkdirSync(`./${projectName}`, {recursive: true});
};

module.exports = createProjectDir;
