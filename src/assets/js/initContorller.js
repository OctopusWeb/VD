$(function(){
	$("#btnPart1 .next").on("click",function(){
		$Animate.complete($Animate.Part1Hide,$Animate.Part2Show);
		$("#levNum li").removeClass("selected");
		$("#levNum li").eq(1).addClass("selected");
		$("#pageTitle h1").html("选择主机");
	});
	$("#btnPart2 .pre").on("click",function(){
		$Animate.complete($Animate.Part2Hide1,$Animate.Part1Show);
		$("#levNum li").removeClass("selected");
		$("#levNum li").eq(0).addClass("selected");
		$("#pageTitle h1").html("新建虚拟桌面");
	});
	$("#btnPart2 .next").on("click",function(){
		$Animate.complete($Animate.Part2Hide2,$Animate.Part3Show);
		$("#levNum li").removeClass("selected");
		$("#levNum li").eq(2).addClass("selected");
		$("#pageTitle h1").html("分配屏幕");
	});
	
	$("#addPart2 ul").on("click",function(e){
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
	})
})
