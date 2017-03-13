function loginController(Dom){
	Dom.submite.on("click",function(){
		$Animate.complete($Animate.loginHide,$Animate.wrapShow); 
		initLayInfo(Dom);
	})
}
function initLayInfo(Dom){ 
	$at.getJson("../dataDemo.json","",onComplete); 
	function onComplete(json){
		var data = layParseDate(json);
		$at.allInfo = data;
		$at.screenInfo=data[$at.menuIndex];
		$at.getJson("../entryContent.json","",onComplete2);
		function onComplete2(json2){
			$at.softWare = ParseSoft(json2.data);
			initSoft(Dom); 
			layShowController(Dom); 
			layChangeController(Dom);
			setScreen(Dom,data); 
			$(".layoutContent .fun").eq(0).addClass("selected");
		}	
		$at.getJson("../entryDevice.json","",onComplete3); 
		function onComplete3(json3){   
			$at.entryHard = ParseHard(json3.data); 
			initHard(Dom);
		}	
	}
}