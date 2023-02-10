const { Router } = require('express')
const router = Router()
const recipeController = require('../controllers/recipeController.js')
const commentController = require('../controllers/commentController.js')

router.get('/', (req, res) => res.send('Welcome to the Homepage!'))

router.post('/recipes', recipeController.createRecipe)

router.get('/recipes', recipeController.getAllRecipes)

router.get('/recipes/:id', recipeController.getRecipeById)

router.put('/recipes/:id', recipeController.updateRecipe)

router.delete('/recipes/:id', recipeController.deleteRecipe)

router.get('/comments', commentController.createComment)

module.exports = router
