function bindController(){
	$("#openLayout").on("click",function(){//打开布局
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var winIndex = $(".funTitle li").index($(".funTitle .selected")) || 0;
		var openInfo = $at.screenInfo.drawInfo[index];
		var Layout = [];
		for (var i=0;i<openInfo.screens.length;i++) {
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
	});
	$("#closeLayout").on("click",function(){//关闭布局
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var winIndex = $(".drawContent1 li").index($(".drawContent1 .selected")) || 0;
		var multiScreen = new MultiScreenCall();
		var Arguments = { "LayoutId": $at.screenInfo.drawInfo[index].id};
		var data = multiScreen.close(Arguments);
		send(data);
	})
	
//视频video控制
	$(".videoOn").on("click","p:eq(0)",function(){//打开video
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var winIndex = $(".funTitle li").index($(".funTitle .selected")) || 0;
		var openInfo = $at.screenInfo.drawInfo[index];
		var Layout = []
		if(layindex<0){
			alert("请选择窗口");
			return
		}
		var obj = {
			"WinId": openInfo.screens[layindex].id,
			"X": openInfo.screens[layindex].screenInfo[2],
			"Y": openInfo.screens[layindex].screenInfo[3],
			"Width": openInfo.screens[layindex].screenInfo[0],
			"Height": openInfo.screens[layindex].screenInfo[1],
		};
		if (openInfo.screens[layindex].medias[winIndex]) {
			var type = chooseType(openInfo.screens[layindex].medias[winIndex][2].toUpperCase());
			obj.Resource = {
				"Source": "local",
				"Path":openInfo.screens[layindex].medias[winIndex][1]
			};
			obj.Type = type;
		}  
		Layout.push(obj);
		var Arguments = {
			"LayoutId":openInfo.id,
			"WinId":openInfo.screens[layindex].id,
			"Layout":Layout
		}
		var video = new Videocall();
		var data = video.open(Arguments);
		send(data);
	})
	$(".videoOn").on("click","p:eq(1)",function(){//打开video
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var winIndex = $(".funTitle li").index($(".funTitle .selected")) || 0;
		var openInfo = $at.screenInfo.drawInfo[index];
		var Layout = []
		if(layindex<0){
			alert("请选择窗口");
			return
		}
		var obj = {
			"WinId": openInfo.screens[layindex].id
		};
		Layout.push(obj)
		var Arguments={
			"LayoutId":openInfo.id,
			"WinId":openInfo.screens[layindex].id,
			"Layout": Layout
		}
		var video = new Videocall();
		var data = video.close(Arguments);
		send(data);
	})
	$(".videoPlay").on("click","img",function(){
		var src = $(this).attr("src");
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var video = new Videocall();
		if(layindex<0){
			alert("请选择窗口");
			return
		}
		if (src == "assets/img/action.png") {
			$(this).attr({"src":"assets/img/pause.png"});
			var data = video.play(openInfo.screens[layindex].id); 
			send(data);
		}else{
			$(this).attr({"src":"assets/img/action.png"});
			var data = video.pause(openInfo.screens[layindex].id);
			send(data);
		}
	})
	$(".playPro").on("click","div",function(e){
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var len = (e.pageX-$(this).offset().left)/$(this).width()*100;
		$(this).find("p").width(len+"%");
		var video = new Videocall();
		var data = video.setPosition(openInfo.screens[layindex].id,parseInt(len));
		send(data);
	});
	$(".voicePro").on("click","div",function(e){
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var len = (e.pageX-$(this).offset().left)/$(this).width()*100;
		$(this).find("p").width(len+"%");
		var video = new Videocall();
		var data = video.setVolume(openInfo.screens[layindex].id,parseInt(len));
		send(data);
	});
	
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
	
}
