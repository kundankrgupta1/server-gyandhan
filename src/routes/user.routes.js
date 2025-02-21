const express = require("express");
const { regUser, loginUser, getUser } = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const userRouter = express.Router();

userRouter.post("/reg", regUser);
userRouter.post("/login", loginUser);
userRouter.get("/:id", authMiddleware, getUser);

module.exports = userRouter;