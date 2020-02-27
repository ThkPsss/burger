var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

module.exports = router;

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
    console.log(req.body.name)
    if(req.body.name !== ""){
      burger.insertOne(req.body.name, function(){
        res.redirect("/")
      })
    }
  });

  router.put("/:id", function(req, res) {
    console.log(req.params.id)
    burger.updateOne(req.params.id, function () {
      res.redirect("/")
    })
  });

  router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  module.exports = router;
