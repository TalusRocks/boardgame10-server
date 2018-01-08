
exports.up = function(knex, Promise) {
  return knex.schema.createTable('game', table => {
    table.increments()
    table.string('name').notNullable().defaultTo('')
    table.integer('goal').notNullable().defaultTo(10)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('game')
};
