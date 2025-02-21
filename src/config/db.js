const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const ConnectDB = async () => {
	try {
		const connectInstance = await mongoose.connect(
			`${process.env.MONGO_URI}/${process.env.DBNAME}`
		)
		console.log(`[DATABASE]: MongoDB Connected: ${connectInstance.connection.host}`)
	} catch (error) {
		throw new Error(`[Error]: ${error.message}`)
	}
}

module.exports = ConnectDB;