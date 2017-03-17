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
	var obj = new obj;
	obj.open = function(Arguments){
		Arguments = {
	        "LayoutId": "f1216dd9a8834c54a187bcf1de7e5874",
	        "WinId": "b1wJ6zJsdbuUbtxrBXMoBsjcpJAQ6JWj",
	        "Layout": [
	            {
	                "WinId": "b1wJ6zJsdbuUbtxrBXMoBsjcpJAQ6JWj",
	                "X": 1920,
	                "Y": 0,
	                "Width": 3840,
	                "Height": 2160,
	                "Type": "video",
	                "Resource": {
	                    "Source": "local",
	                    "Path": "d:\\video\\zoolonvideo.mp4",
	                    "Volume": 50
	                }
	            }
	        ]
	    }
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
	obj.close = function(Arguments){
		Arguments =  {
	        "LayoutId": "f1216dd9a8834c54a187bcf1de7e5874",
	        "WinId": "b1wJ6zJsdbuUbtxrBXMoBsjcpJAQ6JWj",
	        "Layout": [
	            {
	                "WinId": "b1wJ6zJsdbuUbtxrBXMoBsjcpJAQ6JWj"
	            }
	        ]
	    }
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
	obj.pause = function(Arguments){
		var data={
			"receiverName": "Deamon-1",
		    "senderName": "web",
		    "messageID": "123456",
		    "messageType": "",
		    "Service":"videoCall",
		    "Action":"pause"
		}
		return data;
	}
	obj.play = function(){
		var data={
			"receiverName": "Deamon-1",
		    "senderName": "web",
		    "messageID": "123456",
		    "messageType": "",
		    "Service":"videoCall",
		    "Action":"play"
		}
		return data;
	}
	obj.setPlayMode = function(type){
		type=0
		var data={
			"receiverName": "Deamon-1",
		    "senderName": "web",
		    "messageID": "123456",
		    "messageType": "",
		    "Service":"videoCall",
		    "Action":"setPlayMode",
		    "PlayMode":type
		}
		return data;
	}
	obj.setPosition = function(type){
		var data={
			"receiverName": "Deamon-1",
		    "senderName": "web",
		    "messageID": "123456",
		    "messageType": "",
		    "Service":"videoCall",
		    "Action":"setPosition",
		    "Position":type
		}
		return data;
	}
	obj.setVolume = function(type){
		var data={
			"receiverName": "Deamon-1",
		    "senderName": "web",
		    "messageID": "123456",
		    "messageType": "",
		    "Service":"videoCall",
		    "Action":"setVolume",
		    "Volume":type
		}
		return data;
	}
	return obj;
}
