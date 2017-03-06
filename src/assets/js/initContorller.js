$(function(){
	var ControllerDom = {
		btnPart1 	: $("#btnPart1"),
		levNumLi 	: $("#levNum li"),
		pageTitle 	: $("#pageTitle h1"),
		btnPart2	: $("#btnPart2"),
		drawArea	: $("#drawArea"),
		drawBox		: $("#drawBox"),
		screenLi	: $("#addPart3 ul li"),
		entrySlected: $("#entrySlected"),
		screenPlan	: $("#screenPlan ul"),
		addPart2	: $("#addPart2"),
		btnPart3	: $("#btnPart3"),
		funTitle	: $(".funTitle"),
		layoutContent:$(".layoutContent"),
		layout1		: $(".layout1"),
		layout2		: $(".layout2"),
		layoutShow	: $("#layoutShow"),
		layout		: $("#layout"),
		btnGroup	: $("#btnGroup"),
		ulList		: $(".ulList"),
		entryHard	: $("#entryHard"),
		entrySoft	: $("#entrySoftware")
	}
	document.body.onselectstart=document.body.oncontextmenu=function(){ return false;};
	ControllerDom.btnPart1.find(".next").on("click",function(){
		$Animate.complete($Animate.Part1Hide,$Animate.Part2Show);
		ControllerDom.levNumLi.removeClass("selected");
		ControllerDom.levNumLi.eq(1).addClass("selected");
		ControllerDom.pageTitle.html("选择主机");
	});
	ControllerDom.btnPart2.find(".pre").on("click",function(){
		$Animate.complete($Animate.Part2Hide1,$Animate.Part1Show);
		ControllerDom.levNumLi.removeClass("selected");
		ControllerDom.levNumLi.eq(0).addClass("selected");
		ControllerDom.pageTitle.html("新建虚拟桌面");
	});
	ControllerDom.btnPart2.find(".next").on("click",function(){
		$Animate.complete($Animate.Part2Hide2,$Animate.Part3Show);
		ControllerDom.levNumLi.removeClass("selected");
		ControllerDom.levNumLi.eq(2).addClass("selected");
		ControllerDom.pageTitle.html("分配屏幕");
	});
	ControllerDom.btnPart3.find(".pre").on("click",function(){
		$Animate.complete($Animate.Part3Hide,$Animate.Part2Show);
		ControllerDom.levNumLi.removeClass("selected");
		ControllerDom.levNumLi.eq(1).addClass("selected");
		ControllerDom.pageTitle.html("分配屏幕");
	});
	ControllerDom.btnPart3.find(".next").on("click",function(){
		$Animate.LayoutShow();
	});
	ControllerDom.layout1.on("click",function(){
		ControllerDom.layoutShow.show();
		ControllerDom.layout.hide();
	})
	ControllerDom.layout2.on("click",function(){
		ControllerDom.layoutShow.hide();
		ControllerDom.layout.show();
	})
	ControllerDom.addPart2.find("ul").on("click",function(e){
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
	ControllerDom.entrySlected.find("li").hover(function(){
		$(this).addClass("selected");
	},function(){
		$(this).removeClass("selected");
	})
	
	ControllerDom.entrySlected.find("li").on("click",function(){
		var index = ControllerDom.entrySlected.find("li").index($(this));
		var selected = ControllerDom.screenPlan.find(".selected");
		var value = $(this).find("p").html();
		selected.css({"background":$at.staticColors[index]});
		selected.find("p").html(value)
		ControllerDom.entrySlected.hide();
	})
	ControllerDom.funTitle.on("click","li",function(){
		var index = ControllerDom.funTitle.find("li").index($(this));
		ControllerDom.funTitle.find("li").removeClass("selected");
		ControllerDom.funTitle.find("li").eq(index).addClass("selected");
		ControllerDom.layoutContent.find(".fun").removeClass("selected");
		ControllerDom.layoutContent.find(".fun").eq(index).addClass("selected")
	})
	ControllerDom.btnGroup.find(".btn").eq(0).on("click",function(){
		ControllerDom.entryHard.slideToggle(); 
		ControllerDom.entrySoft.slideUp(); 
	})
	ControllerDom.btnGroup.find(".btn").eq(1).on("click",function(){
		ControllerDom.entrySoft.slideToggle(); 
		ControllerDom.entryHard.slideUp();
	})
	ControllerDom.ulList.on("click","p",function(){
		$(this).parent().find("li").slideToggle(); 
	})
	drawController(ControllerDom);
})
 
