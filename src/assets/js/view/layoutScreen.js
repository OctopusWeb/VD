var view4Dom = {
	layout	: $at.GetDomId("layout")
}
var titleList = [["assets/img/SHIPIN.png","视频"],["assets/img/PPT.png","PPT"],["assets/img/PDF.png","PDF"],["assets/img/FLASH.png","FLASH"],["assets/img/WEB.png","WEB"],["assets/img/ZOOLONWEB.png","ZOOLONWEB"]]
var contentList = [["叮当","叮当"],["叮当","叮当"],["叮当","叮当"],["叮当","叮当"],["叮当","叮当"],["叮当","叮当"]]
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
					screenInfo:[102,102,102,102],
					medias:[["PPT","叮当1"],["FLASH","叮当2"]],
				},
				{
					across:true,
					screenInfo:[10,10,10,10],
					medias:[["PPT","叮当1"],["FLASH","叮当2"]],
				}
			]
		},
		{
			title: "屏幕2",
			index:1,
			screens:[
				{
					across:true,
					screenInfo:[10,10,10,10],
					medias:[["PPT","叮当1"],["FLASH","叮当2"]],
				},
				{
					across:true,
					screenInfo:[10,10,10,10],
					medias:[["PPT","叮当1"],["FLASH","叮当2"]],
				}
			]
		}
	]
}
var Part4 = React.createClass({
	render : function(){
		var info = this.props.info;
		var screenInfo = info.screenInfo; 
		
		return (<div> 
			<LayoutTop title={screenInfo.title}/>
			<LayoutScreen obj={{info}}/>
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
			info : this.props.obj.info
		}
	},
	acrossHandelers : function(bol){
		var info = this.state.info.drawInfo
		console.log(JSON.stringify(info))
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
			<DrawBox obj={info}/>
			</div>
			<LayoutInfo obj={{drawInfo}} acrossHandelers={this.acrossHandelers}/>
		</div>
		)
	}
})
var LayoutInfo = React.createClass({
	getInitialState : function(){
		var drawInfo = this.props.obj.drawInfo[0];
		return{
			across:drawInfo.screens[0].across,
			screenInfo:drawInfo.screens[0].screenInfo,
			medias:drawInfo.screens[0].medias
		}
	},
	acrossHandelers : function(bol){
		this.props.acrossHandelers(bol)
		console.log(bol);
	},
	render : function(){
		return (<div id="layoutInfo">
			<h1>窗口属性</h1>
			<h2>添加窗口</h2>
			<div>
				<InfoBox1 texts={this.state.across} acrossHandeler={this.acrossHandelers}/>
				<InfoBox2 texts={this.state.screenInfo}/>
			</div>
			<div id="sources">
				<InfoBox3 texts={this.state.medias}/>
			</div>
			<div>
				<InfoBox4 arr={titleList}/>
			</div>
		</div>)
	}
})
var InfoBox1 = React.createClass({
	getInitialState : function(){
		return{
			bol : this.props.texts
		}
	},
	handelerClick : function(){
		this.setState({bol:!this.state.bol});
		this.props.acrossHandeler(this.state.bol);
	},
	render : function(){
		if(this.state.bol){
			return(<div className="infoBox infoBox1">
				<h3>窗口跨屏属性</h3>
				<div className="chooseBtn"><p className="selected">可跨主机</p><p onClick={this.handelerClick}>不可跨主机</p></div> 
			</div>)
		}else{ 
			return(<div className="infoBox infoBox1">
				<h3>窗口跨屏属性</h3>
				<div className="chooseBtn"><p onClick={this.handelerClick}>可跨主机</p><p className="selected">不可跨主机</p></div>
			</div>) 
		}
		
	}
})
var InfoBox2 = React.createClass({
	getInitialState : function(){
		return {
			left:this.props.texts[0],
			top:this.props.texts[1],
			wid:this.props.texts[2],
			hei:this.props.texts[3] 
		}
	},
	xhanderler : function(e){
		this.setState({left:event.target.value,top:this.state.top,wid:this.state.wid,hei:this.state.hei})
	},
	yhanderler : function(e){
		this.setState({left:this.state.left,top:event.target.value,wid:this.state.wid,hei:this.state.hei})
	},
	whanderler : function(e){
		this.setState({left:this.state.left,top:this.state.top,wid:event.target.value,hei:this.state.hei})
	},
	hhanderler : function(e){
		this.setState({left:this.state.left,top:this.state.top,wid:this.state.wid,hei:event.target.value})
	},
	render : function(){
		return(<div className="infoBox infoBox2">
			<h3>窗口位置</h3>
			<div className="inputGroup"><p>X</p><input type="number" value={this.state.left} onChange={this.xhanderler}/></div> 
			<div className="inputGroup"><p>Y</p><input type="number" value={this.state.top} onChange={this.yhanderler}/></div> 
			<div className="inputGroup"><p>宽度</p><input type="number" value={this.state.wid} onChange={this.whanderler}/></div> 
			<div className="inputGroup"><p>高度</p><input type="number" value={this.state.hei} onChange={this.hhanderler}/></div> 
		</div>)
	}
})
var InfoBox3 = React.createClass({
	getInitialState : function(){
		return{
			medias : this.props.texts
		}
	},
	clickHandeler : function(e){
		var arr = this.state.medias;
		arr.splice(e.target.name,1);
		this.setState({medias:arr});
	},
	render : function(){
		var b = this.state.medias;
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
						<img src="assets/img/close.png" className="close" onClick = {self.clickHandeler} name={index}/>
					</li>)
				})
			}
			</ul>
		</div>)
	}
})
var InfoBox4 = React.createClass({
	render : function(){
		return(<div className="infoBox">
			<h3>窗口跨屏属性</h3>
			<div className="infoList">
				<ul className="titileList">
					{
						this.props.arr.map(function(result,index){
							var cla = index==0?"selected":""
							return(<li key={index} className={cla}>
								<img src={result[0]}/>
								<p>{result[1]}</p>
							</li>)
						})
					}
				</ul>
				<ul className="contentList">
					{
						contentList.map(function(result,index){
							var cla = index==0?"selected":"";
							var imgSrc = titleList[index][0]
							return(<li key={index} className={cla}>
								{
									result.map(function(result2,index2){
										return(
											<div className="contentBtn" key={index2}>
												<img src={imgSrc}/>
												<span>{result2}</span>
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
			screenInfo:screenInfo,
			index:0,
			smallIndex:0
		}
	},
	clickHandeler : function(e){
		this.setState({index:e.target.id})
	},
	render : function(){
		var self = this;
		return(<div id="drawBox">
			<div className="btnGroup">
				<p>布局属性</p>
				<span>添加布局</span>
			</div>
			<ul className="drawTitle">
			{
				this.state.drawInfo.map(function(result,index){
					var cla = index==self.state.index?"selected":"";
					return(<li key={index} className={cla}>
						<p id={index} onClick={self.clickHandeler}>{result.title}</p>
						<img src="assets/img/close.png" className="close"/>
					</li>)
				})
			}
			</ul>
			<ul className="drawContent">
			{
				this.state.drawInfo[this.state.index].screens.map(function(result,index){
					var styleInfo = result.screenInfo;
					var styleObj = {
						height : styleInfo[0],
						width  : styleInfo[1],
						top    : styleInfo[2],
						left   : styleInfo[3]
					}
					return(<li key={index} style={styleObj}>
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

ReactDOM.render(<Part4 info={view4Info}/>,view4Dom.layout);
