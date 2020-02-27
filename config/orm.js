var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * from ??"
        connection.query(queryString, [tableInput], function (err, res) {
            if(err){
                throw err
            }
            cb(res)
        })
    },
    insertOne: function(tableInput, columnName, name, cb){
        var queryString = "INSERT INTO ?? (??) VALUES (?)"
        connection.query(queryString, [tableInput, columnName, name], function(err, res){
            if (err) {
                throw err
            }
            cb(res)
        })
    },
    updateOne: function(tableInput, updateColumnName, updateRowVal, searchColumnName, searchRowVal, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?"
        connection.query(queryString, [tableInput, updateColumnName, updateRowVal, searchColumnName, searchRowVal], function(err, res) {
            if (err) {
                throw err
            }
            cb(res)
        })
    },
    deleteOne: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;
    
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    }
}
module.exports = orm;
