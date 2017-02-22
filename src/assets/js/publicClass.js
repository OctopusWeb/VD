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
