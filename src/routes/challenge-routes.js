const express = require('express')
const router = express.Router()
const challengeController = require('../controllers/challenge-controllers')

router.get('/:id', challengeController.getOneChallenge)
router.get('/:id/games', challengeController.getGamesByChallenge)
router.get('/:id/stars', challengeController.getStarsByChallenge)
router.post('/:id', challengeController.addStarPlay)
router.put('/:id/stars/:starid', challengeController.editStarPlay)

module.exports = router
