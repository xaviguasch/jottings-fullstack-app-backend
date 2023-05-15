const { Router } = require('express')
const {
  getTodos,
  saveTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todoController')

const router = Router()

router.get('/', getTodos)

router.post('/save', saveTodo)

router.put('/:id', updateTodo)

router.delete('/:id', deleteTodo)

module.exports = router
