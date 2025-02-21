const todoModel = require("../models/todo.model");
const userModel = require("../models/user.model")

const createTodo = async (req, res) => {
	const { _id } = req.user;
	const { title, priority } = req.body;
	try {
		const user = await userModel.findById(_id);

		if (!user) {
			return res.status(400).json({
				message: "User not found, unauthorisez access",
				success: false
			})
		}

		const newTodo = new todoModel({ author: user._id, title, priority });

		await newTodo.save();

		return res.status(200).json({
			message: "Todo created successfully",
			success: true
		})

	} catch (error) {
		return res.status(500).json({
			message: error.message,
			success: false
		})
	}
}
const updateTodo = async (req, res) => {
	const { _id } = req.user;
	const { title, isCompleted, priority } = req.body;
	try {
		const user = await userModel.findById(_id)
		if (!user) {
			return res.status(401).json({
				message: "User not found!!",
				success: false
			})
		}

		const todo = await todoModel.findById(req.params.id);

		if (!todo) {
			return res.status(401).json({
				message: "todo not fount!!",
				success: false
			})
		}

		if (title) todo.title = title;
		if (isCompleted) todo.isCompleted = isCompleted;
		if (priority) todo.priority = priority;

		await todo.save();

		return res.status(200).json({
			message: "Todo updated successfully!!",
			success: true
		})

	} catch (error) {
		return res.status(500).json({
			message: "error catch  >  " + error,
			success: false
		})

	}
}
const deleteTodo = async (req, res) => {
	const { _id } = req.user;

	try {
		const user = await userModel.findById(_id)
		if (!user) {
			return res.status(401).json({
				message: "User not found!!",
				success: false
			})
		}

		const todo = await todoModel.findById(req.params.id);
		if (!todo) {
			return res.status(401).json({
				message: "todo not fount!!",
				success: false
			})
		}

		await todoModel.findByIdAndDelete(req.params.id);

		return res.status(200).json({
			message: "Todo deleted successfully!!",
			success: true
		})
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			success: false
		})
	}
}
const getAllTodos = async (req, res) => {
	const { _id } = req.user;
	
	const { sort, priority } = req.query
	console.log(req.query);

	try {
		const user = await userModel.findById(_id)
		if (!user) {
			return res.status(401).json({
				message: "User not found!!",
				success: false
			})
		}

		let filterCriteria = { author: user._id };
		
		if (priority) {
			filterCriteria.priority = priority.toLowerCase();
		}
		
		let sortCriteria = {};
		if (sort === "newest") {
			sortCriteria = { createdAt: -1 };
		} else if (sort === "oldest") {
			sortCriteria = { createdAt: 1 };
		}

		const todo = await todoModel.find(filterCriteria).sort(sortCriteria);


		return res.status(201).json({
			message: "todo fetched successfully!",
			success: true,
			todo
		})

	} catch (error) {
		return res.status(500).json({
			message: error.message,
			success: false
		})
	}
}
const getSingleTodo = async (req, res) => {
	const { _id } = req.user;

	try {
		const user = await userModel.findById(_id)
		if (!user) {
			return res.status(401).json({
				message: "User not found!!",
				success: false
			})
		}

		const todo = await todoModel.findById(req.params.id);

		return res.status(201).json({
			message: "Single todo fetched successfully!",
			success: true,
			todo
		})

	} catch (error) {
		return res.status(500).json({
			message: error.message,
			success: false
		})
	}
}

module.exports = { createTodo, updateTodo, deleteTodo, getAllTodos, getSingleTodo }