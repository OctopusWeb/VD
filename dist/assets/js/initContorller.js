$(function(){var e={btnPart1:$("#btnPart1"),levNumLi:$("#levNum li"),pageTitle:$("#pageTitle h1"),btnPart2:$("#btnPart2"),drawArea:$("#drawArea"),drawBox:$("#drawBox"),screenLi:$("#addPart3 ul li"),entrySlected:$("#entrySlected"),screenPlan:$("#screenPlan ul"),addPart2:$("#addPart2"),btnPart3:$("#btnPart3")};document.body.onselectstart=document.body.oncontextmenu=function(){return!1},e.btnPart1.find(".next").on("click",function(){$Animate.complete($Animate.Part1Hide,$Animate.Part2Show),e.levNumLi.removeClass("selected"),e.levNumLi.eq(1).addClass("selected"),e.pageTitle.html("选择主机")}),e.btnPart2.find(".pre").on("click",function(){$Animate.complete($Animate.Part2Hide1,$Animate.Part1Show),e.levNumLi.removeClass("selected"),e.levNumLi.eq(0).addClass("selected"),e.pageTitle.html("新建虚拟桌面")}),e.btnPart2.find(".next").on("click",function(){$Animate.complete($Animate.Part2Hide2,$Animate.Part3Show),e.levNumLi.removeClass("selected"),e.levNumLi.eq(2).addClass("selected"),e.pageTitle.html("分配屏幕")}),e.btnPart3.find(".pre").on("click",function(){$Animate.complete($Animate.Part3Hide,$Animate.Part2Show),e.levNumLi.removeClass("selected"),e.levNumLi.eq(1).addClass("selected"),e.pageTitle.html("分配屏幕")}),e.btnPart3.find(".next").on("click",function(){}),e.addPart2.find("ul").on("click",function(e){var t=e||window.event,n=t.target||t.srcElement;n=n.parentNode.parentNode,"li"==n.tagName.toLowerCase()&&("selected"==n.getAttribute("class")?n.setAttribute("class",""):n.setAttribute("class","selected"))}),e.entrySlected.find("li").hover(function(){$(this).addClass("selected")},function(){$(this).removeClass("selected")}),e.entrySlected.find("li").on("click",function(){var t=e.entrySlected.find("li").index($(this)),n=e.screenPlan.find(".selected"),a=$(this).find("p").html();n.css({background:$at.staticColors[t]}),n.find("p").html(a),e.entrySlected.hide()}),drawController(e)});
//# sourceMappingURL=maps/initContorller.js.map
