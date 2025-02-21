const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const { getAllTodos, getSingleTodo, createTodo, updateTodo, deleteTodo } = require("../controllers/todo.controller");
const todoRouter = express.Router();

todoRouter.post("/create", authMiddleware, createTodo);
todoRouter.put("/:id", authMiddleware, updateTodo);
todoRouter.delete("/:id", authMiddleware, deleteTodo);
todoRouter.get("/all", authMiddleware, getAllTodos);
todoRouter.get("/:id", authMiddleware, getSingleTodo);

module.exports = todoRouter;