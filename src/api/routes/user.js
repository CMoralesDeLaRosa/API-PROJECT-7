const { isAuth, isAdmin } = require('../../middlewares/auth')
const {
  getUsers,
  register,
  login,
  deleteUser,
  updateUser
} = require('../controllers/user')

const userRoutes = require('express').Router()

userRoutes.get('/', [isAdmin], getUsers)
userRoutes.post('/register', register)
userRoutes.post('/login', login)
userRoutes.delete('/:id', [isAuth], deleteUser)
userRoutes.put('/:id', [isAuth], updateUser)

module.exports = userRoutes
