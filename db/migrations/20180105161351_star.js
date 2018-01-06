
exports.up = function(knex, Promise) {
  return knex.schema.createTable('star', table => {
    table.increments()
    table.boolean('isCompleted').notNullable().defaultTo(false)
    table.text('comments').defaultTo('')
    table.integer('game_id')
    table.foreign('game_id').references('id').inTable('game')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('star')
};
