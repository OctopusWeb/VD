var view4Dom = {
	layout	: $at.GetDomId("layout")
}
var Part4 = React.createClass({
	render : function(){
		return (<div>
			<LayoutTop title={this.props.title}/>
			<LayoutScreen row={this.props.row} col={this.props.col} wid={this.props.wid} hei={this.props.hei}/>
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
	render : function(){
		var b = [];
 		var row = this.props.row;
 		var col = this.props.col;
 		var num = row*col;
 		var bil = this.props.hei/this.props.wid
 		var wid = 100/col+"%";
 		var hei = bil*100/col+"%";
 		for(var i=0;i<num;i++){
 			b.push(i)
 		}
		return (<div id="LayoutScreen">
			<div id="screenUl">
			<ul>
			{
				b.map(function(result,index){ 
					return <li key={index+1} style={{width:wid,paddingBottom:hei}}></li>  
				})
			}
			</ul>
			</div>
			<LayoutInfo/>
		</div>
		)
	}
})
var LayoutInfo = React.createClass({
	render : function(){
		return (<div id="layoutInfo">
			<h1>窗口属性</h1>
			<h2>添加窗口</h2>
			<div>
				<InfoBox1/>
				<InfoBox2/>
			</div>
			<div id="sources">
				<InfoBox3/>
			</div>
			<div>
				<InfoBox4/>
			</div>
		</div>)
	}
})
var InfoBox1 = React.createClass({
	render : function(){
		return(<div className="infoBox infoBox1">
			<h3>窗口跨屏属性</h3>
			<div className="chooseBtn"><p className="selected">可跨主机</p><p>不可跨主机</p></div>
		</div>)
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
var b = [["assets/img/WEB.png","AAAAA"],["assets/img/WEB.png","BBBBB"]] 
var InfoBox3 = React.createClass({
	render : function(){
		return(<div className="infoBox">
			<h3>窗口资源</h3>
			<ul className="chooseList">
			{
				b.map(function(result,index){
					return(<li key={index}>
						<img src={result[0]} className="icon"/>
						<p>{result[1]}</p>
						<img src="assets/img/close.png" className="close"/>
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
			<div></div>
		</div>)
	}
})
ReactDOM.render(<Part4 title="虚拟桌面1" col="4" row="2" wid="1920" hei="1080"/>,view4Dom.layout) 
