const mongoose = require('mongoose')

const consolaSchema = new mongoose.Schema(
  {
    imgUrl: { type: String, required: true },
    name: { type: String, required: true },
    year: { type: Number, required: true },
    verified: { type: Boolean, required: true, default: false }
  },
  { timestamps: true, collection: 'consolas' }
)

const Consola = mongoose.model('consolas', consolaSchema, 'consolas')

module.exports = Consola
