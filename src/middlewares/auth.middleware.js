const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		if (!token) {
			return res.status(401).json({
				message: "token not provided",
				success: false
			})
		}
		jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
			if (err) {
				return res.status(401).json({
					message: "Unauthorized Access",
					success: false
				})
			}
			req.user = decoded;
			next()
		})
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			success: false
		})
	}
}

module.exports = authMiddleware;
