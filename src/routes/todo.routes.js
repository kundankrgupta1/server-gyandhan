const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const { getAllTodos, getSingleTodo, createTodo, updateTodo, deleteTodo } = require("../controllers/todo.controller");

const todoRouter = express.Router();

todoRouter.post("/add", authMiddleware, createTodo);
todoRouter.patch("/:id", authMiddleware, updateTodo);
todoRouter.delete("/delete/:id", authMiddleware, deleteTodo);
todoRouter.get("/all", authMiddleware, getAllTodos);
todoRouter.get("/:id", authMiddleware, getSingleTodo);

module.exports = todoRouter;