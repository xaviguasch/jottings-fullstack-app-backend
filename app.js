const express = require('express')
const mongoose = require('mongoose')

const connectDB = require('./config/database')

//Use .env file in config folder
require('dotenv').config({ path: './config/.env' })

const mongoConnect = require('./config/database')

const app = express()

connectDB()

const PORT = process.env.port || 5000

app.get('/test', (req, res, next) => {
  res.json({ msg: 'welcome to the api' })
})

app.listen(PORT, () => console.log(`Listening on: ${PORT}`))
