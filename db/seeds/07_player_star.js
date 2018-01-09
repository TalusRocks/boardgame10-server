
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('player_star').del()
    .then(() => {
        return knex('player_star').insert([
          {player_id: 1, star_id: 1},
          {player_id: 1, star_id: 2},
          {player_id: 1, star_id: 3},
          {player_id: 2, star_id: 2},
          {player_id: 3, star_id: 3}
        ])
    })
}
