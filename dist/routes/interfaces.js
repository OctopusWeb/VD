var express = require('express');
var router = express.Router();
var utility = require("utility");
var mysql= require('mysql');
var shortid = require("js-shortid");
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
router.get('/entry/device',function(req,res){
	var entryDeviceGetSql = 'SELECT *  FROM `t_device`';
	pool.query(entryDeviceGetSql, function(err, result) {
		if (err) {
			console.log("b");
			return;
		}
		res.send({state:true,data:result})
	})
})
router.get('/entry/content',function(req,res){
	var entryContentGetSql = 'SELECT *  FROM `t_content`';
	pool.query(entryContentGetSql, function(err, result) {
		if (err) {
			console.log("b");
			return;
		}
		res.send({state:true,data:result})
	})
})
router.post('/entryPost/content',function(req,res){
	var param = req.body;
	var data = new Date();
	var time = data.getTime();
	var contentId = shortid.gen();
	var name = param.name;
	var path = param.path;
	var typeCode = param.typeCode;
	var entryContentPostSql = 'INSERT INTO `t_content`(contentId,name,path,typeCode,time) VALUES(?,?,?,?,?)';
	pool.query(entryContentPostSql, [contentId,name,path,typeCode,time],function(err, result) {
		if (err) {
			console.log(err);
			return;
		}
		res.send({state:true,data:{contentId:contentId}});
	})
})
router.post("/entryChange/content",function(req,res){
	var param = req.body;
	var contentId = param.contentId;
	var name = param.name;
	var path = param.path;
	var typeCode = param.typeCode;
	
	var entryContentChangeSql = "UPDATE `t_content` SET name ='"+name+"', path ='"+path+"', typeCode ='"+typeCode+"' WHERE contentId ='"+contentId+"'"
	pool.query(entryContentChangeSql,function(err, result) { 
		if (err) {
			console.log(err);
			return;
		}
		res.send({state:true,data:{contentId:contentId}});
	})
})
router.post('/entryPost/device',function(req,res){
	var param = req.body;
	var data = new Date();
	var time = data.getTime();
	var deviceId = shortid.gen();
	var name = param.name;
	var daemonId = param.daemonId;
	var macAddress = param.macAddress;
	var remark = param.remark;
	var entryDevicePostSql = 'INSERT INTO `t_device`(deviceId,name,daemonId,macAddress,remark,time) VALUES(?,?,?,?,?,?)';
	pool.query(entryDevicePostSql, [deviceId,name,daemonId,macAddress,remark,time],function(err, result) {
		if (err) {
			console.log(err);
			return;
		}
		res.send({state:true,data:{deviceId:deviceId}});
	})
})
router.post("/entryChange/device",function(req,res){
	var param = req.body;
	var deviceId = param.deviceId;
	var name = param.name;
	var macAddress = param.macAddress;
	var remark = param.remark;
	var daemonId = param.daemonId;
	var entryDeviceChangeSql = "UPDATE `t_device` SET name ='"+name+"', macAddress ='"+macAddress+"', remark ='"+remark+"', daemonId ='"+daemonId+"' WHERE deviceId ='"+deviceId+"'"
	console.log(entryDeviceChangeSql)
	pool.query(entryDeviceChangeSql,function(err, result) {
		if (err) {
			console.log(err);
			return;
		}
		res.send({state:true,data:{contentId:deviceId}});
	})
})

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