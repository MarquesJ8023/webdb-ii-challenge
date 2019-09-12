
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, 'VIN': "22223i3h3l333", "make": "Tesla", "model": "Model 3", "mileage": 111},
        {id: 2, 'VIN': "32223i3h3l333", "make": "Chevrolet", "model": "Tahoe", "mileage": 100000},
        {id: 3, 'VIN': "42223i3h3l333", "make": "Dodge", "model": "Charger", "mileage": 45000}
      ]);
    });
};
