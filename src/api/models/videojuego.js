const mongoose = require('mongoose')

const videojuegoSchema = new mongoose.Schema(
  {
    imgUrl: { type: String, required: true },
    name: { type: String, required: true },
    year: { type: Number, required: true },
    description: { type: String, required: true },
    consoles: [
      { type: mongoose.Types.ObjectId, required: false, ref: 'consolas' }
    ],
    verified: { type: Boolean, required: true, default: false }
  },
  { timestamps: true, collection: 'videojuegos' }
)

const Videojuego = mongoose.model(
  'videojuegos',
  videojuegoSchema,
  'videojuegos'
)

module.exports = Videojuego
