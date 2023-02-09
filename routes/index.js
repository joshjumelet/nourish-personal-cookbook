const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => res.send('Welcome to the Homepage!'))

module.exports = router
