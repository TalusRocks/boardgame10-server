
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
        return knex('users').insert([
          {id: 1, name: 'RJ'},
          {id: 2, name: 'Kate'},
          {id: 3, name: 'Linnea'}
        ])
    }).then(() => {
      return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`)
    })
}
