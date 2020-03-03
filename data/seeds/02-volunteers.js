
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('volunteers').del()
    .then(function () {
      // Inserts seed entries
      return knex('volunteers').insert([
        {id: 1, username: 'Volunteer1', password: 'password', name: 'Volunteer1', phoneNumber: 1234567890},
        {id: 2, username: 'Volunteer2', password: 'password', name: 'Volunteer2', phoneNumber: 7894561230},
        {id: 3, username: 'Volunteer3', password: 'password', name: 'Volunteer3', phoneNumber: 7891234560}
      ]);
    });
};
