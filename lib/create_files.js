const fs = require('fs');

const createFiles = (name, content) => {
	fs.writeFileSync(`${name}/__tests__/${name}.test.js`, content.test);
	fs.writeFileSync(`${name}/lib/${name}.js`, content.function);
	fs.writeFileSync(`${name}/package.json`, content.packageJson);
	fs.writeFileSync(`${name}/.gitignore`, content.gitIgnore);
};

module.exports = createFiles;