const { Recipe } = require('../models/index')

const createRecipe = async (req, res) => {
  try {
    const newRecipe = await new Recipe(req.body)
    await newRecipe.save()
    return res.status(201).json({
      newRecipe
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllRecipes = async (req, res) => {
  try {
    const allRecipes = await Recipe.find()
    return res.status(200).json({ allRecipes })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createRecipe,
  getAllRecipes
}
