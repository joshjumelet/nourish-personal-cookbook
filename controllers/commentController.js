const { Comment, Recipe } = require('../models')

const createComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body)
    await comment.save()
    const recipeFind = await Recipe.findById(req.params.id)
    recipeFind.comment.push(comment._id)
    recipeFind.save()
    return res.status(201).json({
      comment
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getRecipeComments = async (req, res) => {
  try {
    const comments = await Comment.find({ Recipe: req.params.id })
    return res.status(200).json(comments)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(comment)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params
    const commentDelete = await Comment.findByIdAndDelete(id)
    if (commentDelete) {
      return res.status(200).send('Comment has been deleted.')
    }
    throw new Error('Comment not found.')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createComment,
  getRecipeComments,
  updateComment,
  deleteComment
}
