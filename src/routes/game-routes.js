const express = require('express')
const router = express.Router()
const gameController = require('../controllers/game-controllers')

router.get('/games', gameController.getAllGames)


module.exports = router
