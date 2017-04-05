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
$at.allInfo={};
$at.screenInfo={};
$at.softWare={};
$at.entryHard={};
$at.menuIndex=0;
$at.mp3 = document.getElementById("mp3");
$at.url="http://192.168.0.179:3000";
$at.staicUrl = "http://192.168.0.179:3000/";
$at.socketUrl = 'ws://192.168.0.253:1234';
var videoInterval;

