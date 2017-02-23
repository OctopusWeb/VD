var $Animate = {};
$Animate.pagesDom = {
	login		: $("#login"),
	wrap		: $("#wrap"),
	addPart1	: $("#addPart1"),
	addPart2	: $("#addPart2"),
}
$Animate.loginHide = function(){
	TweenMax.to($Animate.pagesDom.login, 0.5, {left:"-100%",ease: Power0.easeNone});
}
$Animate.loginShow = function(){
	TweenMax.to($Animate.pagesDom.login, 0.5, {left:"50%",ease: Power0.easeNone});
}
$Animate.wrapHide = function(){
	TweenMax.to($Animate.pagesDom.wrap, 0.5, {left:"100%",ease: Power0.easeNone});
}
$Animate.wrapShow = function(){
	TweenMax.to($Animate.pagesDom.wrap, 0.5, {left:"0%",ease: Power0.easeNone});
}
$Animate.Part1Show = function(){
	TweenMax.to($Animate.pagesDom.addPart1, 0.5, {left:"0%",ease: Power0.easeNone});
}
$Animate.Part1Hide = function(){
	TweenMax.to($Animate.pagesDom.addPart1, 0.5, {left:"-100%",ease: Power0.easeNone});
}
$Animate.Part2Show = function(){
	TweenMax.to($Animate.pagesDom.addPart2, 0.5, {left:"0%",ease: Power0.easeNone});
}
$Animate.Part2Hide1 = function(){
	TweenMax.to($Animate.pagesDom.addPart2, 0.5, {left:"100%",ease: Power0.easeNone});
}
$Animate.Part2Hide2 = function(){
	TweenMax.to($Animate.pagesDom.addPart2, 0.5, {left:"-100%",ease: Power0.easeNone});
}

$Animate.complete = function(hideComplete,showComplete){ 
	hideComplete?hideComplete() : console.log("没有隐藏函数");
	showComplete?showComplete() : console.log("没有显示函数");  
}
