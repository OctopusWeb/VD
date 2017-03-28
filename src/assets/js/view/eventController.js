function bindController(){
	var publicCalls = new PublicCall();
//总控打开关闭	
	$("#openLayout").off("click");
	$("#closeLayout").off("click");
	$("#openLayout").on("click",function(){//打开布局
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var winIndex = $(".funTitle li").index($(".funTitle .selected")) || 0;
		var openInfo = $at.screenInfo.drawInfo[index];
		var Layout = [];
		for (var i=0;i<openInfo.screens.length;i++) {
			var obj = {
				"WinId": openInfo.screens[i].id,
				"X": openInfo.screens[i].screenInfo[3],
				"Y": openInfo.screens[i].screenInfo[2],
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
		var data = publicCalls.open(Arguments);
		send(data);
	});
	$("#closeLayout").on("click",function(){//关闭布局
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var winIndex = $(".drawContent1 li").index($(".drawContent1 .selected")) || 0;
		var Arguments = { "LayoutId": $at.screenInfo.drawInfo[index].id};
		var data = publicCalls.close(Arguments);
		send(data);
	})
	
//视频video控制
	var videoInterval;
	$(".videoOn p:eq(0)").off("click");
	$(".videoOn p:eq(1)").off("click");
	$(".playPro img").off("click");
	$(".playPro div").off("click");
	$(".voicePro div").off("click");
	$(".arround p").off("click");
	$(".videoOn p:eq(0)").on("click",function(){//打开video
		soundBtn()
		changeClass($(".videoOn p"),$(this));
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
			"X": openInfo.screens[layindex].screenInfo[3],
			"Y": openInfo.screens[layindex].screenInfo[2],
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
		if(videoInterval){
			clearInterval(videoInterval)
		}
		videoInterval = setInterval(function(){
			videoGetInfo(openInfo.screens[layindex].id,publicCalls);
		},1000)
		var data = publicCalls.viewOpen(Arguments);
		send(data);
	})
	
	function videoGetInfo(winid,publicCalls){
		var getPosition = publicCalls.viewOpen(winid,"videoCall","getPosition");
		var getVolume = publicCalls.viewOpen(winid,"videoCall","getVolume");
		send(getPosition);
		send(getVolume);
	}
	$(".videoOn p:eq(1)").on("click",function(){//关闭video
		soundBtn();
		if(videoInterval){
			clearInterval(videoInterval)
		}
		changeClass($(".videoOn p"),$(this));
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
		var data = publicCalls.viewClose(Arguments);
		send(data);
	})
	$(".playPro img").on("click",function(){
		soundBtn()
		var src = $(this).attr("src");
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		if(layindex<0){
			alert("请选择窗口");
			return
		}
		if (src == "assets/img/action.png") {
			$(this).attr({"src":"assets/img/pause.png"});
			var data = publicCalls.stateFun(openInfo.screens[layindex].id,"videoCall","play"); 
			send(data);
		}else{
			$(this).attr({"src":"assets/img/action.png"});
			var data = publicCalls.stateFun(openInfo.screens[layindex].id,"videoCall","pause");
			send(data);
		}
	})
	$(".playPro div").on("click",function(e){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var len = (e.pageX-$(this).offset().left)/$(this).width()*100;
		$(this).find("p").width(len+"%");
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"videoCall","setPosition");
		data.Position = parseInt(len);
		send(data);
	});
	$(".voicePro div").on("click",function(e){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var len = (e.pageX-$(this).offset().left)/$(this).width()*100;
		$(this).find("p").width(len+"%");
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"videoCall","setVolume");
		data.Volume = parseInt(len);
		send(data);
	});
	$(".arround p").on("click",function(){
		soundBtn()
		changeClass($(".arround p"),$(this));
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var index = $(".arround p").index($(this));
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"videoCall","setPlayMode");
		data.PlayMode = index;
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
	
//PPT控制
	$(".pptOn p:eq(0)").off("click");
	$(".pptOn p:eq(1)").off("click");
	$(".pptgroup p:eq(0)").off("click");
	$(".pptgroup p:eq(1)").off("click");
	$(".pptgroup p:eq(2)").off("click");
	$(".pptgroup p:eq(3)").off("click");
	$(".pptInput input").off("blur");
	$(".pptOn p:eq(0)").on("click",function(){//打开ppt
		soundBtn()
		changeClass($(".pptOn p"),$(this));
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
			"X": openInfo.screens[layindex].screenInfo[3],
			"Y": openInfo.screens[layindex].screenInfo[2],
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
		var data = publicCalls.viewOpen(Arguments);
		send(data);
	})
	$(".pptOn p:eq(1)").on("click",function(){//关闭ppt
		soundBtn()
		changeClass($(".pptOn p"),$(this));
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
		var data = publicCalls.viewClose(Arguments);
		send(data);
	})
	$(".pptgroup p:eq(0)").on("click",function(){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pptCall","first"); 
		send(data);
	})
	$(".pptgroup p:eq(1)").on("click",function(){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pptCall","pre"); 
		send(data);
	})
	$(".pptgroup p:eq(2)").on("click",function(){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pptCall","next"); 
		send(data);
	})
	$(".pptgroup p:eq(3)").on("click",function(){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pptCall","last"); 
		send(data);
	})
	$(".pptInput input").on("blur",function(){
		soundBtn()
		var value = $(this).val();
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pptCall","goPage"); 
		data.page = parseInt(value)
		send(data);
	})
	function changeClass(dom,self){
		dom.removeClass("selected");
		self.addClass("selected");
	}
//flash控制
	$(".flashOn p:eq(0)").off("click");
	$(".flashOn p:eq(1)").off("click");
	$(".flashOn p:eq(0)").on("click",function(){
		soundBtn()
		changeClass($(".flashOn p"),$(this));
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
			"X": openInfo.screens[layindex].screenInfo[3],
			"Y": openInfo.screens[layindex].screenInfo[2],
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
		var data = publicCalls.viewOpen(Arguments);
		send(data);
	})
	$(".flashOn p:eq(1)").on("click",function(){
		soundBtn()
		changeClass($(".flashOn p"),$(this));
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var winIndex = $(".funTitle li").index($(".funTitle .selected")) || 0;
		var openInfo = $at.screenInfo.drawInfo[index];
		var Layout = [];
		if(layindex<0){
			alert("请选择窗口");
			return
		}
		var obj = {
			"WinId": openInfo.screens[layindex].id
		};
		Layout.push(obj);
		var Arguments={
			"LayoutId":openInfo.id,
			"WinId":openInfo.screens[layindex].id,
			"Layout": Layout
		}
		var data = publicCalls.viewClose(Arguments);
		send(data);
	})
//web控制
	$(".webOn p:eq(0)").off("click");
	$(".webOn p:eq(1)").off("click");
	$(".webOn p:eq(0)").on("click",function(){
		soundBtn();
		changeClass($(".webOn p"),$(this));
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
			"X": openInfo.screens[layindex].screenInfo[3],
			"Y": openInfo.screens[layindex].screenInfo[2],
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
		var data = publicCalls.viewOpen(Arguments);
		send(data);
	})
	$(".webOn p:eq(1)").on("click",function(){
		soundBtn()
		changeClass($(".webOn p"),$(this));
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
		var data = publicCalls.viewClose(Arguments);
		send(data);
	})
//pdf控制
	var pdf = new PdfCall();
	$(".pdfOn p:eq(0)").off("click");
	$(".pdfOn p:eq(1)").off("click");
	$(".pdfGroup p:eq(0)").off("click");
	$(".pdfGroup p:eq(1)").off("click");
	$(".pdfGroup p:eq(2)").off("click");
	$(".pdfGroup p:eq(3)").off("click");
	$(".pdfGroup input").off("blur");
	$(".pdfGroup2 p:eq(0)").off("click");
	$(".pdfGroup2 p:eq(1)").off("click");
	$(".pdfGroup2 p:eq(2)").off("click");
	$(".pdfGroup2 p:eq(3)").off("click");
	$(".pdfGroup2 p:eq(4)").off("click");
	$(".pdfScale div").off("click");
	
	$(".pdfOn p:eq(0)").on("click",function(){
		soundBtn()
		changeClass($(".pdfOn p"),$(this));
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
			"X": openInfo.screens[layindex].screenInfo[3],
			"Y": openInfo.screens[layindex].screenInfo[2],
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
		var data = publicCalls.viewOpen(Arguments);
		send(data);
	})
	$(".pdfOn p:eq(1)").on("click",function(){
		soundBtn()
		changeClass($(".pdfOn p"),$(this));
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
		var data = publicCalls.viewClose(Arguments);
		send(data);
	})
	 
	$(".pdfGroup p:eq(0)").on("click",function(){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pdfCall","first"); 
		send(data);
	})
	$(".pdfGroup p:eq(1)").on("click",function(){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pdfCall","pre"); 
		send(data);
	})
	$(".pdfGroup p:eq(2)").on("click",function(){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pdfCall","next"); 
		send(data);
	})
	$(".pdfGroup p:eq(3)").on("click",function(){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pdfCall","last"); 
		send(data);
	})
	$(".pdfInput input").on("blur",function(){
		soundBtn();
		var value = $(this).val();
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pdfCall","goPage"); 
		data.page = parseInt(value)
		send(data);
	})
	
	$(".pdfGroup2 p:eq(0)").on("click",function(){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pdfCall","SetLayoutMode"); 
		data.layoutmode = "SinglePage"
		send(data);
	})
	$(".pdfGroup2 p:eq(1)").on("click",function(){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pdfCall","SetLayoutMode"); 
		data.layoutmode = "OneColumn"
		send(data);
	})
	$(".pdfGroup2 p:eq(2)").on("click",function(){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pdfCall","SetLayoutMode"); 
		data.layoutmode = "TwoColumnLeft"
		send(data);
	})
	$(".pdfGroup2 p:eq(3)").on("click",function(){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pdfCall","SetLayoutMode"); 
		data.layoutmode = "TwoColumnRight"
		send(data);
	})
	$(".pdfGroup2 p:eq(4)").on("click",function(){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pdfCall","SetLayoutMode"); 
		data.layoutmode = "SetFit"
		send(data);
	})
	$(".pdfScale div").on("click",function(e){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var len = (e.pageX-$(this).offset().left)/$(this).width()*100;
		$(this).find("p").width(len+"%");
		$(this).parent().find("span").html(parseInt(len));
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pdfCall","SetZoom"); 
		data.zoom = parseInt(len)
		send(data);
	});
	function getlayoutId(){
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var id = openInfo.screens[layindex].id;
		return id;
	}
}
