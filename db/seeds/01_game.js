
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('game').del()
    .then(() => {
        return knex('game').insert([
          {id: 1, name: 'Clans of Caledonia'},
          {id: 2, name: 'Grand Austria Hotel'},
          {id: 3, name: 'Kokoro'}
        ])
    }).then(() => {
      return knex.raw(`SELECT setval('game_id_seq', (SELECT MAX(id) FROM game));`)
    })
}
