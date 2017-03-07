
var EntryHard = React.createClass({
	render : function(){
		return(<div>
				<EntryList arr={this.props.arr} name={"资源类型"}/>
				<div className="addBtn" id="entryAdd">添加</div> 
				<ChooseList list = {this.props.list} name={"当前所有内容"}/>
				<InputList name={this.props.name}/>
			</div>
		)
	}
})
var EntrySoft = React.createClass({
	render : function(){
		return(<div>
				<EntryList arr={this.props.arr} name={"设备类型"}/>
				<div className="addBtn" id="softAdd">添加</div> 
				<ChooseList list={this.props.list} name={"当前所有设备"}/>
				<InputList name={this.props.name}/>
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


$(function(){
	var entryArr =[["ppt1","PPT"],["pdf1","PDF"],["flash1","FLASH"],["web1","WEB"],["zoolonweb1","ZoolonWEB"],["video1","Video"]]
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
		"name":"Video",
		"img":"video1",
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
	ReactDOM.render(<EntryHard arr={entryArr} list={entryList} name={entryName}/>,document.getElementById("entryHard"));
	ReactDOM.render(<EntrySoft arr={softArr}  list={softList}  name={softName}/>,document.getElementById("entrySoftware"));
	$(".entryList").on("click","li",function(){
		$(".entryList").find("li").removeClass("selected");
		$(".chooseList").find("li").removeClass("selected");
		$(this).addClass("selected"); 
		$("#entryHard input").eq(0).val("");
		$("#entrySoftware input").eq(0).val("");
	})
	$("#entryAdd").on("click",function(){
		var name = $("#entryHard input").eq(0).val();
		name = name==""?"未定义":name;
		var type = $(".entryList .selected").find("h3").html();
		for (var i=0;i<entryList.length;i++) {
			if(type == entryList[i].name){
				entryList[i].arr.push(name)
			}
		}
		ReactDOM.render(<EntryHard arr={entryArr} list={entryList} name={entryName}/>,document.getElementById("entryHard"));
		$("#entryHard input").eq(0).val("");
	})
	$("#entryHard .chooseList").on("click","li",function(){
		$(".entryList").find("li").removeClass("selected");
		$(".chooseList").find("li").removeClass("selected");
		$(this).addClass("selected");
		var type = $(this).parent().attr("class");
		var name = $(this).find("h3").html();
		$("#entryHard input").eq(0).val(name);
	})
	
	$("#softAdd").on("click",function(){
		var name = $("#entrySoftware input").eq(0).val();
		name = name==""?"未定义":name;
		var type = $(".entryList .selected").find("h3").html();
		for (var i=0;i<softList.length;i++) {
			if(type == softList[i].name){
				softList[i].arr.push(name)
			}
		}
		ReactDOM.render(<EntrySoft arr={softArr}  list={softList}  name={softName}/>,document.getElementById("entrySoftware"));
		$("#entrySoftware input").eq(0).val("");
	})
	
	$("#entrySoftware .chooseList").on("click","li",function(){
		$(".entryList").find("li").removeClass("selected");
		$(".chooseList").find("li").removeClass("selected");
		$(this).addClass("selected");
		var type = $(this).parent().attr("class");
		var name = $(this).find("h3").html();
		$("#entrySoftware input").eq(0).val(name);
	})
})
