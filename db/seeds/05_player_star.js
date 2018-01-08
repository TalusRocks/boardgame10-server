
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('player_star').del()
    .then(() => {
        return knex('player_star').insert([
          {id: 1, player_id: 1, star_id: 1, score: 45, winner: false},
          {id: 2, player_id: 1, star_id: 2, score: 57, winner: true},
          {id: 3, player_id: 4, star_id: 5, score: 61, winner: true}
        ])
    }).then(() => {
      return knex.raw(`SELECT setval('player_star_id_seq', (SELECT MAX(id) FROM player_star));`)
    })
}
