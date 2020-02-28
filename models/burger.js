var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    insertOne: function(burgerName, cb) {
      orm.insertOne("burgers", "burger_name", burgerName, function(res) {
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
