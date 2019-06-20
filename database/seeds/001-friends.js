
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Friends').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Friends').insert([
        {id: 1, name: 'Sarah'},
        {id: 2, name: 'Norah'},
        {id: 3, name: 'Amelia'}
      ]);
    });
};
