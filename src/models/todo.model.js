const mongoose = require("mongoose")
const todoSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	isCompleted: {
		type: Boolean,
		default: false
	},
	priority: {
		type: String,
		enum: ["low", "medium", "high"],
		default: "low"
	}
}, { timestamps: true })

const todoModel = mongoose.model("Todo", todoSchema)

module.exports = todoModel