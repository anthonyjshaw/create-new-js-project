const createFunctionAndTest = require('./bin/create_function_and_test');

async function main() {
	try {
		const project = await createFunctionAndTest(process.argv[2])
		if (project !== undefined) {
			console.log(project)
		}
	} catch (error) {
		console.log(error)
	}

}

main()

