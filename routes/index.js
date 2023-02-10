const { Router } = require('express')
const router = Router()
const recipeController = require('../controllers/recipeController.js')

router.get('/', (req, res) => res.send('Welcome to the Homepage!'))

router.post('/recipes', recipeController.createRecipe)

router.get('/recipes', recipeController.getAllRecipes)

router.get('./recipes/:id', recipeController.getRecipeById)

module.exports = router
