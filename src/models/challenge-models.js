const knex = require('../../db/connection')

class ChallengeModel {

  static getOneChallenge(id){
    return knex('challenge')
      .where({id})
      .first()
      .then(challenge => {
        const id = challenge.id
        return knex('challenge_game')
          .select('game.id', 'game.name')
          .innerJoin('game', 'game_id', 'game.id')
          .where('challenge_id', id)
          .then(games => {
            challenge.games = games
            return challenge
          })
      }).then(challenge => {
        const games = challenge.games
        const starsPromises = games.map(game => {
          return knex('star').where({ game_id: game.id })
        })

        return Promise.all(starsPromises).then(starsSets => {
          starsSets.forEach((stars, i) => {
            games[i].stars = stars
          })

          challenge.games = games
          return challenge
        })
      })
  }

  static getGamesByChallenge(id){
    return knex('game')
      .select('game.*')
      .innerJoin('challenge_game', 'game_id', 'game.id')
      .where('challenge_id', id)
  }

  static getStarsByChallenge(id){
    return knex('challenge_game')
      .innerJoin('star', 'star.game_id', 'challenge_game.game_id')
      .where('challenge_id', id)
  }



}

module.exports = ChallengeModel
