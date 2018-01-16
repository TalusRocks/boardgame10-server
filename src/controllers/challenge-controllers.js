const model = require('../models/challenge-models')

class ChallengeController {

  static getOneChallenge(req, res, next){
    model.getOneChallenge(req.params.id)
      .then(challenge => {
        if(!challenge){
          return next({message: `Can't find a challenge with id of ${req.params.id}`})
        }
        res.json({challenge})
      })
  }

  static getGamesByChallenge(req, res, next){
    model.getGamesByChallenge(req.params.id)
      .then(games => {
        res.json({games})
      })
  }

  static getStarsByChallenge(req, res, next){
    model.getStarsByChallenge(req.params.id)
      .then(stars => {
        res.json({stars})
      })
  }

  static addStarPlay(req, res, next){
    model.addStarPlay(req.params.id, req.body)
      .then(starplay => {
        res.status(201).json({starplay})
      })
  }


}

module.exports = ChallengeController
