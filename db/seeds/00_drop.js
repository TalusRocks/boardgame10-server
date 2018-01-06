
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('player_star').del()
    .then(() => {
        return knex('star').del()
    })
    .then(() => {
        return knex('player').del()
    })
    .then(() => {
        return knex('game').del()
    })
}
