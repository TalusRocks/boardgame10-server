
exports.up = function(knex, Promise) {
  return knex.schema.createTable('player', table => {
    table.increments()
    table.string('name').notNullable().defaultTo('')
    table.string('BGGusername').notNullable().defaultTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('player')
};
