const db = require("../../data/dbConfig.js");

module.exports = {
  getAll,
  insert,
  remove,
};

function getAll() {
  return db("cats");
}

async function insert(cat) {
  const [id] = await db("cats").insert(cat);
  return db("cats").where({ id }).first();
}

function remove(id) {
  return db("cats");
}
