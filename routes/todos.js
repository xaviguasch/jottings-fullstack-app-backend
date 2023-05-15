const { Router } = require('express')
const { getTodos } = require('../controllers/todoController')
const { saveTodo } = require('../controllers/todoController')
const { updateTodo } = require('../controllers/todoController')

const router = Router()

router.get('/', getTodos)

router.post('/save', saveTodo)

router.put('/:id', updateTodo)

module.exports = router
