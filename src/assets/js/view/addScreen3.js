var view3Dom = { 
	addPart3 : $at.GetDomId("addPart3")
}

var Part3 = React.createClass({
	render : function(){
		return (<div>
			<ScreenPlan row={this.props.row} col={this.props.col} hei={this.props.hei} wid={this.props.wid}/>
			<EntrySlected arr={this.props.arr}/>
			<EntryList1 arr={this.props.arr}/>
			<BtnPart3/> 
		</div>
		)
	}
})
var ScreenPlan = React.createClass({
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
		return (<div id="screenPlan"><ul>
				{
					b.map(function(result,index){
						return (<li key = {index} style={{width:wid,paddingBottom:hei}}>
							<img src="assets/img/facility1.png"/>
							<p>空</p>
							<span className="span1"></span>
							<span className="span2"></span>
							<span className="span3"></span>
							<span className="span4"></span>
						</li>)
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
		var facilityList = this.props.arr;
		return (<div id="entrySlected"><ul>
			{
				facilityList.map(function(result,index){
					var colorStyle = {
						border : "1px solid "+$at.staticColors[index]
					}
					return (<li key = {index}>
						<img src="assets/img/facility.png" style={colorStyle}/>
						<p title={result.name}>{result.name}</p>
						<span>{result.macAddress}</span>
						<span>{result.daemonId}</span>
						<span>{result.remark}</span>
						<span>{result.deviceId}</span>
						</li>)
				}) 
			}
		</ul></div>
		)
	}
})
var EntryList1 = React.createClass({
	render : function(){
		var facilityList = this.props.arr;
		return (<div id="entryList"><ul> 
			{
				facilityList.map(function(result,index){
					var colorStyle = {
						border : "4px solid "+$at.staticColors[index] 
					} 
					return (<li key={index}>
								<img src="assets/img/facility.png" style={colorStyle}/>
								<p>{result.name}</p>
								<span>{result.macAddress}</span>
								<span>{result.daemonId}</span>
								<span>{result.remark}</span>
								<span>{result.deviceId}</span> 
							</li>
						)
				})
			}
		</ul></div>)
	}
})
var BtnPart3 = React.createClass({ 
	render : function(){
		return  (<div id="btnPart3">
				<div className="btn pre">上一步</div>
				<div className="btn next">完成</div>
		</div>)
	} 
}) 
