
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('challenge_game').del()
    .then(() => {
        return knex('challenge_game').insert([
          {id: 1, challenge_id: 1, game_id: 1, goal: 10, isCompleted: false},
          {id: 2, challenge_id: 2, game_id: 2, goal: 10, isCompleted: false},
          {id: 3, challenge_id: 3, game_id: 3, goal: 10, isCompleted: false}
        ])
    }).then(() => {
      return knex.raw(`SELECT setval('challenge_game_id_seq', (SELECT MAX(id) FROM challenge_game));`)
    })
}