var view3Dom = {
	addPart3 : $at.GetDomId("addPart3")
}
var facilityList = ["PC8189","PC8189","PC8189","PC8189","PC8189","PC8189","PC8189","PC8189","PC8189"]

var Part3 = React.createClass({
	render : function(){
		return (<div>
			<ScreenPlan num = "8"/>
			<EntrySlected/>
			<EntryList/> 
		</div>
		)
	}
})
var ScreenPlan = React.createClass({
	render : function(){
		var arr = [];
		var num = this.props.num
		for(var i=0;i<num;i++){
 			arr.push(i)
 		}
		return (<div id="screenPlan"><ul>
				{
					arr.map(function(result,index){
						return (<li key = {index}><img src="assets/img/facility1.png"/><p>空</p></li>)
					})
				}
			</ul>
			<DrawArea/>
			</div>
		)
	}
})

var DrawArea = React.createClass({
	render : function(){
		return (<div id="drawArea" >
			<div id="drawBox"></div>
		</div>)
	}
})
var EntrySlected = React.createClass({
	render : function(){
		var arr = ["AAAA","BBBB","CCCC"]
		return (<div id="entrySlected"><ul>
			{
				arr.map(function(result,index){
					var colorStyle = {
						border : "1px solid "+$at.staticColors[index]
					} 
					return (<li key = {index}><img src="assets/img/facility.png" style={colorStyle}/><p>{result}</p></li>)
				}) 
			}
		</ul></div>
		)
	}
})
var EntryList = React.createClass({
	render : function(){
		return (<ul>
			{
				facilityList.map(function(result,index){
					return (<li key={index}>
								<div>
									<img src="assets/img/facility.png" alt="PC8189" />
								</div>
								<p>{result}</p>
							</li>
						)
				})
			}
		</ul>)
	}
})
ReactDOM.render(<Part3/>,view3Dom.addPart3);  
