var view2Dom = {
	addPart2 : $at.GetDomId("addPart2"),
}
var facilityList = ["PC8189","PC8189","PC8189","PC8189","PC8189","PC8189","PC8189","PC8189","PC8189"]

var Part2 = React.createClass({
	render : function(){
		return (<div>
			<FacilityList />
		</div>)
	}
})
var FacilityList = React.createClass({
	render : function(){
		return (<ul>
			{
				$at.entryHard[0].arr.map(function(result,index){ 
					return (<li key={index}>
								<div>
									<img src="assets/img/facility.png"/>
								</div>
								<p>{result[0]}</p> 
							</li>
						)
				})
			}
			<BtnPart2/>
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
 						