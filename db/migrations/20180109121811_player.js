
exports.up = function(knex, Promise) {
  return knex.schema.createTable('player', table => {
    table.increments()
    table.string('name').notNullable().defaultTo('player')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('player')
};
