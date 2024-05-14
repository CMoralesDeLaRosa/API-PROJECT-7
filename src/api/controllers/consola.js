const Consola = require('../models/consola')

const getConsolas = async (req, res, next) => {
  try {
    const allConsolas = await Consola.find()
    return res.status(200).json(allConsolas)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const getConsolaByYear = async (req, res, next) => {
  try {
    const { year } = req.params
    const consolas = await Consola.find({ year: { $lte: year } })
    return res.status(200).json(consolas)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const postConsola = async (req, res, next) => {
  try {
    const newConsola = new Consola(req.body)

    if (req.user.rol === 'admin') {
      newConsola.verified = true
    } else {
      newConsola.verified = false
    }
    const consolaSaved = await newConsola.save()
    return res.status(201).json(consolaSaved)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const deleteConsola = async (req, res, next) => {
  try {
    const { id } = req.params
    const consolaDeleted = await Consola.findByIdAndDelete(id)
    return res.status(200).json(consolaDeleted)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const updateConsola = async (req, res, next) => {
  try {
    const { id } = req.params
    const newConsola = new Consola(req.body)
    newConsola._id = id
    const updatedConsola = await Consola.findByIdAndUpdate(id, newConsola, {
      new: true
    })
    return res.status(200).json(updatedConsola)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

module.exports = {
  getConsolas,
  postConsola,
  deleteConsola,
  updateConsola,
  getConsolaByYear
}
