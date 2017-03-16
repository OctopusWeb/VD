function drawController(ControllerDom){
	var drawArea = $("#drawArea");
	var drawBox = $("#drawBox");
	var screenLi = $("#addPart3 ul li"); 
	var entrySlected = $("#entrySlected"); 
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
	entrySlected.find("li").hover(function(){ 
		$(this).addClass("selected");
	},function(){ 
		$(this).removeClass("selected");
	})
	entrySlected.on("click","li",function(){ 
		var index = entrySlected.find("li").index($(this));
		var selected = $("#screenPlan ul").find(".selected");
		var value = $(this).find("p").html();
		var info1 = $(this).find("span").eq(0).html();
		var info2 = $(this).find("span").eq(1).html(); 
		var info3 = $(this).find("span").eq(2).html();
		var info4 = $(this).find("span").eq(3).html();
		selected.css({"background":$at.staticColors[index]});
		selected.find("p").html(value); 
		selected.find(".span1").html(info1); 
		selected.find(".span2").html(info2); 
		selected.find(".span3").html(info3); 
		selected.find(".span4").html(info4);
		entrySlected.hide();
	}) 
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
