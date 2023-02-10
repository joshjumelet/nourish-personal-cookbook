const { Router } = require('express')
const router = Router()
const recipeController = require('../controllers/recipeController.js')
const commentController = require('../controllers/commentController.js')

/// Homepage Test ///
router.get('/', (req, res) => res.send('Welcome to the Homepage!'))

/// Recipe Routes ///
router.post('/recipes', recipeController.createRecipe)

router.get('/recipes', recipeController.getAllRecipes)

router.get('/recipes/:id', recipeController.getRecipeById)

router.put('/recipes/:id', recipeController.updateRecipe)

router.delete('/recipes/:id', recipeController.deleteRecipe)

/// Comment Routes ///
router.get('/comments', commentController.createComment)

router.get('/comments/:id', commentController.getRecipeComments)

router.put('/comments/:id', commentController.udpateComment)

router.delete('/comments/:id', commentController.deleteComment)

module.exports = router
