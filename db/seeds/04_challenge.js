
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('challenge').del()
    .then(() => {
        return knex('challenge').insert([
          {id: 1},
          {id: 2},
          {id: 3}
        ])
    }).then(() => {
      return knex.raw(`SELECT setval('challenge_id_seq', (SELECT MAX(id) FROM challenge));`)
    })
}
