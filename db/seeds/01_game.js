
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('game').del()
    .then(() => {
        return knex('game').insert([
          {id: 1, name: 'Scythe'},
          {id: 2, name: 'Star Wars: Destiny'},
          {id: 3, name: 'Viticulture'}
        ])
    }).then(() => {
      return knex.raw(`SELECT setval('game_id_seq', (SELECT MAX(id) FROM game));`)
    })
}
