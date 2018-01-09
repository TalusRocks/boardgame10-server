const model = require('../models/challenge-models')

class ChallengeController {

  static getOneChallenge(req, res, next){
    model.getOneChallenge(req.params.id)
      .then(challenge => {
        res.json({challenge})
      })
  }

  static getGamesByChallenge(req, res, next){
    model.getGamesByChallenge(req.params.id)
      .then(games => {
        res.json({games})
      })
  }


}

module.exports = ChallengeController
