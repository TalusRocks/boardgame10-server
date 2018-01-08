
exports.seed = function(knex, Promise) {
  return knex('game').del()
    .then(() => {
        return knex('game').insert([
          {id: 1, name: 'Scythe', goal: 10},
          {id: 2, name: 'Star Wars: Destiny', goal: 10},
          {id: 3, name: 'Viticulture', goal: 10}
        ])
    }).then(() => {
      return knex.raw(`SELECT setval('game_id_seq', (SELECT MAX(id) FROM game));`)
    })
}
