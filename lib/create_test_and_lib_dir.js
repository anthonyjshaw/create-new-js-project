const mkdirSync = require('fs').mkdirSync;

const createTestAndLibDir = (name) => {
	const dirs = ['__test__', 'lib'];
	dirs.forEach(e => {
		mkdirSync(`./${name}/${e}`, {recursive: true});
	});
}

module.exports = createTestAndLibDir;