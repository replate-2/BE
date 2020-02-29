
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('businesses').del()
    .then(function () {
      // Inserts seed entries
      return knex('businesses').insert([
        {id: 1, businessName: 'Business1', businessAddress: '123 N. Street', businessPhone: '1234567890', userId: 1},
        {id: 2, businessName: 'Business2', businessAddress: '456 S. Street', businessPhone: '1234567890', userId: 3},
      ]);
    });
};
