const express = require('express')
const mongoose = require('mongoose')

const connectDB = require('./config/database')

const routes = require('./routes/todos')

//Use .env file in config folder
require('dotenv').config({ path: './config/.env' })

const mongoConnect = require('./config/database')

const app = express()

connectDB()

const PORT = process.env.port || 5000

app.use(routes)

app.listen(PORT, () => console.log(`Listening on: ${PORT}`))
