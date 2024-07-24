const todoRoute = require("./todo");

const route = require("express").Router();

route.get("/", (req, res) => {
  res.send("Hello World!");
});

route.get("/menu", (req, res) => {
  res.send("Page menu");
});

route.get("/profile", (req, res) => {
  res.send("page profile");
});

const todoRoutes = require("./todo");
route.use("/todos", todoRoute);

// route.get("/items", (req, res) => {
//   res.send("items");

module.exports = route;
