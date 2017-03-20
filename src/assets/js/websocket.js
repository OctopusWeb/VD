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
    console.log('server says:'+msg)
}
function sClose(){
    console.log('connect close')
}
function send(data){
	console.log(JSON.stringify(data));
    socket.send(JSON.stringify(data)); 
}
function close(){
    socket.close();
}

function MultiScreenCall(){
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
}
function Videocall(){
	this.open = function(Arguments){
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
	this.close = function(Arguments){
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
	this.pause = function(winId){
		var data={
			"receiverName": winId,
		    "senderName": "web",
		    "messageID": "123456",
		    "messageType": "",
		    "Service":"videoCall",
		    "Action":"pause"
		}
		return data;
	}
	this.play = function(winId){
		var data={
			"receiverName": winId,
		    "senderName": "web",
		    "messageID": "123456",
		    "messageType": "",
		    "Service":"videoCall",
		    "Action":"play"
		}
		return data;
	}
	this.setPlayMode = function(winId,type){
		var data={
			"receiverName": winId,
		    "senderName": "web",
		    "messageID": "123456",
		    "messageType": "",
		    "Service":"videoCall",
		    "Action":"setPlayMode",
		    "PlayMode":type
		}
		return data;
	} 
	this.setPosition = function(winId,type){
		var data={
			"receiverName": winId,
		    "senderName": "web",
		    "messageID": "123456",
		    "messageType": "",
		    "Service":"videoCall",
		    "Action":"setPosition",
		    "Position":type
		}
		return data;
	}
	this.setVolume = function(winId,type){
		var data={
			"receiverName": winId,
		    "senderName": "web",
		    "messageID": "123456",
		    "messageType": "",
		    "Service":"videoCall",
		    "Action":"setVolume",
		    "Volume":type
		}
		return data;
	}
}
