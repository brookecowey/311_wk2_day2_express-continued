const express = require("express");
const controller = express.Controller();
const contacts = require("../data/contacts");

controller.get("/contacts", function (req, res) {
  res.json(contacts);
});

controller.get("/contacts/:id", function (req, res) {
  let id = parseInt(req.params.id);
  let found = contacts.find((contact) => contact._id == id);

  res.json(found);
});

controller.post("/contacts", function (req, res) {
  req.body = {
    _id: contacts.length + 1,
    body: req.body.body,
    postId: 1,
  };
  contacts.push(req.body);
});
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
