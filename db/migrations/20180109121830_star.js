
exports.up = function(knex, Promise) {
  return knex.schema.createTable('star', table => {
    table.increments()
    table.integer('challenge_id')
    table.foreign('challenge_id').references('id').inTable('challenge')
    table.integer('game_id')
    table.foreign('game_id').references('id').inTable('game')
    table.text('comments').defaultTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('star')
};
