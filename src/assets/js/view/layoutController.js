function layShowController(Dom){
	ReactDOM.render(<Part5 info={$at.screenInfo}/>,view5Dom.layoutShow);
	bindController();
	var funTitle = $(".funTitle");
	var layoutContent = $(".layoutContent");
	var drawTitle1 = $(".drawTitle1");
	var publicCalls = new PublicCall();
	funTitle.on("click","li",function(){
		soundBtn()
		var index = funTitle.find("li").index($(this));
		funTitle.find("li").removeClass("selected");
		funTitle.find("li").eq(index).addClass("selected");
		layoutContent.find(".fun").removeClass("selected");
		layoutContent.find(".fun").eq(index).addClass("selected");
		
		var index1 = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index1]; 
		if(videoInterval){
			clearInterval(videoInterval)
		}
		videoInterval = setInterval(function(){
			videoGetInfo(openInfo.screens[layindex].id,publicCalls);
		},1000)
		
	})
	function videoGetInfo(winid,publicCalls){
		var getPosition = publicCalls.stateFun(winid,"videoCall","getPosition");
		var getVolume = publicCalls.stateFun(winid,"videoCall","getVolume");
		send(getPosition);
		send(getVolume);
	}
	Dom.layShow.on("click",".layout2",function(){
		soundBtn()
		Dom.layShow.fadeOut();
		Dom.layChange.fadeIn();
	})
	Dom.layShow.find(".drawContent1").on("click","li",function(){
		soundBtn()
		$(".drawContent1").find("li").removeClass("selected");
		$(this).addClass("selected");
		setTimeout(function(){
			$(".layoutContent .fun").removeClass("selected");
			$(".layoutContent .fun").eq(0).addClass("selected");
			bindController(); 
		},100);
		
	});
	drawTitle1.on("click",function(){
		soundBtn()
		setTimeout(function(){
			$(".drawContent1 li").eq(0).addClass("selected");
			$(".layoutContent .fun").removeClass("selected");
			$(".layoutContent .fun").eq(0).addClass("selected");
			bindController(); 
		},100);
	})
	
}
function layChangeController(Dom){
	view4Dom.layout.innerHTML="";
	ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	layoutChange(Dom);
}
function layParseDate(json){
	var screenArr=[]; 
	for (var i=0;i<json.screenInfo.length;i++) {
		var obj={};
		var drawInfo=[];
		var host = [];
		var info = json.screenInfo[i];
		obj.screenInfo={
			title:info.name,
			col:info.columnCount,
			row:info.rowCount,
			wid:info.widthOne,
			hei:info.heightOne,
			id:info.screenId,
		};
		for (var j=0;j<json.resultHost.length;j++) {
			if(info.screenId == json.resultHost[j].screenId){
				var obj1={
					id:json.resultHost[j].id,
					deviceId:json.resultHost[j].deviceId,
					describeJson:json.resultHost[j].describeJson
				};
				host.push(obj1);
			}
		}
		obj.screenInfo.host=host;
		for (var j=0;j<json.layout.length;j++) {
			var layout = json.layout[j];
			if(info.screenId == layout.screenId){
				var obj2 = {} 
				var screens=[];
				obj2 = {
					title: layout.name,
					id: layout.layoutId,
					controlUrl : layout.controlUrl,
					usePercent:layout.usePercent
				}
				for (var m=0;m<json.describe.length;m++){
					var describes = json.describe[m];
					if(layout.layoutId == describes.layoutId){
						var obj3={};
						var media=[];
						var item = describes.items;
						if(typeof(item)=="string"){
							item=JSON.parse(item);
						}
						for (var n=0;n<item.length;n++) {
							var mediasArr=[item[n].name,item[n].controlType,item[n].path,item[n].contentId,item[n].controlUrl];
							media.push(mediasArr);
						}
						obj3={
							id:describes.winId,
							scale:describes.scale,
							across:false,
							screenInfo:[describes.width,describes.height,describes.x,describes.y],
							medias:media, 
							items:describes.items
						}
						screens.push(obj3);
					} 
				}
				obj2.screens=screens;
				drawInfo.push(obj2)
			}
			
		}
		obj.drawInfo=drawInfo;
		screenArr.push(obj);
	}
	return screenArr;
}
function layoutChange(Dom){
	var screenLen=0;
	var smallIndex=0;
	var layChangeBox = $("#LayoutScreen");
	var layoutInfo = $("#layoutInfo");
	var changeTitle= layChangeBox.find(".drawTitle");
	var changeBtnGroup = layChangeBox.find(".btnGroup");
	var changeDraw = layChangeBox.find(".drawContent");
	var changeBox2 = layoutInfo.find(".infoBox2");
	var changeChoose = layoutInfo.find(".chooseList");
	var changeAddbuju = layoutInfo.find("h2");
	var changeContent =layoutInfo.find(".contentList");
	var changelayName = $(".layoutName");
	var changelay = $(".addLayout");
	Dom.layChange.off("click",".layout1")
	Dom.layChange.on("click",".layout1",function(){
		changelay.trigger("click");
		Dom.layShow.fadeIn();
		Dom.layChange.fadeOut();
		ReactDOM.render(<Part5 info={$at.screenInfo}/>,view5Dom.layoutShow);
	})
	changelay.off("click");
	changelay.on("click",function () {
		soundBtn()
		for (var i = 0; i < $at.screenInfo.drawInfo.length; i++) {
			var screens = $at.screenInfo.drawInfo[i].screens;
			for (var j = 0; j < screens.length; j++) {
				var arr=[]
				for (var n=0;n<screens[j].medias.length;n++) {
					var medias = screens[j].medias[n];
					var obj = {
						name : medias[0],
						controlType: medias[1],
						path: medias[2],
						contentId: medias[3],
						controlUrl: medias[4],
					};
					arr.push(obj);
				}
				
				$at.screenInfo.drawInfo[i].screens[j].items = JSON.stringify(arr);
			}
		}
		var data1 = { data: JSON.stringify($at.screenInfo) };
		$.post($at.url+"/interfaces/screenInfo/changeLayout", data1,onComplete);
		function onComplete(json) {
			for (var i=0;i<$at.screenInfo.drawInfo.length;i++) {
				$at.screenInfo.drawInfo[i].id = json.data[i][0];
			}
			$at.allInfo[$at.menuIndex] = $at.screenInfo;
			ReactDOM.render(React.createElement(Part5, { info: $at.screenInfo }), view5Dom.layoutShow);
			ReactDOM.render(React.createElement(Part4, { info: $at.screenInfo, softWare: $at.softWare }), view4Dom.layout);
			bindController();
			Dom.layShow.fadeIn();
			Dom.layChange.fadeOut();
		}
	});
	changeTitle.off("click","li")
	changeTitle.on("click","li",function(){
		soundBtn()
		screenLen = changeTitle.find("li").index($(this));
	})
	changeTitle.off("click",".close")
	changeTitle.on("click",".close",function(e){
		soundBtn()
		var config = confirm("确定删除此布局么？");
		if(config){
			var index = changeTitle.find("close").index($(this));
			$at.screenInfo.drawInfo.splice(index,1);
			ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
		}
	})
	changeBtnGroup.find("span").off("click");
	changeBtnGroup.find("span").on("click",function(){
		soundBtn();
		var num  = parseInt($at.screenInfo.drawInfo.length)+1;
		var addScreen = {
			title: "屏幕"+num,
			index:num,
			screens:[
				{
					across:true,
					screenInfo:[1920,1080,0,0],
					medias:[],
				}
			]
		}
		$at.screenInfo.drawInfo.push(addScreen);
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	})
	changeBtnGroup.find("p").on("click",function(){
		soundBtn()
		changelayName.find("input").val("")
		changelayName.show();
	})
	changelayName.find(".close").on("click",function(){
		soundBtn()
		changelayName.hide();
	})
	changelayName.find("p").on("click",function(){
		soundBtn()
		var value = changelayName.find("input").val();
		if(value){
			$at.screenInfo.drawInfo[screenLen].title = value;
			ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
			changelayName.hide();
		}
	});
	layoutInfo.find(".infoBox1").on("click","p",function(){
		soundBtn()
		layoutInfo.find("p").removeClass("selected");
		$(this).addClass("selected");
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].across=layoutInfo.find("p").index($(this))==0;
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	})
	changeDraw.on("click","li",function(){
		soundBtn();
		screenLen = changeTitle.find("li").index(changeTitle.find(".selected"));
		var num = parseInt($(this).find("span").html());
		smallIndex=num;
		var arr = $at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo;
		changeBox2.find("input").eq(1).val(arr[2])
		changeBox2.find("input").eq(0).val(arr[3])
		changeBox2.find("input").eq(2).val(arr[0])
		changeBox2.find("input").eq(3).val(arr[1])
		changeDraw.find("li").removeClass("selected");
		$(this).addClass("selected");
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
		boxChange($(this),smallIndex,changeTitle);
	})
	changeBox2.find("input").eq(0).on("change",function(){
		soundBtn();
		var x = $(this).val();
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[3]=parseInt(x);
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	})
	changeBox2.find("input").eq(1).on("change",function(){
		soundBtn()
		var y = $(this).val();
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[2]=parseInt(y);
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	})
	changeBox2.find("input").eq(2).on("change",function(){
		soundBtn()
		var wid = $(this).val();
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[0]=parseInt(wid);
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	})
	changeBox2.find("input").eq(3).on("change",function(){
		soundBtn()
		var hei = $(this).val();
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[1]=parseInt(hei);
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	})
	changeChoose.on("click",".close",function(){
		soundBtn()
		var num = changeChoose.find("li .close").index($(this));
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].medias.splice(parseInt(num),1);
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	})
	changeAddbuju.on("click",function(){ 
		soundBtn()
		var data = {
					across:true,
					screenInfo:[1920,1080,0,0],
					medias:[],
				}
		$at.screenInfo.drawInfo[screenLen].screens.push(data); 
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	})
	changeDraw.on("click",".close",function(){
		soundBtn()
		if($at.screenInfo.drawInfo[screenLen].screens.length==1){
			alert("只有一个布局了,请不要删除！")
		}else{
			var config = confirm("确定删除此窗口么？");
			if(config){
				$at.screenInfo.drawInfo[screenLen].screens.splice(smallIndex,1);
				smallIndex=0;
				ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
			}
		}
	})
	changeContent.on("click",".contentBtn",function(){
		soundBtn()
		changeContent.find(".contentBtn").removeClass("selected");
		$(this).addClass("selected");
	})
	changeContent.on("click",".add",function(){
		soundBtn()
		var type = $(this).parent().find(".icon").attr("name");
		var name = $(this).parent().find("span").eq(0).html();
		var path = $(this).parent().find("p").eq(1).html();
		var contentId = $(this).parent().find("p").eq(2).html();
		var controlUrl = $(this).parent().find("p").eq(3).html();
		var arr = [name,path,type,contentId,controlUrl];
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].medias.push(arr);
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	}) 
}
function boxChange(self,smallIndex,changeTitle){
	var box = $(".screenUl");
	var changeBox2 = $("#layoutInfo .infoBox2");
	var boxWid = box.outerWidth();
	var boxHei = box.outerHeight();
	var winWid = self.outerWidth();
	var winHei = self.outerHeight();
	var relWid = changeBox2.find("input").eq(2).val();
	var relHei = changeBox2.find("input").eq(3).val();
	var bili = parseFloat(winWid)/parseFloat(relWid);
	self.off("mousedown");
	self.on("mousedown",function(e1){
		e1.stopPropagation();
		var selfX = self.position().left/boxWid*100;
		var selfY = self.position().top/boxHei*100;
		var starX = e1.pageX;
		var starY = e1.pageY;
		self.off("mousemove");
		self.on("mousemove",function(e2){
			e2.stopPropagation();
			var moveX = e2.pageX;
			var moveY = e2.pageY;
			var relX = (moveX-starX)/boxWid*100; 
			var relY = (moveY-starY)/boxHei*100;
			self.css({"left":relX+selfX+"%","top":relY+selfY+"%"});
		}) 
		self.off("mouseleave");
		self.on("mouseleave",function(e3){
			e3.stopPropagation();
			self.off("mousedown");
			self.off("mousemove");
			self.off("mouseleave");
		})
		self.off("mouseup");
		self.on("mouseup",function(e4){
			e4.stopPropagation();
			var lefts = self.position().left/bili;
			var tops = self.position().top/bili;
			var screenLen = changeTitle.find("li").index(changeTitle.find(".selected"));
			$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[3]=parseInt(lefts);
			$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[2]=parseInt(tops);
			var wid = self.outerWidth()/bili;
			var hei = self.height()/bili;
			$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[0]=parseInt(wid);
			$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[1]=parseInt(hei);
			self.find(".change3").off("mousedown");
			$(".drawContent").off("mousemove");
			$(".drawContent").off("mouseleave");
			self.off("mousedown");
			self.off("mousemove");
			self.off("mouseleave");
			ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
		})
	})
	
	self.find(".change3").off("mousedown")
	self.find(".change3").on("mousedown",function(e1){
		e1.stopPropagation();
		var winWid = self.outerWidth();
		var winHei = self.outerHeight();
		var starX = e1.pageX;
		var starY = e1.pageY;
		$(".drawContent").off("mousemove");
		$(".drawContent").on("mousemove",function(e2){
			e2.stopPropagation();
			var moveX = e2.pageX;
			var moveY = e2.pageY;
			var relwid = (winWid+moveX-starX)/boxWid*100;
			var relhei = (winHei+moveY-starY)/boxHei*100;
			self.css({"width":relwid+"%","height":relhei+"%"});
		})
		$(".drawContent").off("mouseleave");
		$(".drawContent").on("mouseleave",function(e3){
			e3.stopPropagation();
			self.find(".change3").off("mousedown");
			$(".drawContent").off("mousemove");
			$(".drawContent").off("mouseleave");
			self.off("mousedown");
			self.off("mousemove");
			self.off("mouseleave");
		})
		$(".drawContent").off("mouseup");
		$(".drawContent").on("mouseup",function(e4){
			var screenLen = changeTitle.find("li").index(changeTitle.find(".selected"));
			var wid = self.outerWidth()/bili;
			var hei = self.outerHeight()/bili;
			$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[0]=parseInt(wid);
			$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[1]=parseInt(hei);
			ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
			self.find(".change3").off("mousedown");
			$(".drawContent").off("mousemove");
			$(".drawContent").off("mouseleave");
			self.off("mousedown");
			self.off("mousemove");
			self.off("mouseleave");
		})	
	})
}
