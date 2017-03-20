function layShowController(Dom){
	ReactDOM.render(<Part5 info={$at.screenInfo}/>,view5Dom.layoutShow);
	bindController();
	var funTitle = $(".funTitle");
	var layoutContent = $(".layoutContent");
	funTitle.on("click","li",function(){
		var index = funTitle.find("li").index($(this));
		funTitle.find("li").removeClass("selected");
		funTitle.find("li").eq(index).addClass("selected");
		layoutContent.find(".fun").removeClass("selected");
		layoutContent.find(".fun").eq(index).addClass("selected");
		
	})
	Dom.layShow.on("click",".layout2",function(){
		Dom.layShow.hide();
		Dom.layChange.show();
		
	})
	Dom.layShow.find(".drawContent1").on("click","li",function(){
		$(".drawContent1").find("li").removeClass("selected");
		$(this).addClass("selected"); 
		bindController();
	});
	
}
function layChangeController(Dom){ 
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
	var changeTitle = layChangeBox.find(".drawTitle");
	var changeBtnGroup = layChangeBox.find(".btnGroup");
	var changeDraw = layChangeBox.find(".drawContent");
	var changeBox2 = layoutInfo.find(".infoBox2");
	var changeChoose = layoutInfo.find(".chooseList");
	var changeAddbuju = layoutInfo.find("h2");
	var changeContent =layoutInfo.find(".contentList");
	var changelayName = $(".layoutName");
	var changelay = $(".addLayout");
	Dom.layChange.on("click",".layout1",function(){
		Dom.layShow.show(); 
		Dom.layChange.hide();
		ReactDOM.render(<Part5 info={$at.screenInfo}/>,view5Dom.layoutShow);
		bindController();
	})
	changelay.on("click", function () {
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
		function onComplete() {
			$at.allInfo[$at.menuIndex] = $at.screenInfo;
			ReactDOM.render(React.createElement(Part5, { info: $at.screenInfo }), view5Dom.layoutShow);
			ReactDOM.render(React.createElement(Part4, { info: $at.screenInfo, softWare: $at.softWare }), view4Dom.layout);
			bindController();
		}
	});
	
	changeTitle.on("click","li",function(){
		screenLen = changeTitle.find("li").index($(this));
	})
	changeTitle.on("click",".close",function(e){
		var index = changeTitle.find("close").index($(this));
		$at.screenInfo.drawInfo.splice(index,1);
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	})
	changeBtnGroup.find("span").on("click",function(){
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
		changelayName.find("input").val("")
		changelayName.show();
	})
	changelayName.find(".close").on("click",function(){
		changelayName.hide();
	})
	changelayName.find("p").on("click",function(){
		var value = changelayName.find("input").val();
		if(value){
			$at.screenInfo.drawInfo[screenLen].title = value;
			ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
			changelayName.hide();
		}
	});
	layoutInfo.find(".infoBox1").on("click","p",function(){
		layoutInfo.find("p").removeClass("selected");
		$(this).addClass("selected");
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].across=layoutInfo.find("p").index($(this))==0;
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	})
	changeDraw.on("click","li",function(){
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
	})
	changeBox2.find("input").eq(0).on("change",function(){
		var x = $(this).val();
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[3]=parseInt(x);
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	})
	changeBox2.find("input").eq(1).on("change",function(){
		var y = $(this).val();
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[2]=parseInt(y);
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	})
	changeBox2.find("input").eq(2).on("change",function(){
		var wid = $(this).val();
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[0]=parseInt(wid);
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	})
	changeBox2.find("input").eq(3).on("change",function(){
		var hei = $(this).val();
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[1]=parseInt(hei);
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	})
	changeChoose.on("click",".close",function(){
		var num = changeChoose.find("li .close").index($(this));
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].medias.splice(parseInt(num),1);
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	})
	changeAddbuju.on("click",function(){ 
		var data = {
					across:true,
					screenInfo:[1920,1080,0,0],
					medias:[],
				}
		$at.screenInfo.drawInfo[screenLen].screens.push(data); 
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	})
	changeContent.on("click",".close",function(){
		$at.screenInfo.drawInfo[screenLen].screens.splice(smallIndex,1);
		smallIndex=0;
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	})
	changeContent.on("click",".contentBtn",function(){
		changeContent.find(".contentBtn").removeClass("selected");
		$(this).addClass("selected");
	})
	changeContent.on("click",".add",function(){
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