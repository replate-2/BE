
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('volunteers').del()
    .then(function () {
      // Inserts seed entries
      return knex('volunteers').insert([
        {id: 1, volunteerName: 'Volunteer1', phoneNumber: '5551234567', userId: 2},
        {id: 2, volunteerName: 'Volunteer2', phoneNumber: '5551234567', userId: 4},
      ]);
    });
};
