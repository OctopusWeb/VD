$(function(){
	var Dom = {
		submite		: $(".submite"),
		
		layShow		: $("#layoutShow"),
		layBottom	: $("#layoutBottom"),
		layContent	: $(".layoutContent"),
		layChange	: $("#layout"),
		
		Part1btn 	: $("#btnPart1"),
		Part2btn	: $("#btnPart2"),
		Part3btn	: $("#btnPart3"),
		addBtnGroup : $("#addBtnGroup"),
		
		entryHard	: $("#entryHard"),
		entrySoft	: $("#entrySoftware"),
		
		drawArea	: $("#drawArea"),
		drawBox		: $("#drawBox"),
		
		screenLi	: $("#addPart3 ul li"),
		entrySlected: $("#entrySlected"),
		screenPlan	: $("#screenPlan ul"),
		addPart2	: $("#addPart2"),

		funTitle	: $(".funTitle"),
		
		btnGroup	: $("#btnGroup"),
		ulList		: $(".ulList"),
	}
	document.body.onselectstart=document.body.oncontextmenu=function(){ return false;};
	
	
	Dom.ulList.on("click","p",function(){
		$(this).parent().find("li").slideToggle(); 
	})
	partController(Dom);
	loginController(Dom);
})