var entryArr =[["ppt1","PPT"],["pdf1","PDF"],["flash1","FLASH"],["web1","WEB"],["zoolonweb1","ZoolonWEB"],["vedio1","视频"]]
var entryName = ["展项名称","展项类型","资源URL","总控命令地址"]
var entryList = [
	{
	"name":"PPT",
	"img":"ppt1",
	"arr":["AAAA","BBBB"]
	},
	{
	"name":"PDF",
	"img":"pdf1",
	"arr":["CCCC","DDDD"]
	},
	{
	"name":"FLASH",
	"img":"flash1",
	"arr":["DDDD","EEEE"]
	},
	{
	"name":"WEB",
	"img":"web1",
	"arr":["FFFF","GGGG"]
	},
	{
	"name":"ZoolonWEB",
	"img":"zoolonweb1",
	"arr":["HHHH","IIII"]
	},
	{
	"name":"VEDIO",
	"img":"vedio1",
	"arr":["JJJJ","KKKK"]
	}
]

var softArr = [["shebei1","PC"]];
var softName = ["设备名称","mac地址","daemonld","备注"];
var softList = [
	{
	"name":"PC",
	"img":"shebei1",
	"arr":["AAAA","BBBB"]
	}
]
var EntryHard = React.createClass({
	render : function(){
		return(<div>
				<EntryList arr={entryArr} name={"资源类型"}/>
				<ChooseList list = {entryList} name={"当前所有内容"}/>
				<InputList name={entryName}/>
			</div>
		)
	}
})
var EntrySoft = React.createClass({
	render : function(){
		return(<div>
				<EntryList arr={softArr} name={"设备类型"}/>
				<ChooseList list={softList} name={"当前所有设备"}/>
				<InputList name={softName}/>
			</div>)
	}
})
var EntryList = React.createClass({
	render : function(){
		var arr = this.props.arr
		return (<div id="entryList">
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
		return(<div id="chooseList">
			<div className="title"><h2>{this.props.name}</h2></div>
			<div className="ulList">
			{
				list.map(function(result,index){
					return(<ul key={index}>
						<p>{result.name}<img src="assets/img/showbtn.png"/></p>
						{
							result.arr.map(function(results,indexs){
								var imgSrc = "assets/img/"+result.img+".png"
								return(<li key={indexs}>
										<img src={imgSrc}/>
										<h3>{results}</h3>
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
		</div>)
	}
})

ReactDOM.render(<EntryHard/>,document.getElementById("entryHard"));
ReactDOM.render(<EntrySoft/>,document.getElementById("entrySoftware"));