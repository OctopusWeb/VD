$(function(){
	var Dom = {
		submite		: $(".submite"),
		
		layShow		: $("#layoutShow"),
		layBottom	: $("#layoutBottom"),
		layContent	: $(".layoutContent"),
		layChange	: $("#layout"),
		
		PartLev 	: $("#levNum li"),
		Part1btn 	: $("#btnPart1"),
		Part2btn	: $("#btnPart2"),
		Part3btn	: $("#btnPart3"),
		PartTitle 	: $("#pageTitle h1"),
		
		entryHard	: $("#entryHard"),
		entrySoft	: $("#entrySoftware"),
		
		drawArea	: $("#drawArea"),
		
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
	entryController(Dom);
	drawController(Dom);
	
})

function partController(Dom){
	changePage(Dom);
	Dom.addPart2.find("ul").on("click",function(e){
		var event = e || window.event;
		var dom = event.target || event.srcElement;
		dom = dom.parentNode.parentNode;
		if(dom.tagName.toLowerCase() == "li"){
			if(dom.getAttribute("class") == "selected"){ 
				dom.setAttribute("class", "");
			}else{
				dom.setAttribute("class", "selected");
			}	
		}
	});
	function changePage(Dom){
		Dom.Part1btn.find(".next").on("click",function(){
			$Animate.complete($Animate.Part1Hide,$Animate.Part2Show);
			PartChange(1)
		});
		Dom.Part2btn.find(".pre").on("click",function(){
			$Animate.complete($Animate.Part2Hide1,$Animate.Part1Show);
			PartChange(0)
		});
		Dom.Part2btn.find(".next").on("click",function(){
			$Animate.complete($Animate.Part2Hide2,$Animate.Part3Show);
			PartChange(2)
		});
		Dom.Part3btn.find(".pre").on("click",function(){
			$Animate.complete($Animate.Part3Hide,$Animate.Part2Show);
			PartChange(1)
		});
		Dom.Part3btn.find(".next").on("click",function(){
			$Animate.LayoutShow();
		});
		function PartChange(index){
			var title = ["新建虚拟桌面","选择主机","分配屏幕"]
			Dom.PartLev.removeClass("selected");
			Dom.PartLev.eq(index).addClass("selected");
			Dom.pageTitle.html(title[index]);
		}
	}
}
