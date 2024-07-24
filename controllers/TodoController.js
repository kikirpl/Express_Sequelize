// destructuring tabel/database todo
const { where } = require("sequelize");
const { todo } = require("../models");

// queri select all dari database postgree
class TodoController {
  static getTodos(req, res) {
    todo
      .findAll({
        order: [["id", "ASC"]],
      })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  static addTodo(req, res) {
    const { task, status } = req.body;
    todo
      .create({
        task,
        status,
      })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  static findById(req, res) {
    let id = +req.params.id;
    // + ngerubah dari string ke number
    todo
      .findByPk(id)
      .then((result) => {
        if (result !== null) {
          res.json(result);
        } else {
          res.json({
            message: "todo not found",
          });
        }
      })
      .catch((err) => {
        res.json(err);
      });
  }

  static deleteTodo(req, res) {
    let id = +req.params.id;
    todo
      .destroy({
        where: { id },
      })
      .then((result) => {
        if (result === 1) {
          res.json({ message: "todo has been deleted" });
        } else {
          res.json({ message: "todo failed to delete" });
        }
      })
      .catch((err) => {
        res.json(err);
      });
  }

  static updateTodo(req, res) {
    let id = +req.params.id;
    const { task, status } = req.body;

    todo
      .update(
        {
          task,
          status: Boolean(status),
        },
        {
          where: { id },
        }
      )
      .then((result) => {
        if (result !== 1) {
          res.json({ message: "todo has been update" });
        } else {
          res.json({ message: "todo failed to delete" });
        }
      })
      .catch((err) => {
        res.json(err);
      });
  }
}
module.exports = TodoController;
