
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('food').del()
    .then(function () {
      // Inserts seed entries
      return knex('food').insert([
        {id: 1, foodType: 'donuts', lbsOfFood: '1', preferredPickupTime: '2020-03-07 17:30:00', businessId: 1},
        {id: 2, foodType: 'vegetables', lbsOfFood: '10', preferredPickupTime: '2020-03-07 17:30:00', businessId: 2},
        {id: 3, foodType: 'meat', lbsOfFood: '5', preferredPickupTime: '2020-03-07 17:30:00', businessId: 3},
      ]);
    });
};
