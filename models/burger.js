var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    insertOne: function(burger_name, cb) {
      orm.insertOne("burgers", "burgerName", burger_name, function(res) {
        cb(res);
      });
    },
    updateOne: function(id, cb) {
      orm.updateOne("burgers", "devoured", 1, "id", id, function(res) {
        cb(res);
      });
    }
  };

  module.exports = burger;
