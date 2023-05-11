const { Router } = require('express')
const { getTodos } = require('../controllers/todoController')

const router = Router()

router.get('/', getTodos)

module.exports = router
