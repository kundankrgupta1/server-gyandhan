const mongoose = require("mongoose")
const todoSchema = mongoose.Schema({
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true
	},
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
		default: "low",
		required: true
	}
}, { timestamps: true })

const todoModel = mongoose.model("Todo", todoSchema)

module.exports = todoModel