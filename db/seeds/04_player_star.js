
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('player_star').del()
    .then(() => {
        return knex('player_star').insert([
          {player_id: 1, star_id: 1, score: 45}
        ])
    }).then(() => {
      return knex.raw(`SELECT setval('player_star_id_seq', (SELECT MAX(id) FROM player_star));`)
    })
}
