const knex = require('../../db/connection')

class GameModel {

  // static getAllGames(){
  //   return knex('game')
  // }

  static getAllGamesWithStars(){
    return knex('game')
      .then(games => {
        const promises = games.map(game => {
          return this.starsByGameId(game.id)
            .then(stars => {
              game.stars = stars
              return game
            })
        })
        return Promise.all(promises)
      })
  }

  static starsByGameId(id){
    return knex('star')
      .select('*')
      .innerJoin('game', 'game.id', 'game_id')
      .where('game.id', id)
  }

}

module.exports = GameModel
