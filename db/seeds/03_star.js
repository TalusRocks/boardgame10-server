
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('star').del()
    .then(() => {
        return knex('star').insert([
          {id: 1, game_id: 1, isCompleted: true, comments: 'such a fun game'}
        ])
    }).then(() => {
      return knex.raw(`SELECT setval('star_id_seq', (SELECT MAX(id) FROM star));`)
    })
}
