function initSoft(Dom){
	var softArr =[["ppt1","PPT"],["pdf1","PDF"],["flash1","FLASH"],["web1","WEB"],["zoolonweb1","ZoolonWEB"],["video1","Video"]]
	var softName = ["展项名称","展项类型","资源URL","总控命令地址"]
	ReactDOM.render(<EntryHard arr={softArr} list={$at.softWare} name={softName}/>,document.getElementById("entryHard")); 
	
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
		for (var i=0;i<$at.softWare.length;i++) {
			if(type == $at.softWare[i].name){
				$at.softWare[i].arr.push([name,info0,info1,info2]); 
			}
		}
		console.log($at.softWare);
		ReactDOM.render(<EntryHard arr={softArr} list={$at.softWare} name={softName}/>,document.getElementById("entryHard")); 
		$("#entryHard input").eq(0).val("");
	})
	$("#entryHard .entryList").on("click","li",function(){
		$(".entryList").find("li").removeClass("selected");
		$(".chooseList").find("li").removeClass("selected");
		$(this).addClass("selected"); 
		$("#entryHard input").eq(0).val("");
		$("#entrySoftware input").eq(0).val("");
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
function initHard(Dom){
	var hardArr = [["shebei1","PC"]];
	var hardName = ["设备名称","mac地址","daemonld","备注"];
	ReactDOM.render(<EntrySoft arr={hardArr}  list={$at.entryHard}  name={hardName}/>,document.getElementById("entrySoftware"));
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
		for (var i=0;i<$at.entryHard.length;i++) {
			$at.entryHard[i].arr.push([name,info0,info1,info2]); 
		} 
		console.log($at.entryHard);
		ReactDOM.render(<EntrySoft arr={hardArr}  list={$at.entryHard}  name={hardName}/>,document.getElementById("entrySoftware"));
		$("#entrySoftware input").eq(0).val("");
	})
}
function ParseSoft(json){
	var softArr =[["ppt1","PPT"],["pdf1","PDF"],["flash1","FLASH"],["web1","WEB"],["zoolonweb1","ZoolonWEB"],["video1","Video"]]
	var softList=[];
	for (var i=0;i<softArr.length;i++) {
		var obj={};
		obj.name=softArr[i][1];
		obj.img=softArr[i][0];
		obj.arr=[];
		for (var j=0;j<json.length;j++) { 
			if(json[j].typeCode.toUpperCase() == softArr[i][1]){ 
				var info=json[j];
				var infoArr=[info.name,info.typeCode,info.path,info.contentId]; 
				obj.arr.push(infoArr)
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
			var infoArr=[info.name,info.macAddress,info.remark,info.deviceId];
			obj.arr.push(infoArr)
		}
	}
	hardList.push(obj);
	return hardList;
}

