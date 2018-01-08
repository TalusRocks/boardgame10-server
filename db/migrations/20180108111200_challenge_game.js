
exports.up = function(knex, Promise) {
  return knex.schema.createTable('challenge_game', table => {
    table.increments()
    table.integer('challenge_id')
    table.foreign('challenge_id').references('id').inTable('challenge')
    table.integer('game_id')
    table.foreign('game_id').references('id').inTable('game')
    table.integer('goal').notNullable().defaultTo(10)
    table.boolean('isCompleted').notNullable().defaultTo(false)
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('challenge_game')
};
