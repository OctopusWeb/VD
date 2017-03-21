function bindController(){
//总控打开关闭	
	$("#openLayout").off("click");
	$("#closeLayout").off("click");
	$("#openLayout").on("click",function(){//打开布局
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
	$(".videoOn p:eq(0)").off("click");
	$(".videoOn p:eq(1)").off("click");
	$(".playPro img").off("click");
	$(".playPro div").off("click");
	$(".voicePro div").off("click");
	$(".arround p").off("click");
	$(".videoOn p:eq(0)").on("click",function(){//打开video
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
		var video = new Videocall();
		var data = video.open(Arguments);
		send(data);
	})
	$(".videoOn p:eq(1)").on("click",function(){//关闭video
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
		var video = new Videocall();
		var data = video.close(Arguments);
		send(data);
	})
	$(".playPro img").on("click",function(){
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
	$(".playPro div").on("click",function(e){
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var len = (e.pageX-$(this).offset().left)/$(this).width()*100;
		$(this).find("p").width(len+"%");
		var video = new Videocall();
		var data = video.setPosition(openInfo.screens[layindex].id,parseInt(len));
		send(data);
	});
	$(".voicePro div").on("click",function(e){
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var len = (e.pageX-$(this).offset().left)/$(this).width()*100;
		$(this).find("p").width(len+"%");
		var video = new Videocall();
		var data = video.setVolume(openInfo.screens[layindex].id,parseInt(len));
		send(data);
	});
	$(".arround p").on("click",function(){
		changeClass($(".arround p"),$(this));
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var index = $(".arround p").index($(this));
		var video = new Videocall();
		console.log(index); 
		var data = video.setPlayMode(openInfo.screens[layindex].id,index);
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
	var ppt = new PptCall();
	$(".pptOn p:eq(0)").on("click",function(){//打开ppt
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
		var video = new Videocall();
		var data = video.open(Arguments);
		send(data);
	})
	$(".pptOn p:eq(1)").on("click",function(){//关闭ppt
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
		var video = new Videocall();
		var data = video.close(Arguments);
		send(data);
	})
	$(".pptgroup p:eq(0)").on("click",function(){
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = ppt.changeBtn(openInfo.screens[layindex].id,"first"); 
		send(data);
	})
	$(".pptgroup p:eq(1)").on("click",function(){
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = ppt.changeBtn(openInfo.screens[layindex].id,"pre");
		send(data);
	})
	$(".pptgroup p:eq(2)").on("click",function(){
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = ppt.changeBtn(openInfo.screens[layindex].id,"next");
		send(data);
	})
	$(".pptgroup p:eq(3)").on("click",function(){
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		
		var data = ppt.changeBtn(openInfo.screens[layindex].id,"last");
		send(data);
	})
	$(".pptInput input").on("blur",function(){
		var value = $(this).val();
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = ppt.changeBtn(openInfo.screens[layindex].id,"goPage",value);
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
		var flash = new FlashCall();
		var data = flash.open(Arguments);
		send(data);
	})
	$(".flashOn p:eq(1)").on("click",function(){
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
		var flash = new FlashCall();
		var data = flash.close(Arguments);
		send(data);
	})
//web控制
	$(".webOn p:eq(0)").off("click");
	$(".webOn p:eq(1)").off("click");
	$(".webOn p:eq(0)").on("click",function(){
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
		var web = new WebCall();
		var data = web.open(Arguments);
		send(data);
	})
	$(".webOn p:eq(1)").on("click",function(){
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
		var web = new WebCall();
		var data = web.close(Arguments);
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
	$(".pdfScale").off("click"); 
	
	$(".pdfOn p:eq(0)").on("click",function(){
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
		var data = pdf.open(Arguments);
		send(data);
	})
	$(".pdfOn p:eq(1)").on("click",function(){
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
		var data = pdf.close(Arguments);
		send(data);
	})
	 
	$(".pdfGroup p:eq(0)").on("click",function(){
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = pdf.changeBtn(openInfo.screens[layindex].id,"first");
		send(data);
	})
	$(".pdfGroup p:eq(1)").on("click",function(){
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = pdf.changeBtn(openInfo.screens[layindex].id,"pre");
		send(data);
	})
	$(".pdfGroup p:eq(2)").on("click",function(){
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = pdf.changeBtn(openInfo.screens[layindex].id,"next");
		send(data);
	})
	$(".pdfGroup p:eq(3)").on("click",function(){
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = pdf.changeBtn(openInfo.screens[layindex].id,"last");
		send(data);
	})
	$(".pdfInput input").on("blur",function(){
		var value = $(this).val();
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = ppt.changeBtn(openInfo.screens[layindex].id,"goPage",value);
		send(data);
	})
	
	$(".pdfGroup2 p:eq(0)").on("click",function(){
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = pdf.changeBtn(openInfo.screens[layindex].id,"SetLayoutMode","SinglePage");
		send(data);
	})
	$(".pdfGroup2 p:eq(1)").on("click",function(){
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = pdf.changeBtn(openInfo.screens[layindex].id,"SetLayoutMode","OneColumn");
		send(data);
	})
	$(".pdfGroup2 p:eq(2)").on("click",function(){
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = pdf.changeBtn(openInfo.screens[layindex].id,"SetLayoutMode","TwoColumnLeft");
		send(data);
	})
	$(".pdfGroup2 p:eq(3)").on("click",function(){
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = pdf.changeBtn(openInfo.screens[layindex].id,"SetLayoutMode","TwoColumnRight");
		send(data);
	})
	$(".pdfGroup2 p:eq(4)").on("click",function(){
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = pdf.changeBtn(openInfo.screens[layindex].id,"SetFit");
		send(data);
	})
	$(".pdfScale div").on("click",function(e){
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var len = (e.pageX-$(this).offset().left)/$(this).width()*100;
		$(this).find("p").width(len+"%");
		$(this).parent().find("span").html(parseInt(len));
		var data = pdf.zoom(openInfo.screens[layindex].id,parseInt(len));
		send(data);
	});
}
