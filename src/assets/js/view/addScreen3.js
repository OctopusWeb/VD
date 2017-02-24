var view3Dom = {
	addPart3 : $at.GetDomId("addPart3")
}
var ScreenPlan = React.createClass({
	render : function(){
		var b = [];
		var num = this.props.num
		for(var i=0;i<num;i++){
 			b.push(i)
 		}
		return (<div id="screenPlan"><ul>
				{
					b.map(function(result,index){
						return (<li key = {index}><img src="assets/img/facility.png"/><p>HHHHH</p></li>)
					})
				}
			</ul></div>
		)
	}
})
ReactDOM.render(<ScreenPlan num = "8"/>,view3Dom.addPart3); 
