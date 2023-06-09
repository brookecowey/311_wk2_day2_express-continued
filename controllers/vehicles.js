const express = require('express')
const controller = express.Controller()
const vehicles = require("../data/vehicles");

controller.get("/vehicles", function(req, res){


  res.json(vehicles);
});

controller.get("/vehicles/:id", function(req, res){

  let id = parseInt(req.params.id);
  let found = vehicles.find(vehicle => vehicle._id == id)

  res.json(found);

});


controller.post("/vehicles", function(req, res){

  req.body = {
  "_id": vehicles.length + 1,
  "body": req.body.body,
  "postId": 1
  
  }
  vehicles.push(req.body)

});


controller.get("/list", function(req, res){

  res.json(list);
  
  
  });
  
  controller.get("/show", function(req, res){
  
    res.json(show);
    
    
    });
  
    controller.post("/create", function(req, res){
  
      res.json(create);
      
      
      });
  
  
    module.exports = { list, show, create }


