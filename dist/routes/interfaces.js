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
	var screenInfoGetSql = 'SELECT *  FROM `t_screen_info`';
	var screenLayoutGetSql = 'SELECT *  FROM `t_screen_layout`';
	var screenDescribeGetSql = 'SELECT *  FROM `t_describe`';
    pool.query(userGetSql,[name,utility.md5(pass)], function(errUser, resultUser) {
		if (errUser) {
			console.log("b");
			return;
		}
		if(resultUser.length==0){
			res.send({state:false,data:resultUser})
		}else{
			pool.query(screenInfoGetSql, function(errScreen, resultScreen) {
				if (errScreen) {
					console.log("b");
					return;
				}
				pool.query(screenLayoutGetSql, function(errLayout, resultLayout) {
					if (errLayout) {
						console.log("b");
						return;
					}
					pool.query(screenDescribeGetSql, function(errLayout, resultDescribe) {
						if (errLayout) {
							console.log("b");
							return;
						}
						console.log(resultDescribe.length)
						res.send({state:true,screenInfo:resultScreen,layout:resultLayout,describe:resultDescribe})
					})
				})
				
			})
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