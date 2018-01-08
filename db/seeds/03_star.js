
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('star').del()
    .then(() => {
        return knex('star').insert([
          {id: 1, game_id: 1, isCompleted: true, comments: 'such a fun game'},
          {id: 2, game_id: 1, isCompleted: true, comments: '7 players!!'},
          {id: 3, game_id: 1, isCompleted: true, comments: 'won with Polania and only one encounter!'},
          {id: 4, game_id: 2, isCompleted: true, comments: 'ePoe/eRey'},
          {id: 5, game_id: 2, isCompleted: true, comments: 'close game!'},
          {id: 6, game_id: 3, isCompleted: true, comments: 'first time with Tuscany expansion'}
        ])
    }).then(() => {
      return knex.raw(`SELECT setval('star_id_seq', (SELECT MAX(id) FROM star));`)
    })
}
