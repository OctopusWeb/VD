var $Animate = {};
$Animate.pagesDom = {
	login	: $("#login"),
	wrap	: $("#wrap")	
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
$Animate.complete = function(hideComplete,showComplete){ 
	hideComplete?hideComplete() : console.log("没有隐藏函数");
	showComplete?showComplete() : console.log("没有显示函数");  
}
