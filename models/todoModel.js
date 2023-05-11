const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('Todo', todoSchema)

// const todoSchema = new mongoose.Schema({
//   text: {
//     type: String,
//     required: [true, 'A todo must have a text'],
//   },
//   author: {
//     type: String,
//     required: [true, 'A todo must have an author'],
//   },
// })

// const Todo = mongoose.model('Todo', todoSchema)

// const testTodo = new Todo({
//   text: 'This is the first todo',
//   author: 'Romero White',
// })

// testTodo
//   .save()
//   .then((doc) => {
//     console.log(doc)
//   })
//   .catch((err) => console.log('ERROR: ', err))
