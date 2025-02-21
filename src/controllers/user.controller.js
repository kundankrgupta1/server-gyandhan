const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();


const regUser = async (req, res) => {
	const { name, email, password } = req.body;

	try {
		const user = await userModel.findOne({ email });

		if (user) {
			return res.status(400).json({
				message: "User already exists",
				success: false
			})
		}
		const hashPassword = bcrypt.hashSync(password, 10);
		const newUser = new userModel({ name, email, password: hashPassword });
		await newUser.save();
		return res.status(200).json({
			message: "User created successfully",
			success: true
		})
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			success: false
		})
	}
}

const loginUser = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await userModel.findOne({ email });
		if (!user) {
			return res.status(400).json({
				message: "User not found",
				success: false
			})
		}

		const isMatch = bcrypt.compareSync(password, user.password);

		if (!isMatch) {
			return res.status(400).json({
				message: "Invalid credentials",
				success: false
			})
		}

		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" })

		return res.status(200).json({
			message: "Login Success",
			success: true,
			token,
			user: {
				_id: user._id,
				name: user.name,
				email: user.email
			}
		})

	} catch (error) {
		return res.status(500).json({
			message: error.message,
			success: false
		})
	}
}

const getUser = async (req, res) => {
	const { _id } = req.user;
	try {
		const user = await userModel.findById(_id).select("-password");
		if (!user) {
			return res.status(400).json({
				message: "Invalid Request",
				success: false
			})
		}

		return res.status(200).json({
			message: "User Fetched",
			success: true,
			user
		})
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			success: false
		})
	}
}

module.exports = { regUser, loginUser, getUser };