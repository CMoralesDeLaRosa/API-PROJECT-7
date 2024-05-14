const { isAdmin, isAuth } = require('../../middlewares/auth')
const {
  getConsolas,
  postConsola,
  updateConsola,
  deleteConsola,
  getConsolaByYear
} = require('../controllers/consola')

const consolaRoutes = require('express').Router()

consolaRoutes.get('/', getConsolas)
consolaRoutes.get('/:year', getConsolaByYear)
consolaRoutes.post('/', [isAuth], postConsola)
consolaRoutes.put('/:id', [isAdmin], updateConsola)
consolaRoutes.delete('/', [isAdmin], deleteConsola)

module.exports = consolaRoutes
