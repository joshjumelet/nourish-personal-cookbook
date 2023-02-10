const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('Welcome to the Homepage!'))

router.post('/recipes', controllers.createRecipe)

router.get('/recipes', controllers.getAllRecipes)

module.exports = router
