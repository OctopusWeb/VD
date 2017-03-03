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
		btnPart3	: $("#btnPart3")
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
	drawController(ControllerDom);
})
 
