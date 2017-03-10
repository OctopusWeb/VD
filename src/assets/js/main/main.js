var view1Dom = {
	inputGroup		: $at.GetDomId("addPart1"),
	screenShow		: $at.GetDomId("screenShow"),
}
var InputName = ["新建名称","屏幕行数","屏幕宽度","屏幕列数","屏幕高度"];
var Part1 = React.createClass({
	render : function(){
		return (<div>
			<InputGroup rowChange={this.handlerRow}/>
			<ScreenShow row={this.state.row} col={this.state.col} wid={this.state.wid} hei={this.state.hei}/>
		</div>
		)
	},
	getInitialState : function(){
		return {
			row : 2,
			col : 4,
			wid : 1920,
			hei : 1080
		}
	},
	handlerRow : function(row1,col1,wid1,hei1){
		this.setState({row:row1,col:col1,wid:wid1,hei:hei1}) 
	}
})

var InputGroup = React.createClass({
	getInitialState : function(){
		return {
			row : 2,
			col : 4,
			wid : 1920,
			hei : 1080
		}
	},
	handlerChange : function(event){
		if(event.target.name == InputName[1]){
			this.setState({row:event.target.value})
			this.props.rowChange(event.target.value,this.state.col,this.state.wid,this.state.hei)
		}else if(event.target.name == InputName[2]){
			this.setState({wid:event.target.value})
			this.props.rowChange(this.state.row,this.state.col,event.target.value,this.state.hei)
		}else if(event.target.name == InputName[3]){
			this.setState({col:event.target.value})
			this.props.rowChange(this.state.row,event.target.value,this.state.wid,this.state.hei)
		}else if(event.target.name == InputName[4]){
			this.setState({hei:event.target.value})
			this.props.rowChange(this.state.row,this.state.col,this.state.wid,event.target.value)
		}
	},
	render : function(){
		var self = this;
		return(<div id="inputGroup">
				{
					InputName.map(function(result,index){
						return <div key={index} className="input">
							<p>{result}</p>
							<input type="text" onChange={self.handlerChange} placeholder = {result} name={result}/>
						</div>
					}) 
				}
			</div>
		)
	}
})
var ScreenShow = React.createClass({
	render : function(){
		var b = [];
		var row = this.props.row; 
 		var col = this.props.col;
 		var bil = this.props.hei/this.props.wid
 		var wid = 100/col+"%";
 		var hei = bil*100/col+"%";
 		for(var i=0;i<row*col;i++){
 			b.push(i)
 		}
		return (<div id="screenShow">
			<ul>
			{
				b.map(function(result,index){ 
					return <li key={index+1} style={{width:wid,paddingBottom:hei}}></li>  
				})
			}
			<BtnPart1 />
			</ul>
		</div>
		)
	}
})
var BtnPart1 = React.createClass({
	render : function(){
		return (<div id="btnPart1">
				<div className="btn next">下一步</div>
		</div>	
		)
	}
})
ReactDOM.render(<Part1/>,view1Dom.inputGroup);

var view2Dom = {
	addPart2 : $at.GetDomId("addPart2"),
}
var facilityList = ["PC8189","PC8189","PC8189","PC8189","PC8189","PC8189","PC8189","PC8189","PC8189"]

var Part2 = React.createClass({
	render : function(){
		return (<div>
			<FacilityList />
		</div>)
	}
})
var FacilityList = React.createClass({
	render : function(){
		return (<ul>
			{
				facilityList.map(function(result,index){
					return (<li key={index}>
								<div>
									<img src="assets/img/facility.png" alt="PC8189"/>
								</div>
								<p>{result}</p>
							</li>
						)
				})
			}
			<BtnPart2/>
		</ul>)
	}
})
var BtnPart2 = React.createClass({
	render : function(){
		return (<div id="btnPart2">
				<div className="btn pre">上一步</div>
				<div className="btn next">下一步</div>
		</div>)
	}
})

ReactDOM.render(<Part2 />,view2Dom.addPart2);
						
var view3Dom = {
	addPart3 : $at.GetDomId("addPart3")
}
var facilityList = ["PC1111","PC2222","PC3333","PC4444","PC5555","PC6666"]

var Part3 = React.createClass({
	render : function(){
		return (<div>
			<ScreenPlan num = "8"/>
			<EntrySlected/>
			<EntryList/>
			<BtnPart3/> 
		</div>
		)
	}
})
var ScreenPlan = React.createClass({
	render : function(){
		var arr = [];
		var num = this.props.num
		for(var i=0;i<num;i++){
 			arr.push(i)
 		}
		return (<div id="screenPlan"><ul>
				{
					arr.map(function(result,index){
						return (<li key = {index}><img src="assets/img/facility1.png"/><p>空</p></li>)
					})
				}
			</ul>
			<DrawArea/>
			</div>
		)
	}
})

var DrawArea = React.createClass({
	render : function(){
		return (<div id="drawArea" >
			<div id="drawBox"></div>
		</div>)
	}
})
var EntrySlected = React.createClass({
	render : function(){
		return (<div id="entrySlected"><ul>
			{
				facilityList.map(function(result,index){
					var colorStyle = {
						border : "1px solid "+$at.staticColors[index]
					} 
					return (<li key = {index}><img src="assets/img/facility.png" style={colorStyle}/><p>{result}</p></li>)
				}) 
			}
		</ul></div>
		)
	}
})
var EntryList = React.createClass({
	render : function(){
		return (<ul id="entryList">
			{
				facilityList.map(function(result,index){
					var colorStyle = {
						border : "2px solid "+$at.staticColors[index]
					} 
					return (<li key={index}>
								<img src="assets/img/facility.png" alt="PC8189" style={colorStyle}/>
								<p>{result}</p>
							</li>
						)
				})
			}
		</ul>)
	}
})
var BtnPart3 = React.createClass({
	render : function(){
		return  (<div id="btnPart3">
				<div className="btn pre">上一步</div>
				<div className="btn next">完成</div>
		</div>)
	}
})
ReactDOM.render(<Part3/>,view3Dom.addPart3);  

function entryController(Dom){
	var entryArr =[["ppt1","PPT"],["pdf1","PDF"],["flash1","FLASH"],["web1","WEB"],["zoolonweb1","ZoolonWEB"],["video1","Video"]]
	var entryName = ["展项名称","展项类型","资源URL","总控命令地址"]
	var entryList = [
		{
		"name":"PPT",
		"img":"ppt1",
		"arr":["AAAA","BBBB"]
		},
		{
		"name":"PDF",
		"img":"pdf1",
		"arr":["CCCC","DDDD"]
		},
		{
		"name":"FLASH",
		"img":"flash1",
		"arr":["DDDD","EEEE"]
		},
		{
		"name":"WEB",
		"img":"web1",
		"arr":["FFFF","GGGG"]
		},
		{
		"name":"ZoolonWEB",
		"img":"zoolonweb1",
		"arr":["HHHH","IIII"]
		},
		{
		"name":"Video",
		"img":"video1",
		"arr":["JJJJ","KKKK"]
		}
	]
	
	var softArr = [["shebei1","PC"]];
	var softName = ["设备名称","mac地址","daemonld","备注"];
	var softList = [
		{
		"name":"PC",
		"img":"shebei1",
		"arr":["AAAA","BBBB"]
		}
	]
	ReactDOM.render(<EntryHard arr={entryArr} list={entryList} name={entryName}/>,document.getElementById("entryHard"));
	ReactDOM.render(<EntrySoft arr={softArr}  list={softList}  name={softName}/>,document.getElementById("entrySoftware"));
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
	$(".entryList").on("click","li",function(){
		$(".entryList").find("li").removeClass("selected");
		$(".chooseList").find("li").removeClass("selected");
		$(this).addClass("selected"); 
		$("#entryHard input").eq(0).val("");
		$("#entrySoftware input").eq(0).val("");
	})
	$("#entryAdd").on("click",function(){
		var name = $("#entryHard input").eq(0).val();
		name = name==""?"未定义":name;
		var type = $(".entryList .selected").find("h3").html();
		for (var i=0;i<entryList.length;i++) {
			if(type == entryList[i].name){
				entryList[i].arr.push(name)
			}
		}
		ReactDOM.render(<EntryHard arr={entryArr} list={entryList} name={entryName}/>,document.getElementById("entryHard"));
		$("#entryHard input").eq(0).val("");
	})
	$("#entryHard .chooseList").on("click","li",function(){
		$(".entryList").find("li").removeClass("selected");
		$(".chooseList").find("li").removeClass("selected");
		$(this).addClass("selected");
		var type = $(this).parent().attr("class");
		var name = $(this).find("h3").html();
		$("#entryHard input").eq(0).val(name);
	})
	
	$("#softAdd").on("click",function(){
		var name = $("#entrySoftware input").eq(0).val();
		name = name==""?"未定义":name;
		var type = $(".entryList .selected").find("h3").html();
		for (var i=0;i<softList.length;i++) {
			if(type == softList[i].name){
				softList[i].arr.push(name)
			}
		}
		ReactDOM.render(<EntrySoft arr={softArr}  list={softList}  name={softName}/>,document.getElementById("entrySoftware"));
		$("#entrySoftware input").eq(0).val("");
	})
	
	$("#entrySoftware .chooseList").on("click","li",function(){
		$(".entryList").find("li").removeClass("selected");
		$(".chooseList").find("li").removeClass("selected");
		$(this).addClass("selected");
		var type = $(this).parent().attr("class");
		var name = $(this).find("h3").html();
		$("#entrySoftware input").eq(0).val(name);
	})
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

var EntryHard = React.createClass({
	render : function(){
		return(<div>
				<EntryList arr={this.props.arr} name={"资源类型"}/>
				<div className="addBtn" id="entryAdd">添加</div> 
				<ChooseList list = {this.props.list} name={"当前所有内容"}/>
				<InputList name={this.props.name}/>
			</div>
		)
	}
})
var EntrySoft = React.createClass({
	render : function(){
		return(<div>
				<EntryList arr={this.props.arr} name={"设备类型"}/>
				<div className="addBtn" id="softAdd">添加</div> 
				<ChooseList list={this.props.list} name={"当前所有设备"}/>
				<InputList name={this.props.name}/>
			</div>)
	}
})
var EntryList = React.createClass({
	render : function(){
		var arr = this.props.arr
		return (<div className="entryList">
			<div className="title"><h2>{this.props.name}</h2></div>
			<ul>
			{
				arr.map(function(result,index){
					var imgSrc = "assets/img/"+result[0]+".png"
					return(<li key={index}>
						<img src={imgSrc}/>
						<h3>{result[1]}</h3>
					</li>)
				})
			}
			</ul>
		</div>)
	}
})

var ChooseList = React.createClass({
	render : function(){
		var list = this.props.list;
		return(<div className="chooseList">
			<div className="title"><h2>{this.props.name}</h2></div>
			<div className="ulList">
			{
				list.map(function(result,index){
					return(<ul key={index} className={result.name}>
						<p>{result.name}<img src="assets/img/showbtn.png"/></p>
						{
							result.arr.map(function(results,indexs){
								var imgSrc = "assets/img/"+result.img+".png"
								return(<li key={indexs}>
										<img src={imgSrc}/>
										<h3>{results}</h3>
									</li>)
							})
						}
					</ul>
					)
				})
			}
			</div>
		</div>)
	}
})

var InputList = React.createClass({
	render : function(){
		var name = this.props.name;
		return (<div className="hardInput">
			<ul>
				<h1>资源属性</h1>
				<li>
					<p>{name[0]}</p>
					<input type="text"/>
				</li>
				<li className="brInput">
					<p>{name[1]}</p>
					<input type="text"/>
				</li>
				<li>
					<p>{name[2]}</p>
					<input type="text"/>
				</li>
				<li>
					<p>{name[3]}</p>
					<input type="text"/>
				</li>
			</ul>
		</div>)
	}
})


$(function(){
	
})

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
		
		screenLi	: $("#addPart3 ul li"),
		entrySlected: $("#entrySlected"),
		screenPlan	: $("#screenPlan ul"),
		addPart2	: $("#addPart2"),

		funTitle	: $(".funTitle"),
		
		
		
		btnGroup	: $("#btnGroup"),
		ulList		: $(".ulList"),
		
		
	}
	document.body.onselectstart=document.body.oncontextmenu=function(){ return false;};
	
	
	Dom.ulList.on("click","p",function(){
		$(this).parent().find("li").slideToggle(); 
	})
	partController(Dom);
	loginController(Dom);
	entryController(Dom);
	drawController(Dom);
	
})

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

function layShowController(Dom){
	ReactDOM.render(<Part5 info={$at.screenInfo}/>,view5Dom.layoutShow);
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
function layChangeController(Dom){ 
	ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	layoutChange(Dom);
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
					var describe = json.describe[m];
					if(layout.layoutId == describe.layoutId){
						var obj3={};
						var media=[];
						for (var n=0;n<json.describe[m].items.length;n++) {
							var mediasArr=[json.describe[m].items[n].controlType,json.describe[m].items[n].name];
							media.push(mediasArr);
						}
						obj3={
							id:describe.winId,
							scale:describe.scale,
							across:false,
							screenInfo:[describe.width,describe.height,describe.x,describe.y],
							medias:media, 
							items:describe.items
						}
						screens.push(obj3)
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
	var changeAddlay = $(".addLayout");
	Dom.layChange.on("click",".layout1",function(){
		Dom.layShow.show(); 
		Dom.layChange.hide();
		ReactDOM.render(<Part5 info={$at.screenInfo}/>,view5Dom.layoutShow);
	})
	changeAddlay.on("click",function(){
		$at.allInfo[$at.menuIndex]=$at.screenInfo;
	})
	changeTitle.on("click","li",function(){
		screenLen = changeTitle.find("li").index($(this))
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
		var name = $(this).parent().find("span").html();
		var arr = [type,name]
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].medias.push(arr);
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	}) 
}
var view4Dom = {
	layout	: $at.GetDomId("layout")
}
var titleList = [["SHIPIN","视频"],["PPT","PPT"],["PDF","PDF"],["FLASH","FLASH"],["WEB","WEB"],["ZOOLONWEB","ZOOLONWEB"]]
var Part4 = React.createClass({
	render : function(){
		var info = this.props.info;
		var screenInfo = info.screenInfo;
		return (<div> 
			<LayoutTop1 title={screenInfo.title}/>
			<LayoutScreen1 obj={{info}} softWare={this.props.softWare}/>
			<LayoutName1/>
			</div>)
	}
})
var LayoutTop1 = React.createClass({
	render : function(){
		return (<div id="layoutTop">
						<h1>{this.props.title}</h1>
						<div className="addLayout">
							保存布局
						</div>
					</div>)
	}
})

var LayoutScreen1 = React.createClass({
	getInitialState : function(){
		return{
			info : this.props.obj.info,
			index: 0,
			smallIndex:0
		}
	},
	changeIndex:function(num){
		this.setState({index:num});
	},
	changeSmallIndex:function(num){
		this.setState({smallIndex:num});
	},
	render : function(){
		var info = this.state.info;
		var drawInfo = info.drawInfo;
 		var row = info.screenInfo.row;
 		var col = info.screenInfo.col;
 		var num = row*col;
 		var bil = info.screenInfo.hei/info.screenInfo.wid
 		var wid = 100/col+"%";
 		var hei = bil*100/col+"%";
 		var b = [];
 		for(var i=0;i<num;i++){
 			b.push(i)
 		}
		return (<div id="LayoutScreen">
			<div id="screenUl">
			<ul className="screenUl">
			{
				b.map(function(result,index){ 
					return <li key={index+1} style={{width:wid,paddingBottom:hei}}></li>  
				})
			}
			</ul>
			<DrawBox1 obj={info} index={this.state.index} smallIndex={this.state.smallIndex} changeIndex={this.changeIndex} changeIndex2={this.changeSmallIndex}/>
			</div>
			<LayoutInfo obj={{drawInfo}} index={this.state.index} smallIndex={this.state.smallIndex} softWare={this.props.softWare}/>
			<p className="layout1">预览布局</p>
		</div>
		)
	}
})
var LayoutInfo = React.createClass({
	render : function(){
		var i1=this.props.index;
		var i2=this.props.smallIndex;
		var drawInfo = this.props.obj.drawInfo[i1];
		var across = drawInfo.screens[i2].across;
		var screenInfo=drawInfo.screens[i2].screenInfo;
		var medias=drawInfo.screens[i2].medias;
		return (<div id="layoutInfo">
			<h1>窗口属性</h1>
			<h2>添加窗口</h2>
			<div>
				<InfoBox1 texts={across}/>
				<InfoBox2/>
			</div>
			<div id="sources">
				<InfoBox3 texts={medias}/>
			</div>
			<div>
				<InfoBox4 softWare={this.props.softWare}/>
			</div>
		</div>)
	}
})
var InfoBox1 = React.createClass({
	render : function(){
		var bol = this.props.texts;
		if(bol){
			return(<div className="infoBox infoBox1">
				<h3>窗口跨屏属性</h3>
				<div className="chooseBtn"><p className="selected">可跨主机</p><p>不可跨主机</p></div> 
			</div>)
		}else{ 
			return(<div className="infoBox infoBox1">
				<h3>窗口跨屏属性</h3>
				<div className="chooseBtn"><p>可跨主机</p><p className="selected">不可跨主机</p></div>
			</div>) 
		}
		
	}
})
var InfoBox2 = React.createClass({
	render : function(){
		return(<div className="infoBox infoBox2">
			<h3>窗口位置</h3>
			<div className="inputGroup"><p>X</p><input type="number"/></div> 
			<div className="inputGroup"><p>Y</p><input type="number"/></div> 
			<div className="inputGroup"><p>宽度</p><input type="number"/></div> 
			<div className="inputGroup"><p>高度</p><input type="number"/></div> 
		</div>)
	}
})
var InfoBox3 = React.createClass({
	render : function(){
		var b = this.props.texts;
		var self = this;
		return(<div className="infoBox">
			<h3>窗口资源</h3>
			<ul className="chooseList"> 
			{
				b.map(function(result,index){
					var imgSrc = "assets/img/"+result[0]+".png"
					return(<li key={index}>
						<img src={imgSrc} className="icon"/>
						<p>{result[1]}</p>
						<img src="assets/img/close.png" className="close" name={index}/>
					</li>)
				})
			}
			</ul>
		</div>)
	}
})
var InfoBox4 = React.createClass({
	getInitialState : function(){
		return{
			index:0,
		}
	},
	listHandeler : function(e){
		this.setState({index:e.target.id})
	},
	render : function(){
		var self = this;
		return(<div className="infoBox">
			<h3>窗口跨屏属性</h3>
			<div className="infoList">
				<ul className="titileList">
					{
						titleList.map(function(result,index){
							var cla = self.state.index==index?"selected":"";
							var imgSrc = "assets/img/"+titleList[index][0]+".png";
							return(<li key={index} className={cla}>
								<img src={imgSrc}/>
								<p id={index} onClick={self.listHandeler}>{result[1]}</p>
							</li>)
						})
					}
				</ul>
				<ul className="contentList">
					{
						this.props.softWare.map(function(result,index){
							var cla = self.state.index==index?"selected":""
							var imgSrc = "assets/img/"+titleList[index][0]+".png"
							return(<li key={index} className={cla}>
								{
									result.map(function(result2,index2){
										return(
											<div className="contentBtn" key={index2}>
												<img src={imgSrc} className="icon" name={titleList[index][0]}/>
												<span>{result2}</span>
												<img src="assets/img/add.png" className="add"/>
											</div>
										)
									})
								}
								
							</li>)
						})
					}
				</ul>
			</div>
		</div>)
	}
})
var DrawBox1 = React.createClass({ 
	getInitialState : function(){
		var screenInfo = this.props.obj.screenInfo;
		var drawInfo = this.props.obj.drawInfo;
		return{
			drawInfo:drawInfo,
			screenInfo:screenInfo
		}
	},
	clickHandeler : function(e){
		this.props.changeIndex(e.target.id)
	},
	clickHandeler2 : function(e){
		if(e.target.nodeName.toLowerCase()=="li"){
			this.props.changeIndex2(e.target.id)
		}
		
	},
	componentWillUpdate : function(){
		if(!this.state.drawInfo[this.props.index]){
			this.props.changeIndex(parseInt(this.props.index)-1)
		}
	},
	render : function(){
		var self = this;
		var hei = this.props.obj.screenInfo.hei;
		var wid = this.props.obj.screenInfo.wid;
		var row = this.props.obj.screenInfo.row;
		var col = this.props.obj.screenInfo.col;
		return(<div id="drawBox">
			<div className="btnGroup">
				<p>布局属性</p>
				<span>添加布局</span>
			</div>
			<ul className="drawTitle">
			{
				this.state.drawInfo.map(function(result,index){
					var cla = index==self.props.index?"selected":"";
					return(<li key={index} className={cla}>
						<p id={index} onClick={self.clickHandeler}>{result.title}</p>
						<img src="assets/img/close.png" className="close"/>
					</li>)
				})
			}
			</ul>
			<ul className="drawContent">
			{
				this.state.drawInfo[this.props.index].screens.map(function(result,index){
					var styleInfo = result.screenInfo;
					var styleObj = {
						height : styleInfo[1]/hei/row*100+"%",
						width  : styleInfo[0]/wid/col*100+"%",
						top    : styleInfo[2]/hei/row*100+"%",
						left   : styleInfo[3]/wid/col*100+"%"
					}
					return(<li key={index} style={styleObj} id={index} onClick={self.clickHandeler2}>
						<span>{index}</span>
						<img src="assets/img/close.png" className="close"/>
						<div className="change1 change"></div>
						<div className="change2 change"></div>
						<div className="change3 change"></div>
					</li>)
				})
			}
			</ul>
		</div>)
	}
})

var LayoutName1 = React.createClass({
	render : function(){
		return(<div className="layoutName">
			<img src="assets/img/close.png" className="close"/>
			<h1>布局属性</h1>
			<div className="inputGroup">
				<h2>名称:</h2>
				<input type="text"/>
			</div>
			<p>完成</p>
		</div>)
	}
})





var view5Dom = {
	layoutShow	: $at.GetDomId("layoutShow")
}
var Part5 = React.createClass({
	render : function(){
		
		var info = this.props.info;
		var screenInfo = info.screenInfo; 
		return (<div> 
			<LayoutTop title={screenInfo.title}/>
			<LayoutShow obj={{info}}/>
			</div>)
	}
})
var LayoutBottom = React.createClass({
	render : function(){
		var drawInfo = this.props.obj.drawInfo;
		var index = this.props.index;
		var smallIndex = this.props.smallIndex;
		var info = drawInfo[index].screens[smallIndex].medias;
		return(<div id="layoutBottom">
			<FunTitle title = {info}/>
			<div className='layoutContent'>
				{
					info.map(function(result,index){
						var htmls = chooseType(result[0],result[1],index)
						return htmls
					})
				}
			</div>
			<p className="layout2">编辑布局</p>
		</div>)
	}
})
var LayoutTop = React.createClass({
	render : function(){
		return (<div id="showTop">
					<h1>{this.props.title}</h1>
				</div>)
	}
})
var LayoutShow = React.createClass({
	getInitialState : function(){
		return{
			info : this.props.obj.info,
			index: 0,
			smallIndex:0
		}
	},
	changeIndex:function(num){
		this.setState({index:num});
	},
	changeSmallIndex:function(num){
		this.setState({smallIndex:num});
	},
	render : function(){
		var info = this.state.info;
		var drawInfo = info.drawInfo;
 		var row = info.screenInfo.row;
 		var col = info.screenInfo.col;
 		var num = row*col;
 		var bil = info.screenInfo.hei/info.screenInfo.wid
 		var wid = 100/col+"%";
 		var hei = bil*100/col+"%";
 		var b = [];
 		for(var i=0;i<num;i++){
 			b.push(i)
 		}
		return (<div id="LayoutScreen">
			<div id="screenUl">
			<ul className="screenUl">
			{
				b.map(function(result,index){ 
					return <li key={index+1} style={{width:wid,paddingBottom:hei}}></li>  
				})
			}
			</ul>
			<DrawBox obj={info} index={this.state.index} smallIndex={this.state.smallIndex} changeIndex={this.changeIndex} changeIndex2={this.changeSmallIndex}/>
			<LayoutBottom obj={info} index={this.state.index} smallIndex={this.state.smallIndex}/>
			</div>
			
		</div>
		)
	}
})
var DrawBox = React.createClass({
	getInitialState : function(){
		var screenInfo = this.props.obj.screenInfo;
		var drawInfo = this.props.obj.drawInfo;
		return{
			drawInfo:drawInfo,
			screenInfo:screenInfo
		}
	},
	clickHandeler : function(e){
		this.props.changeIndex(e.target.id)
	},
	clickHandeler2 : function(e){
		if(e.target.nodeName.toLowerCase()=="li"){
			this.props.changeIndex2(e.target.id)
		}
		
	},
	componentWillUpdate : function(){
		if(!this.state.drawInfo[this.props.index]){
			this.props.changeIndex(parseInt(this.props.index)-1)
		}
	},
	render : function(){
		var self = this;
		var hei = this.props.obj.screenInfo.hei;
		var wid = this.props.obj.screenInfo.wid;
		var row = this.props.obj.screenInfo.row;
		var col = this.props.obj.screenInfo.col;
		return(<div id="drawBox1">
			<ul className="drawTitle1">
			{
				this.state.drawInfo.map(function(result,index){
					var cla = index==self.props.index?"selected":"";
					return(<li key={index} className={cla}>
						<p id={index} onClick={self.clickHandeler}>{result.title}</p>
					</li>)
				})
			}
			</ul>
			<ul className="drawContent1">
			{
				this.state.drawInfo[this.props.index].screens.map(function(result,index){
					var styleInfo = result.screenInfo;
					var styleObj = {
						height : styleInfo[1]/hei/row*100+"%",
						width  : styleInfo[0]/wid/col*100+"%",
						top    : styleInfo[2]/hei/row*100+"%",
						left   : styleInfo[3]/wid/col*100+"%"
					}
					return(<li key={index} style={styleObj} id={index} onClick={self.clickHandeler2}>
						<span>{index}</span>
					</li>)
				})
			}
			</ul>
		</div>)
	}
})
function chooseType(type,name,index){
	switch (type.toUpperCase()){ 
		case "SHIPIN":
			return(<VideoFun title={name} key={index}/>)
		case "PPT":
			return(<PptFun title={name} key={index}/>)
		case "PDF":
			return(<PdfFun title={name} key={index}/>)
		case "FLASH":
			return(<FlashFun title={name} key={index}/>)
		case "WEB":
			return(<WebFun title={name} key={index}/>)
		case "SHIPIN":
			return(<FlashFun title={name} key={index}/>)
		default:
			break;
	}
}
var FunTitle = React.createClass({
	render : function(){
		var title = this.props.title;
		return (<ul className="funTitle">
			{
				title.map(function(result,index){
					var cla = index==0?"selected":"";
					var imgSrc = "assets/img/"+result[0]+".png"
					return(<li key={index} className={cla}>
						<img src={imgSrc}/>
						<p>{result[1]}</p>
						</li>)
				})
			}
		</ul>)
	}
})
var VideoFun = React.createClass({
	render : function(){
		return(<div className="videoFun fun">
			<div className="controllerBox"> 
				<h1>动作</h1>
				<div className="controller">
					<div className="onBtn">
						<p className="selected">打开</p> 
						<p>关闭</p>
					</div>
				</div>
			</div>
			<div className="controllerBox"> 
				<h1>控制界面</h1>
				<div className="controller">
					<h2>播放模式</h2>
					<div className="onBtn">
						<p className="selected">默认</p> 
						<p>循环</p>
					</div>
				</div>
				<div className="controller">
					<h2>播放进度</h2>
					<div className="pro1">
						<img src="assets/img/action.png"/>
						<div><p></p></div>
					</div>
				</div>
				<div className="controller">
					<h2>音量</h2>
					<div className="pro1">
						<img src="assets/img/sound.png"/>
						<div><p></p></div>
					</div>
				</div>
			</div>
		</div>)
	}
})
var PptFun = React.createClass({
	render :function(){
		return (<div className="pptFun fun">
			<div className="controllerBox"> 
				<h1>动作</h1>
				<div className="controller">
					<div className="onBtn">
						<p className="selected">打开</p> 
						<p>关闭</p>
					</div>
				</div>
			</div>
			<div className="controllerBox"> 
				<h1>控制界面</h1>
				<div className="controller">
					<h2>跳转页面</h2>
					<div className="nomalBtn">
						<p>首页</p> 
						<p>上一页</p> 
						<p>下一页</p> 
						<p>尾页</p> 
					</div>
					<div className="inputBtn">
						<p>跳转至</p>
						<input type="number"/>
					</div>
				</div>
			</div>
		</div>)
	}
})
var PdfFun = React.createClass({
	render : function(){
		return(<div className="pdfFun fun">
			<div className="controllerBox"> 
				<h1>动作</h1>
				<div className="controller">
					<div className="onBtn">
						<p className="selected">打开</p> 
						<p>关闭</p>
					</div>
				</div>
			</div>
			<div className="controllerBox"> 
				<h1>控制界面</h1>
				<div className="controller">
					<h2>跳转页面</h2>
					<div className="nomalBtn">
						<p>首页</p> 
						<p>上一页</p> 
						<p>下一页</p> 
						<p>尾页</p> 
					</div>
					<div className="inputBtn">
						<p>跳转至</p>
						<input type="number"/>
					</div>
				</div>
				<div className="controller">
					<h2>布局模式</h2>
					<div className="nomalBtn">
						<p>单页</p> 
						<p>单列</p> 
						<p>双列(左)</p> 
						<p>双列(右)</p> 
						<p>适应</p> 
					</div>
				</div>
				<div className="controller">
					<h2>缩放</h2>
					<div className="pro1">
						<span>100</span>
						<div><p></p></div>
					</div>
				</div>
			</div>
				
		</div>)
	}
})
var FlashFun = React.createClass({
	render :function(){
		return (<div className="flashFun fun">
			<div className="controllerBox"> 
				<h1>动作</h1>
				<div className="controller">
					<div className="onBtn">
						<p className="selected">打开</p> 
						<p>关闭</p>
					</div>
				</div>
			</div>
			<div className="controllerBox"> 
				<h1>控制界面</h1>
				<div className="controller">
					<h2>调用方法</h2>
					<div className="inputBtn">
						<p>方法名</p>
						<input type="text"/>
					</div>
				</div>
			</div>	
		</div>)
	}
})
var WebFun = React.createClass({
	render :function(){
		return (<div className="flashFun fun">
			<div className="controllerBox"> 
				<h1>动作</h1>
				<div className="controller">
					<div className="onBtn">
						<p className="selected">打开</p> 
						<p>关闭</p>
					</div>
				</div>
			</div>
			<div className="controllerBox"> 
				<h1>控制界面</h1>
				<div className="controller">
					<h2>调用方法</h2>
					<div className="inputBtn">
						<p>方法名</p>
						<input type="text"/>
					</div>
				</div>
			</div>	
		</div>)
	}
})
var ZoolonFun = React.createClass({
	render :function(){
		return (<div className="zoolonFun"></div>)
	}
}) 

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
		$at.getJson("../softWare.json","",onComplete2);
		function onComplete2(json2){
			$at.softWare = ParseSoft(json2.data);
			layShowController(Dom);
			layChangeController(Dom);
			setScreen(Dom,data); 
		}	
	}
}
var loginDom = {
	userName 	: $at.GetDomId("userName"),
	passWord 	: $at.GetDomId("passWord"),
	submitBtn	: $at.GetDomId("submitBtn"),
	forgotPass	: $at.GetDomId("forgotPass"),
	logBtn		: $at.GetDomId("logBtn")
}
var UserName = React.createClass({
	render : function(){
		return (<input type="text" placeholder={this.props.placehoder}/>)
	}
})
var PassWord = React.createClass({
	render : function(){
		return (<input type="password" placeholder={this.props.placehoder} />)
	}
})
var SubmiteBtn = React.createClass({
	getInitialState : function(){
		return {result : true}
	},
  	handleClick: function(event) {
  		if(this.state.result){
  			FormCheck(this)
  		}
    },
	render : function(){
		var text = this.state.result ? "SIGN IN" : "WAITING......";
		return (<div className = "submite"><p>{text}<span className={this.props.name}></span></p></div>)
	}
})
var ForgotPass = React.createClass({
	render : function(){
		return (<span>FORGOT PASSWORD?</span>)
	}
})
var LogBtn = React.createClass({
	render : function(){
		return (<span>CREATE AN ACCOUNT</span>)
	}
})

ReactDOM.render(
    <UserName placehoder = "User Name"/>,
    loginDom.userName
);
ReactDOM.render(
    <PassWord placehoder = "Password"/>,
    loginDom.passWord
);
ReactDOM.render(
    <SubmiteBtn name="icon iconfont icon-jiantou-copy-copy"/>,
    loginDom.submitBtn
);
ReactDOM.render(
    <ForgotPass />,
    loginDom.forgotPass
);
ReactDOM.render(
	<LogBtn />,
	loginDom.logBtn 
)

//用户名提交验证
function FormCheck(next){
	var userVal = $("#userName input").val();
	var passVal = $("#passWord input").val();
	if(userVal =='' || !userVal){
		alert("用户名不能为空")
	}else if(passVal =='' || !passVal){
		alert("密码不能为空")
	}else{
		var data = {name:userVal,password:passVal}
		$at.getJson($at.staicUrl+"interfaces/login",data,onComplete);
		function onComplete(json){   
			if(json.state){ 
//				next(json.data.name);
				$Animate.complete($Animate.loginHide,$Animate.wrapShow); 
			}else{
				alert("用户名或密码错误，请重新输入");
			}
			
		}
	}
}

function initScreenInfo(){
	var view5Info = { 
		screenInfo:{
			title:"虚拟桌面1",
			col:"4",
			row:"2",
			wid:"1920",
			hei:"1080"
		},
		drawInfo:[
			{
				title: "屏幕1",
				screens:[
					{
						across:true,
						screenInfo:[1920,1080,0,0],
						medias:[["SHIPIN","叮当1"],["FLASH","叮当2"],["PDF","叮当3"],["PPT","叮当4"],["WEB","叮当5"]],
					},
					{
						across:false,
						screenInfo:[1920,1080,0,1920],
						medias:[["PPT","叮当2"],["FLASH","叮当2"]],
					}
				]
			},
			{
				title: "屏幕2",
				screens:[
					{
						across:false,
						screenInfo:[1920,1080,0,1920],
						medias:[["PPT","叮当3"],["FLASH","叮当2"]],
					},
					{
						across:false,
						screenInfo:[1920,1080,0,3840],
						medias:[["PPT","叮当4"],["FLASH","叮当2"]],
					}
				]
			},
			{
				title: "屏幕3",
				screens:[
					{
						across:false,
						screenInfo:[1920,1080,1080,0],
						medias:[["PPT","叮当5"],["FLASH","叮当2"]],
					},
					{
						across:false,
						screenInfo:[1920,1080,0,0],
						medias:[["PPT","叮当6"],["FLASH","叮当2"]],
					}
				]
			}
		]
	}
	$at.getJson("dataDemo.json","",onComplete);
	function onComplete(json){
		console.log(json)
		ReactDOM.render(<Part5 info={view5Info}/>,view5Dom.layoutShow);
	}
}


function setScreen(Dom,data){
	var obj=[];
	for (var i=0;i<data.length;i++) {
		obj.push(data[i].screenInfo.title);
	}
	var LevTitleArr = ["新建虚拟桌面","选择主机","分配屏幕"];
	ReactDOM.render(<Menu imgSrc = "assets/img/logo.png" name = "HU"/> , setScreenDom.userInfo);
	ReactDOM.render(<MenuList obj={obj}/>,setScreenDom.screenList);
	ReactDOM.render(<LevTitle arr={LevTitleArr}/>,setScreenDom.levNum); 
	ReactDOM.render(<PageTitle title = "新建屏幕" />,setScreenDom.pageTitle);
	$("#screenList").on("click","li",function(){
		$("#screenList").find("li").removeClass("selected");
		$(this).addClass("selected"); 
		$at.menuIndex = $("#screenList").find("li").index($(this));
		$at.screenInfo = $at.allInfo[$at.menuIndex];
		selectedMenu(Dom);
	})
}
function selectedMenu(Dom){
	$("#layoutShow").html("");
	$("#layout").html("");
	layShowController(Dom);
	layChangeController(Dom); 
}

var setScreenDom = {
	title		: $at.GetDomId("toptitle"),
	userInfo	: $at.GetDomId("userInfo"),
	screenList	: $at.GetDomId("screenList"),
	levNum		: $at.GetDomId("levNum"),
	pageTitle	: $at.GetDomId("pageTitle")
}
var Menu = React.createClass({
	render : function(){
		return (<div>
			<img src={this.props.imgSrc} alt={this.props.name} />
			<h1>{this.props.name}</h1>
		</div>)
	}
})
var MenuList = React.createClass({
	render : function(){
		var obj = this.props.obj;
		return (<ul>
				{ 
					obj.map(function(result,index){
						if(index == 0){  
							return <li key={index} title={result} className="selected">{result}</li>
						}else{
							return <li key = {index} title = {result}>{result}</li>
						}
					})
				}  
				</ul> 
				)
	}
})

var LevTitle = React.createClass({
	render : function(){
		var LevTitleArr = this.props.arr;
		return (<ul>
			{
				LevTitleArr.map(function(result,index){
					if(index == 0){  
						return <li key={index} title={result} className="selected"><p><span>{index}</span>{result}</p></li>
					}else{
						return <li key = {index} title = {result}><p><span>{index}</span>{result}</p></li>
					}
				})
			}
		</ul>)
	}
})

var PageTitle = React.createClass({
	render : function(){
		return (<h1>{this.props.title}</h1>)
	}
})

