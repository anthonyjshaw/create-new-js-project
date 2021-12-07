const nameHeadline = (name) => {
	const headlinedName = name.split(/_|-/)
	return headlinedName.map(e => `${e[0].toUpperCase()}${e.slice(1)}`).join(' ');
}

module.exports = nameHeadline;