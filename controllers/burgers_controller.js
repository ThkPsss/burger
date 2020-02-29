var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/", function(req, res) {
    console.log(req.body.burgerName)
    if(req.body.burgerName !== ""){
      burger.insertOne(req.body.burgerName.trim(), function(){
        res.redirect("/")
      })
    }
  });

  router.put("/:id", function(req, res) {
    console.log("What im getting" + req.params.id);
    const burgerInfo = {
      tableInput: 'burgers', 
      updateColumnName: 'devoured', 
      updateRowVal: 1, 
      searchColumnName: 'id', 
      searchRowVal: req.params.id
    }
    console.log('burgerInfo ...')
    console.log(burgerInfo);
    
    burger.updateOne(burgerInfo, function() {
      console.log("Made it back ...")
      res.redirect("/");
    })
  })

  module.exports = router;
