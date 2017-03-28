var EntryHard = React.createClass({
	render : function(){ 
		return(<div>
				<EntryList arr={this.props.arr} name={"资源类型"}/>
				<ChooseList list = {this.props.list} name={"已录入资源"}/>
				<InputList name={this.props.name} id={"entryChange"} id2={"entryAdd"}/>
			</div>
		)
	}
})
var EntrySoft = React.createClass({
	render : function(){
		return(<div>
				<EntryList arr={this.props.arr} name={"设备类型"}/>
				<ChooseList list={this.props.list} name={"已录入设备"}/>
				<InputList name={this.props.name} id={"softChange"} id2={"softAdd"}/>
			</div>)
	}
})
var EntryList = React.createClass({
	render : function(){
		var arr = this.props.arr
		return (<div className="entryList">
			<div className="title"><h2>{this.props.name}</h2></div>
			<ul>
			{
				arr.map(function(result,index){
					var imgSrc = "assets/img/"+result[0]+".png"
					return(<li key={index}>
						<img src={imgSrc}/>
						<h3>{result[1]}</h3>
					</li>)
				})
			}
			</ul>
		</div>)
	}
})

var ChooseList = React.createClass({
	render : function(){
		var list = this.props.list;
		return(<div className="chooseList">
			<div className="title"><h2>{this.props.name}</h2></div>
			<div className="ulList">
			{
				list.map(function(result,index){
					return(<ul key={index} className={result.name}>
						<p>{result.name}<img src="assets/img/showbtn.png"/></p>
						{
							result.arr.map(function(results,indexs){
								var imgSrc = "assets/img/"+result.img+".png"
								return(<li key={indexs}>
										<img src={imgSrc}/> 
										<h3>{results[0]}</h3>
										<p className="hideInfo hideInfo1">{results[1]}</p>
										<p className="hideInfo hideInfo2">{results[2]}</p>
										<p className="hideInfo hideInfo3">{results[3]}</p>
										<p className="hideInfo hideInfo4">{results[4]}</p>
									</li>)
							})
						}
					</ul>
					)
				})
			}
			</div>
		</div>)
	}
})

var InputList = React.createClass({
	render : function(){
		var name = this.props.name;
		return (<div className="hardInput">
			<ul>
				<h1>资源属性</h1>
				<li>
					<p>{name[0]}</p>
					<input type="text"/>
				</li>
				<li className="brInput">
					<p>{name[1]}</p>
					<input type="text"/>
				</li>
				<li>
					<p>{name[2]}</p>
					<input type="text"/>
				</li>
				<li>
					<p>{name[3]}</p>
					<input type="text"/>
				</li>
			</ul>
			<div id={this.props.id2} className="changeBtn">确认添加</div>
			<div id={this.props.id} className="changeBtn">确认修改</div> 
		</div>)
	}
})
