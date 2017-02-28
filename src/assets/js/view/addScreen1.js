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
			<BtnPart1 />
		</div>
		)
	},
	getInitialState : function(){
		return {
			row : 1,
			col : 1,
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
			row : 0,
			col : 0,
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
			<h1>预览</h1>
			<ul>
			{
				b.map(function(result,index){ 
					return <li key={index+1} style={{width:wid,paddingBottom:hei}}></li>  
				})
			}
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
