const app = require("./src/app/app");
const ConnectDB = require("./src/config/db");

const PORT = process.env.PORT || 3000;

ConnectDB().then(() => {
	app.listen(PORT, () => {
		console.log(`[SERVER]: Server is running... ${PORT}`)
	})
}).catch((error) => {
	console.log(`[Error]: ${error.message}`)
})