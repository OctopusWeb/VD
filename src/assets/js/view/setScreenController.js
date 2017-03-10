function setScreen(Dom,data){
	var obj=[];
	for (var i=0;i<data.length;i++) {
		obj.push(data[i].screenInfo.title);
	}
	var LevTitleArr = ["新建虚拟桌面","选择主机","分配屏幕"];
	ReactDOM.render(<Menu imgSrc = "assets/img/logo.png" name = "HU"/> , setScreenDom.userInfo);
	ReactDOM.render(<MenuList obj={obj}/>,setScreenDom.screenList);
	ReactDOM.render(<LevTitle arr={LevTitleArr}/>,setScreenDom.levNum); 
	ReactDOM.render(<PageTitle title = "新建屏幕" />,setScreenDom.pageTitle);
	$("#screenList").on("click","li",function(){
		$("#screenList").find("li").removeClass("selected");
		$(this).addClass("selected"); 
		$at.menuIndex = $("#screenList").find("li").index($(this));
		$at.screenInfo = $at.allInfo[$at.menuIndex];
		selectedMenu(Dom);
	})
}
function selectedMenu(Dom){
	$("#layoutShow").html("");
	$("#layout").html("");
	layShowController(Dom);
	layChangeController(Dom); 
}
