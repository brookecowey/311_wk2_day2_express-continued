const express = require("express");
const controller = express.Controller();
const comments = require("../data/comments");
const { addListener } = require("nodemon");

controller.get("/comments", function (req, res) {
  res.json(comments);
});

controller.get("/comments/:id", function (req, res) {
  let id = parseInt(req.params.id);
  let found = comments.find((comment) => comment._id == id);

  res.json(found);
});

controller.post("/comments", function (req, res) {
  req.body = {
    _id: comments.length + 1,
    body: req.body.body,
    postId: 1,
  };
  comments.push(req.body);
});
//list
controller.get("/list", function (req, res) {
  res.json(list);
});

controller.get("/show", function (req, res) {
  res.json(show);
});

controller.post("/create", function (req, res) {
  res.json(create);
});

module.exports = { list, show, create };
