
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('businesses').del()
    .then(function () {
      // Inserts seed entries
      return knex('businesses').insert([
        {id: 1, username: 'Business1', password: 'password', businessName: 'Business1', businessAddress: '123 N. Street', businessPhone: '1234567890'},
        {id: 2, username: 'Business2', password: 'password', businessName: 'Business2', businessAddress: '456 S. Street', businessPhone: '1234567890'},
        {id: 3, username: 'Business3', password: 'password', businessName: 'Business3', businessAddress: '1234 W. Street', businessPhone: '1234567890'}
      ]);
    });
};
