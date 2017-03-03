var view5Dom = {
	layoutShow	: $at.GetDomId("layoutShow")
}
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
	switch (type){
		case "SHIPIN":
			return(<VideoFun title={name} key={index}/>)
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
				<div className="onBtn">
					<p>打开</p> 
					<p>关闭</p>
				</div>
			</div>
		</div>)
	}
})
var PptFun = React.createClass({
	render :function(){
		return (<div className="pptFun"></div>)
	}
})
var PdfFun = React.createClass({
	render : function(){
		return(<div className="pdfFun"></div>)
	}
})
var FlashFun = React.createClass({
	render :function(){
		return (<div className="flashFun"></div>)
	}
})
var WebFun = React.createClass({
	render :function(){
		return (<div className="webFun"></div>)
	}
})
var ZoolonFun = React.createClass({
	render :function(){
		return (<div className="zoolonFun"></div>)
	}
})

ReactDOM.render(<Part5 info={view5Info}/>,view5Dom.layoutShow);
$(function(){
	$(".drawContent1").on("click","li",function(){
		$(".drawContent1").find("li").removeClass("selected")
		$(this).addClass("selected");
	})
})
