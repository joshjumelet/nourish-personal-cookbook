const { Schema } = require('mongoose')

const Recipe = new Schema(
  {
    title: { type: String, required: true },
    ingredients: { type: String, required: true },
    instructions: { type: String, required: true },
    image: { type: String },
    comment_id: { type: Schema.Types.ObjectId, ref: 'comment_id' }
  },
  { timestamps: true }
)

module.exports = Recipe
