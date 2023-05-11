const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Hi there, from the todos route' })
})

module.exports = router
