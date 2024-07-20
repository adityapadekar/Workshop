const express = require("express");
const todoController = require("../controllers/index");

const router = express.Router();

router.get("/todo", todoController.getAllTodos);

router.get("/todo/:id", todoController.getTodoById);

router.post("/todo", todoController.createTodo);

router.put("/todo/:id", todoController.updateTodo);

router.delete("/todo/:id", todoController.deleteTodo);

module.exports = router;
