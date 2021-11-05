exports.up = function (knex) {
  return knex.schema.createTable("cats", (tbl) => {
    tbl.increments();
    tbl.string("name", 255).unique().notNullable();
    tbl.integer("age");
    tbl.string("colors", 255);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cats");
};
