const db = require("../../data/dbConfig");
const express = require("express");
const server = express();
server.use(express.json());

module.exports = {
  add,
  find,
  findBy,
  findById
};

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function find() {
  return db("users").select("id", "username", "password");
}

function findBy(userfilter) {
  return db("users").where(userfilter);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
