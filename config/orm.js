var connection = require("./connection.js");

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
    insertOne: function(tableInput, columnName, burger_name, cb){
        var queryString = "INSERT INTO ?? (??) VALUES (?)"
        connection.query(queryString, [tableInput, columnName, burger_name], function(err, res){
            if (err) {
                throw err
            }
            cb(res)
        })
    },
	updateOne: function(burger, cb) {
        console.log('burger ...')
        console.log(burger)
		var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
		connection.query(queryString, [burger.tableInput, burger.updateColumnName, burger.updateRowVal, burger.searchColumnName, burger.searchRowVal], function(err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	}
}
module.exports = orm;
