
exports.up = function(knex, Promise) {
  return knex.schema.createTable('game', table => {
    table.increments()
    table.string('name').notNullable().defaultTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('game')
};
