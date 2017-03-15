function partController(Dom){ 
	Dom.addBtnGroup.find(".btn").eq(1).on("click",function(){ 
		initPart1(Dom);
		$("#btnPart1").on("click",".next",function(){ 
			$Animate.complete($Animate.Part1Hide,$Animate.Part2Show);
			PartChange(1); 
			initPart2(Dom);
		});
	})
	Dom.addBtnGroup.find(".btn").eq(0).on("click",function(){
		var screenInfo={
			screenInfo:{title:"未命名",col:4,row:2,wid:1920,hei:1080,id:"s2 "}, 
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
						items:['[{"contentId":"c96ba3008d1e4226b826a1c49887aae7","controlType":"PPT","controlUrl":"","fileId":"","fromResourceCenter":"-1","ifStandardControl":"","name":"大修厂-总体","orderScript":"","path":"","spaceId":"66f060fda8eb4534b563819e18e1f34b","time":0,"typeCode":"t_content_00005","volume":50,"icon":"assets/images/icons-128/软件/Flash.png","selected":true},{"contentId":"fd76ad7be13c44f9a81bda53021b66b3","controlType":"WEB","controlUrl":"","fileId":"","fromResourceCenter":"-1","ifStandardControl":"","name":"大修厂-仓库","orderScript":"","path":"","spaceId":"66f060fda8eb4534b563819e18e1f34b","time":0,"typeCode":"t_content_00005","volume":50,"icon":"assets/images/icons-128/软件/Flash.png","selected":false},{"contentId":"a9adbcce9eec4db0b1731ff76704c028","controlType":"FLASH","controlUrl":"","fileId":"","fromResourceCenter":"-1","ifStandardControl":"","name":"大修厂-库房","orderScript":"","path":"","spaceId":"66f060fda8eb4534b563819e18e1f34b","time":0,"typeCode":"t_content_00005","volume":50,"icon":"assets/images/icons-128/软件/Flash.png","selected":false},{"contentId":"bdc851235c364ab8bc65ddda3c13596d","controlType":"PDF","controlUrl":"","fileId":"","fromResourceCenter":"-1","ifStandardControl":"","name":"大修厂-维修","orderScript":"","path":"","spaceId":"66f060fda8eb4534b563819e18e1f34b","time":0,"typeCode":"t_content_00005","volume":50,"icon":"assets/images/icons-128/软件/Flash.png","selected":false}]'] 
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
			$("#btnPart1").on("click",".next",function(){ 
				$Animate.complete($Animate.Part1Hide,$Animate.Part2Show);
				PartChange(1); 
				initPart2(Dom);
			});
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
	}
	function initPart2(Dom){
		$("#addPart2").html("");
		ReactDOM.render(<Part2/>,view2Dom.addPart2);
		$("#btnPart2").find(".pre").on("click",function(){
			$Animate.complete($Animate.Part2Hide1,$Animate.Part1Show);
			PartChange(0);
		});
		$("#btnPart2").find(".next").on("click",function(){
			$Animate.complete($Animate.Part2Hide2,$Animate.Part3Show);
			PartChange(2);
			initPart3(Dom);
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
	function initPart3(Dom){
		$("#addPart3").html("");
		ReactDOM.render(<Part3 arr={$at.entryHard}/>,view3Dom.addPart3); 
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
			var data1 = {data:JSON.stringify($at.screenInfo)}
			$.post($at.url+"/interfaces/screenInfo/ChangeScreen", data1,onComplete);
			function onComplete(json){
				ReactDOM.render(<MenuList/>,setScreenDom.screenList);
			}	
		}
	}
	function PartChange(index){
		var title = ["新建虚拟桌面","选择主机","分配屏幕"]
		$("#levNum li").removeClass("selected");
		$("#levNum li").eq(index).addClass("selected"); 
		$("#pageTitle h1").html(title[index]); 
	}
}