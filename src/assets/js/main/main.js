var view1Dom = {
	inputGroup		: $at.GetDomId("addPart1"),
	screenShow		: $at.GetDomId("screenShow"),
}
var InputName = ["新建名称","屏幕行数","屏幕宽度","屏幕列数","屏幕高度"];
var Part1 = React.createClass({
	render : function(){
		return (<div>
			<InputGroup rowChange={this.handlerRow} row={this.props.row} col={this.props.col} hei={this.props.hei} wid={this.props.wid}/>
			<ScreenShow row={this.state.row} col={this.state.col} wid={this.state.wid} hei={this.state.hei}/>
		</div>
		)
	},
	getInitialState : function(){
		return {
			row : this.props.row,
			col : this.props.col,
			wid : this.props.wid,
			hei : this.props.hei
		}
	},
	handlerRow : function(row1,col1,wid1,hei1){
		this.setState({row:row1,col:col1,wid:wid1,hei:hei1}) 
	}
})

var InputGroup = React.createClass({
	getInitialState : function(){
		return {
			row : this.props.row,
			col : this.props.col,
			wid : this.props.wid,
			hei : this.props.hei
		}
	},
	handlerChange : function(event){
		if(event.target.name == InputName[1]){
			this.setState({row:event.target.value})
			this.props.rowChange(event.target.value,this.state.col,this.state.wid,this.state.hei)
		}else if(event.target.name == InputName[2]){
			this.setState({wid:event.target.value})
			this.props.rowChange(this.state.row,this.state.col,event.target.value,this.state.hei)
		}else if(event.target.name == InputName[3]){
			this.setState({col:event.target.value})
			this.props.rowChange(this.state.row,event.target.value,this.state.wid,this.state.hei)
		}else if(event.target.name == InputName[4]){
			this.setState({hei:event.target.value})
			this.props.rowChange(this.state.row,this.state.col,this.state.wid,event.target.value)
		}
	},
	render : function(){
		var self = this;
		return(<div id="inputGroup">
				{
					InputName.map(function(result,index){
						return <div key={index} className="input">
							<p>{result}</p>
							<input type="text" onChange={self.handlerChange} placeholder = {result} name={result}/>
						</div>
					}) 
				}
			</div>
		)
	}
})
var ScreenShow = React.createClass({
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
		return (<div id="screenShow">
			<ul>
			{
				b.map(function(result,index){ 
					return <li key={index+1} style={{width:wid,paddingBottom:hei}}></li>  
				})
			}
			<BtnPart1 />
			</ul>
		</div>
		)
	}
})
var BtnPart1 = React.createClass({
	render : function(){
		return (<div id="btnPart1">
				<div className="btn next">下一步</div>
		</div>	
		)
	}
})


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
								<span>{result[1]}</span> 
								<span>{result[2]}</span> 
								<span>{result[3]}</span> 
								<span>{result[4]}</span> 
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

function initSoft(Dom){
	var softArr =[["ppt1","PPT"],["pdf1","PDF"],["flash1","FLASH"],["web1","WEB"],["zoolonweb1","ZoolonWEB"],["video1","Video"]]
	var softName = ["展项名称","展项类型","资源URL","总控命令地址"]
	ReactDOM.render(<EntryHard arr={softArr} list={$at.softWare} name={softName}/>,document.getElementById("entryHard")); 
	 
	$("#entryAdd").on("click",function(){
		soundBtn()
		var len=$(".entryList ul .selected").length;
		if(len == 0){return}; 
		var name = $("#entryHard input").eq(0).val();
		var info0 = $("#entryHard input").eq(1).val();
		var info1 = $("#entryHard input").eq(2).val();
		var info2 = $("#entryHard input").eq(3).val();
		if(name==""||info0==""||info1==""||info2==""){
			alert("请在下方填写相关信息");
		}else{
			var type = $(".entryList .selected").find("h3").html();
			var num;
			for (var i=0;i<$at.softWare.length;i++) {
				if(type.toLowerCase() == $at.softWare[i].name.toLowerCase()){
					num=i;
					var data={
						contentId : "",
						name : name,
						path : info1,
						typeCode : info0,
						controlUrl : info2
					}
				}
			}
			$.post($at.url+"/interfaces/entryPost/content", data,onComplete); 
			function onComplete(json){
				$at.softWare[num].arr.push([name,info0,info1,json.data.contentId,info2]);
				ReactDOM.render(<EntryHard arr={softArr} list={$at.softWare} name={softName}/>,document.getElementById("entryHard")); 
				ReactDOM.render(<InfoBox4 softWare={$at.softWare}/>,document.getElementById("infoBox4"));
			}
			
			$("#entryHard input").eq(0).val("");
		}
		
	})
	$("#entryChange").on("click",function(){
		soundBtn()
		var name = $("#entryHard input").eq(0).val();
		var info0 = $("#entryHard input").eq(1).val();
		var info1 = $("#entryHard input").eq(2).val();
		var info2 = $("#entryHard input").eq(3).val();
		var contentId = $(".chooseList .selected p").eq(2).html();
		if(name==""||info0==""||info1==""||info2==""){
			alert("请在下方填写相关信息");
			return
		}else{
			var data={
				contentId : contentId,
				name : name,
				path : info1,
				typeCode : info0,
				controlUrl : info2
			}
			$.post($at.url+"/interfaces/entryChange/content", data,onComplete);  
			function onComplete(json){
				if(!json.state){
					return
				}else{
					$(".changeBtn").hide()
				} 
				for (var i=0;i<$at.softWare.length;i++) {
					var arr = $at.softWare[i].arr;
					for (var j=0;j<arr.length;j++) {
						if($at.softWare[i].arr[j][3]==contentId){
							$at.softWare[i].arr[j]=[name,info0,info1,contentId,info2];
						}
					}
				}
				$(".changeBtn").hide();
				ReactDOM.render(<EntryHard arr={softArr} list={$at.softWare} name={softName}/>,document.getElementById("entryHard")); 
				ReactDOM.render(<InfoBox4 softWare={$at.softWare}/>,document.getElementById("infoBox4")); 
			}
		}
	})
	$("#entryHard .entryList").on("click","li",function(){
		soundBtn()
		$(".entryList").find("li").removeClass("selected");
		$(".chooseList").find("li").removeClass("selected");
		$(this).addClass("selected"); 
		var type = $(this).find("h3").html()
		$("#entryHard input").eq(0).val("");
		$("#entryHard input").eq(1).val(type);
		$("#entryHard input").eq(2).val("");
		$("#entryHard input").eq(3).val("");
		$(".changeBtn").eq(0).show();
		$(".changeBtn").eq(1).hide();
	})
	$("#entryHard .chooseList").on("click","li",function(){
		soundBtn()
		$(".entryList").find("li").removeClass("selected");
		$(".chooseList").find("li").removeClass("selected");
		$(this).addClass("selected");
		var type = $(this).parent().attr("class");
		var name = $(this).find("h3").html();
		var info0 = $(this).find("p").eq(0).html();
		var info1 = $(this).find("p").eq(1).html();
		var info2 = $(this).find("p").eq(3).html();
		$("#entryHard input").eq(0).val(name);
		$("#entryHard input").eq(1).val(info0);
		$("#entryHard input").eq(2).val(info1);
		$("#entryHard input").eq(3).val(info2);
		$(".changeBtn").eq(1).show();
		$(".changeBtn").eq(0).hide();
	}) 
}
function initHard(Dom){
	var hardArr = [["shebei1","PC"]];
	var hardName = ["设备名称","mac地址","daemonld","备注"];
	ReactDOM.render(<EntrySoft arr={hardArr}  list={$at.entryHard}  name={hardName}/>,document.getElementById("entrySoftware"));
	$("#entrySoftware .chooseList").on("click","li",function(){
		soundBtn()
		$(".entryList").find("li").removeClass("selected");
		$(".chooseList").find("li").removeClass("selected");
		$(this).addClass("selected");
		var type = $(this).parent().attr("class");
		var name = $(this).find("h3").html();
		var info0 = $(this).find("p").eq(0).html();
		var info1 = $(this).find("p").eq(1).html();
		var info2 = $(this).find("p").eq(2).html();
		$("#entrySoftware input").eq(0).val(name);
		$("#entrySoftware input").eq(1).val(info0);
		$("#entrySoftware input").eq(2).val(info1);
		$("#entrySoftware input").eq(3).val(info2);
		$(".changeBtn").eq(2).show();
		$(".changeBtn").eq(3).hide();
	});
	$("#entrySoftware .entryList").on("click","li",function(){
		soundBtn()
		$(".entryList").find("li").removeClass("selected");
		$(".chooseList").find("li").removeClass("selected");
		$(this).addClass("selected");
		$("#entrySoftware input").eq(0).val("");
		$("#entrySoftware input").eq(1).val("");
		$("#entrySoftware input").eq(2).val("");
		$("#entrySoftware input").eq(3).val("");
		$(".changeBtn").eq(3).show();
		$(".changeBtn").eq(2).hide();
	})
	$("#softAdd").on("click",function(){
		soundBtn()
		var len=$(".entryList ul .selected").length;
		if(len == 0){return};
		var name = $("#entrySoftware input").eq(0).val();
		var info0 = $("#entrySoftware input").eq(1).val();
		var info1 = $("#entrySoftware input").eq(2).val();
		var info2 = $("#entrySoftware input").eq(3).val();
		if(name==""||info0==""||info1==""||info2==""){
			alert("请在下方填写相关信息");
		}else{
			var num;
			for (var i=0;i<$at.entryHard.length;i++) {
				num=i;
				var data={
					name : name,
					macAddress : info0,
					daemonId : info1,
					remark : info2
				}
				
			} 
			$.post($at.url+"/interfaces/entryPost/device", data,onComplete); 
			function onComplete(json){
				$at.entryHard[num].arr.push([name,info0,info1,info2,json.data.deviceId]);
				ReactDOM.render(<EntrySoft arr={hardArr}  list={$at.entryHard}  name={hardName}/>,document.getElementById("entrySoftware"));
			}
			$("#entrySoftware input").eq(0).val("");
		}
	})
	$("#softChange").on("click",function(){
		soundBtn()
		var name = $("#entrySoftware input").eq(0).val();
		var info0 = $("#entrySoftware input").eq(1).val();
		var info1 = $("#entrySoftware input").eq(2).val();
		var info2 = $("#entrySoftware input").eq(3).val();
		var deviceId = $(".chooseList .selected p").eq(3).html();
		if(name==""||info0==""||info1==""||info2==""){
			alert("请在下方填写相关信息");
			return
		}else{
			var data={
				deviceId : deviceId,
				name : name,
				macAddress : info0,
				daemonId :info1,
				remark : info2
			}
			$.post($at.url+"/interfaces/entryChange/device", data,onComplete);  
			function onComplete(json){
				if(!json.state){
					return
				}else{
					$(".changeBtn").hide()
				}
				for (var i=0;i<$at.entryHard.length;i++) {
					var arr = $at.entryHard[i].arr;
					for (var j=0;j<arr.length;j++) {
						if($at.entryHard[i].arr[j][4]==deviceId){
							$at.entryHard[i].arr[j]=[name,info0,info1,info2,deviceId];
						}
					}
				}
				$(".changeBtn").hide()
				ReactDOM.render(<EntrySoft arr={hardArr}  list={$at.entryHard}  name={hardName}/>,document.getElementById("entrySoftware"));
			}
		}
	})
}
function ParseSoft(json){
	var softArr =[["ppt1","PPT"],["pdf1","PDF"],["flash1","FLASH"],["web1","WEB"],["zoolonweb1","ZOOLONWEB"],["video1","VIDEO"]]
	var softList=[];
	for (var i=0;i<softArr.length;i++) {
		var obj={};
		obj.name=softArr[i][1];
		obj.img=softArr[i][0];
		obj.arr=[];
		for (var j=0;j<json.length;j++) { 
			if(json[j].typeCode.toUpperCase() == softArr[i][1]){ 
				var info=json[j];
				var infoArr=[info.name,info.typeCode,info.path,info.contentId,info.controlUrl];
				obj.arr.push(infoArr);
			}
		}
		softList.push(obj);
	}
	return softList; 
} 
function ParseHard(json){
	var hardArr = [["shebei1","PC"]];
	var hardList=[];
	for (var i=0;i<hardArr.length;i++) {
		var obj={};
		obj.name=hardArr[i][1];
		obj.img=hardArr[i][0];
		obj.arr=[];
		for (var j=0;j<json.length;j++) {
			var info=json[j];
			var infoArr=[info.name,info.macAddress,info.daemonId,info.remark,info.deviceId];
			obj.arr.push(infoArr)
		}
	}
	hardList.push(obj);
	return hardList;
}


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

function bindController(){
	var publicCalls = new PublicCall();
//总控打开关闭	
	$("#openLayout").off("click");
	$("#closeLayout").off("click");
	$("#openLayout").on("click",function(){//打开布局
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var winIndex = $(".funTitle li").index($(".funTitle .selected")) || 0;
		var openInfo = $at.screenInfo.drawInfo[index];
		var Layout = [];
		for (var i=0;i<openInfo.screens.length;i++) {
			var obj = {
				"WinId": openInfo.screens[i].id,
				"X": openInfo.screens[i].screenInfo[3],
				"Y": openInfo.screens[i].screenInfo[2],
				"Width": openInfo.screens[i].screenInfo[0],
				"Height": openInfo.screens[i].screenInfo[1],
			};
			if (openInfo.screens[i].medias[winIndex]) {
				var type = chooseType(openInfo.screens[i].medias[winIndex][2].toUpperCase());
				obj.Resource = {
					"Source": "local",
					"Path":openInfo.screens[i].medias[winIndex][1]
				};
				obj.Type = type;
			}  
			Layout.push(obj);
		}
		
		var Arguments = {
			"LayoutId": openInfo.id,
			"Layout": Layout 
		};
		var data = publicCalls.open(Arguments);
		send(data);
	});
	$("#closeLayout").on("click",function(){//关闭布局
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var winIndex = $(".drawContent1 li").index($(".drawContent1 .selected")) || 0;
		var Arguments = { "LayoutId": $at.screenInfo.drawInfo[index].id};
		var data = publicCalls.close(Arguments);
		send(data);
	})
	
//视频video控制
	var videoInterval;
	$(".videoOn p:eq(0)").off("click");
	$(".videoOn p:eq(1)").off("click");
	$(".playPro img").off("click");
	$(".playPro div").off("click");
	$(".voicePro div").off("click");
	$(".arround p").off("click");
	$(".videoOn p:eq(0)").on("click",function(){//打开video
		soundBtn()
		changeClass($(".videoOn p"),$(this));
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var winIndex = $(".funTitle li").index($(".funTitle .selected")) || 0;
		var openInfo = $at.screenInfo.drawInfo[index];
		var Layout = []
		if(layindex<0){
			alert("请选择窗口");
			return
		}
		var obj = {
			"WinId": openInfo.screens[layindex].id,
			"X": openInfo.screens[layindex].screenInfo[3],
			"Y": openInfo.screens[layindex].screenInfo[2],
			"Width": openInfo.screens[layindex].screenInfo[0],
			"Height": openInfo.screens[layindex].screenInfo[1],
		};
		if (openInfo.screens[layindex].medias[winIndex]) {
			var type = chooseType(openInfo.screens[layindex].medias[winIndex][2].toUpperCase());
			obj.Resource = {
				"Source": "local",
				"Path":openInfo.screens[layindex].medias[winIndex][1]
			};
			obj.Type = type;
		}  
		Layout.push(obj);
		var Arguments = {
			"LayoutId":openInfo.id, 
			"WinId":openInfo.screens[layindex].id,
			"Layout":Layout
		}
		if(videoInterval){
			clearInterval(videoInterval)
		}
		videoInterval = setInterval(function(){
			videoGetInfo(openInfo.screens[layindex].id,publicCalls);
		},1000)
		var data = publicCalls.viewOpen(Arguments);
		send(data);
	})
	
	function videoGetInfo(winid,publicCalls){
		var getPosition = publicCalls.viewOpen(winid,"videoCall","getPosition");
		var getVolume = publicCalls.viewOpen(winid,"videoCall","getVolume");
		send(getPosition);
		send(getVolume);
	}
	$(".videoOn p:eq(1)").on("click",function(){//关闭video
		soundBtn();
		if(videoInterval){
			clearInterval(videoInterval)
		}
		changeClass($(".videoOn p"),$(this));
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var winIndex = $(".funTitle li").index($(".funTitle .selected")) || 0;
		var openInfo = $at.screenInfo.drawInfo[index];
		var Layout = []
		if(layindex<0){
			alert("请选择窗口");
			return
		}
		var obj = {
			"WinId": openInfo.screens[layindex].id
		};
		Layout.push(obj)
		var Arguments={
			"LayoutId":openInfo.id,
			"WinId":openInfo.screens[layindex].id,
			"Layout": Layout
		}
		var data = publicCalls.viewClose(Arguments);
		send(data);
	})
	$(".playPro img").on("click",function(){
		soundBtn()
		var src = $(this).attr("src");
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		if(layindex<0){
			alert("请选择窗口");
			return
		}
		if (src == "assets/img/action.png") {
			$(this).attr({"src":"assets/img/pause.png"});
			var data = publicCalls.stateFun(openInfo.screens[layindex].id,"videoCall","play"); 
			send(data);
		}else{
			$(this).attr({"src":"assets/img/action.png"});
			var data = publicCalls.stateFun(openInfo.screens[layindex].id,"videoCall","pause");
			send(data);
		}
	})
	$(".playPro div").on("click",function(e){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var len = (e.pageX-$(this).offset().left)/$(this).width()*100;
		$(this).find("p").width(len+"%");
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"videoCall","setPosition");
		data.Position = parseInt(len);
		send(data);
	});
	$(".voicePro div").on("click",function(e){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var len = (e.pageX-$(this).offset().left)/$(this).width()*100;
		$(this).find("p").width(len+"%");
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"videoCall","setVolume");
		data.Volume = parseInt(len);
		send(data);
	});
	$(".arround p").on("click",function(){
		soundBtn()
		changeClass($(".arround p"),$(this));
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var index = $(".arround p").index($(this));
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"videoCall","setPlayMode");
		data.PlayMode = index;
		send(data);
	})
	function chooseType(name){
		switch (name){
			case "VIDEO":
				var type = "video"
				return type
			case "PPT":
				var type = "ppt";
				return type
			case "PDF":
				var type = "pdf";
				return type
			case "FLASH":
				var type =	"swf";
				return type
			case "WEB":
				var type = "httpurl";
				return type
			case "SHIPIN":
				var type = "video"
				return type
			default:
				break;
		}
	}
	
//PPT控制
	$(".pptOn p:eq(0)").off("click");
	$(".pptOn p:eq(1)").off("click");
	$(".pptgroup p:eq(0)").off("click");
	$(".pptgroup p:eq(1)").off("click");
	$(".pptgroup p:eq(2)").off("click");
	$(".pptgroup p:eq(3)").off("click");
	$(".pptInput input").off("blur");
	$(".pptOn p:eq(0)").on("click",function(){//打开ppt
		soundBtn()
		changeClass($(".pptOn p"),$(this));
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var winIndex = $(".funTitle li").index($(".funTitle .selected")) || 0;
		var openInfo = $at.screenInfo.drawInfo[index];
		var Layout = []
		if(layindex<0){
			alert("请选择窗口");
			return
		}
		var obj = {
			"WinId": openInfo.screens[layindex].id,
			"X": openInfo.screens[layindex].screenInfo[3],
			"Y": openInfo.screens[layindex].screenInfo[2],
			"Width": openInfo.screens[layindex].screenInfo[0],
			"Height": openInfo.screens[layindex].screenInfo[1],
		};
		if (openInfo.screens[layindex].medias[winIndex]) {
			var type = chooseType(openInfo.screens[layindex].medias[winIndex][2].toUpperCase());
			obj.Resource = {
				"Source": "local",
				"Path":openInfo.screens[layindex].medias[winIndex][1]
			};
			obj.Type = type;
		}  
		Layout.push(obj);
		var Arguments = {
			"LayoutId":openInfo.id, 
			"WinId":openInfo.screens[layindex].id,
			"Layout":Layout
		}
		var data = publicCalls.viewOpen(Arguments);
		send(data);
	})
	$(".pptOn p:eq(1)").on("click",function(){//关闭ppt
		soundBtn()
		changeClass($(".pptOn p"),$(this));
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var winIndex = $(".funTitle li").index($(".funTitle .selected")) || 0;
		var openInfo = $at.screenInfo.drawInfo[index];
		var Layout = []
		if(layindex<0){
			alert("请选择窗口");
			return
		}
		var obj = {
			"WinId": openInfo.screens[layindex].id
		};
		Layout.push(obj)
		var Arguments={
			"LayoutId":openInfo.id,
			"WinId":openInfo.screens[layindex].id,
			"Layout": Layout
		}
		var data = publicCalls.viewClose(Arguments);
		send(data);
	})
	$(".pptgroup p:eq(0)").on("click",function(){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pptCall","first"); 
		send(data);
	})
	$(".pptgroup p:eq(1)").on("click",function(){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pptCall","pre"); 
		send(data);
	})
	$(".pptgroup p:eq(2)").on("click",function(){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pptCall","next"); 
		send(data);
	})
	$(".pptgroup p:eq(3)").on("click",function(){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pptCall","last"); 
		send(data);
	})
	$(".pptInput input").on("blur",function(){
		soundBtn()
		var value = $(this).val();
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pptCall","goPage"); 
		data.page = parseInt(value)
		send(data);
	})
	function changeClass(dom,self){
		dom.removeClass("selected");
		self.addClass("selected");
	}
//flash控制
	$(".flashOn p:eq(0)").off("click");
	$(".flashOn p:eq(1)").off("click");
	$(".flashOn p:eq(0)").on("click",function(){
		soundBtn()
		changeClass($(".flashOn p"),$(this));
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var winIndex = $(".funTitle li").index($(".funTitle .selected")) || 0;
		var openInfo = $at.screenInfo.drawInfo[index];
		var Layout = []
		if(layindex<0){
			alert("请选择窗口");
			return
		}
		var obj = {
			"WinId": openInfo.screens[layindex].id,
			"X": openInfo.screens[layindex].screenInfo[3],
			"Y": openInfo.screens[layindex].screenInfo[2],
			"Width": openInfo.screens[layindex].screenInfo[0],
			"Height": openInfo.screens[layindex].screenInfo[1],
		};
		if (openInfo.screens[layindex].medias[winIndex]) {
			var type = chooseType(openInfo.screens[layindex].medias[winIndex][2].toUpperCase());
			obj.Resource = {
				"Source": "local",
				"Path":openInfo.screens[layindex].medias[winIndex][1]
			};
			obj.Type = type;
		}  
		Layout.push(obj);
		var Arguments = {
			"LayoutId":openInfo.id, 
			"WinId":openInfo.screens[layindex].id,
			"Layout":Layout
		}
		var data = publicCalls.viewOpen(Arguments);
		send(data);
	})
	$(".flashOn p:eq(1)").on("click",function(){
		soundBtn()
		changeClass($(".flashOn p"),$(this));
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var winIndex = $(".funTitle li").index($(".funTitle .selected")) || 0;
		var openInfo = $at.screenInfo.drawInfo[index];
		var Layout = [];
		if(layindex<0){
			alert("请选择窗口");
			return
		}
		var obj = {
			"WinId": openInfo.screens[layindex].id
		};
		Layout.push(obj);
		var Arguments={
			"LayoutId":openInfo.id,
			"WinId":openInfo.screens[layindex].id,
			"Layout": Layout
		}
		var data = publicCalls.viewClose(Arguments);
		send(data);
	})
//web控制
	$(".webOn p:eq(0)").off("click");
	$(".webOn p:eq(1)").off("click");
	$(".webOn p:eq(0)").on("click",function(){
		soundBtn();
		changeClass($(".webOn p"),$(this));
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var winIndex = $(".funTitle li").index($(".funTitle .selected")) || 0;
		var openInfo = $at.screenInfo.drawInfo[index];
		var Layout = []
		if(layindex<0){
			alert("请选择窗口");
			return
		}
		var obj = {
			"WinId": openInfo.screens[layindex].id,
			"X": openInfo.screens[layindex].screenInfo[3],
			"Y": openInfo.screens[layindex].screenInfo[2],
			"Width": openInfo.screens[layindex].screenInfo[0],
			"Height": openInfo.screens[layindex].screenInfo[1],
		};
		if (openInfo.screens[layindex].medias[winIndex]) {
			var type = chooseType(openInfo.screens[layindex].medias[winIndex][2].toUpperCase());
			obj.Resource = {
				"Source": "local",
				"Path":openInfo.screens[layindex].medias[winIndex][1]
			};
			obj.Type = type;
		}  
		Layout.push(obj);
		var Arguments = {
			"LayoutId":openInfo.id, 
			"WinId":openInfo.screens[layindex].id,
			"Layout":Layout
		}
		var data = publicCalls.viewOpen(Arguments);
		send(data);
	})
	$(".webOn p:eq(1)").on("click",function(){
		soundBtn()
		changeClass($(".webOn p"),$(this));
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var winIndex = $(".funTitle li").index($(".funTitle .selected")) || 0;
		var openInfo = $at.screenInfo.drawInfo[index];
		var Layout = []
		if(layindex<0){
			alert("请选择窗口");
			return
		}
		var obj = {
			"WinId": openInfo.screens[layindex].id
		};
		Layout.push(obj)
		var Arguments={
			"LayoutId":openInfo.id,
			"WinId":openInfo.screens[layindex].id,
			"Layout": Layout
		}
		var data = publicCalls.viewClose(Arguments);
		send(data);
	})
//pdf控制
	var pdf = new PdfCall();
	$(".pdfOn p:eq(0)").off("click");
	$(".pdfOn p:eq(1)").off("click");
	$(".pdfGroup p:eq(0)").off("click");
	$(".pdfGroup p:eq(1)").off("click");
	$(".pdfGroup p:eq(2)").off("click");
	$(".pdfGroup p:eq(3)").off("click");
	$(".pdfGroup input").off("blur");
	$(".pdfGroup2 p:eq(0)").off("click");
	$(".pdfGroup2 p:eq(1)").off("click");
	$(".pdfGroup2 p:eq(2)").off("click");
	$(".pdfGroup2 p:eq(3)").off("click");
	$(".pdfGroup2 p:eq(4)").off("click");
	$(".pdfScale div").off("click");
	
	$(".pdfOn p:eq(0)").on("click",function(){
		soundBtn()
		changeClass($(".pdfOn p"),$(this));
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var winIndex = $(".funTitle li").index($(".funTitle .selected")) || 0;
		var openInfo = $at.screenInfo.drawInfo[index];
		var Layout = []
		if(layindex<0){
			alert("请选择窗口");
			return
		}
		var obj = {
			"WinId": openInfo.screens[layindex].id,
			"X": openInfo.screens[layindex].screenInfo[3],
			"Y": openInfo.screens[layindex].screenInfo[2],
			"Width": openInfo.screens[layindex].screenInfo[0],
			"Height": openInfo.screens[layindex].screenInfo[1],
		};
		if (openInfo.screens[layindex].medias[winIndex]) {
			var type = chooseType(openInfo.screens[layindex].medias[winIndex][2].toUpperCase());
			obj.Resource = {
				"Source": "local",
				"Path":openInfo.screens[layindex].medias[winIndex][1]
			};
			obj.Type = type;
		}  
		Layout.push(obj);
		var Arguments = {
			"LayoutId":openInfo.id, 
			"WinId":openInfo.screens[layindex].id,
			"Layout":Layout
		}
		var data = publicCalls.viewOpen(Arguments);
		send(data);
	})
	$(".pdfOn p:eq(1)").on("click",function(){
		soundBtn()
		changeClass($(".pdfOn p"),$(this));
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var winIndex = $(".funTitle li").index($(".funTitle .selected")) || 0;
		var openInfo = $at.screenInfo.drawInfo[index];
		var Layout = []
		if(layindex<0){
			alert("请选择窗口");
			return
		}
		var obj = {
			"WinId": openInfo.screens[layindex].id
		};
		Layout.push(obj)
		var Arguments={
			"LayoutId":openInfo.id,
			"WinId":openInfo.screens[layindex].id,
			"Layout": Layout
		}
		var data = publicCalls.viewClose(Arguments);
		send(data);
	})
	 
	$(".pdfGroup p:eq(0)").on("click",function(){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pdfCall","first"); 
		send(data);
	})
	$(".pdfGroup p:eq(1)").on("click",function(){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pdfCall","pre"); 
		send(data);
	})
	$(".pdfGroup p:eq(2)").on("click",function(){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pdfCall","next"); 
		send(data);
	})
	$(".pdfGroup p:eq(3)").on("click",function(){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pdfCall","last"); 
		send(data);
	})
	$(".pdfInput input").on("blur",function(){
		soundBtn();
		var value = $(this).val();
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pdfCall","goPage"); 
		data.page = parseInt(value)
		send(data);
	})
	
	$(".pdfGroup2 p:eq(0)").on("click",function(){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pdfCall","SetLayoutMode"); 
		data.layoutmode = "SinglePage"
		send(data);
	})
	$(".pdfGroup2 p:eq(1)").on("click",function(){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pdfCall","SetLayoutMode"); 
		data.layoutmode = "OneColumn"
		send(data);
	})
	$(".pdfGroup2 p:eq(2)").on("click",function(){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pdfCall","SetLayoutMode"); 
		data.layoutmode = "TwoColumnLeft"
		send(data);
	})
	$(".pdfGroup2 p:eq(3)").on("click",function(){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pdfCall","SetLayoutMode"); 
		data.layoutmode = "TwoColumnRight"
		send(data);
	})
	$(".pdfGroup2 p:eq(4)").on("click",function(){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pdfCall","SetLayoutMode"); 
		data.layoutmode = "SetFit"
		send(data);
	})
	$(".pdfScale div").on("click",function(e){
		soundBtn()
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var len = (e.pageX-$(this).offset().left)/$(this).width()*100;
		$(this).find("p").width(len+"%");
		$(this).parent().find("span").html(parseInt(len));
		var data = publicCalls.stateFun(openInfo.screens[layindex].id,"pdfCall","SetZoom"); 
		data.zoom = parseInt(len)
		send(data);
	});
	function getlayoutId(){
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var layindex = $(".drawContent1 li").index($(".drawContent1 .selected"));
		var openInfo = $at.screenInfo.drawInfo[index];
		var id = openInfo.screens[layindex].id;
		return id;
	}
}

$(function(){
	var Dom = {
		submite		: $(".submite"),
		
		layShow		: $("#layoutShow"),
		layBottom	: $("#layoutBottom"),
		layContent	: $(".layoutContent"),
		layChange	: $("#layout"),
		
		Part1btn 	: $("#btnPart1"),
		Part2btn	: $("#btnPart2"),
		Part3btn	: $("#btnPart3"),
		addBtnGroup : $("#addBtnGroup"),
		
		entryHard	: $("#entryHard"),
		entrySoft	: $("#entrySoftware"),
		
		drawArea	: $("#drawArea"),
		drawBox		: $("#drawBox"),
		
		screenLi	: $("#addPart3 ul li"),
		entrySlected: $("#entrySlected"),
		screenPlan	: $("#screenPlan ul"),
		addPart2	: $("#addPart2"),

		funTitle	: $(".funTitle"),
		
		btnGroup	: $("#btnGroup"),
		ulList		: $(".ulList"),
	}
	document.body.onselectstart=document.body.oncontextmenu=function(){ return false;};
	
	
	Dom.ulList.on("click","p",function(){
		$(this).parent().find("li").slideToggle(); 
	})
	partController(Dom);
	loginController(Dom);
})
function layShowController(Dom){
	ReactDOM.render(<Part5 info={$at.screenInfo}/>,view5Dom.layoutShow);
	bindController();
	var funTitle = $(".funTitle");
	var layoutContent = $(".layoutContent");
	var drawTitle1 = $(".drawTitle1");
	funTitle.on("click","li",function(){
		soundBtn()
		var index = funTitle.find("li").index($(this));
		funTitle.find("li").removeClass("selected");
		funTitle.find("li").eq(index).addClass("selected");
		layoutContent.find(".fun").removeClass("selected");
		layoutContent.find(".fun").eq(index).addClass("selected");
	})
	Dom.layShow.on("click",".layout2",function(){
		soundBtn()
		Dom.layShow.fadeOut();
		Dom.layChange.fadeIn();
	})
	Dom.layShow.find(".drawContent1").on("click","li",function(){
		soundBtn()
		$(".drawContent1").find("li").removeClass("selected");
		$(this).addClass("selected");
		setTimeout(function(){
			$(".layoutContent .fun").removeClass("selected");
			$(".layoutContent .fun").eq(0).addClass("selected");
			bindController(); 
		},100);
		
	});
	drawTitle1.on("click",function(){
		soundBtn()
		setTimeout(function(){
			$(".drawContent1 li").eq(0).addClass("selected");
			$(".layoutContent .fun").removeClass("selected");
			$(".layoutContent .fun").eq(0).addClass("selected");
			bindController(); 
		},100);
	})
	
}
function layChangeController(Dom){ 
	ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	layoutChange(Dom);
}
function layParseDate(json){
	var screenArr=[]; 
	for (var i=0;i<json.screenInfo.length;i++) {
		var obj={};
		var drawInfo=[];
		var host = [];
		var info = json.screenInfo[i];
		obj.screenInfo={
			title:info.name,
			col:info.columnCount,
			row:info.rowCount,
			wid:info.widthOne,
			hei:info.heightOne,
			id:info.screenId,
		};
		for (var j=0;j<json.resultHost.length;j++) {
			if(info.screenId == json.resultHost[j].screenId){
				var obj1={
					id:json.resultHost[j].id,
					deviceId:json.resultHost[j].deviceId,
					describeJson:json.resultHost[j].describeJson
				};
				host.push(obj1);
			}
		}
		obj.screenInfo.host=host;
		for (var j=0;j<json.layout.length;j++) {
			var layout = json.layout[j];
			if(info.screenId == layout.screenId){
				var obj2 = {} 
				var screens=[];
				obj2 = {
					title: layout.name,
					id: layout.layoutId,
					controlUrl : layout.controlUrl,
					usePercent:layout.usePercent
				}
				for (var m=0;m<json.describe.length;m++){
					var describes = json.describe[m];
					if(layout.layoutId == describes.layoutId){
						var obj3={};
						var media=[];
						var item = describes.items;
						if(typeof(item)=="string"){
							item=JSON.parse(item);
						}
						for (var n=0;n<item.length;n++) {
							var mediasArr=[item[n].name,item[n].controlType,item[n].path,item[n].contentId,item[n].controlUrl];
							media.push(mediasArr);
						}
						obj3={
							id:describes.winId,
							scale:describes.scale,
							across:false,
							screenInfo:[describes.width,describes.height,describes.x,describes.y],
							medias:media, 
							items:describes.items
						}
						screens.push(obj3);
					} 
				}
				obj2.screens=screens;
				drawInfo.push(obj2)
			}
			
		}
		obj.drawInfo=drawInfo;
		screenArr.push(obj);
	}
	return screenArr;
}
function layoutChange(Dom){
	var screenLen=0;
	var smallIndex=0;
	var layChangeBox = $("#LayoutScreen");
	var layoutInfo = $("#layoutInfo");
	var changeTitle= layChangeBox.find(".drawTitle");
	var changeBtnGroup = layChangeBox.find(".btnGroup");
	var changeDraw = layChangeBox.find(".drawContent");
	var changeBox2 = layoutInfo.find(".infoBox2");
	var changeChoose = layoutInfo.find(".chooseList");
	var changeAddbuju = layoutInfo.find("h2");
	var changeContent =layoutInfo.find(".contentList");
	var changelayName = $(".layoutName");
	var changelay = $(".addLayout");
	Dom.layChange.on("click",".layout1",function(){
		changelay.trigger("click");
		Dom.layShow.fadeIn();
		Dom.layChange.fadeOut();
		ReactDOM.render(<Part5 info={$at.screenInfo}/>,view5Dom.layoutShow);
		bindController();
	})
	changelay.on("click", function () {
		soundBtn()
		for (var i = 0; i < $at.screenInfo.drawInfo.length; i++) {
			var screens = $at.screenInfo.drawInfo[i].screens;
			for (var j = 0; j < screens.length; j++) {
				var arr=[]
				for (var n=0;n<screens[j].medias.length;n++) {
					var medias = screens[j].medias[n];
					var obj = {
						name : medias[0],
						controlType: medias[1],
						path: medias[2],
						contentId: medias[3],
						controlUrl: medias[4],
					};
					arr.push(obj);
				}
				
				$at.screenInfo.drawInfo[i].screens[j].items = JSON.stringify(arr);
			}
		}
		var data1 = { data: JSON.stringify($at.screenInfo) };
		$.post($at.url+"/interfaces/screenInfo/changeLayout", data1,onComplete);
		function onComplete(json) {
			$at.allInfo[$at.menuIndex] = $at.screenInfo;
			ReactDOM.render(React.createElement(Part5, { info: $at.screenInfo }), view5Dom.layoutShow);
			ReactDOM.render(React.createElement(Part4, { info: $at.screenInfo, softWare: $at.softWare }), view4Dom.layout);
			bindController();
			Dom.layShow.fadeIn();
			Dom.layChange.fadeOut();
		}
	});
	
	changeTitle.on("click","li",function(){
		soundBtn()
		screenLen = changeTitle.find("li").index($(this));
	})
	changeTitle.on("click",".close",function(e){
		soundBtn()
		var config = confirm("确定删除此布局么？");
		if(config){
			var index = changeTitle.find("close").index($(this));
			$at.screenInfo.drawInfo.splice(index,1);
			ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
		}
	})
	changeBtnGroup.find("span").on("click",function(){
		soundBtn()
		var num  = parseInt($at.screenInfo.drawInfo.length)+1;
		var addScreen = {
			title: "屏幕"+num,
			index:num,
			screens:[
				{
					across:true,
					screenInfo:[1920,1080,0,0],
					medias:[],
				}
			]
		}
		$at.screenInfo.drawInfo.push(addScreen);
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	})
	changeBtnGroup.find("p").on("click",function(){
		soundBtn()
		changelayName.find("input").val("")
		changelayName.show();
	})
	changelayName.find(".close").on("click",function(){
		soundBtn()
		changelayName.hide();
	})
	changelayName.find("p").on("click",function(){
		soundBtn()
		var value = changelayName.find("input").val();
		if(value){
			$at.screenInfo.drawInfo[screenLen].title = value;
			ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
			changelayName.hide();
		}
	});
	layoutInfo.find(".infoBox1").on("click","p",function(){
		soundBtn()
		layoutInfo.find("p").removeClass("selected");
		$(this).addClass("selected");
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].across=layoutInfo.find("p").index($(this))==0;
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	})
	changeDraw.on("click","li",function(){
		soundBtn();
		screenLen = changeTitle.find("li").index(changeTitle.find(".selected"));
		var num = parseInt($(this).find("span").html());
		smallIndex=num;
		var arr = $at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo;
		changeBox2.find("input").eq(1).val(arr[2])
		changeBox2.find("input").eq(0).val(arr[3])
		changeBox2.find("input").eq(2).val(arr[0])
		changeBox2.find("input").eq(3).val(arr[1])
		changeDraw.find("li").removeClass("selected");
		$(this).addClass("selected");
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
		boxChange($(this),smallIndex,changeTitle);
	})
	changeBox2.find("input").eq(0).on("change",function(){
		soundBtn();
		var x = $(this).val();
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[3]=parseInt(x);
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	})
	changeBox2.find("input").eq(1).on("change",function(){
		soundBtn()
		var y = $(this).val();
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[2]=parseInt(y);
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	})
	changeBox2.find("input").eq(2).on("change",function(){
		soundBtn()
		var wid = $(this).val();
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[0]=parseInt(wid);
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	})
	changeBox2.find("input").eq(3).on("change",function(){
		soundBtn()
		var hei = $(this).val();
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[1]=parseInt(hei);
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	})
	changeChoose.on("click",".close",function(){
		soundBtn()
		var num = changeChoose.find("li .close").index($(this));
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].medias.splice(parseInt(num),1);
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	})
	changeAddbuju.on("click",function(){ 
		soundBtn()
		var data = {
					across:true,
					screenInfo:[1920,1080,0,0],
					medias:[],
				}
		$at.screenInfo.drawInfo[screenLen].screens.push(data); 
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	})
	changeDraw.on("click",".close",function(){
		soundBtn()
		if($at.screenInfo.drawInfo[screenLen].screens.length==1){
			alert("只有一个布局了,请不要删除！")
		}else{
			var config = confirm("确定删除此窗口么？");
			if(config){
				$at.screenInfo.drawInfo[screenLen].screens.splice(smallIndex,1);
				smallIndex=0;
				ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
			}
		}
	})
	changeContent.on("click",".contentBtn",function(){
		soundBtn()
		changeContent.find(".contentBtn").removeClass("selected");
		$(this).addClass("selected");
	})
	changeContent.on("click",".add",function(){
		soundBtn()
		var type = $(this).parent().find(".icon").attr("name");
		var name = $(this).parent().find("span").eq(0).html();
		var path = $(this).parent().find("p").eq(1).html();
		var contentId = $(this).parent().find("p").eq(2).html();
		var controlUrl = $(this).parent().find("p").eq(3).html();
		var arr = [name,path,type,contentId,controlUrl];
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].medias.push(arr);
		ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
	}) 
}
function boxChange(self,smallIndex,changeTitle){
	var box = $(".screenUl");
	var changeBox2 = $("#layoutInfo .infoBox2");
	var boxWid = box.outerWidth();
	var boxHei = box.outerHeight();
	var winWid = self.outerWidth();
	var winHei = self.outerHeight();
	var relWid = changeBox2.find("input").eq(2).val();
	var relHei = changeBox2.find("input").eq(3).val();
	var bili = parseFloat(winWid)/parseFloat(relWid);
	self.off("mousedown");
	self.on("mousedown",function(e1){
		e1.stopPropagation();
		var selfX = self.position().left/boxWid*100;
		var selfY = self.position().top/boxHei*100;
		var starX = e1.pageX;
		var starY = e1.pageY;
		self.off("mousemove");
		self.on("mousemove",function(e2){
			e2.stopPropagation();
			var moveX = e2.pageX;
			var moveY = e2.pageY;
			var relX = (moveX-starX)/boxWid*100; 
			var relY = (moveY-starY)/boxHei*100;
			self.css({"left":relX+selfX+"%","top":relY+selfY+"%"});
		}) 
		self.off("mouseleave");
		self.on("mouseleave",function(e3){
			e3.stopPropagation();
			self.off("mousedown");
			self.off("mousemove");
			self.off("mouseleave");
		})
		self.off("mouseup");
		self.on("mouseup",function(e4){
			e4.stopPropagation();
			var lefts = self.position().left/bili;
			var tops = self.position().top/bili;
			var screenLen = changeTitle.find("li").index(changeTitle.find(".selected"));
			$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[3]=parseInt(lefts);
			$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[2]=parseInt(tops);
			var wid = self.outerWidth()/bili;
			var hei = self.height()/bili;
			$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[0]=parseInt(wid);
			$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[1]=parseInt(hei);
			self.find(".change3").off("mousedown");
			$(".drawContent").off("mousemove");
			$(".drawContent").off("mouseleave");
			self.off("mousedown");
			self.off("mousemove");
			self.off("mouseleave");
			ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
		})
	})
	
	self.find(".change3").off("mousedown")
	self.find(".change3").on("mousedown",function(e1){
		e1.stopPropagation();
		var winWid = self.outerWidth();
		var winHei = self.outerHeight();
		var starX = e1.pageX;
		var starY = e1.pageY;
		$(".drawContent").off("mousemove");
		$(".drawContent").on("mousemove",function(e2){
			e2.stopPropagation();
			var moveX = e2.pageX;
			var moveY = e2.pageY;
			var relwid = (winWid+moveX-starX)/boxWid*100;
			var relhei = (winHei+moveY-starY)/boxHei*100;
			self.css({"width":relwid+"%","height":relhei+"%"});
		})
		$(".drawContent").off("mouseleave");
		$(".drawContent").on("mouseleave",function(e3){
			e3.stopPropagation();
			self.find(".change3").off("mousedown");
			$(".drawContent").off("mousemove");
			$(".drawContent").off("mouseleave");
		})
		$(".drawContent").off("mouseup");
		$(".drawContent").on("mouseup",function(e4){
			var screenLen = changeTitle.find("li").index(changeTitle.find(".selected"));
			var wid = self.outerWidth()/bili;
			var hei = self.outerHeight()/bili;
			$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[0]=parseInt(wid);
			$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[1]=parseInt(hei);
			ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
			self.find(".change3").off("mousedown");
			$(".drawContent").off("mousemove");
			$(".drawContent").off("mouseleave");
		})	
	})
}

var view4Dom = {
	layout	: $at.GetDomId("layout")
}
var titleList = [["PPT","PPT"],["PDF","PDF"],["FLASH","FLASH"],["WEB","WEB"],["ZOOLONWEB","ZOOLONWEB"],["VIDEO","VIDEO"]]
var Part4 = React.createClass({
	render : function(){
		var info = this.props.info;
		var screenInfo = info.screenInfo;
		return (<div> 
			<LayoutTop1 title={screenInfo.title}/>
			<LayoutScreen1 obj={{info}} softWare={this.props.softWare}/>
			<LayoutName1/>
			</div>)
	}
})
var LayoutTop1 = React.createClass({
	render : function(){
		return (<div id="layoutTop">
						<h1>{this.props.title}</h1>
						<div className="addLayout">
							保存布局
						</div>
					</div>)
	}
})

var LayoutScreen1 = React.createClass({
	getInitialState : function(){
		return{
			info : this.props.obj.info,
			index: 0,
			smallIndex:0
		}
	},
	changeIndex:function(num){
		this.setState({index:num});
	},
	changeSmallIndex:function(num){
		this.setState({smallIndex:num});
	},
	render : function(){
		var info = this.state.info;
		var drawInfo = info.drawInfo;
 		var row = info.screenInfo.row;
 		var col = info.screenInfo.col;
 		var num = row*col;
 		var bil = info.screenInfo.hei/info.screenInfo.wid
 		var wid = 100/col+"%";
 		var hei = bil*100/col+"%";
 		var b = [];
 		for(var i=0;i<num;i++){
 			b.push(i)
 		}
		return (<div id="LayoutScreen">
			<div id="screenUl">
			<ul className="screenUl">
			{
				b.map(function(result,index){ 
					return <li key={index+1} style={{width:wid,paddingBottom:hei}}></li>  
				})
			}
			</ul>
			<DrawBox1 obj={info} index={this.state.index} smallIndex={this.state.smallIndex} changeIndex={this.changeIndex} changeIndex2={this.changeSmallIndex}/>
			</div>
			<LayoutInfo obj={{drawInfo}} index={this.state.index} smallIndex={this.state.smallIndex} softWare={this.props.softWare}/>
			<p className="layout1">预览布局</p>
		</div>
		)
	}
})
var LayoutInfo = React.createClass({
	render : function(){
		var i1=this.props.index;
		var i2=this.props.smallIndex;
		var drawInfo = this.props.obj.drawInfo[i1];
		var across = drawInfo.screens[i2].across;
		var screenInfo=drawInfo.screens[i2].screenInfo;
		var medias=drawInfo.screens[i2].medias;
		return (<div id="layoutInfo">
			<h1>窗口属性</h1>
			<h2>添加窗口</h2>
			<div>
				<InfoBox1 texts={across}/>
				<InfoBox2/>
			</div>
			<div id="sources">
				<InfoBox3 texts={medias}/>
			</div>
			<div id="infoBox4">
				<InfoBox4 softWare={this.props.softWare}/>
			</div>
		</div>)
	}
})
var InfoBox1 = React.createClass({
	render : function(){
		var bol = this.props.texts;
		if(bol){
			return(<div className="infoBox infoBox1">
				<h3>窗口跨屏属性</h3>
				<div className="chooseBtn"><p className="selected">可跨主机</p><p>不可跨主机</p></div> 
			</div>)
		}else{ 
			return(<div className="infoBox infoBox1">
				<h3>窗口跨屏属性</h3>
				<div className="chooseBtn"><p>可跨主机</p><p className="selected">不可跨主机</p></div>
			</div>) 
		}
	}
})
var InfoBox2 = React.createClass({
	render : function(){
		return(<div className="infoBox infoBox2">
			<h3>窗口位置</h3>
			<div className="inputGroup"><p>X</p><input type="number"/></div> 
			<div className="inputGroup"><p>Y</p><input type="number"/></div> 
			<div className="inputGroup"><p>宽度</p><input type="number"/></div> 
			<div className="inputGroup"><p>高度</p><input type="number"/></div> 
		</div>)
	}
})
var InfoBox3 = React.createClass({
	render : function(){
		var b = this.props.texts;
		var self = this;
		return(<div className="infoBox">
			<h3>窗口资源</h3>
			<ul className="chooseList"> 
			{
				b.map(function(result,index){
					var imgSrc = "assets/img/"+result[2]+".png"
					return(<li key={index}>
						<img src={imgSrc} className="icon"/>
						<p>{result[0]}</p>
						<span>{result[1]}</span> 
						<span>{result[2]}</span>
						<span>{result[3]}</span>
						<span>{result[4]}</span>
						<img src="assets/img/close.png" className="close" name={index}/>
					</li>)
				})
			}
			</ul>
		</div>)
	}
})
var InfoBox4 = React.createClass({
	getInitialState : function(){
		return{
			index:0,
		}
	},
	listHandeler : function(e){
		this.setState({index:e.target.id})
	},
	render : function(){
		var self = this;
		return(<div className="infoBox">
			<h3>窗口跨屏属性</h3>
			<div className="infoList">
				<ul className="titileList">
					{
						titleList.map(function(result,index){
							var cla = self.state.index==index?"selected":"";
							var imgSrc = "assets/img/"+titleList[index][0]+".png";
							return(<li key={index} className={cla}>
								<img src={imgSrc}/>
								<p id={index} onClick={self.listHandeler}>{result[1]}</p>
							</li>)
						})
					}
				</ul>
				<ul className="contentList">
					{
						this.props.softWare.map(function(result,index){
							var cla = self.state.index==index?"selected":""
							var imgSrc = "assets/img/"+titleList[index][0]+".png"
							return(<li key={index} className={cla}>
								{
									result.arr.map(function(result2,index2){
										return(
											<div className="contentBtn" key={index2}>
												<img src={imgSrc} className="icon" name={titleList[index][1]}/> 
												<span>{result2[0]}</span>
												<p>{result2[1]}</p>
												<p>{result2[2]}</p>
												<p>{result2[3]}</p>
												<p>{result2[4]}</p>
												<img src="assets/img/add.png" className="add"/>
											</div>
										)
									})
								}
								
							</li>)
						})
					}
				</ul>
			</div>
		</div>)
	}
})
var DrawBox1 = React.createClass({ 
	getInitialState : function(){
		var screenInfo = this.props.obj.screenInfo;
		var drawInfo = this.props.obj.drawInfo;
		return{
			drawInfo:drawInfo,
			screenInfo:screenInfo
		}
	},
	clickHandeler : function(e){
		this.props.changeIndex(e.target.id)
	},
	clickHandeler2 : function(e){
		if(e.target.nodeName.toLowerCase()=="li"){
			this.props.changeIndex2(e.target.id)
		}
		
	},
	componentWillUpdate : function(){
		if(!this.state.drawInfo[this.props.index]){
			this.props.changeIndex(parseInt(this.props.index)-1)
		}
	},
	render : function(){
		var self = this;
		var hei = this.props.obj.screenInfo.hei;
		var wid = this.props.obj.screenInfo.wid;
		var row = this.props.obj.screenInfo.row;
		var col = this.props.obj.screenInfo.col;
		return(<div id="drawBox">
			<div className="btnGroup">
				<p>布局属性</p>
				<span>添加布局</span>
			</div>
			<ul className="drawTitle">
			{
				this.state.drawInfo.map(function(result,index){
					var cla = index==self.props.index?"selected":"";
					return(<li key={index} className={cla}>
						<p id={index} onClick={self.clickHandeler}>{result.title}</p>
						<img src="assets/img/close.png" className="close"/>
					</li>)
				})
			}
			</ul>
			<ul className="drawContent">
			{
				this.state.drawInfo[this.props.index].screens.map(function(result,index){
					var styleInfo = result.screenInfo;
					var styleObj = {
						height : styleInfo[1]/hei/row*100+"%",
						width  : styleInfo[0]/wid/col*100+"%",
						top    : styleInfo[2]/hei/row*100+"%",
						left   : styleInfo[3]/wid/col*100+"%"
					}
					return(<li key={index} style={styleObj} id={index} onClick={self.clickHandeler2}>
						<span>{index}</span>
						<img src="assets/img/close.png" className="close"/>
						<div className="change1 change"></div>
						<div className="change2 change"></div>
						<div className="change3 change"></div>
					</li>)
				})
			}
			</ul>
		</div>)
	}
})

var LayoutName1 = React.createClass({
	render : function(){
		return(<div className="layoutName">
			<img src="assets/img/close.png" className="close"/>
			<h1>布局属性</h1>
			<div className="inputGroup">
				<h2>名称:</h2>
				<input type="text"/>
			</div>
			<p>完成</p>
		</div>)
	}
})





var view5Dom = {
	layoutShow	: $at.GetDomId("layoutShow")
}
var Part5 = React.createClass({
	render : function(){
		
		var info = this.props.info;
		var screenInfo = info.screenInfo; 
		return (<div> 
			<LayoutTop title={screenInfo.title}/>
			<LayoutShow obj={{info}}/>
			</div>)
	}
})
var LayoutBottom = React.createClass({
	render : function(){
		var drawInfo = this.props.obj.drawInfo;
		var index = this.props.index;
		var smallIndex = this.props.smallIndex;
		var info = drawInfo[index].screens[smallIndex].medias;
		return(<div id="layoutBottom">
			<FunTitle title = {info}/>
			<div className='layoutContent'>
				{
					info.map(function(result,index){
						var htmls = chooseType(result[2],result[0],index)
						return htmls
					})
				}
			</div>
			<p className="layout2">编辑布局</p>
		</div>)
	}
})
var LayoutTop = React.createClass({
	render : function(){
		return (<div id="showTop">
					<h1>{this.props.title}</h1>
					<div id="closeLayout" className="layoutBtn">关闭布局</div>
					<div id="openLayout" className="layoutBtn">打开布局</div>
				</div>)
	}
})
var LayoutShow = React.createClass({
	getInitialState : function(){
		return{
			info : this.props.obj.info,
			index: 0,
			smallIndex:0
		}
	},
	changeIndex:function(num){
		this.setState({index:num});
	},
	changeSmallIndex:function(num){
		this.setState({smallIndex:num});
	},
	render : function(){
		var info = this.state.info;
		var drawInfo = info.drawInfo;
 		var row = info.screenInfo.row;
 		var col = info.screenInfo.col;
 		var num = row*col;
 		var bil = info.screenInfo.hei/info.screenInfo.wid
 		var wid = 100/col+"%";
 		var hei = bil*100/col+"%";
 		var b = [];
 		for(var i=0;i<num;i++){
 			b.push(i)
 		}
		return (<div id="LayoutScreen">
			<div id="screenUl">
			<ul className="screenUl">
			{
				b.map(function(result,index){ 
					return <li key={index+1} style={{width:wid,paddingBottom:hei}}></li>  
				})
			}
			</ul>
			<DrawBox obj={info} index={this.state.index} smallIndex={this.state.smallIndex} changeIndex={this.changeIndex} changeIndex2={this.changeSmallIndex}/>
			<LayoutBottom obj={info} index={this.state.index} smallIndex={this.state.smallIndex}/>
			</div>
			
		</div>
		)
	}
})
var DrawBox = React.createClass({
	getInitialState : function(){
		var screenInfo = this.props.obj.screenInfo;
		var drawInfo = this.props.obj.drawInfo;
		return{
			drawInfo:drawInfo,
			screenInfo:screenInfo
		}
	},
	clickHandeler : function(e){
		this.props.changeIndex(e.target.id)
	},
	clickHandeler2 : function(e){
		if(e.target.nodeName.toLowerCase()=="li"){
			this.props.changeIndex2(e.target.id)
		}
		
	},
	componentWillUpdate : function(){
		if(!this.state.drawInfo[this.props.index]){
			this.props.changeIndex(parseInt(this.props.index)-1)
		}
	},
	render : function(){
		var self = this;
		var hei = this.props.obj.screenInfo.hei;
		var wid = this.props.obj.screenInfo.wid;
		var row = this.props.obj.screenInfo.row;
		var col = this.props.obj.screenInfo.col;
		return(<div id="drawBox1">
			<ul className="drawTitle1">
			{
				this.state.drawInfo.map(function(result,index){
					var cla = index==self.props.index?"selected":"";
					return(<li key={index} className={cla}>
						<p id={index} onClick={self.clickHandeler}>{result.title}</p>
					</li>)
				})
			}
			</ul>
			<ul className="drawContent1">
			{
				this.state.drawInfo[this.props.index].screens.map(function(result,index){
					var styleInfo = result.screenInfo;
					var styleObj = {
						height : styleInfo[1]/hei/row*100+"%",
						width  : styleInfo[0]/wid/col*100+"%",
						top    : styleInfo[2]/hei/row*100+"%",
						left   : styleInfo[3]/wid/col*100+"%"
					}
					return(<li key={index} style={styleObj} id={index} onClick={self.clickHandeler2}>
						<span>{index}</span>
					</li>)
				})
			}
			</ul>
		</div>)
	}
})
function chooseType(type,name,index){
	switch (type.toUpperCase()){
		case "VIDEO":
			return(<VideoFun title={name} key={index}/>)
		case "PPT":
			return(<PptFun title={name} key={index}/>)
		case "PDF":
			return(<PdfFun title={name} key={index}/>)
		case "FLASH":
			return(<FlashFun title={name} key={index}/>)
		case "WEB":
			return(<WebFun title={name} key={index}/>)
		case "SHIPIN":
			return(<FlashFun title={name} key={index}/>)
		default:
			break;
	}
}
var FunTitle = React.createClass({
	render : function(){
		var title = this.props.title;
		return (<ul className="funTitle">
			{
				title.map(function(result,index){
					var cla = index==0?"selected":"";
					var imgSrc = "assets/img/"+result[2]+".png"
					return(<li key={index} className={cla}>
						<img src={imgSrc}/>
						<p className="p">{result[0]}</p>
						<p>{result[1]}</p>
						<p>{result[2]}</p>
						<p>{result[3]}</p>
						<p>{result[4]}</p>
						</li>)
				})
			}
		</ul>)
	}
})
var VideoFun = React.createClass({
	render : function(){
		return(<div className="videoFun fun">
			<div className="controllerBox"> 
				<h1>动作</h1>
				<div className="controller">
					<div className="onBtn videoOn">
						<p className="selected">打开</p> 
						<p>关闭</p>
					</div>
				</div>
			</div>
			<div className="controllerBox"> 
				<h1>控制界面</h1>
				<div className="controller">
					<h2>播放模式</h2>
					<div className="onBtn arround">
						<p className="selected" id="play">默认</p> 
						<p id="pause">循环</p>
					</div>
				</div>
				<div className="controller">
					<h2>播放进度</h2>
					<div className="pro1 playPro">
						<img src="assets/img/pause.png"/>
						<div><p></p></div>
					</div>
				</div>
				<div className="controller">
					<h2>音量</h2>
					<div className="pro1 voicePro">
						<img src="assets/img/sound.png"/>
						<div><p></p></div>
					</div>
				</div>
			</div>
		</div>)
	}
})
var PptFun = React.createClass({
	render :function(){
		return (<div className="pptFun fun">
			<div className="controllerBox"> 
				<h1>动作</h1>
				<div className="controller">
					<div className="onBtn pptOn">
						<p className="selected">打开</p> 
						<p>关闭</p>
					</div>
				</div>
			</div>
			<div className="controllerBox"> 
				<h1>控制界面</h1>
				<div className="controller">
					<h2>跳转页面</h2>
					<div className="nomalBtn pptgroup">
						<p>首页</p> 
						<p>上一页</p> 
						<p>下一页</p> 
						<p>尾页</p> 
					</div>
					<div className="inputBtn pptInput">
						<p>跳转至</p>
						<input type="number"/>
					</div>
				</div>
			</div>
		</div>)
	}
})
var PdfFun = React.createClass({
	render : function(){
		return(<div className="pdfFun fun">
			<div className="controllerBox"> 
				<h1>动作</h1>
				<div className="controller">
					<div className="onBtn pdfOn">
						<p className="selected">打开</p> 
						<p>关闭</p>
					</div>
				</div>
			</div>
			<div className="controllerBox"> 
				<h1>控制界面</h1>
				<div className="controller">
					<h2>跳转页面</h2>
					<div className="nomalBtn pdfGroup">
						<p>首页</p>
						<p>上一页</p> 
						<p>下一页</p> 
						<p>尾页</p> 
					</div>
					<div className="inputBtn pdfInput">
						<p>跳转至</p>
						<input type="number"/>
					</div>
				</div>
				<div className="controller">
					<h2>布局模式</h2>
					<div className="nomalBtn pdfGroup2">
						<p>单页</p> 
						<p>单列</p> 
						<p>双列(左)</p> 
						<p>双列(右)</p> 
						<p>适应</p> 
					</div>
				</div>
				<div className="controller">
					<h2>缩放</h2>
					<div className="pro1 pdfScale">
						<span>100</span>
						<div><p></p></div>
					</div>
				</div>
			</div>
				
		</div>)
	}
})
var FlashFun = React.createClass({
	render :function(){
		return (<div className="flashFun fun">
			<div className="controllerBox"> 
				<h1>动作</h1>
				<div className="controller">
					<div className="onBtn flashOn">
						<p className="selected">打开</p> 
						<p>关闭</p>
					</div>
				</div>
			</div>
			<div className="controllerBox"> 
				<h1>控制界面</h1>
				<div className="controller">
					<h2>调用方法</h2>
					<div className="inputBtn">
						<p>方法名</p>
						<input type="text"/>
					</div>
				</div>
			</div>	
		</div>)
	}
})
var WebFun = React.createClass({
	render :function(){
		return (<div className="flashFun fun">
			<div className="controllerBox"> 
				<h1>动作</h1>
				<div className="controller">
					<div className="onBtn webOn">
						<p className="selected">打开</p> 
						<p>关闭</p>
					</div>
				</div>
			</div>
			<div className="controllerBox"> 
				<h1>控制界面</h1>
				<div className="controller">
					<h2>调用方法</h2>
					<div className="inputBtn">
						<p>方法名</p>
						<input type="text"/>
					</div>
				</div>
			</div>	
		</div>) 
	}
})
var ZoolonFun = React.createClass({
	render :function(){
		return (<div className="zoolonFun"></div>)
	}
}) 

function loginController(Dom){
	Dom.submite.on("click",function(){	
		soundBtn()
		var name=$("#userName input").val();
		var pass=$("#passWord input").val();
		if(name==""||pass==""){
			alert("请输入用户名密码");
		}else{
			initLayInfo(Dom,name,pass);
		}
	})
}
function initLayInfo(Dom,user,password){
	$at.getJson($at.url+"/interfaces/login",{name:user,password:password},onComplete);
	function onComplete(json){
		if(!json.state){
			alert("用户名密码错误"); 
			return;
		} 
		$Animate.complete($Animate.loginHide,$Animate.wrapShow);
		$("#menu").animate({left : "-260px"})
		$("#layoutShow,#layout,#setScreen").animate({left : "0px"})
		$("#wrap #addScreen #setScreen").css({"padding-right":"0"})
		var data = layParseDate(json);
		$at.allInfo = data;
		$at.screenInfo=data[$at.menuIndex];
		$at.getJson($at.url+"/interfaces/entry/content","",onComplete2);
		function onComplete2(json2){
			connect();
			socket.onopen();
			$at.softWare = ParseSoft(json2.data);
			initSoft(Dom); 
			layShowController(Dom);
			layChangeController(Dom);
			setScreen(Dom,data);
			$(".layoutContent .fun").eq(0).addClass("selected");
		}	
		$at.getJson($at.url+"/interfaces/entry/device","",onComplete3); 
		function onComplete3(json3){		
			$at.entryHard = ParseHard(json3.data); 
			initHard(Dom);
		}	
	}
}
var loginDom = {
	userName 	: $at.GetDomId("userName"),
	passWord 	: $at.GetDomId("passWord"),
	submitBtn	: $at.GetDomId("submitBtn"),
	forgotPass	: $at.GetDomId("forgotPass"),
	logBtn		: $at.GetDomId("logBtn")
}
var UserName = React.createClass({
	render : function(){
		return (<input type="text" placeholder={this.props.placehoder}/>)
	}
})
var PassWord = React.createClass({
	render : function(){
		return (<input type="password" placeholder={this.props.placehoder} />)
	}
})
var SubmiteBtn = React.createClass({
	getInitialState : function(){
		return {result : true}
	},
  	handleClick: function(event) {
  		if(this.state.result){
  			FormCheck(this)
  		}
    },
	render : function(){
		var text = this.state.result ? "SIGN IN" : "WAITING......";
		return (<div className = "submite"><p>{text}<span className={this.props.name}></span></p></div>)
	}
})
var ForgotPass = React.createClass({
	render : function(){
		return (<span>FORGOT PASSWORD?</span>)
	}
})
var LogBtn = React.createClass({
	render : function(){
		return (<span>CREATE AN ACCOUNT</span>)
	}
})

ReactDOM.render(
    <UserName placehoder = "User Name"/>,
    loginDom.userName
);
ReactDOM.render(
    <PassWord placehoder = "Password"/>,
    loginDom.passWord
);
ReactDOM.render(
    <SubmiteBtn name="icon iconfont icon-jiantou-copy-copy"/>,
    loginDom.submitBtn
);
ReactDOM.render(
    <ForgotPass />,
    loginDom.forgotPass
);
ReactDOM.render(
	<LogBtn />,
	loginDom.logBtn 
)

//用户名提交验证
function FormCheck(next){
	var userVal = $("#userName input").val();
	var passVal = $("#passWord input").val();
	if(userVal =='' || !userVal){
		alert("用户名不能为空")
	}else if(passVal =='' || !passVal){
		alert("密码不能为空")
	}else{
		var data = {name:userVal,password:passVal}
		$at.getJson($at.staicUrl+"interfaces/login",data,onComplete);
		function onComplete(json){   
			if(json.state){ 
//				next(json.data.name);
				$Animate.complete($Animate.loginHide,$Animate.wrapShow); 
			}else{
				alert("用户名或密码错误，请重新输入");
			}
			
		}
	}
}

function initScreenInfo(){
	var view5Info = { 
		screenInfo:{
			title:"虚拟桌面1",
			col:"4",
			row:"2",
			wid:"1920",
			hei:"1080"
		},
		drawInfo:[
			{
				title: "屏幕1",
				screens:[
					{
						across:true,
						screenInfo:[1920,1080,0,0],
						medias:[["SHIPIN","叮当1"],["FLASH","叮当2"],["PDF","叮当3"],["PPT","叮当4"],["WEB","叮当5"]],
					},
					{
						across:false,
						screenInfo:[1920,1080,0,1920],
						medias:[["PPT","叮当2"],["FLASH","叮当2"]],
					}
				]
			},
			{
				title: "屏幕2",
				screens:[
					{
						across:false,
						screenInfo:[1920,1080,0,1920],
						medias:[["PPT","叮当3"],["FLASH","叮当2"]],
					},
					{
						across:false,
						screenInfo:[1920,1080,0,3840],
						medias:[["PPT","叮当4"],["FLASH","叮当2"]],
					}
				]
			},
			{
				title: "屏幕3",
				screens:[
					{
						across:false,
						screenInfo:[1920,1080,1080,0],
						medias:[["PPT","叮当5"],["FLASH","叮当2"]],
					},
					{
						across:false,
						screenInfo:[1920,1080,0,0],
						medias:[["PPT","叮当6"],["FLASH","叮当2"]],
					}
				]
			}
		]
	}
	$at.getJson("dataDemo.json","",onComplete);
	function onComplete(json){
		ReactDOM.render(<Part5 info={view5Info}/>,view5Dom.layoutShow);
	}
}


function partController(Dom){
	Dom.addBtnGroup.find(".btn").eq(1).on("click",function(){ 
		soundBtn()
		initPart1(Dom);
		$("#screenList .selected img").show();
		$("#screenList .selected img").off("click");
		$("#screenList .selected img").on("click",function(e){
			e.stopPropagation();
			var config = confirm("确定删除此屏幕么？");
			if(config){
				var data={
					id:$at.allInfo[$at.menuIndex].screenInfo.id
				}
				$.post($at.url+"/interfaces/screenInfo/deleteScreen", data,onComplete);
				function onComplete(json){
					if(!json.state){return}
					$at.allInfo.splice($at.menuIndex,1);
					$at.screenInfo = $at.allInfo[0];
					ReactDOM.render(<MenuList/>,setScreenDom.screenList);
					bindController();
					$("#screenList li").eq(0).trigger("click");
				}
			}
		})
	})
	Dom.addBtnGroup.find(".btn").eq(0).on("click",function(){
		soundBtn()
		$("#screenList li img").hide();
		var screenInfo={
			screenInfo:{title:"未命名",col:4,row:2,wid:1920,hei:1080,id:"s2 ",host:[]}, 
			drawInfo:[
				{
					title:"未命名",
					id:"l1", 
					controlUrl:"1",
					usePercent:"1",
					screens:[
						{ 
						id:"w1",
						scale:1,
						across:false,
						screenInfo:[0,0,0,0],
						medias:[],
						items:['[]'] 
						}
					]
				}
			]
		}
		var data1 = {data:JSON.stringify(screenInfo)}
		$.post($at.url+"/interfaces/screenInfo/addScreen", data1,onComplete);
		function onComplete(json){
			screenInfo.screenInfo.id = json.data.screenId;
			screenInfo.drawInfo[0].id = json.data.layoutId;
			screenInfo.drawInfo[0].screens[0].id = json.data.winId;
			$at.screenInfo = screenInfo;
			$at.allInfo.push($at.screenInfo);
			ReactDOM.render(<MenuList/>,setScreenDom.screenList);
			initPart1(Dom);
			$("#screenList ul li").removeClass("selected");
			$("#screenList ul li").last().addClass("selected"); 
		}	
	})
	function initPart1(Dom){
		Dom.layShow.hide();
		Dom.layChange.hide();
		$("#addPart1").css({"left":"0"});
		$("#addPart2").css({"left":"100%"});
		$("#addPart3").css({"left":"100%"});
		PartChange(0);
		var name = $at.screenInfo.screenInfo.title;
		var row = $at.screenInfo.screenInfo.row; 
		var col = $at.screenInfo.screenInfo.col; 
		var wid = $at.screenInfo.screenInfo.wid; 
		var hei = $at.screenInfo.screenInfo.hei; 
		$("#addPart1").html("");
		ReactDOM.render(<Part1 row={row} col={col} hei={hei} wid={wid}/>,view1Dom.inputGroup);
		$("#inputGroup .input").eq(0).find("input").val(name);
		$("#inputGroup .input").eq(1).find("input").val(row);
		$("#inputGroup .input").eq(2).find("input").val(wid);
		$("#inputGroup .input").eq(3).find("input").val(col);
		$("#inputGroup .input").eq(4).find("input").val(hei); 
		
		$("#btnPart1").on("click",".next",function(){
			soundBtn()
			$at.screenInfo.screenInfo.title = $("#inputGroup .input").eq(0).find("input").val();
			$at.screenInfo.screenInfo.row = $("#inputGroup .input").eq(1).find("input").val();
			$at.screenInfo.screenInfo.col = $("#inputGroup .input").eq(3).find("input").val(); 
			$at.screenInfo.screenInfo.wid = $("#inputGroup .input").eq(2).find("input").val(); 
			$at.screenInfo.screenInfo.hei = $("#inputGroup .input").eq(4).find("input").val();
			$Animate.complete($Animate.Part1Hide,$Animate.Part2Show);
			PartChange(1);
			initPart2(Dom);
		});
	}
	function initPart2(Dom){
		$("#addPart2").html("");
		ReactDOM.render(<Part2/>,view2Dom.addPart2);
		var host = $("#addPart2 ul li"); 
		for (var i=0;i<$at.screenInfo.screenInfo.host.length;i++) {
			for (var j=0;j<host.length;j++) {
				if(host.eq(j).find("span").eq(3).html() == $at.screenInfo.screenInfo.host[i].id){
					host.eq(j).addClass("selected");
				}
			}
		}
		$("#btnPart2").find(".pre").on("click",function(){
			soundBtn()
			$Animate.complete($Animate.Part2Hide1,$Animate.Part1Show);
			PartChange(0);
		});
		$("#btnPart2").find(".next").on("click",function(){
			soundBtn()
			var selected = $("#addPart2 ul .selected");
			var deviceList = []
			for (var i=0;i<selected.length;i++) {
				var obj={
					name : selected.eq(i).find("p").eq(0).html(),
					macAddress : selected.eq(i).find("span").eq(0).html(),
					daemonId : selected.eq(i).find("span").eq(1).html(),
					remark : selected.eq(i).find("span").eq(2).html(),
					deviceId : selected.eq(i).find("span").eq(3).html()
				} 
				deviceList.push(obj);
			}
			if(deviceList.length==0){
				alert("你还没有选择设备")
			}else{
				$Animate.complete($Animate.Part2Hide2,$Animate.Part3Show);
				PartChange(2);
				initPart3(Dom,deviceList);
			}
		});
		$("#addPart2").find("ul").on("click",function(e){
			soundBtn()
			var event = e || window.event;
			var dom = event.target || event.srcElement;
			dom = dom.parentNode.parentNode;
			if(dom.tagName.toLowerCase() == "li"){
				if(dom.getAttribute("class") == "selected"){ 
					dom.setAttribute("class", "");
				}else{
					dom.setAttribute("class", "selected");
				}	
			}
		});
	}
	function initPart3(Dom,deviceList){
		$("#addPart3").html("");
		var row = $at.screenInfo.screenInfo.row;
		var col = $at.screenInfo.screenInfo.col;
		var hei = $at.screenInfo.screenInfo.hei;
		var wid = $at.screenInfo.screenInfo.wid;
		ReactDOM.render(<Part3 arr={deviceList} row={row} col={col} hei={hei} wid={wid}/>,view3Dom.addPart3); 
		drawController(Dom); 
		$("#addPart3").find(".pre").on("click",function(){
			soundBtn()
			$Animate.complete($Animate.Part3Hide,$Animate.Part2Show);
			PartChange(1)
		});
		$("#addPart3").find(".next").on("click",function(){
			soundBtn()
			changeSrceen();
			$Animate.LayoutShow();
		});
		function changeSrceen(){
			var host = addHost();
			$at.screenInfo.screenInfo.host = host;
			var data1 = {data:JSON.stringify($at.screenInfo)}
			$.post($at.url+"/interfaces/screenInfo/changeScreen", data1,onComplete);
			function onComplete(json){
				ReactDOM.render(<Part5 info={$at.screenInfo}/>,view5Dom.layoutShow);
				ReactDOM.render(<Part4 info={$at.screenInfo} softWare={$at.softWare}/>,view4Dom.layout);
				ReactDOM.render(<MenuList/>,setScreenDom.screenList);
				bindController();
			}
		}
		function addHost(){
			var deviceList = $("#entryList ul li");
			var hostlist = $("#screenPlan ul li");
			var host=[]; 
			for (var i=0;i<deviceList.length;i++) {
				var obj={
					deviceId : deviceList.eq(i).find("span").eq(3).html(),
					id : "222"
				}
				var describe=[];
				for (var j=0;j<hostlist.length;j++) {
					if(hostlist.eq(j).find("span").eq(3).html() == obj.deviceId){
						describe.push(j);
					}
				}
				var describeJson = describe.join(",");
				obj.describeJson=describeJson;
				host.push(obj)
			}
			return host;
		}
	}
	function PartChange(index){
		var title = ["新建虚拟桌面","选择主机","分配屏幕"]
		$("#levNum li").removeClass("selected");
		$("#levNum li").eq(index).addClass("selected"); 
		$("#pageTitle h1").html(title[index]);
	}
}
function setScreen(Dom,data){
	var LevTitleArr = ["新建虚拟桌面","选择主机","分配屏幕"];
	ReactDOM.render(<Menu imgSrc = "assets/img/logo.png" name = "ZOOLON"/> , setScreenDom.userInfo);
	ReactDOM.render(<MenuList/>,setScreenDom.screenList);
	ReactDOM.render(<LevTitle arr={LevTitleArr}/>,setScreenDom.levNum); 
	ReactDOM.render(<PageTitle title = "新建屏幕" />,setScreenDom.pageTitle);
	$("#screenList").on("click","li",function(){
		soundBtn()
		$("#screenList").find("li").removeClass("selected");
		$("#screenList li img").hide();
		$(this).addClass("selected");
		Dom.layShow.show();
		Dom.layChange.hide(); 
		$at.menuIndex = $("#screenList").find("li").index($(this));
		$at.screenInfo = $at.allInfo[$at.menuIndex];
		selectedMenu(Dom);
	})
	$("#smallMenu").on("click",function(){ 
		soundBtn()
		$("#smallMenu").toggleClass("selected");
		if($(this).attr("class") == "selected"){
			$(this).attr({"src":"assets/img/smallMenu1.png"})
			$("#menu").animate({left : "-260px"})
			$("#layoutShow,#layout,#setScreen").animate({left : "0px"})
			$("#wrap #addScreen #setScreen").css({"padding-right":"0"}) 
		}else{
			$(this).attr({"src":"assets/img/smallMenu.png"})
			$("#menu").animate({left : "0px"})
			$("#layoutShow,#layout,#setScreen").animate({left : "260px"})
			$("#wrap #addScreen #setScreen").css({"padding-right":"260px"})
		}
		
	})
	$("#entryMenu").on("click",function(){
		$("#btnGroup").fadeToggle();
	})
}
function soundBtn(){
	$at.mp3.play();
}
function selectedMenu(Dom){
	$("#layoutShow").html("");
	$("#layout").html("");
	layShowController(Dom);
	layChangeController(Dom); 
	$(".layoutContent .fun").eq(0).addClass("selected");
}

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
							return <li key={index} title={result.screenInfo.title} className="selected">{result.screenInfo.title}<img src="assets/img/close.png"/></li>
						}else{
							return <li key = {index} title = {result.screenInfo.title}>{result.screenInfo.title}<img src="assets/img/close.png"/></li>
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

