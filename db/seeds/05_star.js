
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('star').del()
    .then(() => {
        return knex('star').insert([
          {id: 1, challenge_id: 1, game_id: 1, comments: "close game!"},
          {id: 2, challenge_id: 1, game_id: 2, comments: "fun times"},
          {id: 3, challenge_id: 1, game_id: 3, comments: "just ok"},
          {id: 4, challenge_id: 2, game_id: 2, comments: "cool"},
          {id: 5, challenge_id: 1, game_id: 4, comments: "wow!!"},
          {id: 6, challenge_id: 3, game_id: 5, comments: "hmm"}
        ])
    }).then(() => {
      return knex.raw(`SELECT setval('star_id_seq', (SELECT MAX(id) FROM star));`)
    })
}
