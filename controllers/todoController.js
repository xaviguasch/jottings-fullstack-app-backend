const TodoModel = require('../models/todoModel')

module.exports.getTodos = async (req, res) => {
  const todo = await TodoModel.find()

  res.send(todo)
}

module.exports.saveTodo = async (req, res) => {
  const { text } = req.body

  const newTodo = await TodoModel.create({ text })

  try {
    res.status(201).json({
      status: 'success',
      data: {
        todo: newTodo,
      },
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    })
  }
}

module.exports.updateTodo = async (req, res) => {
  const body = req.body

  const { isCompleted } = body

  try {
    const updatedTodo = await TodoModel.findByIdAndUpdate(
      req.params.id,
      { isCompleted },
      {
        new: true,
      }
    )

    // const { id } = req.params

    // const oldTodo = await TodoModel.findById(id)

    // const updatedTodo = await TodoModel.findByIdAndUpdate(
    //   id,
    //   { isCompleted: !oldTodo.isCompleted },
    //   {
    //     new: true,
    //   }
    // )

    res.status(201).json({
      status: 'success',
      data: {
        todo: updatedTodo,
      },
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    })
  }
}

module.exports.deleteTodo = async (req, res) => {
  const { id } = req.params

  try {
    await TodoModel.findByIdAndDelete(id)

    res.status(201).json({
      status: 'success',
      data: null,
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    })
  }
}

module.exports.deleteCompleted = async (req, res) => {
  try {
    await TodoModel.deleteMany({ isCompleted: true })

    res.status(201).json({
      status: 'success',
      data: null,
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    })
  }
}
