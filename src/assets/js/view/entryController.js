function initSoft(Dom){
	var softArr =[["ppt1","PPT"],["pdf1","PDF"],["flash1","FLASH"],["web1","WEB"],["zoolonweb1","ZoolonWEB"],["video1","Video"]]
	var softName = ["展项名称","展项类型","资源URL","总控命令地址"]
	ReactDOM.render(<EntryHard arr={softArr} list={$at.softWare} name={softName}/>,document.getElementById("entryHard")); 
	$(".ulList").on("click","p",function(){
		$(this).parent().toggleClass("selected");
		$(this).parent().find("li").slideToggle(); 
	})
	 
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
			var type = $(".entryList .selected").find("h3").text();
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
			var name1 = "."+info0.toUpperCase();
			$(name1).find("li").show();
			$.post($at.url+"/interfaces/entryPost/content", data,onComplete); 
			function onComplete(json){
				$at.softWare[num].arr.push([name,info0,info1,json.data.contentId,info2]);
				ReactDOM.render(<EntryHard arr={softArr} list={$at.softWare} name={softName}/>,document.getElementById("entryHard")); 
				ReactDOM.render(<InfoBox4 softWare={$at.softWare}/>,document.getElementById("infoBox4"));
				$("#screenList").find(".selected").trigger("click");
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
		var contentId = $(".chooseList .selected p").eq(2).text();
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
				$("#screenList").find(".selected").trigger("click");
			}
		}
	})
	$("#entryHard .entryList").on("click","li",function(){
		soundBtn()
		$(".entryList").find("li").removeClass("selected");
		$(".chooseList").find("li").removeClass("selected");
		$(this).addClass("selected"); 
		var type = $(this).find("h3").text()
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
		var name = $(this).find("h3").text();
		var info0 = $(this).find("p").eq(0).text();
		var info1 = $(this).find("p").eq(1).text();
		var info2 = $(this).find("p").eq(3).text();
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
		var name = $(this).find("h3").text();
		var info0 = $(this).find("p").eq(0).text();
		var info1 = $(this).find("p").eq(1).text();
		var info2 = $(this).find("p").eq(2).text();
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
		soundBtn();
		var name = $("#entrySoftware input").eq(0).val();
		var info0 = $("#entrySoftware input").eq(1).val();
		var info1 = $("#entrySoftware input").eq(2).val();
		var info2 = $("#entrySoftware input").eq(3).val();
		var deviceId = $(".chooseList .selected p").eq(3).text();
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
				$(".changeBtn").hide();
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

