var socket;
function connect(){//socket连接
    try{
        socket=new WebSocket($at.socketUrl);
    }catch(e){
        alert('error');
        return;
    }
    socket.onopen = sOpen;
    socket.onerror=sError;
    socket.onmessage=sMessage;
    socket.onclose=sClose
}
function sOpen(){ 
    console.log('connect success!');
}
function sError(){
    console.log('connect error')
}
function sMessage(msg){
	videoSetInfo(msg);
}
function sClose(){
	connect();
    console.log('connect close');
}
function send(data){
	console.log(JSON.stringify(data));
    socket.send(JSON.stringify(data)); 
}
function close(){
    socket.close();
}
function videoSetInfo(msg){
	console.log(msg.data);
}

function PublicCall(){
	this.open = function (Arguments) {//打开布局
		var data = {
			"receiverName": "Deamon-1",
			"senderName": "web",
			"messageID": "123456",
			"messageType": "",
			"Service": "multiScreenCall",
			"Action": "open",
			"Arguments": Arguments
		};
		return data;
	};
	this.close = function (Arguments) {//关闭布局
		var data = {
			"receiverName": "Deamon-1",
			"senderName": "web",
			"messageID": "123456",
			"messageType": "",
			"Service": "multiScreenCall",
			"Action": "close",
			"Arguments": Arguments
		};
		return data;
	};
	this.viewOpen = function(Arguments){//打开窗口
		var data = {
			"receiverName": "Deamon-1",
		    "senderName": "web",
		    "messageID": "123456",
		    "messageType": "",
		    "Service": "multiScreenCall",
		    "Action": "openWindow",
		    "HostId":"daemon0",
		    "Arguments": Arguments
		}
		return data;
	}
	this.viewClose = function(Arguments){//关闭窗口
		var data = {
			"receiverName": "Deamon-1",
		    "senderName": "web",
		    "messageID": "123456",
		    "messageType": "",
		    "Service": "multiScreenCall",
		    "Action": "closeWindow",
		    "HostId":"daemon0",
		    "Arguments": Arguments
		}
		return data;
	}
	this.stateFun = function(winId,server,action){//发送命令
		var data={
			"receiverName": winId,
		    "senderName": "web",
		    "messageID": "123456",
		    "messageType": "",
		    "Service":server,
		    "Action":action
		}
		return data;
	}
}
