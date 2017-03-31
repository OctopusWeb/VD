var socket;
function connect(){
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
    socket.send(JSON.stringify(data)); 
}
function close(){
    socket.close();
}
function videoSetInfo(msg){
	console.log(msg.data);
}

function PublicCall(){
	this.open = function (Arguments) {
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
	this.close = function (Arguments) {
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
	this.viewOpen = function(Arguments){
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
	this.viewClose = function(Arguments){
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
	this.stateFun = function(winId,server,action){
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
