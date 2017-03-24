function loginController(Dom){
	Dom.submite.on("click",function(){	
		soundBtn()
		var name=$("#userName input").val();
		var pass=$("#passWord input").val();
		if(name==""||pass==""){
			alert("请输入用户名密码");
		}else{
			initLayInfo(Dom,name,pass);
		}
	})
}
function initLayInfo(Dom,user,password){
	$at.getJson($at.url+"/interfaces/login",{name:user,password:password},onComplete);
	function onComplete(json){
		if(!json.state){
			alert("用户名密码错误"); 
			return;
		} 
		$Animate.complete($Animate.loginHide,$Animate.wrapShow);
		$("#menu").animate({left : "-260px"})
		$("#layoutShow,#layout,#setScreen").animate({left : "0px"})
		$("#wrap #addScreen #setScreen").css({"padding-right":"0"})
		var data = layParseDate(json);
		$at.allInfo = data;
		$at.screenInfo=data[$at.menuIndex];
		$at.getJson($at.url+"/interfaces/entry/content","",onComplete2);
		function onComplete2(json2){
			connect();
			socket.onopen();
			$at.softWare = ParseSoft(json2.data);
			initSoft(Dom); 
			layShowController(Dom);
			layChangeController(Dom);
			setScreen(Dom,data);
			$(".layoutContent .fun").eq(0).addClass("selected");
		}	
		$at.getJson($at.url+"/interfaces/entry/device","",onComplete3); 
		function onComplete3(json3){		
			$at.entryHard = ParseHard(json3.data); 
			initHard(Dom);
		}	
	}
}