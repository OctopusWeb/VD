var view1Dom = {
	inputGroup		: $at.GetDomId("inputGroup"),
}
var InputName = ["新建名称","屏幕行数","屏幕宽度","屏幕列数","屏幕高度"]
var InputGroup = React.createClass({
	render : function(){
		return(<div className="inputGroup">
				{
					InputName.map(function(result,index){
						return <div key={index} className="input"><p>{result}</p><input type="text" placeholder = {result}/></div> 
					}) 
				}
			</div>
		)
	}
})
ReactDOM.render(<InputGroup/>,view1Dom.inputGroup);
