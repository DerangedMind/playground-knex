exports.up = function(knex, Promise) {
  return knex.schema.createTable('pastries', t => {
    t.increments()
    t.string('name')
    t.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pastries')
};
