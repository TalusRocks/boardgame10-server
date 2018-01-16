
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('challenge_game').del()
    .then(() => {
        return knex('challenge_game').insert([
          {challenge_id: 1, game_id: 1},
          {challenge_id: 1, game_id: 2},
          {challenge_id: 1, game_id: 4},
          {challenge_id: 2, game_id: 1},
          {challenge_id: 3, game_id: 3},
          {challenge_id: 3, game_id: 4}
        ])
    })
}
