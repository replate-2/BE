
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pickupRequests').del()
    .then(function () {
      // Inserts seed entries
      return knex('pickupRequests').insert([
        {id: 1, completed: false, foodId: 1, volunteerId: 1},
        {id: 2, completed: false, foodId: 2, volunteerId: 1},
        {id: 3, completed: false, foodId: 3, volunteerId: 2}
      ]);
    });
};
