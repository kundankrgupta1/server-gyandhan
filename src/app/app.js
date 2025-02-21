const exprees = require("express");
const userRouter = require("../routes/user.routes");
const todoRouter = require("../routes/todo.routes");

const app = exprees();

app.use(exprees.json());

app.use("/user", userRouter);
app.use("todo", todoRouter);

module.exports = app;
