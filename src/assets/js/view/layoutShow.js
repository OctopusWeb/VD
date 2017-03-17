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
						var htmls = chooseType(result[2],result[0],index)
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
		case "VIDEO":
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
					var imgSrc = "assets/img/"+result[2]+".png"
					return(<li key={index} className={cla}>
						<img src={imgSrc}/>
						<p className="p">{result[0]}</p>
						<p>{result[1]}</p>
						<p>{result[2]}</p>
						<p>{result[3]}</p>
						<p>{result[4]}</p>
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
					<div className="onBtn onBtn1">
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
						<p className="selected" id="play">默认</p> 
						<p id="pause">循环</p>
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
					<div className="onBtn onBtn1">
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
					<div className="onBtn onBtn1">
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
					<div className="onBtn onBtn1">
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
					<div className="onBtn onBtn1">
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
