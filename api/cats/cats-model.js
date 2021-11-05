const db = require("../../data/dbConfig.js");

module.exports = {
  getAll,
  insert,
  remove
}

function getAll() {
  return db("cats")
}

function insert() {
  return db('cats')
}

function remove() {
  return db('cats')
}