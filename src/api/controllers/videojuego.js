const Videojuego = require('../models/videojuego')

const getVideojuegos = async (req, res, next) => {
  try {
    const allVideojuegos = await Videojuego.find().populate('consoles')
    return res.status(200).json(allVideojuegos)
  } catch (error) {
    return res.status(404).json('Error')
  }
}

const postVideojuego = async (req, res, next) => {
  try {
    const newVideojuego = new Videojuego(req.body)

    if (req.user.rol === 'admin') {
      newVideojuego.verified = true
    } else {
      newVideojuego.verified = false
    }

    const videojuegoSaved = await newVideojuego.save()
    return res.status(201).json(videojuegoSaved)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const deleteVideojuego = async (req, res, next) => {
  try {
    const { id } = req.params
    const videojuegoDeleted = await Videojuego.findByIdAndDelete(id)
    return res.status(200).json(videojuegoDeleted)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const updateVideojuego = async (req, res, next) => {
  try {
    const { id } = req.params
    const newVideojuego = new Videojuego(req.body)
    newVideojuego._id = id
    const updatedVideojuego = await Videojuego.findByIdAndUpdate(
      id,
      newVideojuego,
      { new: true }
    )
    return res.status(200).json(updatedVideojuego)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const getVideojuegoByConsole = async (req, res, next) => {
  try {
    const { consoles } = req.params
    const videojuego = await Videojuego.find({ consoles: consoles })
    return res.status(200).json(videojuego)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

module.exports = {
  getVideojuegos,
  postVideojuego,
  deleteVideojuego,
  updateVideojuego,
  getVideojuegoByConsole
}
