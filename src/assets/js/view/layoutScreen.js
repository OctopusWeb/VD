var view4Dom = {
	layout	: $at.GetDomId("layout")
}
var titleList = [["SHIPIN","视频"],["PPT","PPT"],["PDF","PDF"],["FLASH","FLASH"],["WEB","WEB"],["ZOOLONWEB","ZOOLONWEB"]]
var Part4 = React.createClass({
	render : function(){
		var info = this.props.info;
		var screenInfo = info.screenInfo; 
		
		return (<div> 
			<LayoutTop title={screenInfo.title}/>
			<LayoutScreen obj={{info}} softWare={this.props.softWare}/>
			<LayoutName/>
			</div>)
	}
})
var LayoutTop = React.createClass({
	render : function(){
		return (<div id="layoutTop">
						<h1>{this.props.title}</h1>
						<div className="addLayout">
							保存布局
						</div>
					</div>)
	}
})

var LayoutScreen = React.createClass({
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

var LayoutName = React.createClass({
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

$(function(){
	var view4Info = { 
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
				index:0,
				screens:[
					{
						across:true,
						screenInfo:[1920,1080,0,0],
						medias:[["SHIPIN","叮当1"],["FLASH","叮当2"]],
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
				index:1,
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
				index:1,
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
	var softWare =[["叮当1","叮当1"],["叮当2","叮当2"],["叮当3","叮当3"],["叮当4","叮当4"],["叮当5","叮当5"],["叮当6","叮当6"]];
	ReactDOM.render(<Part4 info={view4Info} softWare={softWare}/>,view4Dom.layout);
	layoutController(view4Info,softWare)
})

function layoutController(infoArr,softWare){
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
	})
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

