const Todo = require("../models/index");

module.exports.getAllTodos = async (req, res) => {
  const todos = await Todo.find({});

  res.status(200).json({
    success: true,
    message: "Todos fetched successfully",
    data: todos,
  });
};

module.exports.getTodoById = async (req, res) => {
  const { id } = req.params;

  const todo = await Todo.findById(id);

  res.status(200).json({
    success: true,
    message: "Todo fetched successfully",
    data: todo,
  });
};

module.exports.createTodo = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const todo = await Todo.create({
    title,
    description,
  });

  res.status(201).json({
    success: true,
    message: "Todo created successfully",
  });
};

module.exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  await Todo.findByIdAndUpdate(id, {
    title,
    description,
  });

  res.status(200).json({
    success: true,
    message: "Todo updated successfully",
  });
};

module.exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  await Todo.findByIdAndDelete(id);

  res.status(200).json({
    success: true,
    message: "Todo deleted successfully",
  });
};
