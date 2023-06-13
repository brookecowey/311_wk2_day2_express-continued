const express = require("express");
const controller = express.Controller();
const products = require("../data/products");

controller.get("/products", function (req, res) {
  res.json(products);
});

controller.get("/products/:id", function (req, res) {
  let id = parseInt(req.params.id);
  let found = products.find((product) => product._id == id);

  res.json(found);
});

controller.post("/products", function (req, res) {
  req.body = {
    _id: products.length + 1,
    body: req.body.body,
    postId: 1,
  };
  products.push(req.body);
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
