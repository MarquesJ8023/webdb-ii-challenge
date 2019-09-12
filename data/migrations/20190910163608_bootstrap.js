
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.integer('VIN').unique().notNullable();
      tbl.text('make').notNullable();
      tbl.string('model').notNullable();
      tbl.decimal('mileage').notNullable();
      tbl.boolean('Title Status');

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
