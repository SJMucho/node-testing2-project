const express = require("express");
const Cats = require("./cats/cats-model");
const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/cats", (req, res) => {
  Cats.getAll
    .then((cats) => {
      res.status(200).json(cats);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

server.post("/cats", (req, res) => {
  Cats.insert(req.body)
    .then((cat) => {
      res.status(200).json(cat);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

server.delete("/cats/:id", (req, res) => {
  Cats.remove(req.params.id)
    .then((cat) => {
      res.status(200).json({ message: "Cat has been deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: "No cat with that id exists" });
    });
});

module.exports = server;
