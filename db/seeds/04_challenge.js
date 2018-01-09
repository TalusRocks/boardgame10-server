
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('challenge').del()
    .then(() => {
        return knex('challenge').insert([
          {id: 1, name: '10 by 10 Challenge', num_games: 10, num_plays: 10, isCompleted: false},
          {id: 2, name: '5 x 5 Challenge', num_games: 5, num_plays: 5, isCompleted: false},
          {id: 3, name: '2 x 20 Challenge', num_games: 2, num_plays: 20, isCompleted: false}
        ])
    }).then(() => {
      return knex.raw(`SELECT setval('challenge_id_seq', (SELECT MAX(id) FROM challenge));`)
    })
}
