$at.SocketFun = function(){
	var socket;
	this.connect = function(){
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
	this.sOpen = function(){
		alert('connect success!')
	}
	this.sError = function(){
		alert('connect error')
	}
	this.sMessage = function(msg){
		alert('server says:'+msg)
	}
	this.sClose = function(){
		alert('connect close')
	}
	this.send = function(json){
		socket.send('hello ,i am siren!')
	}
	this.close = function(){
		socket.close();
	}
}