
exports.up = function(knex, Promise) {
  return knex.schema.createTable('challenge_game', table => {
    table.integer('challenge_id')
    table.foreign('challenge_id').references('id').inTable('challenge')
    table.integer('game_id')
    table.foreign('game_id').references('id').inTable('game')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('challenge_game')
};
