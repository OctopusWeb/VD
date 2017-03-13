function entryController(Dom){
	var entryArr =[["ppt1","PPT"],["pdf1","PDF"],["flash1","FLASH"],["web1","WEB"],["zoolonweb1","ZoolonWEB"],["video1","Video"]]
	var entryName = ["展项名称","展项类型","资源URL","总控命令地址"]
	var entryList = [
		{
		"name":"PPT",
		"img":"ppt1",
		"arr":[["AAAA","macaddrass","备注","111"],["AAAA","macaddrass","备注","111"]]
		},
		{
		"name":"PDF",
		"img":"pdf1",
		"arr":[["AAAA","macaddrass","备注","111"],["AAAA","macaddrass","备注","111"]]
		},
		{
		"name":"FLASH",
		"img":"flash1",
		"arr":[["AAAA","macaddrass","备注","111"],["AAAA","macaddrass","备注","111"]]
		},
		{
		"name":"WEB",
		"img":"web1",
		"arr":[["AAAA","macaddrass","备注","111"],["AAAA","macaddrass","备注","111"]]
		},
		{
		"name":"ZoolonWEB",
		"img":"zoolonweb1",
		"arr":[["AAAA","macaddrass","备注","111"],["AAAA","macaddrass","备注","111"]]
		},
		{
		"name":"Video",
		"img":"video1",
		"arr":[]  
		}
	]
	
	var softArr = [["shebei1","PC"]];
	var softName = ["设备名称","mac地址","daemonld","备注"];
	var softList = [];
	$at.getJson("../entryDevice.json","",onCompleteSoft);
	function onCompleteSoft(json){
		for (var i=0;i<softArr.length;i++) {
			var obj={};
			obj.name=softArr[i][1];
			obj.img=softArr[i][0];
			obj.arr=[];
			for (var j=0;j<json.data.length;j++) {
				var info=json.data[j];
				var infoArr=[info.name,info.macAddress,info.remark,info.deviceId];
				obj.arr.push(infoArr)
			}
		}
		softList.push(obj);
		ReactDOM.render(<EntrySoft arr={softArr}  list={softList}  name={softName}/>,document.getElementById("entrySoftware"));
		$("#entrySoftware .chooseList").on("click","li",function(){
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
		});
		$("#entrySoftware .entryList").on("click","li",function(){
			$(".entryList").find("li").removeClass("selected");
			$(".chooseList").find("li").removeClass("selected");
			$(this).addClass("selected"); 
			$("#entryHard input").eq(0).val("");
			$("#entrySoftware input").eq(0).val("");
		})
		$("#softAdd").on("click",function(){
			var name = $("#entrySoftware input").eq(0).val();
			name = name==""?"未定义":name;
			var info0 = $("#entrySoftware input").eq(1).val();
			info0 = info0==""?"未定义":info0;
			var info1 = $("#entrySoftware input").eq(2).val();
			info1 = info1==""?"未定义":info1;
			var info2 = $("#entrySoftware input").eq(3).val();
			info2 = info2==""?"未定义":info2;
			var type = $(".entryList .selected").find("h3").html();
			for (var i=0;i<softList.length;i++) {
				if(type == softList[i].name){
					softList[i].arr.push([name,info0,info1,info2]);
				}
			}
			ReactDOM.render(<EntrySoft arr={softArr}  list={softList}  name={softName}/>,document.getElementById("entrySoftware"));
			$("#entrySoftware input").eq(0).val("");
		})
	}

	ReactDOM.render(<EntryHard arr={entryArr} list={entryList} name={entryName}/>,document.getElementById("entryHard"));
	
	Dom.entrySlected.find("li").hover(function(){
		$(this).addClass("selected");
	},function(){
		$(this).removeClass("selected");
	})
	
	Dom.entrySlected.on("click","li",function(){ 
		var index = Dom.entrySlected.find("li").index($(this));
		var selected = Dom.screenPlan.find(".selected");
		var value = $(this).find("p").html();
		selected.css({"background":$at.staticColors[index]});
		selected.find("p").html(value)
		Dom.entrySlected.hide();
	}) 
	$("#entryAdd").on("click",function(){
		var name = $("#entryHard input").eq(0).val();
		name = name==""?"未定义":name;
		var info0 = $("#entryHard input").eq(1).val();
		info0 = info0==""?"未定义":info0;
		var info1 = $("#entryHard input").eq(2).val();
		info1 = info1==""?"未定义":info1;
		var info2 = $("#entryHard input").eq(3).val();
		info2 = info2==""?"未定义":info2;
		var type = $(".entryList .selected").find("h3").html();
		for (var i=0;i<entryList.length;i++) {
			if(type == entryList[i].name){
				entryList[i].arr.push([name,info0,info1,info2]);
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
		var info0 = $(this).find("p").eq(0).html();
		var info1 = $(this).find("p").eq(1).html();
		var info2 = $(this).find("p").eq(2).html();
		$("#entryHard input").eq(0).val(name);
		$("#entryHard input").eq(1).val(info0);
		$("#entryHard input").eq(2).val(info1);
		$("#entryHard input").eq(3).val(info2);
	}) 
}

function ParseSoft(json){ 
	console.log(json)
	var data=[];
	var type=["video","ppt","pdf","flash","web","zoolonweb"]
	for (var i=0;i<type.length;i++) {
		var timeData=[]
		for (var j=0;j<json.length;j++) {
			if(type[i]==json[j].typeCode){
				timeData.push(json[j].name);
			}
		}
		data.push(timeData);
	}
	return data;
} 