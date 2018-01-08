
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('player').del()
    .then(() => {
        return knex('player').insert([
          {id: 1, name: 'Kate', BGGusername: ''},
          {id: 2, name: 'Julie', BGGusername: ''},
          {id: 3, name: 'Linnea', BGGusername: ''},
          {id: 4, name: 'Cameron', BGGusername: 'goldspire'}
        ])
    }).then(() => {
      return knex.raw(`SELECT setval('player_id_seq', (SELECT MAX(id) FROM player));`)
    })
}
