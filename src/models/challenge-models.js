const knex = require('../../db/connection')

class ChallengeModel {

  static getOneChallenge(id){
    return knex('challenge')
      .where({id})
      .first()
  }

  static getGamesByChallenge(id){
    return knex('game')
      .select('game.*')
      .innerJoin('challenge_game', 'game_id', 'game.id')
      .where('challenge_id', id)
  }



}

module.exports = ChallengeModel
