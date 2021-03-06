function setScreen(Dom,data){
	var LevTitleArr = ["新建虚拟桌面","选择主机","分配屏幕"];
	ReactDOM.render(<Menu imgSrc = "assets/img/logo.png" name = "ZOOLON"/> , setScreenDom.userInfo);
	ReactDOM.render(<MenuList/>,setScreenDom.screenList);
	ReactDOM.render(<LevTitle arr={LevTitleArr}/>,setScreenDom.levNum); 
	ReactDOM.render(<PageTitle title = "新建屏幕" />,setScreenDom.pageTitle);
	$("#screenList").on("click","li",function(){//项目列表切换
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
	$("#smallMenu").on("click",function(){//左侧导航伸缩
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
	var btnInterval;
	$("#entryMenu").on("click",function(){//右上角软硬件界面伸缩
		soundBtn()
		clearTimeout(btnInterval);
		$("#btnGroup").fadeToggle();
		$("#entryHard").fadeOut();
		$("#entrySoftware").fadeOut();
		btnInterval = setTimeout(function(){
			$("#btnGroup").fadeOut();
		},2000)
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
