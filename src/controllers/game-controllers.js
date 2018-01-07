const model = require('../models/game-models')

class GameController {

  static getAllGames(req, res, next){
    model.getAllGames().then(games => {
      res.json(games)
    })
  }

  // static getAllGamesWithStars(req, res, next){
  //   model.getAllGamesWithStars().then(games => {
  //     res.json(games)
  //   })
  // }
  //
  // static starsByGameId(req, res, next){
  //   model.starsByGameId(req.params.gameId).then(games => {
  //     res.json(games)
  //   })
  // }

}

module.exports = GameController
