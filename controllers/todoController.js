const TodoModel = require('../models/todoModel')

module.exports.getTodos = async (req, res) => {
  const todo = await TodoModel.find()

  res.send(todo)
}
