const execSync = require('child_process').execSync;

const createTestAndLibDir = (name) => {
	execSync(`mkdir -p ${name}/__test__ ${name}/lib`);
}

module.exports = createTestAndLibDir;