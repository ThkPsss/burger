var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(name, cb) {
      orm.insertOne("burgers", "name", name, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("bubrgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
    deleteOne: function(condition, cb) {
      orm.delete("burgers", condition, function(res) {
        cb(res);
      });
    }
  };

  module.exports = burger;
