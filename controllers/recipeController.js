const { Recipe } = require('../models')

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

const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params
    const recipeId = await Recipe.findById(id)
    if (recipeId) {
      return res.status(200).json({ recipeId })
    }
    return res.status(404).send('Recipe with the specified ID does not exist.')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateRecipe = async (req, res) => {
  try {
    const recipeUpdate = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).json(recipeUpdate)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Recipe.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Recipe deleted.')
    }
    throw new Error('Recipe not found.')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe
}
