var $at = {}; 
$at.getJson = function(url,data,onComplete){
	$.getJSON(url,data,function(data){
		onComplete(data) 
	})
}
$at.GetDomId = function(name){
	var dom = document.getElementById(name);
	return dom
}
$at.staticColors = [ 
	"#265497",
	"#1e87b5",
	"#b7ab64",
	"#bf721c",
	"#c93e3e",
	"#b5b5b5"
];
$at.LevTitleArr = ["新建虚拟桌面","选择主机","分配屏幕"];
$at.staicUrl = "http://localhost:3000/";

