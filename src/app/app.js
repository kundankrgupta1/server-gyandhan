const exprees = require("express");
const cors = require("cors");
const userRouter = require("../routes/user.routes");
const todoRouter = require("../routes/todo.routes");

const app = exprees();

app.use(exprees.json());

app.use(cors())

app.get("/ok", (req, res) => res.send("ok"));

app.use("/user", userRouter);
app.use("/todo", todoRouter);

module.exports = app;
