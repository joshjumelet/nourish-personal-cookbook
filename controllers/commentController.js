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

module.exports = {
  createComment
}
