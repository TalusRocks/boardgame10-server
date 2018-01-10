const knex = require('../../db/connection')

class ChallengeModel {

  static getOneChallenge(id){
    //get a single challenge
    return knex('challenge')
      .where({id})
      .first()
      //pass on that challenge...
      .then(challenge => {
        const id = challenge.id
        //get games by challenge id by joining two tables
        return knex('challenge_game')
          .select('game.id', 'game.name')
          .innerJoin('game', 'game_id', 'game.id')
          .where('challenge_id', id)
          //take those games by challenge id and add them to each challenge
          .then(games => {
            challenge.games = games
            return challenge
          })
          //then hold onto the challenge and games for later... and go get the stars for each game
      }).then(challenge => {
        //here are the games by id for later
        const games = challenge.games
        //map over the games (per challenge) and return an array of promises to return stars where the game id matches
        const starsPromises = games.map(game => {
          return knex('star').where({ game_id: game.id })
        })
        //unwrap that array of promises, and for each, attach the (inner) array of stars to each game (held onto games from earlier )
        return Promise.all(starsPromises).then(starsSets => {
          starsSets.forEach((stars, i) => {
            games[i].stars = stars
          })
          //stick those games back on
          challenge.games = games
          //and return the singular challenge!
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
