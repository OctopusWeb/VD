var view2Dom = {
	addPart2 : $at.GetDomId("addPart2"),
}
var facilityList = ["PC8189","PC8189","PC8189","PC8189","PC8189","PC8189","PC8189","PC8189","PC8189"]

var Part2 = React.createClass({
	render : function(){
		return (<div>
			<FacilityList />
			<BtnPart2/>
		</div>)
	}
})
var FacilityList = React.createClass({
	render : function(){
		return (<ul>
			{
				facilityList.map(function(result,index){
					return (<li key={index}>
								<div>
									<img src="assets/img/facility.png" alt="PC8189"/>
								</div>
								<p>{result}</p>
							</li>
						)
				})
			}
		</ul>)
	}
})
var BtnPart2 = React.createClass({
	render : function(){
		return (<div id="btnPart2">
				<div className="btn pre">上一步</div>
				<div className="btn next">下一步</div>
		</div>)
	}
})

ReactDOM.render(<Part2 />,view2Dom.addPart2);
						