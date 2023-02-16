const { Schema } = require('mongoose')

const Comment = new Schema(
  {
    name: { type: String, required: true },
    text: { type: String, required: true },
    image: { type: String }
    // recipe_id: [{ type: Schema.Types.ObjectId, ref: 'recipe_id' }]
  },
  { timestamps: true }
)

module.exports = Comment
