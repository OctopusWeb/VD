function drawController(ControllerDom){
	var drawArea = ControllerDom.drawArea;
	var drawBox = ControllerDom.drawBox;
	var screenLi = ControllerDom.screenLi;
	var entrySlected = ControllerDom.entrySlected;
	drawFun(drawArea,drawBox,screenLi,entrySlected,selectedScreen);
}
function drawFun(drawArea,drawBox,screenLi,entrySlected,onComplete)
{  
	var boxInfo = {};
	var eInfo = {};
	drawArea.on("mousedown",function(event){
		startInfo(event)
		drawArea.on("mousemove",function(e){
			stopInfo(e)
		})
		drawArea.on("mouseup",function(){
			var finishInfo = offEvent();
			onComplete(screenLi,finishInfo);
			drawBox.width(0);
			drawBox.height(0);
			entrySlected.show();
		})
		drawArea.on("mouseleave",function(){
			drawArea.trigger("mouseup");
		}) 
	}) 
	function startInfo(event){
		entrySlected.hide();
		boxInfo.boxTop= drawArea.offset().top;
		boxInfo.boxLeft= drawArea.offset().left;
		eInfo.startX = event.pageX;
		eInfo.startY = event.pageY;
	}
	function stopInfo(e){
		eInfo.stopX = e.pageX;
		eInfo.stopY = e.pageY;
		if(eInfo.startX-eInfo.stopX>=0){
			boxInfo.left = eInfo.stopX;
			boxInfo.width = eInfo.startX-eInfo.stopX;
		}else{
			boxInfo.left = eInfo.startX;
			boxInfo.width = eInfo.stopX-eInfo.startX;
		}
		if(eInfo.startY-eInfo.stopY>=0){
			boxInfo.top = eInfo.stopY;
			boxInfo.height = eInfo.startY-eInfo.stopY;
		}else{
			boxInfo.top = eInfo.startY;
			boxInfo.height = eInfo.stopY-eInfo.startY;
		}
		drawBox.width(boxInfo.width);
		drawBox.height(boxInfo.height);
		drawBox.css({top:boxInfo.top-boxInfo.boxTop,left:boxInfo.left-boxInfo.boxLeft});
		var listTop = (boxInfo.top-boxInfo.boxTop)+boxInfo.height/2+50;
		var listLeft = (boxInfo.left-boxInfo.boxLeft)+boxInfo.width/2-50;
		showEntry(listLeft,listTop);
	}
	function offEvent(){
		drawArea.off("mousemove");
		drawArea.off("mouseup");
		drawArea.off("mouseleave");
		return boxInfo;
	}
	function showEntry(lefts,tops){
		entrySlected.css({left:lefts,top:tops});
	}
}

function selectedScreen(screenList,obj){
	var arr = screenList.filter(filFun);
	screenList.removeClass("selected");
	arr.each(function(index){
		$(this).addClass("selected");
	})
	function filFun(index){
		var dom = screenList.eq(index);
		var domLeft = dom.offset().left;
		var domRight = domLeft+dom.width();
		var domTop = dom.offset().top;
		var domBottom = domTop+dom.height();
		
		var boxLeft = obj.left;
		var boxRight = obj.left+obj.width;
		var boxTop = obj.top;
		var boxBottom = obj.top+obj.height;
		if((boxLeft>domRight) || (boxRight<domLeft) || (boxTop>domBottom) || (boxBottom<domTop)){
			return false
		}else{
			return true
		}
	}
}