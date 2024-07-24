const todoRoute = require("express").Router();
const TodoController = require("../controllers/TodoController");

todoRoute.get("/", TodoController.getTodos);
todoRoute.post("/add", TodoController.addTodo);
todoRoute.get("/find/:id", TodoController.findById);
todoRoute.delete("/delete/:id", TodoController.deleteTodo);
todoRoute.put("/update/:id", TodoController.updateTodo);

module.exports = todoRoute;
