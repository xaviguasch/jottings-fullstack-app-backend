const { Router } = require('express')
const {
  getTodos,
  saveTodo,
  updateTodo,
  deleteTodo,
  deleteCompleted,
} = require('../controllers/todoController')

const router = Router()

router.get('/', getTodos)

router.post('/save', saveTodo)

router.put('/:id', updateTodo)

router.delete('/clear-completed', deleteCompleted)

// needs to be after the previous route, or else it won't be detected
router.delete('/:id', deleteTodo)

module.exports = router
