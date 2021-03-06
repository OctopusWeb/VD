var $Animate = {};
$Animate.pagesDom = {
	login		: $("#login"),
	wrap		: $("#wrap"),
	addScreen	: $("#addScreen"),
	addPart1	: $("#addPart1"),
	addPart2	: $("#addPart2"),
	addPart3	: $("#addPart3"),
	layout		: $("#layout"),
}
$Animate.loginHide = function(){
	animateFun($Animate.pagesDom.login,"-100%");
}
$Animate.loginShow = function(){
	animateFun($Animate.pagesDom.login,"50%")
}
$Animate.wrapHide = function(){
	animateFun($Animate.pagesDom.wrap,"100%")
}
$Animate.wrapShow = function(){
	animateFun($Animate.pagesDom.wrap,"0%")
}
$Animate.Part1Show = function(){
	animateFun($Animate.pagesDom.addPart1,"0%")
}
$Animate.Part1Hide = function(){
	animateFun($Animate.pagesDom.addPart1,"-100%")
}
$Animate.Part2Show = function(){
	animateFun($Animate.pagesDom.addPart2,"0%")
}
$Animate.Part2Hide1 = function(){
	animateFun($Animate.pagesDom.addPart2,"100%")
}
$Animate.Part2Hide2 = function(){
	animateFun($Animate.pagesDom.addPart2,"-100%")
}
$Animate.Part3Show = function(){
	animateFun($Animate.pagesDom.addPart3,"0%")
}
$Animate.Part3Hide = function(){
	animateFun($Animate.pagesDom.addPart3,"100%")
}
$Animate.addScreenShow = function(){
	animateFun($Animate.pagesDom.addScreen,"0%")
}
$Animate.addScreenHide = function(){
	animateFun($Animate.pagesDom.addScreen,"-100%")
}

$Animate.LayoutShow = function(){ 
	$Animate.pagesDom.layout.show();
	TweenMax.to($Animate.pagesDom.layout, 0.5, {opacity:"1",ease: Power0.easeNone});
}
$Animate.LayoutHide = function(){
	TweenMax.to($Animate.pagesDom.layout, 0.5, {opacity:"0",ease: Power0.easeNone,onComplete:function(){
		$Animate.pagesDom.layout.hide()
	}});
	
}
$Animate.complete = function(hideComplete,showComplete){ 
	hideComplete?hideComplete() : console.log("没有隐藏函数");
	showComplete?showComplete() : console.log("没有显示函数");  
}

function animateFun(dom,lefts){
	TweenMax.to(dom, 0.5, {left:lefts,ease: Power0.easeNone});
}
