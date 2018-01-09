
exports.up = function(knex, Promise) {
  return knex.schema.createTable('challenge', table => {
    table.increments()
    table.string('name').notNullable().defaultTo('Challenge')
    table.integer('num_games').notNullable().defaultTo(10)
    table.integer('num_plays').notNullable().defaultTo(10)
    table.boolean('isCompleted').notNullable().defaultTo(false)
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('challenge')
};
