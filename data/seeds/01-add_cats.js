exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("cats")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cats").insert([
        { id: 1, name: "Walter", age: 10, colors: "Black & white" },
        { id: 2, name: "Pedro", age: 8, colors: "Black" },
        { id: 3, name: "Moira", age: 3, colors: "Grey & white" },
      ]);
    });
};
