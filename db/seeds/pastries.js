
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pastries').del().then(function () {
    // reset increment
    return knex.raw('ALTER SEQUENCE pastries_id_seq RESTART WITH 1').then(function() {
      // Inserts seed entries
      return knex('pastries').insert([
        {name: 'Croissant'},
        {name: 'Chocolatine'},
        {name: 'Danish'}
      ]);
    })
  });
};
