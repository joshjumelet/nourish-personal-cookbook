const { Schema } = require('mongoose')

const Recipe = new Schema(
  {
    title: { type: String, required: true },
    ingredients: { type: String, required: true },
    instructions: { type: String, required: true },
    image: { type: String },
    comment: { type: Schema.Types.ObjectId, ref: 'comment' }
  },
  { timestamps: true }
)

module.exports = Recipe
