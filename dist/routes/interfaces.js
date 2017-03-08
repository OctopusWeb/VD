var express = require('express');
var router = express.Router();
var utility = require("utility");
var mysql= require('mysql');
var pool = mysql.createPool({  
    host     : '192.168.1.254',
    user     : 'root',
    password : 'root',
    database : 'vd' ,
    port	 : '3320'
});


router.get('/login', function(req, res){
	var name = req.query.name || req.params.name;
	var pass = req.query.password || req.parms.password;
	var userGetSql = 'SELECT *  FROM `t_user_info` WHERE userName=? AND password=?';
    pool.query(userGetSql,[name,utility.md5(pass)], function(err, result) {
		if (err) {
			console.log("b");
			return;
		}
		if(result.length==0){
			res.send({state:false,data:result})
		}else{
			res.send({state:true,data:result[0]})
		}
	})
});
router.get("/screenInfo",function(req,res){
	var screenInfoGetSql = 'SELECT *  FROM `t_screen_info`';
    pool.query(screenInfoGetSql, function(err, result) {
		if (err) {
			console.log("b");
			return;
		}
		res.send({state:true,data:result})
	})
})
router.get("/screenHost",function(req,res){
	var screenInfoGetSql = 'SELECT *  FROM `t_screen_host`';
    pool.query(screenInfoGetSql, function(err, result) {
		if (err) {
			console.log("b");
			return;
		}
		res.send({state:true,data:result})
	})
})
router.get("/device",function(req,res){
	var screenInfoGetSql = 'SELECT *  FROM `t_device`';
    pool.query(screenInfoGetSql, function(err, result) {
		if (err) {
			console.log("b");
			return;
		}
		res.send({state:true,data:result})
	})
})
router.get("/content",function(req,res){
	var screenInfoGetSql = 'SELECT *  FROM `t_content`';
    pool.query(screenInfoGetSql, function(err, result) {
		if (err) {
			console.log("b");
			return;
		}
		res.send({state:true,data:result})
	})
})
router.get("/screenLayout",function(req,res){
	var screenInfoGetSql = 'SELECT *  FROM `t_screen_layout`';
    pool.query(screenInfoGetSql, function(err, result) {
		if (err) {
			console.log("b");
			return;
		}
		res.send({state:true,data:result})
	})
})
module.exports = router;