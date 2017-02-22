var setScreenDom = {
	title		: $at.GetDomId("toptitle"),
	userInfo	: $at.GetDomId("userInfo"),
	screenList	: $at.GetDomId("screenList"),
	levNum	: $at.GetDomId("levNum")
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

var obj = ["测试数据1","测试数据2","测试数据3","测试数据4"];
var LevTitleArr = ["新建虚拟桌面","选择主机","分配屏幕"];

ReactDOM.render(<Menu imgSrc = "assets/img/logo.png" name = "HU"/> , setScreenDom.userInfo);
ReactDOM.render(<MenuList />,setScreenDom.screenList);
ReactDOM.render(<LevTitle />,setScreenDom.levNum); 
