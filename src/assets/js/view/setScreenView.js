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
		return (<ul>
				{
					$at.allInfo.map(function(result,index){
						if(index == 0){  
							return <li key={index} title={result.screenInfo.title} className="selected">{result.screenInfo.title}</li>
						}else{
							return <li key = {index} title = {result.screenInfo.title}>{result.screenInfo.title}</li>
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

