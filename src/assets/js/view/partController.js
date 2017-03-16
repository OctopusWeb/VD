function partController(Dom){ 
	Dom.addBtnGroup.find(".btn").eq(1).on("click",function(){ 
		initPart1(Dom);
	})
	Dom.addBtnGroup.find(".btn").eq(0).on("click",function(){
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
			$Animate.complete($Animate.Part2Hide1,$Animate.Part1Show);
			PartChange(0);
		});
		$("#btnPart2").find(".next").on("click",function(){
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
		var nums = $at.screenInfo.screenInfo.row*$at.screenInfo.screenInfo.col;
		ReactDOM.render(<Part3 arr={deviceList} num={nums}/>,view3Dom.addPart3); 
		drawController(Dom); 
		$("#addPart3").find(".pre").on("click",function(){
			$Animate.complete($Animate.Part3Hide,$Animate.Part2Show);
			PartChange(1)
		});
		$("#addPart3").find(".next").on("click",function(){
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