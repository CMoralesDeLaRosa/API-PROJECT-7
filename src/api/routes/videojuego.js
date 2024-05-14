const { isAuth, isAdmin } = require('../../middlewares/auth')
const {
  getVideojuegos,
  postVideojuego,
  updateVideojuego,
  deleteVideojuego,
  getVideojuegoByConsole
} = require('../controllers/videojuego')

const videojuegoRoutes = require('express').Router()

videojuegoRoutes.get('/', getVideojuegos)
videojuegoRoutes.post('/', [isAuth], postVideojuego)
videojuegoRoutes.put('/:id', [isAdmin], updateVideojuego)
videojuegoRoutes.delete('/:id', [isAdmin], deleteVideojuego)
videojuegoRoutes.get('/:consoles', getVideojuegoByConsole)

module.exports = videojuegoRoutes
