var $at = {}; 
$at.url="http://localhost:3000";
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
$at.allInfo={};
$at.screenInfo={};
$at.softWare={};
$at.entryHard={};
$at.menuIndex=0;
$at.staicUrl = "http://localhost:3000/";
$at.socketUrl = 'ws://192.168.0.196:1234';

