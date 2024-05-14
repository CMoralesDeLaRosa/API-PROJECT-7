require('dotenv').config()

const express = require('express')
const { connectDB } = require('./src/config/db')
const videojuegoRoutes = require('./src/api/routes/videojuego')
const consolaRoutes = require('./src/api/routes/consola')
const userRoutes = require('./src/api/routes/user')

const app = express()

connectDB()

app.use(express.json())

app.use('/api/v1/videojuegos', videojuegoRoutes)
app.use('/api/v1/consolas', consolaRoutes)
app.use('/api/v1/users', userRoutes)

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
