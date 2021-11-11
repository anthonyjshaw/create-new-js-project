const camelCaseName = (str) => {
	try {
		const newName = str.replace(/_/g, ' ').split(' ');
		for (let i = 1; i < newName.length; i++){
			newName[i] = capitalize(newName[i]);
		}
		return newName.join("");
		
	} catch (error) {
		
	}
}

function capitalize(word) {
	return `${word[0].toUpperCase()}${word.slice(1)}`
}

module.exports = camelCaseName;


