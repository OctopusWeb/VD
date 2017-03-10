$(function(){
	var Dom = {
		submite		: $(".submite"),
		
		
		layShow		: $("#layoutShow"),
		layBottom	: $("#layoutBottom"),
		layContent	: $(".layoutContent"),
		layChange	: $("#layout"),
		
		
		PartLev 	: $("#levNum li"),
		Part1btn 	: $("#btnPart1"),
		Part2btn	: $("#btnPart2"),
		Part3btn	: $("#btnPart3"),
		PartTitle 	: $("#pageTitle h1"),
		
		entryHard	: $("#entryHard"),
		entrySoft	: $("#entrySoftware"),
		
		
		
		drawArea	: $("#drawArea"),
		drawBox		: $("#drawBox"),
		screenLi	: $("#addPart3 ul li"),
		entrySlected: $("#entrySlected"),
		screenPlan	: $("#screenPlan ul"),
		addPart2	: $("#addPart2"),

		funTitle	: $(".funTitle"),
		
		
		
		btnGroup	: $("#btnGroup"),
		ulList		: $(".ulList"),
		
		
	}
	document.body.onselectstart=document.body.oncontextmenu=function(){ return false;};
	partController(Dom);
	
	
	Dom.entrySlected.find("li").hover(function(){
		$(this).addClass("selected");
	},function(){
		$(this).removeClass("selected");
	})
	
	Dom.entrySlected.find("li").on("click",function(){
		var index = Dom.entrySlected.find("li").index($(this));
		var selected = Dom.screenPlan.find(".selected");
		var value = $(this).find("p").html();
		selected.css({"background":$at.staticColors[index]});
		selected.find("p").html(value)
		Dom.entrySlected.hide();
	})
	
	Dom.btnGroup.find(".btn").eq(0).on("click",function(){
		Dom.entryHard.slideToggle(); 
		Dom.entrySoft.slideUp(); 
	})
	Dom.btnGroup.find(".btn").eq(1).on("click",function(){
		Dom.entrySoft.slideToggle(); 
		Dom.entryHard.slideUp();
	})
	Dom.ulList.on("click","p",function(){
		$(this).parent().find("li").slideToggle(); 
	})
	loginController(Dom); 
	drawController(Dom);
})


function loginController(Dom){
	Dom.submite.on("click",function(){
		$Animate.complete($Animate.loginHide,$Animate.wrapShow); 
		initLayInfo(Dom);
	})
}
function layShowController(data,Dom){
	ReactDOM.render(<Part5 info={data[0]}/>,view5Dom.layoutShow);
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
	});
}
function layChangeController(data,Dom,softWare){
	var data=data;
	ReactDOM.render(<Part4 info={data[0]} softWare={softWare}/>,view4Dom.layout);
	Dom.layChange.on("click",".layout1",function(){
		Dom.layShow.show();
		Dom.layChange.hide();
	})
	layoutChange(data[0],softWare);
}
function initLayInfo(Dom){
	$at.getJson("../dataDemo.json","",onComplete);
	function onComplete(json){
		var data = layParseDate(json); 
		$at.getJson("../softWare.json","",onComplete2);
		function onComplete2(json2){
			var softWare = ParseSoft(json2.data);
			layShowController(data,Dom); 
			layChangeController(data,Dom,softWare);
		}	
	}
}
function ParseSoft(json){ 
	console.log(json)
	var data=[];
	var type=["video","ppt","pdf","flash","web","zoolonweb"]
	for (var i=0;i<type.length;i++) {
		var timeData=[]
		for (var j=0;j<json.length;j++) {
			if(type[i]==json[j].typeCode){
				timeData.push(json[j].name);
			}
		}
		data.push(timeData);
	}
	return data;
}
function layParseDate(json){
	var screenArr=[];
	for (var i=0;i<json.screenInfo.length;i++) {
		var obj={};
		var drawInfo=[];
		var info = json.screenInfo[i];
		obj.screenInfo={
			title:info.name,
			col:info.columnCount,
			row:info.rowCount,
			wid:info.widthOne,
			hei:info.heightOne,
			id:info.screenId
		};
		for (var j=0;j<json.layout.length;j++) {
			var obj2 = {} 
			var screens=[];
			var layout = json.layout[j];
			if(info.screenId == layout.screenId){
				obj2 = {
					title: layout.name,
					id: layout.layoutId,
					controlUrl : layout.controlUrl,
					usePercent:layout.usePercent
				}
				for (var m=0;m<json.describe.length;m++) {
					var obj3={};
					var describe = json.describe[m];
					var medias=[];
					if(layout.layoutId == describe.layoutId){
						obj3={
							id:describe.winId,
							scale:describe.scale,
							across:false,
							screenInfo:[describe.width,describe.height,describe.x,describe.y],
							medias:[["PPT","叮当5"],["FLASH","叮当2"]],
							items:describe.items
						}
					}
					for (var n=0;n<json.describe[m].items.length;n++) {
						var mediasArr=[json.describe[m].items[n].controlType,json.describe[m].items[n].name];
						medias.push(mediasArr);
					}
					obj3.medias=medias;
					screens.push(obj3)
				}
				obj2.screens=screens;
			}
			drawInfo.push(obj2)
		}
		obj.drawInfo=drawInfo;
		screenArr.push(obj);
	}
	return screenArr;
}

function partController(Dom){
	changePage(Dom);
	Dom.addPart2.find("ul").on("click",function(e){
		var event = e || window.event;
		var dom = event.target || event.srcElement;
		dom = dom.parentNode.parentNode;
		if(dom.tagName.toLowerCase() == "li"){
			if(dom.getAttribute("class") == "selected"){ 
				dom.setAttribute("class", "");
			}else{
				dom.setAttribute("class", "selected");
			}	
		}
	});
	
	function changePage(Dom){
		Dom.Part1btn.find(".next").on("click",function(){
			$Animate.complete($Animate.Part1Hide,$Animate.Part2Show);
			PartChange(1)
		});
		Dom.Part2btn.find(".pre").on("click",function(){
			$Animate.complete($Animate.Part2Hide1,$Animate.Part1Show);
			PartChange(0)
		});
		Dom.Part2btn.find(".next").on("click",function(){
			$Animate.complete($Animate.Part2Hide2,$Animate.Part3Show);
			PartChange(2)
		});
		Dom.Part3btn.find(".pre").on("click",function(){
			$Animate.complete($Animate.Part3Hide,$Animate.Part2Show);
			PartChange(1)
		});
		Dom.Part3btn.find(".next").on("click",function(){
			$Animate.LayoutShow();
		});
		function PartChange(index){
			var title = ["新建虚拟桌面","选择主机","分配屏幕"]
			Dom.PartLev.removeClass("selected");
			Dom.PartLev.eq(index).addClass("selected");
			Dom.pageTitle.html(title[index]);
		}
	}
}




function layoutChange(infoArr,softWare){
	console.log(infoArr,softWare);
	var infoArr = infoArr;
	var screenLen=0;
	var smallIndex=0;
	var dom ={ 
		drawBox			: $("#drawBox"),
		drawTitle		: $(".drawTitle"),
		btnGroup		: $(".btnGroup"),
		infoBox1		: $(".infoBox1"),
		drawContent		: $(".drawContent"),
		infoBox2		: $(".infoBox2"),
		chooseList		: $(".chooseList"),
		addBuju			: $("#layoutInfo h2"),
		drawContent		: $(".drawContent"),
		contentList		: $(".contentList"),
		layoutName		: $(".layoutName"),
		addLayout		: $(".addLayout")
	}
	dom.addLayout.on("click",function(){
		console.log(JSON.stringify(infoArr));
	})
	dom.drawTitle.on("click","li",function(){
		screenLen = dom.drawTitle.find("li").index($(this))
	})
	dom.drawTitle.on("click",".close",function(e){
		var index = dom.drawTitle.find("close").index($(this));
		infoArr.drawInfo.splice(index,1);
		ReactDOM.render(<Part4 info={infoArr} softWare={softWare}/>,view4Dom.layout);
	})
	dom.btnGroup.find("span").on("click",function(){
		var num  = parseInt(infoArr.drawInfo.length)+1;
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
		infoArr.drawInfo.push(addScreen);
		ReactDOM.render(<Part4 info={infoArr} softWare={softWare}/>,view4Dom.layout);
	})
	dom.btnGroup.find("p").on("click",function(){
		dom.layoutName.find("input").val("")
		dom.layoutName.show();
	})
	dom.layoutName.find(".close").on("click",function(){
		dom.layoutName.hide();
	})
	dom.layoutName.find("p").on("click",function(){
		var value = dom.layoutName.find("input").val();
		if(value){
			infoArr.drawInfo[screenLen].title = value;
			ReactDOM.render(<Part4 info={infoArr} softWare={softWare}/>,view4Dom.layout);
			dom.layoutName.hide();
		}
	});
	dom.infoBox1.on("click","p",function(){
		dom.infoBox1.find("p").removeClass("selected");
		$(this).addClass("selected");
		infoArr.drawInfo[screenLen].screens[smallIndex].across=dom.infoBox1.find("p").index($(this))==0;
		ReactDOM.render(<Part4 info={infoArr} softWare={softWare}/>,view4Dom.layout);
	})
	dom.drawContent.on("click","li",function(){
		var num = parseInt($(this).find("span").html());
		smallIndex=num;
		var arr = infoArr.drawInfo[screenLen].screens[smallIndex].screenInfo;
		dom.infoBox2.find("input").eq(1).val(arr[2])
		dom.infoBox2.find("input").eq(0).val(arr[3])
		dom.infoBox2.find("input").eq(2).val(arr[0])
		dom.infoBox2.find("input").eq(3).val(arr[1])
		dom.drawContent.find("li").removeClass("selected");
		$(this).addClass("selected");
		ReactDOM.render(<Part4 info={infoArr} softWare={softWare}/>,view4Dom.layout);
	})
	dom.infoBox2.find("input").eq(0).on("change",function(){
		var x = $(this).val();
		infoArr.drawInfo[screenLen].screens[smallIndex].screenInfo[3]=parseInt(x);
		ReactDOM.render(<Part4 info={infoArr} softWare={softWare}/>,view4Dom.layout);
	})
	dom.infoBox2.find("input").eq(1).on("change",function(){
		var y = $(this).val();
		infoArr.drawInfo[screenLen].screens[smallIndex].screenInfo[2]=parseInt(y);
		ReactDOM.render(<Part4 info={infoArr} softWare={softWare}/>,view4Dom.layout);
	})
	dom.infoBox2.find("input").eq(2).on("change",function(){
		var wid = $(this).val();
		infoArr.drawInfo[screenLen].screens[smallIndex].screenInfo[0]=parseInt(wid);
		ReactDOM.render(<Part4 info={infoArr} softWare={softWare}/>,view4Dom.layout);
	})
	dom.infoBox2.find("input").eq(3).on("change",function(){
		var hei = $(this).val();
		infoArr.drawInfo[screenLen].screens[smallIndex].screenInfo[1]=parseInt(hei);
		ReactDOM.render(<Part4 info={infoArr} softWare={softWare}/>,view4Dom.layout);
	})
	dom.chooseList.on("click",".close",function(){
		var num = dom.chooseList.find("li .close").index($(this));
		infoArr.drawInfo[screenLen].screens[smallIndex].medias.splice(parseInt(num),1);
		ReactDOM.render(<Part4 info={infoArr} softWare={softWare}/>,view4Dom.layout);
	})
	dom.addBuju.on("click",function(){
		var data = {
					across:true,
					screenInfo:[1920,1080,0,0],
					medias:[],
				}
		infoArr.drawInfo[screenLen].screens.push(data);
		ReactDOM.render(<Part4 info={infoArr} softWare={softWare}/>,view4Dom.layout);
	})
	dom.drawContent.on("click",".close",function(){
		infoArr.drawInfo[screenLen].screens.splice(smallIndex,1);
		smallIndex=0;
		ReactDOM.render(<Part4 info={infoArr} softWare={softWare}/>,view4Dom.layout);
	})
	dom.contentList.on("click",".contentBtn",function(){
		dom.contentList.find(".contentBtn").removeClass("selected");
		$(this).addClass("selected");
	})
	dom.contentList.on("click",".add",function(){
		var type = $(this).parent().find(".icon").attr("name");
		var name = $(this).parent().find("span").html();
		var arr = [type,name]
		infoArr.drawInfo[screenLen].screens[smallIndex].medias.push(arr);
		ReactDOM.render(<Part4 info={infoArr} softWare={softWare}/>,view4Dom.layout);
	}) 
}