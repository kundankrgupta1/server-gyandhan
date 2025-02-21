const express = require("express");
const { regUser, loginUser, getUser } = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.post("/reg", regUser);
userRouter.post("/login", loginUser);
userRouter.get("/:id", getUser);

module.exports = userRouter;