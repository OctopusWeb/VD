var express = require("express");
var app = express();
var router = express.Router();
var utility = require("utility");

var mysql      = require('mysql');
var pool = mysql.createPool({  
    host     : '192.168.1.254',
    user     : 'root',
    password : 'root',
    database : 'vd' ,
    port	 : '3320'
});
router.get('/login', function(req, res) {
	console.log(req.query)
	var name = req.query.name;
	var pass = req.query.password; 
    pool.getConnection(function(err, connection) {
        if (err) throw err;
        var userGetSql = 'SELECT password FROM `t_user_info` WHERE userName="'+name+'"';
        connection.query(userGetSql, function(err, result) {
			if (err) {
				console.log(err);
				return;
			}
			if(pass == result[0].password){
				console.log(utility.md5(result[0].password))
			}else{
				console.log("err")
			}			
			res.send(result);
		});
    });
});
app.use(router);
app.listen("3000");
