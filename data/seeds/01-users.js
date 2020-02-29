
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'User1', password: 'password', phoneNumber: '5555555555', role: 'Business'},
        {id: 2, username: 'User2', password: 'password', phoneNumber: '5555555555', role: 'Business'},
        {id: 3, username: 'User3', password: 'password', phoneNumber: '5555555555', role: 'Volunteer'},
        {id: 4, username: 'User4', password: 'password', phoneNumber: '5555555555', role: 'Volunteer'}
      ]);
    });
};
