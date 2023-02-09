const mongoose = require('mongoose')
const RecipeSchema = require('./recipe')
const CommentSchema = require('./comment')

const Recipe = mongoose.model('Recipe', RecipeSchema)
const Comment = mongoose.model('Comment', CommentSchema)

module.exports = {
  Recipe,
  Comment
}
