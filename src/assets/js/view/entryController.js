function entryController(Dom){
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
	Dom.entrySlected.find("li").hover(function(){
		$(this).addClass("selected");
	},function(){
		$(this).removeClass("selected");
	})
	
	Dom.entrySlected.find("li").on("click",function(){
		var index = Dom.entrySlected.find("li").index($(this));
		var selected = Dom.screenPlan.find(".selected");
		var value = $(this).find("p").html();
		selected.css({"background":$at.staticColors[index]});
		selected.find("p").html(value)
		Dom.entrySlected.hide();
	})
	
	Dom.btnGroup.find(".btn").eq(0).on("click",function(){
		Dom.entryHard.slideToggle(); 
		Dom.entrySoft.slideUp(); 
	})
	Dom.btnGroup.find(".btn").eq(1).on("click",function(){
		Dom.entrySoft.slideToggle(); 
		Dom.entryHard.slideUp();
	})
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