const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const connectDB = require('./config/database')

const routes = require('./routes/todos')

//Use .env file in config folder
require('dotenv').config({ path: './config/.env' })

const app = express()

app.use(express.json())
app.use(cors())

connectDB()

const PORT = process.env.port || 5000

app.use('/api', routes)

app.get('/', (req, res) => {
  res.json({ message: 'Hi there, welcome from the homepage' })
})
app.listen(PORT, () => console.log(`Listening on: ${PORT}`))
