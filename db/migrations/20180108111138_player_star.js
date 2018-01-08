
exports.up = function(knex, Promise) {
  return knex.schema.createTable('player_star', table => {
    table.increments()
    table.integer('player_id')
    table.foreign('player_id').references('id').inTable('player')
    table.integer('star_id')
    table.foreign('star_id').references('id').inTable('star')
    table.integer('score').notNullable().defaultTo(0)
    table.boolean('winner').notNullable().defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('player_star')
};
