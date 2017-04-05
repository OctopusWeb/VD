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
	var screenHostGetSql = 'SELECT *  FROM `t_screen_host`';
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
					pool.query(screenDescribeGetSql, function(errDescribe, resultDescribe) {
						if (errDescribe) {
							console.log("b");
							return;
						}
						pool.query(screenHostGetSql, function(errHost, resultHost) {
							if (errLayout) {
								console.log("b");
								return;
							}
							res.send({state:true,screenInfo:resultScreen,layout:resultLayout,describe:resultDescribe,resultHost:resultHost})
						})
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
	var controlUrl = param.controlUrl;
	var entryContentPostSql = 'INSERT INTO `t_content`(contentId,name,path,typeCode,time,controlUrl) VALUES(?,?,?,?,?,?)';
	pool.query(entryContentPostSql, [contentId,name,path,typeCode,time,controlUrl],function(err, result) {
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
	pool.query(entryDeviceChangeSql,function(err, result) {
		if (err) {
			console.log(err);
			return;
		}
		res.send({state:true,data:{contentId:deviceId}});
	})
})

router.post("/screenInfo/addScreen",function(req,res){
	var postData = req.body;
	var param = JSON.parse(postData.data);

	var screenId = shortid.gen();
	var data = new Date();
	var time = data.getTime();
	var screenInfo = {
		columnCount : param.screenInfo.col,
		heightOne :param.screenInfo.hei,
		name :param.screenInfo.title,
		rowCount :param.screenInfo.row,
		widthOne :param.screenInfo.wid
	}
	var screenData = [screenId,screenInfo.columnCount,screenInfo.heightOne,screenInfo.name,screenInfo.rowCount,screenInfo.widthOne,time]
	var initScreenPost = "INSERT INTO `t_screen_info`(screenId,columnCount,heightOne,name,rowCount,widthOne,time) VALUES(?,?,?,?,?,?,?)";
	
	var layoutId = shortid.gen();
	var screenLayout = {
		controlUrl : param.drawInfo[0].controlUrl,
		name : param.drawInfo[0].title,
		usePercent : param.drawInfo[0].usePercent,
		idx : 1
	}
	var layoutData = [layoutId,screenLayout.controlUrl,screenLayout.name,screenId,screenLayout.usePercent,screenLayout.idx]
	var initLayoutPost = "INSERT INTO `t_screen_layout`(layoutId,controlUrl,name,screenId,usePercent,idx) VALUES(?,?,?,?,?,?)";
	var winId = shortid.gen()
	var describe = {
		x : param.drawInfo[0].screens[0].screenInfo[2],
		y : param.drawInfo[0].screens[0].screenInfo[3],
		width : param.drawInfo[0].screens[0].screenInfo[0],
		height : param.drawInfo[0].screens[0].screenInfo[1],
		scale : param.drawInfo[0].usePercent,
		item : param.drawInfo[0].screens[0].items[0]
	}
	var describeData = [screenId,layoutId,describe.x,describe.y,describe.width,describe.height,winId,describe.scale,describe.item];
	var initDescribePost = "INSERT INTO `t_describe` (screenId,layoutId,x,y,width,height,winId,scale,items) VALUES(?,?,?,?,?,?,?,?,?)";
	pool.query(initScreenPost, screenData,function(err1, result1) {
		if (err1) {
			console.log(err1);
			return;
		}
		pool.query(initLayoutPost, layoutData,function(err2, result2) {
			if (err2) {
				console.log(err2);
				return;
			}
			pool.query(initDescribePost, describeData,function(err3, result3) {
				if (err3) {
					console.log(err3);
					return;
				}
				res.send({state:true,data:{screenId:screenId,layoutId:layoutId,winId:winId}});
			})
		})
	})
})

router.post("/screenInfo/changeScreen",function(req,res){
	var postData = req.body;
	var param = JSON.parse(postData.data);
	var data = new Date();
	var time = data.getTime();
	var screenInfo = {
		screenId : param.screenInfo.id,
		columnCount : param.screenInfo.col,
		heightOne :param.screenInfo.hei,
		name :param.screenInfo.title,
		rowCount :param.screenInfo.row,
		widthOne :param.screenInfo.wid
	}
	var changeScreenPost = "UPDATE `t_screen_info` SET screenId ='"+screenInfo.screenId+"', columnCount ='"+screenInfo.columnCount+
						"', heightOne ='"+screenInfo.heightOne+"', name ='"+screenInfo.name+"', rowCount ='"+screenInfo.rowCount+
						"', widthOne ='"+screenInfo.widthOne+"', time ='"+time+"' WHERE screenId ='"+screenInfo.screenId+"'";
	
	var screenLayout = {
		controlUrl : param.drawInfo[0].controlUrl,
		layoutId : param.drawInfo[0].id,
		name : param.drawInfo[0].title,
		usePercent : param.drawInfo[0].usePercent,
		idx : 1
	}
	var changeLayoutPost = "UPDATE `t_screen_layout` SET layoutId ='"+screenLayout.layoutId+"', controlUrl ='"+screenLayout.controlUrl+
						"', name ='"+screenLayout.name+"', screenId ='"+screenInfo.screenId+"', usePercent ='"+screenLayout.usePercent+
						"', idx ='"+screenLayout.idx+"' WHERE screenId ='"+screenLayout.layoutId+"'";
						
	var describe = {
		screenId : param.screenInfo.id,
		layoutId : param.drawInfo[0].id,
		winId : param.drawInfo[0].screens[0].id,
		x : param.drawInfo[0].screens[0].screenInfo[2],
		y : param.drawInfo[0].screens[0].screenInfo[3],
		width : param.drawInfo[0].screens[0].screenInfo[0],
		height : param.drawInfo[0].screens[0].screenInfo[1],
		scale : param.drawInfo[0].usePercent,
		item : param.drawInfo[0].screens[0].items
	}
	var changeDescribePost = "UPDATE `t_describe` SET screenId ='"+describe.screenId+"', layoutId ='"+describe.layoutId+
						"', x ='"+describe.x+"', y ='"+describe.y+"', width ='"+describe.width+"', height ='"+describe.height+
						"', winId ='"+describe.winId+"', scale ='"+describe.scale+"', items ='"+describe.item+
						"' WHERE winId ='"+describe.winId+"'";
						
	var hostList = param.screenInfo.host;
	
	var deleteHost = 'DELETE FROM  `t_screen_host` WHERE screenId="'+screenInfo.screenId+'"';
	var addHostPost = "INSERT INTO `t_screen_host`(id,describeJson,deviceId,screenId) VALUES(?,?,?,?)";
	pool.query(changeScreenPost, "",function(err1, result1) {
		if (err1) {
			console.log(err1);
			return;
		}
	})
	pool.query(changeLayoutPost, "",function(err2, result2) {
		if (err2) {
			console.log(err2);
			return;
		}
	})
	pool.query(changeDescribePost, "",function(err3, result3) {
		if (err3) {
			console.log(err3);
			return;
		}
	})
	pool.query(deleteHost, "",function(err4, result4) {
		if (err4) {
			console.log(err4);
			return;
		}
		res.send({state:true})
		for (var i=0;i<hostList.length;i++) {
			id = shortid.gen();
			(function(i){
				var data = [id,hostList[i].describeJson,hostList[i].deviceId,screenInfo.screenId];
				pool.query(addHostPost, data,function(err5, result5) {
					if (err5) { 
						console.log(err5);
						return;
					}
				})
			})(i)
		}
	})
})

router.post("/screenInfo/changeLayout",function(req,res){
	var postData = req.body;
	var param = JSON.parse(postData.data);
	var screenId = param.screenInfo.id;
	var layoutList = param.drawInfo;
	
	var deleteLayout = 'DELETE FROM `t_screen_layout` WHERE screenId="'+screenId+'"';
	var addLayoutPost = "INSERT INTO `t_screen_layout`(layoutId,controlUrl,name,screenId,usePercent,idx,describeJson) VALUES(?,?,?,?,?,?,?)";
	
	var addDescribePost = "INSERT INTO `t_describe`(screenId,layoutId,x,y,width,height,winId,scale,items) VALUES(?,?,?,?,?,?,?,?,?)";
	pool.query(deleteLayout, "",function(err1, result1) {
		if (err1) {
			console.log(err1);
			return;
		}
		var arr = []
		for (var i=0;i<layoutList.length;i++) {
			newlayoutid = shortid.gen(); 
			arr.push([newlayoutid,layoutList[i].id]);
			(function(i,newlayoutid){
				var data = [newlayoutid,layoutList[i].controlUrl,layoutList[i].title,screenId,layoutList[i].usePercent,"1",""];
				pool.query(addLayoutPost, data,function(err2, result2) {
					if (err2) {
						console.log(err2);
						return;
					}
					var layoutId = layoutList[i].id;
					for (var j=0;j<layoutList[i].screens.length;j++) {
						var deleteDescribe = 'DELETE FROM `t_describe` WHERE layoutId="'+layoutId+'"';
						winid = shortid.gen();
						(function(j,winid,deleteDescribe){
							var screens=layoutList[i].screens[j];
							var data1=[screenId,newlayoutid,screens.screenInfo[2],screens.screenInfo[3],screens.screenInfo[0],screens.screenInfo[1],winid,screens.scale,screens.items]
							pool.query(deleteDescribe, "",function(err3, result3) {
								if (err3) {
									console.log(err3);
									return;
								}
								pool.query(addDescribePost, data1,function(err4, result4) {
									if (err4) { 
										console.log(err4);
										return;
									}
								})
							})
						})(j,winid,deleteDescribe)
					}
				})
			})(i,newlayoutid)
		}
		res.send({state:true,data:arr})
	})
})

router.post("/screenInfo/deleteScreen",function(req,res){
	var screenId = req.body.id;
	var deleteDescribe = 'DELETE FROM `t_describe` WHERE screenId="'+screenId+'"';
	var deleteHost = 'DELETE FROM `t_screen_host` WHERE screenId="'+screenId+'"';
	var deleteInfo = 'DELETE FROM `t_screen_info` WHERE screenId="'+screenId+'"';
	var deleteLayout = 'DELETE FROM `t_screen_layout` WHERE screenId="'+screenId+'"';
	pool.query(deleteDescribe, function(err, result) {
		if (err) {
			console.log("b");
			return;
		}
	})
	pool.query(deleteHost, function(err, result) {
		if (err) {
			console.log("b");
			return;
		}
	})
	pool.query(deleteInfo, function(err, result) {
		if (err) {
			console.log("b");
			return;
		}
	})
	pool.query(deleteLayout, function(err, result) {
		if (err) {
			console.log("b");
			return;
		}
	})
	res.send({state:true});
})

router.get("/screenInfo",function(req,res){
	var screenInfoGetSql = 'SELECT *  FROM `t_screen_info`';
    pool.query(screenInfoGetSql, function(err, result) {
		if (err) {
			console.log("b");
			return;
		}
		res.send({state:true,data:result});
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