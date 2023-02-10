const { Comment } = require('../models')

const createComment = async (req, res) => {
  try {
    const newComment = await new Comment(req.body)
    await newComment.save()
    return res.status(201).json({
      newComment
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getRecipeComments = async (req, res) => {
  try {
    const comments = await Comment.find({ recipe: req.params.id })
    return res.status(200).json(comments)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const udpateComment = async (req, res) => {
  try {
    const commentUpdate = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).json(commentUpdate)
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
  udpateComment,
  deleteComment
}
