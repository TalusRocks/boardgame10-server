
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('star').del()
    .then(() => {
        return knex('star').insert([
          {id: 1, challenge_id: 1, game_id: 1, comments: "close game!"},
          {id: 2, challenge_id: 1, game_id: 2, comments: "fun times"},
          {id: 3, challenge_id: 1, game_id: 4, comments: "a riot"},
          {id: 4, challenge_id: 1, game_id: 4, comments: "wow!!"},
          {id: 5, challenge_id: 1, game_id: 4, comments: "LOVE"},
          {id: 6, challenge_id: 2, game_id: 2, comments: "this star belongs in challenge id TWO"}
        ])
    }).then(() => {
      return knex.raw(`SELECT setval('star_id_seq', (SELECT MAX(id) FROM star));`)
    })
}
