function bindController(){
	$(".onBtn").on("click","p:eq(0)",function(){
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var winIndex = $(".funTitle li").index($(".funTitle .selected")) || 0;
		var openInfo = $at.screenInfo.drawInfo[index];
		var Layout = [];
		for (var i = 0; i < openInfo.screens.length; i++) {
			console.log(openInfo.screens[i])
			var obj = {
				"WinId": openInfo.screens[i].id,
				"X": openInfo.screens[i].screenInfo[2],
				"Y": openInfo.screens[i].screenInfo[3],
				"Width": openInfo.screens[i].screenInfo[0],
				"Height": openInfo.screens[i].screenInfo[1],
			};
			if (openInfo.screens[i].medias[winIndex]) {
				var type = chooseType(openInfo.screens[i].medias[winIndex][2].toUpperCase());
				obj.Resource = {
					"Source": "local",
					"Path":openInfo.screens[i].medias[winIndex][1]
				};
				obj.Type = type;
			}  
			Layout.push(obj);
		}
		var Arguments = {
			"LayoutId": openInfo.id,
			"Layout": Layout 
		};
		var multiScreen = new MultiScreenCall();
		var data = multiScreen.open(Arguments);
		send(data);
	})
	function chooseType(name){
		switch (name){
			case "VIDEO":
				var type = "video"
				return type
			case "PPT":
				var type = "ppt";
				return type
			case "PDF":
				var type = "pdf";
				return type
			case "FLASH":
				var type =	"swf";
				return type
			case "WEB":
				var type = "httpurl";
				return type
			case "SHIPIN":
				var type = "video"
				return type
			default:
				break;
		}
	}
	$(".onBtn").on("click","p:eq(1)",function(){
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var winIndex = $(".drawContent1 li").index($(".drawContent1 .selected")) || 0;
		var multiScreen = new MultiScreenCall();
		var Arguments = { "LayoutId": $at.screenInfo.drawInfo[index].id};
		var data = multiScreen.close(Arguments);
		send(data);
	})
}
