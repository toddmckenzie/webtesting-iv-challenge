exports.up = function(knex, Promise) {
    return knex.schema.createTable('Friends', tbl => {
        tbl.increments();
        tbl.string('name').notNullable();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('Friends');
  };
  