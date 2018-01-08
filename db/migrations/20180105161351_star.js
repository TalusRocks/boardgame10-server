
exports.up = function(knex, Promise) {
  return knex.schema.createTable('star', table => {
    table.increments()
    table.integer('game_id')
    table.foreign('game_id').references('id').inTable('game')
    table.boolean('isCompleted').notNullable().defaultTo(false)
    table.text('comments').defaultTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('star')
};
