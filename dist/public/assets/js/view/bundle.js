(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var view1Dom = {
	inputGroup: $at.GetDomId("addPart1"),
	screenShow: $at.GetDomId("screenShow")
};
var InputName = ["新建名称", "屏幕行数", "屏幕宽度", "屏幕列数", "屏幕高度"];
var Part1 = React.createClass({
	displayName: "Part1",

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(InputGroup, { rowChange: this.handlerRow, row: this.props.row, col: this.props.col, hei: this.props.hei, wid: this.props.wid }),
			React.createElement(ScreenShow, { row: this.state.row, col: this.state.col, wid: this.state.wid, hei: this.state.hei })
		);
	},
	getInitialState: function getInitialState() {
		return {
			row: this.props.row,
			col: this.props.col,
			wid: this.props.wid,
			hei: this.props.hei
		};
	},
	handlerRow: function handlerRow(row1, col1, wid1, hei1) {
		this.setState({ row: row1, col: col1, wid: wid1, hei: hei1 });
	}
});

var InputGroup = React.createClass({
	displayName: "InputGroup",

	getInitialState: function getInitialState() {
		return {
			row: this.props.row,
			col: this.props.col,
			wid: this.props.wid,
			hei: this.props.hei
		};
	},
	handlerChange: function handlerChange(event) {
		if (event.target.name == InputName[1]) {
			this.setState({ row: event.target.value });
			this.props.rowChange(event.target.value, this.state.col, this.state.wid, this.state.hei);
		} else if (event.target.name == InputName[2]) {
			this.setState({ wid: event.target.value });
			this.props.rowChange(this.state.row, this.state.col, event.target.value, this.state.hei);
		} else if (event.target.name == InputName[3]) {
			this.setState({ col: event.target.value });
			this.props.rowChange(this.state.row, event.target.value, this.state.wid, this.state.hei);
		} else if (event.target.name == InputName[4]) {
			this.setState({ hei: event.target.value });
			this.props.rowChange(this.state.row, this.state.col, this.state.wid, event.target.value);
		}
	},
	render: function render() {
		var self = this;
		return React.createElement(
			"div",
			{ id: "inputGroup" },
			InputName.map(function (result, index) {
				return React.createElement(
					"div",
					{ key: index, className: "input" },
					React.createElement(
						"p",
						null,
						result
					),
					React.createElement("input", { type: "text", onChange: self.handlerChange, placeholder: result, name: result })
				);
			})
		);
	}
});
var ScreenShow = React.createClass({
	displayName: "ScreenShow",

	render: function render() {
		var b = [];
		var row = this.props.row;
		var col = this.props.col;
		var bil = this.props.hei / this.props.wid;
		var wid = 100 / col + "%";
		var hei = bil * 100 / col + "%";
		for (var i = 0; i < row * col; i++) {
			b.push(i);
		}
		return React.createElement(
			"div",
			{ id: "screenShow" },
			React.createElement(
				"ul",
				null,
				b.map(function (result, index) {
					return React.createElement("li", { key: index + 1, style: { width: wid, paddingBottom: hei } });
				}),
				React.createElement(BtnPart1, null)
			)
		);
	}
});
var BtnPart1 = React.createClass({
	displayName: "BtnPart1",

	render: function render() {
		return React.createElement(
			"div",
			{ id: "btnPart1" },
			React.createElement(
				"div",
				{ className: "btn next" },
				"\u4E0B\u4E00\u6B65"
			)
		);
	}
});

var view2Dom = {
	addPart2: $at.GetDomId("addPart2")
};
var facilityList = ["PC8189", "PC8189", "PC8189", "PC8189", "PC8189", "PC8189", "PC8189", "PC8189", "PC8189"];

var Part2 = React.createClass({
	displayName: "Part2",

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(FacilityList, null)
		);
	}
});
var FacilityList = React.createClass({
	displayName: "FacilityList",

	render: function render() {
		return React.createElement(
			"ul",
			null,
			$at.entryHard[0].arr.map(function (result, index) {
				return React.createElement(
					"li",
					{ key: index },
					React.createElement(
						"div",
						null,
						React.createElement("img", { src: "assets/img/facility.png" })
					),
					React.createElement(
						"p",
						null,
						result[0]
					),
					React.createElement(
						"span",
						null,
						result[1]
					),
					React.createElement(
						"span",
						null,
						result[2]
					),
					React.createElement(
						"span",
						null,
						result[3]
					),
					React.createElement(
						"span",
						null,
						result[4]
					)
				);
			}),
			React.createElement(BtnPart2, null)
		);
	}
});
var BtnPart2 = React.createClass({
	displayName: "BtnPart2",

	render: function render() {
		return React.createElement(
			"div",
			{ id: "btnPart2" },
			React.createElement(
				"div",
				{ className: "btn pre" },
				"\u4E0A\u4E00\u6B65"
			),
			React.createElement(
				"div",
				{ className: "btn next" },
				"\u4E0B\u4E00\u6B65"
			)
		);
	}
});

var view3Dom = {
	addPart3: $at.GetDomId("addPart3")
};

var Part3 = React.createClass({
	displayName: "Part3",

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(ScreenPlan, { num: this.props.num }),
			React.createElement(EntrySlected, { arr: this.props.arr }),
			React.createElement(EntryList1, { arr: this.props.arr }),
			React.createElement(BtnPart3, null)
		);
	}
});
var ScreenPlan = React.createClass({
	displayName: "ScreenPlan",

	render: function render() {
		var arr = [];
		var num = this.props.num;
		for (var i = 0; i < num; i++) {
			arr.push(i);
		}
		return React.createElement(
			"div",
			{ id: "screenPlan" },
			React.createElement(
				"ul",
				null,
				arr.map(function (result, index) {
					return React.createElement(
						"li",
						{ key: index },
						React.createElement("img", { src: "assets/img/facility1.png" }),
						React.createElement(
							"p",
							null,
							"\u7A7A"
						),
						React.createElement("span", { className: "span1" }),
						React.createElement("span", { className: "span2" }),
						React.createElement("span", { className: "span3" }),
						React.createElement("span", { className: "span4" })
					);
				})
			),
			React.createElement(DrawArea, null)
		);
	}
});

var DrawArea = React.createClass({
	displayName: "DrawArea",

	render: function render() {
		return React.createElement(
			"div",
			{ id: "drawArea" },
			React.createElement("div", { id: "drawBox" })
		);
	}
});
var EntrySlected = React.createClass({
	displayName: "EntrySlected",

	render: function render() {
		var facilityList = this.props.arr;
		return React.createElement(
			"div",
			{ id: "entrySlected" },
			React.createElement(
				"ul",
				null,
				facilityList.map(function (result, index) {
					var colorStyle = {
						border: "1px solid " + $at.staticColors[index]
					};
					return React.createElement(
						"li",
						{ key: index },
						React.createElement("img", { src: "assets/img/facility.png", style: colorStyle }),
						React.createElement(
							"p",
							null,
							result.name
						),
						React.createElement(
							"span",
							null,
							result.macAddress
						),
						React.createElement(
							"span",
							null,
							result.daemonId
						),
						React.createElement(
							"span",
							null,
							result.remark
						),
						React.createElement(
							"span",
							null,
							result.deviceId
						)
					);
				})
			)
		);
	}
});
var EntryList1 = React.createClass({
	displayName: "EntryList1",

	render: function render() {
		var facilityList = this.props.arr;
		return React.createElement(
			"div",
			{ id: "entryList" },
			React.createElement(
				"ul",
				null,
				facilityList.map(function (result, index) {
					var colorStyle = {
						border: "2px solid " + $at.staticColors[index]
					};
					return React.createElement(
						"li",
						{ key: index },
						React.createElement("img", { src: "assets/img/facility.png", style: colorStyle }),
						React.createElement(
							"p",
							null,
							result.name
						),
						React.createElement(
							"span",
							null,
							result.macAddress
						),
						React.createElement(
							"span",
							null,
							result.daemonId
						),
						React.createElement(
							"span",
							null,
							result.remark
						),
						React.createElement(
							"span",
							null,
							result.deviceId
						)
					);
				})
			)
		);
	}
});
var BtnPart3 = React.createClass({
	displayName: "BtnPart3",

	render: function render() {
		return React.createElement(
			"div",
			{ id: "btnPart3" },
			React.createElement(
				"div",
				{ className: "btn pre" },
				"\u4E0A\u4E00\u6B65"
			),
			React.createElement(
				"div",
				{ className: "btn next" },
				"\u5B8C\u6210"
			)
		);
	}
});

function initSoft(Dom) {
	var softArr = [["ppt1", "PPT"], ["pdf1", "PDF"], ["flash1", "FLASH"], ["web1", "WEB"], ["zoolonweb1", "ZoolonWEB"], ["video1", "Video"]];
	var softName = ["展项名称", "展项类型", "资源URL", "总控命令地址"];
	ReactDOM.render(React.createElement(EntryHard, { arr: softArr, list: $at.softWare, name: softName }), document.getElementById("entryHard"));

	$("#entryAdd").on("click", function () {
		var len = $(".entryList ul .selected").length;
		if (len == 0) {
			return;
		};
		var name = $("#entryHard input").eq(0).val();
		var info0 = $("#entryHard input").eq(1).val();
		var info1 = $("#entryHard input").eq(2).val();
		var info2 = $("#entryHard input").eq(3).val();
		if (name == "" || info0 == "" || info1 == "" || info2 == "") {
			alert("请在下方填写相关信息");
		} else {
			var onComplete = function onComplete(json) {
				$at.softWare[num].arr.push([name, info0, info1, json.data.contentId, info2]);
				ReactDOM.render(React.createElement(EntryHard, { arr: softArr, list: $at.softWare, name: softName }), document.getElementById("entryHard"));
			};

			var type = $(".entryList .selected").find("h3").html();
			var num;
			for (var i = 0; i < $at.softWare.length; i++) {
				if (type.toLowerCase() == $at.softWare[i].name.toLowerCase()) {
					num = i;
					var data = {
						contentId: "",
						name: name,
						path: info1,
						typeCode: info0,
						controlUrl: info2
					};
				}
			}
			$.post($at.url + "/interfaces/entryPost/content", data, onComplete);


			$("#entryHard input").eq(0).val("");
		}
	});
	$("#entryChange").on("click", function () {
		var name = $("#entryHard input").eq(0).val();
		var info0 = $("#entryHard input").eq(1).val();
		var info1 = $("#entryHard input").eq(2).val();
		var info2 = $("#entryHard input").eq(3).val();
		var contentId = $(".chooseList .selected p").eq(2).html();
		if (name == "" || info0 == "" || info1 == "" || info2 == "") {
			alert("请在下方填写相关信息");
			return;
		} else {
			var onComplete = function onComplete(json) {
				if (!json.state) {
					return;
				} else {
					$(".changeBtn").hide();
				}
				for (var i = 0; i < $at.softWare.length; i++) {
					var arr = $at.softWare[i].arr;
					for (var j = 0; j < arr.length; j++) {
						if ($at.softWare[i].arr[j][3] == contentId) {
							$at.softWare[i].arr[j] = [name, info0, info1, contentId, info2];
						}
					}
				}
				ReactDOM.render(React.createElement(EntryHard, { arr: softArr, list: $at.softWare, name: softName }), document.getElementById("entryHard"));
			};

			var data = {
				contentId: contentId,
				name: name,
				path: info1,
				typeCode: info0,
				controlUrl: info2
			};
			$.post($at.url + "/interfaces/entryChange/content", data, onComplete);
		}
	});
	$("#entryHard .entryList").on("click", "li", function () {
		$(".entryList").find("li").removeClass("selected");
		$(".chooseList").find("li").removeClass("selected");
		$(this).addClass("selected");
		var type = $(this).find("h3").html();
		$("#entryHard input").eq(0).val("");
		$("#entryHard input").eq(1).val(type);
		$("#entryHard input").eq(2).val("");
		$("#entryHard input").eq(3).val("");
		$(".changeBtn").hide();
	});
	$("#entryHard .chooseList").on("click", "li", function () {
		$(".entryList").find("li").removeClass("selected");
		$(".chooseList").find("li").removeClass("selected");
		$(this).addClass("selected");
		var type = $(this).parent().attr("class");
		var name = $(this).find("h3").html();
		var info0 = $(this).find("p").eq(0).html();
		var info1 = $(this).find("p").eq(1).html();
		var info2 = $(this).find("p").eq(3).html();
		$("#entryHard input").eq(0).val(name);
		$("#entryHard input").eq(1).val(info0);
		$("#entryHard input").eq(2).val(info1);
		$("#entryHard input").eq(3).val(info2);
		$(".changeBtn").show();
	});
}
function initHard(Dom) {
	var hardArr = [["shebei1", "PC"]];
	var hardName = ["设备名称", "mac地址", "daemonld", "备注"];
	ReactDOM.render(React.createElement(EntrySoft, { arr: hardArr, list: $at.entryHard, name: hardName }), document.getElementById("entrySoftware"));
	$("#entrySoftware .chooseList").on("click", "li", function () {
		$(".entryList").find("li").removeClass("selected");
		$(".chooseList").find("li").removeClass("selected");
		$(this).addClass("selected");
		var type = $(this).parent().attr("class");
		var name = $(this).find("h3").html();
		var info0 = $(this).find("p").eq(0).html();
		var info1 = $(this).find("p").eq(1).html();
		var info2 = $(this).find("p").eq(2).html();
		$("#entrySoftware input").eq(0).val(name);
		$("#entrySoftware input").eq(1).val(info0);
		$("#entrySoftware input").eq(2).val(info1);
		$("#entrySoftware input").eq(3).val(info2);
		$(".changeBtn").show();
	});
	$("#entrySoftware .entryList").on("click", "li", function () {
		$(".entryList").find("li").removeClass("selected");
		$(".chooseList").find("li").removeClass("selected");
		$(this).addClass("selected");
		$("#entrySoftware input").eq(0).val("");
		$("#entrySoftware input").eq(1).val("");
		$("#entrySoftware input").eq(2).val("");
		$("#entrySoftware input").eq(3).val("");
		$(".changeBtn").hide();
	});
	$("#softAdd").on("click", function () {
		var len = $(".entryList ul .selected").length;
		if (len == 0) {
			return;
		};
		var name = $("#entrySoftware input").eq(0).val();
		var info0 = $("#entrySoftware input").eq(1).val();
		var info1 = $("#entrySoftware input").eq(2).val();
		var info2 = $("#entrySoftware input").eq(3).val();
		if (name == "" || info0 == "" || info1 == "" || info2 == "") {
			alert("请在下方填写相关信息");
		} else {
			var onComplete = function onComplete(json) {
				$at.entryHard[num].arr.push([name, info0, info1, info2, json.data.deviceId]);
				ReactDOM.render(React.createElement(EntrySoft, { arr: hardArr, list: $at.entryHard, name: hardName }), document.getElementById("entrySoftware"));
			};

			var num;
			for (var i = 0; i < $at.entryHard.length; i++) {
				num = i;
				var data = {
					name: name,
					macAddress: info0,
					daemonId: info1,
					remark: info2
				};
			}
			$.post($at.url + "/interfaces/entryPost/device", data, onComplete);

			$("#entrySoftware input").eq(0).val("");
		}
	});
	$("#softChange").on("click", function () {
		var name = $("#entrySoftware input").eq(0).val();
		var info0 = $("#entrySoftware input").eq(1).val();
		var info1 = $("#entrySoftware input").eq(2).val();
		var info2 = $("#entrySoftware input").eq(3).val();
		var deviceId = $(".chooseList .selected p").eq(3).html();
		if (name == "" || info0 == "" || info1 == "" || info2 == "") {
			alert("请在下方填写相关信息");
			return;
		} else {
			var onComplete = function onComplete(json) {
				if (!json.state) {
					return;
				} else {
					$(".changeBtn").hide();
				}
				for (var i = 0; i < $at.entryHard.length; i++) {
					var arr = $at.entryHard[i].arr;
					for (var j = 0; j < arr.length; j++) {
						if ($at.entryHard[i].arr[j][4] == deviceId) {
							$at.entryHard[i].arr[j] = [name, info0, info1, info2, deviceId];
						}
					}
				}
				ReactDOM.render(React.createElement(EntrySoft, { arr: hardArr, list: $at.entryHard, name: hardName }), document.getElementById("entrySoftware"));
			};

			var data = {
				deviceId: deviceId,
				name: name,
				macAddress: info0,
				daemonId: info1,
				remark: info2
			};
			$.post($at.url + "/interfaces/entryChange/device", data, onComplete);
		}
	});
}
function ParseSoft(json) {
	var softArr = [["ppt1", "PPT"], ["pdf1", "PDF"], ["flash1", "FLASH"], ["web1", "WEB"], ["zoolonweb1", "ZOOLONWEB"], ["video1", "VIDEO"]];
	var softList = [];
	for (var i = 0; i < softArr.length; i++) {
		var obj = {};
		obj.name = softArr[i][1];
		obj.img = softArr[i][0];
		obj.arr = [];
		for (var j = 0; j < json.length; j++) {
			if (json[j].typeCode.toUpperCase() == softArr[i][1]) {
				var info = json[j];
				var infoArr = [info.name, info.typeCode, info.path, info.contentId, info.controlUrl];
				obj.arr.push(infoArr);
			}
		}
		softList.push(obj);
	}
	return softList;
}
function ParseHard(json) {
	var hardArr = [["shebei1", "PC"]];
	var hardList = [];
	for (var i = 0; i < hardArr.length; i++) {
		var obj = {};
		obj.name = hardArr[i][1];
		obj.img = hardArr[i][0];
		obj.arr = [];
		for (var j = 0; j < json.length; j++) {
			var info = json[j];
			var infoArr = [info.name, info.macAddress, info.daemonId, info.remark, info.deviceId];
			obj.arr.push(infoArr);
		}
	}
	hardList.push(obj);
	return hardList;
}

var EntryHard = React.createClass({
	displayName: "EntryHard",

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(EntryList, { arr: this.props.arr, name: "资源类型" }),
			React.createElement(
				"div",
				{ className: "addBtn", id: "entryAdd" },
				"\u6DFB\u52A0"
			),
			React.createElement(ChooseList, { list: this.props.list, name: "当前所有内容" }),
			React.createElement(InputList, { name: this.props.name, id: "entryChange" })
		);
	}
});
var EntrySoft = React.createClass({
	displayName: "EntrySoft",

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(EntryList, { arr: this.props.arr, name: "设备类型" }),
			React.createElement(
				"div",
				{ className: "addBtn", id: "softAdd" },
				"\u6DFB\u52A0"
			),
			React.createElement(ChooseList, { list: this.props.list, name: "当前所有设备" }),
			React.createElement(InputList, { name: this.props.name, id: "softChange" })
		);
	}
});
var EntryList = React.createClass({
	displayName: "EntryList",

	render: function render() {
		var arr = this.props.arr;
		return React.createElement(
			"div",
			{ className: "entryList" },
			React.createElement(
				"div",
				{ className: "title" },
				React.createElement(
					"h2",
					null,
					this.props.name
				)
			),
			React.createElement(
				"ul",
				null,
				arr.map(function (result, index) {
					var imgSrc = "assets/img/" + result[0] + ".png";
					return React.createElement(
						"li",
						{ key: index },
						React.createElement("img", { src: imgSrc }),
						React.createElement(
							"h3",
							null,
							result[1]
						)
					);
				})
			)
		);
	}
});

var ChooseList = React.createClass({
	displayName: "ChooseList",

	render: function render() {
		var list = this.props.list;
		return React.createElement(
			"div",
			{ className: "chooseList" },
			React.createElement(
				"div",
				{ className: "title" },
				React.createElement(
					"h2",
					null,
					this.props.name
				)
			),
			React.createElement(
				"div",
				{ className: "ulList" },
				list.map(function (result, index) {
					return React.createElement(
						"ul",
						{ key: index, className: result.name },
						React.createElement(
							"p",
							null,
							result.name,
							React.createElement("img", { src: "assets/img/showbtn.png" })
						),
						result.arr.map(function (results, indexs) {
							var imgSrc = "assets/img/" + result.img + ".png";
							return React.createElement(
								"li",
								{ key: indexs },
								React.createElement("img", { src: imgSrc }),
								React.createElement(
									"h3",
									null,
									results[0]
								),
								React.createElement(
									"p",
									{ className: "hideInfo hideInfo1" },
									results[1]
								),
								React.createElement(
									"p",
									{ className: "hideInfo hideInfo2" },
									results[2]
								),
								React.createElement(
									"p",
									{ className: "hideInfo hideInfo3" },
									results[3]
								),
								React.createElement(
									"p",
									{ className: "hideInfo hideInfo4" },
									results[4]
								)
							);
						})
					);
				})
			)
		);
	}
});

var InputList = React.createClass({
	displayName: "InputList",

	render: function render() {
		var name = this.props.name;
		return React.createElement(
			"div",
			{ className: "hardInput" },
			React.createElement(
				"ul",
				null,
				React.createElement(
					"h1",
					null,
					"\u8D44\u6E90\u5C5E\u6027"
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"p",
						null,
						name[0]
					),
					React.createElement("input", { type: "text" })
				),
				React.createElement(
					"li",
					{ className: "brInput" },
					React.createElement(
						"p",
						null,
						name[1]
					),
					React.createElement("input", { type: "text" })
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"p",
						null,
						name[2]
					),
					React.createElement("input", { type: "text" })
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"p",
						null,
						name[3]
					),
					React.createElement("input", { type: "text" })
				)
			),
			React.createElement(
				"div",
				{ id: this.props.id, className: "changeBtn" },
				"\u786E\u8BA4\u4FEE\u6539"
			)
		);
	}
});

function bindController() {
	$(".onBtn1").on("click", "p:eq(0)", function () {
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var winIndex = $(".funTitle li").index($(".funTitle .selected")) || 0;
		var openInfo = $at.screenInfo.drawInfo[index];
		var Layout = [];
		for (var i = 0; i < openInfo.screens.length; i++) {
			console.log(openInfo.screens[i]);
			var obj = {
				"WinId": openInfo.screens[i].id,
				"X": openInfo.screens[i].screenInfo[2],
				"Y": openInfo.screens[i].screenInfo[3],
				"Width": openInfo.screens[i].screenInfo[0],
				"Height": openInfo.screens[i].screenInfo[1]
			};
			if (openInfo.screens[i].medias[winIndex]) {
				var type = chooseType(openInfo.screens[i].medias[winIndex][2].toUpperCase());
				obj.Resource = {
					"Source": "local",
					"Path": openInfo.screens[i].medias[winIndex][1]
				};
				obj.Type = type;
			}
			Layout.push(obj);
		}
		var Arguments = {
			"LayoutId": openInfo.id,
			"Layout": Layout
		};
		var multiScreen = new MultiScreenCall();
		var data = multiScreen.open(Arguments);
		send(data);
	});
	$(".videoFun #play").on("click", function () {
		var Video = new Videocall();
		var data = Video.play();
		send(data);
	});
	$(".videoFun #pause").on("click", function () {
		var Video = new Videocall();
		var data = Video.pause();
		send(data);
	});
	function chooseType(name) {
		switch (name) {
			case "VIDEO":
				var type = "video";
				return type;
			case "PPT":
				var type = "ppt";
				return type;
			case "PDF":
				var type = "pdf";
				return type;
			case "FLASH":
				var type = "swf";
				return type;
			case "WEB":
				var type = "httpurl";
				return type;
			case "SHIPIN":
				var type = "video";
				return type;
			default:
				break;
		}
	}
	$(".onBtn1").on("click", "p:eq(1)", function () {
		var index = $(".drawTitle1 li").index($(".drawTitle1 .selected"));
		var winIndex = $(".drawContent1 li").index($(".drawContent1 .selected")) || 0;
		var multiScreen = new MultiScreenCall();
		var Arguments = { "LayoutId": $at.screenInfo.drawInfo[index].id };
		var data = multiScreen.close(Arguments);
		send(data);
	});
}

$(function () {
	var Dom = {
		submite: $(".submite"),

		layShow: $("#layoutShow"),
		layBottom: $("#layoutBottom"),
		layContent: $(".layoutContent"),
		layChange: $("#layout"),

		Part1btn: $("#btnPart1"),
		Part2btn: $("#btnPart2"),
		Part3btn: $("#btnPart3"),
		addBtnGroup: $("#addBtnGroup"),

		entryHard: $("#entryHard"),
		entrySoft: $("#entrySoftware"),

		drawArea: $("#drawArea"),
		drawBox: $("#drawBox"),

		screenLi: $("#addPart3 ul li"),
		entrySlected: $("#entrySlected"),
		screenPlan: $("#screenPlan ul"),
		addPart2: $("#addPart2"),

		funTitle: $(".funTitle"),

		btnGroup: $("#btnGroup"),
		ulList: $(".ulList")
	};
	document.body.onselectstart = document.body.oncontextmenu = function () {
		return false;
	};

	Dom.ulList.on("click", "p", function () {
		$(this).parent().find("li").slideToggle();
	});
	partController(Dom);
	loginController(Dom);
});
function layShowController(Dom) {
	ReactDOM.render(React.createElement(Part5, { info: $at.screenInfo }), view5Dom.layoutShow);
	bindController();
	var funTitle = $(".funTitle");
	var layoutContent = $(".layoutContent");
	funTitle.on("click", "li", function () {
		var index = funTitle.find("li").index($(this));
		funTitle.find("li").removeClass("selected");
		funTitle.find("li").eq(index).addClass("selected");
		layoutContent.find(".fun").removeClass("selected");
		layoutContent.find(".fun").eq(index).addClass("selected");
	});
	Dom.layShow.on("click", ".layout2", function () {
		Dom.layShow.hide();
		Dom.layChange.show();
	});
	Dom.layShow.find(".drawContent1").on("click", "li", function () {
		$(".drawContent1").find("li").removeClass("selected");
		$(this).addClass("selected");
	});
}
function layChangeController(Dom) {
	ReactDOM.render(React.createElement(Part4, { info: $at.screenInfo, softWare: $at.softWare }), view4Dom.layout);
	layoutChange(Dom);
}
function layParseDate(json) {
	var screenArr = [];
	for (var i = 0; i < json.screenInfo.length; i++) {
		var obj = {};
		var drawInfo = [];
		var host = [];
		var info = json.screenInfo[i];
		obj.screenInfo = {
			title: info.name,
			col: info.columnCount,
			row: info.rowCount,
			wid: info.widthOne,
			hei: info.heightOne,
			id: info.screenId
		};
		for (var j = 0; j < json.resultHost.length; j++) {
			if (info.screenId == json.resultHost[j].screenId) {
				var obj1 = {
					id: json.resultHost[j].id,
					deviceId: json.resultHost[j].deviceId,
					describeJson: json.resultHost[j].describeJson
				};
				host.push(obj1);
			}
		}
		obj.screenInfo.host = host;
		for (var j = 0; j < json.layout.length; j++) {
			var layout = json.layout[j];
			if (info.screenId == layout.screenId) {
				var obj2 = {};
				var screens = [];
				obj2 = {
					title: layout.name,
					id: layout.layoutId,
					controlUrl: layout.controlUrl,
					usePercent: layout.usePercent
				};
				for (var m = 0; m < json.describe.length; m++) {
					var describes = json.describe[m];
					if (layout.layoutId == describes.layoutId) {
						var obj3 = {};
						var media = [];
						var item = describes.items;
						if (typeof item == "string") {
							item = JSON.parse(item);
						}
						console.log(item);
						for (var n = 0; n < item.length; n++) {
							var mediasArr = [item[n].name, item[n].controlType, item[n].path, item[n].contentId, item[n].controlUrl];
							media.push(mediasArr);
						}
						console.log(media);
						obj3 = {
							id: describes.winId,
							scale: describes.scale,
							across: false,
							screenInfo: [describes.width, describes.height, describes.x, describes.y],
							medias: media,
							items: describes.items
						};
						screens.push(obj3);
					}
				}
				obj2.screens = screens;
				drawInfo.push(obj2);
			}
		}
		obj.drawInfo = drawInfo;
		screenArr.push(obj);
	}
	return screenArr;
}
function layoutChange(Dom) {
	var screenLen = 0;
	var smallIndex = 0;
	var layChangeBox = $("#LayoutScreen");
	var layoutInfo = $("#layoutInfo");
	var changeTitle = layChangeBox.find(".drawTitle");
	var changeBtnGroup = layChangeBox.find(".btnGroup");
	var changeDraw = layChangeBox.find(".drawContent");
	var changeBox2 = layoutInfo.find(".infoBox2");
	var changeChoose = layoutInfo.find(".chooseList");
	var changeAddbuju = layoutInfo.find("h2");
	var changeContent = layoutInfo.find(".contentList");
	var changelayName = $(".layoutName");
	var changelay = $(".addLayout");
	Dom.layChange.on("click", ".layout1", function () {
		Dom.layShow.show();
		Dom.layChange.hide();
		ReactDOM.render(React.createElement(Part5, { info: $at.screenInfo }), view5Dom.layoutShow);
		bindController();
	});
	changelay.on("click", function () {
		for (var i = 0; i < $at.screenInfo.drawInfo.length; i++) {
			var screens = $at.screenInfo.drawInfo[i].screens;
			for (var j = 0; j < screens.length; j++) {
				var arr = [];
				for (var n = 0; n < screens[j].medias.length; n++) {
					var medias = screens[j].medias[n];
					var obj = {
						name: medias[0],
						controlType: medias[1],
						path: medias[2],
						contentId: medias[3],
						controlUrl: medias[4]
					};
					arr.push(obj);
				}

				$at.screenInfo.drawInfo[i].screens[j].items = JSON.stringify(arr);
			}
		}
		var data1 = { data: JSON.stringify($at.screenInfo) };
		$.post($at.url + "/interfaces/screenInfo/changeLayout", data1, onComplete);
		function onComplete() {
			$at.allInfo[$at.menuIndex] = $at.screenInfo;
			ReactDOM.render(React.createElement(Part5, { info: $at.screenInfo }), view5Dom.layoutShow);
			ReactDOM.render(React.createElement(Part4, { info: $at.screenInfo, softWare: $at.softWare }), view4Dom.layout);
			bindController();
		}
	});

	changeTitle.on("click", "li", function () {
		screenLen = changeTitle.find("li").index($(this));
	});
	changeTitle.on("click", ".close", function (e) {
		var index = changeTitle.find("close").index($(this));
		$at.screenInfo.drawInfo.splice(index, 1);
		ReactDOM.render(React.createElement(Part4, { info: $at.screenInfo, softWare: $at.softWare }), view4Dom.layout);
	});
	changeBtnGroup.find("span").on("click", function () {
		var num = parseInt($at.screenInfo.drawInfo.length) + 1;
		var addScreen = {
			title: "屏幕" + num,
			index: num,
			screens: [{
				across: true,
				screenInfo: [1920, 1080, 0, 0],
				medias: []
			}]
		};
		$at.screenInfo.drawInfo.push(addScreen);
		ReactDOM.render(React.createElement(Part4, { info: $at.screenInfo, softWare: $at.softWare }), view4Dom.layout);
	});
	changeBtnGroup.find("p").on("click", function () {
		changelayName.find("input").val("");
		changelayName.show();
	});
	changelayName.find(".close").on("click", function () {
		changelayName.hide();
	});
	changelayName.find("p").on("click", function () {
		var value = changelayName.find("input").val();
		if (value) {
			$at.screenInfo.drawInfo[screenLen].title = value;
			ReactDOM.render(React.createElement(Part4, { info: $at.screenInfo, softWare: $at.softWare }), view4Dom.layout);
			changelayName.hide();
		}
	});
	layoutInfo.find(".infoBox1").on("click", "p", function () {
		layoutInfo.find("p").removeClass("selected");
		$(this).addClass("selected");
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].across = layoutInfo.find("p").index($(this)) == 0;
		ReactDOM.render(React.createElement(Part4, { info: $at.screenInfo, softWare: $at.softWare }), view4Dom.layout);
	});
	changeDraw.on("click", "li", function () {
		var num = parseInt($(this).find("span").html());
		smallIndex = num;
		var arr = $at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo;
		changeBox2.find("input").eq(1).val(arr[2]);
		changeBox2.find("input").eq(0).val(arr[3]);
		changeBox2.find("input").eq(2).val(arr[0]);
		changeBox2.find("input").eq(3).val(arr[1]);
		changeDraw.find("li").removeClass("selected");
		$(this).addClass("selected");
		ReactDOM.render(React.createElement(Part4, { info: $at.screenInfo, softWare: $at.softWare }), view4Dom.layout);
	});
	changeBox2.find("input").eq(0).on("change", function () {
		var x = $(this).val();
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[3] = parseInt(x);
		ReactDOM.render(React.createElement(Part4, { info: $at.screenInfo, softWare: $at.softWare }), view4Dom.layout);
	});
	changeBox2.find("input").eq(1).on("change", function () {
		var y = $(this).val();
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[2] = parseInt(y);
		ReactDOM.render(React.createElement(Part4, { info: $at.screenInfo, softWare: $at.softWare }), view4Dom.layout);
	});
	changeBox2.find("input").eq(2).on("change", function () {
		var wid = $(this).val();
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[0] = parseInt(wid);
		ReactDOM.render(React.createElement(Part4, { info: $at.screenInfo, softWare: $at.softWare }), view4Dom.layout);
	});
	changeBox2.find("input").eq(3).on("change", function () {
		var hei = $(this).val();
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].screenInfo[1] = parseInt(hei);
		ReactDOM.render(React.createElement(Part4, { info: $at.screenInfo, softWare: $at.softWare }), view4Dom.layout);
	});
	changeChoose.on("click", ".close", function () {
		var num = changeChoose.find("li .close").index($(this));
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].medias.splice(parseInt(num), 1);
		ReactDOM.render(React.createElement(Part4, { info: $at.screenInfo, softWare: $at.softWare }), view4Dom.layout);
	});
	changeAddbuju.on("click", function () {
		var data = {
			across: true,
			screenInfo: [1920, 1080, 0, 0],
			medias: []
		};
		$at.screenInfo.drawInfo[screenLen].screens.push(data);
		ReactDOM.render(React.createElement(Part4, { info: $at.screenInfo, softWare: $at.softWare }), view4Dom.layout);
	});
	changeContent.on("click", ".close", function () {
		$at.screenInfo.drawInfo[screenLen].screens.splice(smallIndex, 1);
		smallIndex = 0;
		ReactDOM.render(React.createElement(Part4, { info: $at.screenInfo, softWare: $at.softWare }), view4Dom.layout);
	});
	changeContent.on("click", ".contentBtn", function () {
		changeContent.find(".contentBtn").removeClass("selected");
		$(this).addClass("selected");
	});
	changeContent.on("click", ".add", function () {
		var type = $(this).parent().find(".icon").attr("name");
		var name = $(this).parent().find("span").eq(0).html();
		var path = $(this).parent().find("p").eq(1).html();
		var contentId = $(this).parent().find("p").eq(2).html();
		var controlUrl = $(this).parent().find("p").eq(3).html();
		var arr = [name, path, type, contentId, controlUrl];
		$at.screenInfo.drawInfo[screenLen].screens[smallIndex].medias.push(arr);
		ReactDOM.render(React.createElement(Part4, { info: $at.screenInfo, softWare: $at.softWare }), view4Dom.layout);
	});
}
var view4Dom = {
	layout: $at.GetDomId("layout")
};
var titleList = [["PPT", "PPT"], ["PDF", "PDF"], ["FLASH", "FLASH"], ["WEB", "WEB"], ["ZOOLONWEB", "ZOOLONWEB"], ["VIDEO", "VIDEO"]];
var Part4 = React.createClass({
	displayName: "Part4",

	render: function render() {
		var info = this.props.info;
		var screenInfo = info.screenInfo;
		return React.createElement(
			"div",
			null,
			React.createElement(LayoutTop1, { title: screenInfo.title }),
			React.createElement(LayoutScreen1, { obj: { info: info }, softWare: this.props.softWare }),
			React.createElement(LayoutName1, null)
		);
	}
});
var LayoutTop1 = React.createClass({
	displayName: "LayoutTop1",

	render: function render() {
		return React.createElement(
			"div",
			{ id: "layoutTop" },
			React.createElement(
				"h1",
				null,
				this.props.title
			),
			React.createElement(
				"div",
				{ className: "addLayout" },
				"\u4FDD\u5B58\u5E03\u5C40"
			)
		);
	}
});

var LayoutScreen1 = React.createClass({
	displayName: "LayoutScreen1",

	getInitialState: function getInitialState() {
		return {
			info: this.props.obj.info,
			index: 0,
			smallIndex: 0
		};
	},
	changeIndex: function changeIndex(num) {
		this.setState({ index: num });
	},
	changeSmallIndex: function changeSmallIndex(num) {
		this.setState({ smallIndex: num });
	},
	render: function render() {
		var info = this.state.info;
		var drawInfo = info.drawInfo;
		var row = info.screenInfo.row;
		var col = info.screenInfo.col;
		var num = row * col;
		var bil = info.screenInfo.hei / info.screenInfo.wid;
		var wid = 100 / col + "%";
		var hei = bil * 100 / col + "%";
		var b = [];
		for (var i = 0; i < num; i++) {
			b.push(i);
		}
		return React.createElement(
			"div",
			{ id: "LayoutScreen" },
			React.createElement(
				"div",
				{ id: "screenUl" },
				React.createElement(
					"ul",
					{ className: "screenUl" },
					b.map(function (result, index) {
						return React.createElement("li", { key: index + 1, style: { width: wid, paddingBottom: hei } });
					})
				),
				React.createElement(DrawBox1, { obj: info, index: this.state.index, smallIndex: this.state.smallIndex, changeIndex: this.changeIndex, changeIndex2: this.changeSmallIndex })
			),
			React.createElement(LayoutInfo, { obj: { drawInfo: drawInfo }, index: this.state.index, smallIndex: this.state.smallIndex, softWare: this.props.softWare }),
			React.createElement(
				"p",
				{ className: "layout1" },
				"\u9884\u89C8\u5E03\u5C40"
			)
		);
	}
});
var LayoutInfo = React.createClass({
	displayName: "LayoutInfo",

	render: function render() {
		var i1 = this.props.index;
		var i2 = this.props.smallIndex;
		var drawInfo = this.props.obj.drawInfo[i1];
		var across = drawInfo.screens[i2].across;
		var screenInfo = drawInfo.screens[i2].screenInfo;
		var medias = drawInfo.screens[i2].medias;
		return React.createElement(
			"div",
			{ id: "layoutInfo" },
			React.createElement(
				"h1",
				null,
				"\u7A97\u53E3\u5C5E\u6027"
			),
			React.createElement(
				"h2",
				null,
				"\u6DFB\u52A0\u7A97\u53E3"
			),
			React.createElement(
				"div",
				null,
				React.createElement(InfoBox1, { texts: across }),
				React.createElement(InfoBox2, null)
			),
			React.createElement(
				"div",
				{ id: "sources" },
				React.createElement(InfoBox3, { texts: medias })
			),
			React.createElement(
				"div",
				null,
				React.createElement(InfoBox4, { softWare: this.props.softWare })
			)
		);
	}
});
var InfoBox1 = React.createClass({
	displayName: "InfoBox1",

	render: function render() {
		var bol = this.props.texts;
		if (bol) {
			return React.createElement(
				"div",
				{ className: "infoBox infoBox1" },
				React.createElement(
					"h3",
					null,
					"\u7A97\u53E3\u8DE8\u5C4F\u5C5E\u6027"
				),
				React.createElement(
					"div",
					{ className: "chooseBtn" },
					React.createElement(
						"p",
						{ className: "selected" },
						"\u53EF\u8DE8\u4E3B\u673A"
					),
					React.createElement(
						"p",
						null,
						"\u4E0D\u53EF\u8DE8\u4E3B\u673A"
					)
				)
			);
		} else {
			return React.createElement(
				"div",
				{ className: "infoBox infoBox1" },
				React.createElement(
					"h3",
					null,
					"\u7A97\u53E3\u8DE8\u5C4F\u5C5E\u6027"
				),
				React.createElement(
					"div",
					{ className: "chooseBtn" },
					React.createElement(
						"p",
						null,
						"\u53EF\u8DE8\u4E3B\u673A"
					),
					React.createElement(
						"p",
						{ className: "selected" },
						"\u4E0D\u53EF\u8DE8\u4E3B\u673A"
					)
				)
			);
		}
	}
});
var InfoBox2 = React.createClass({
	displayName: "InfoBox2",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "infoBox infoBox2" },
			React.createElement(
				"h3",
				null,
				"\u7A97\u53E3\u4F4D\u7F6E"
			),
			React.createElement(
				"div",
				{ className: "inputGroup" },
				React.createElement(
					"p",
					null,
					"X"
				),
				React.createElement("input", { type: "number" })
			),
			React.createElement(
				"div",
				{ className: "inputGroup" },
				React.createElement(
					"p",
					null,
					"Y"
				),
				React.createElement("input", { type: "number" })
			),
			React.createElement(
				"div",
				{ className: "inputGroup" },
				React.createElement(
					"p",
					null,
					"\u5BBD\u5EA6"
				),
				React.createElement("input", { type: "number" })
			),
			React.createElement(
				"div",
				{ className: "inputGroup" },
				React.createElement(
					"p",
					null,
					"\u9AD8\u5EA6"
				),
				React.createElement("input", { type: "number" })
			)
		);
	}
});
var InfoBox3 = React.createClass({
	displayName: "InfoBox3",

	render: function render() {
		var b = this.props.texts;
		var self = this;
		return React.createElement(
			"div",
			{ className: "infoBox" },
			React.createElement(
				"h3",
				null,
				"\u7A97\u53E3\u8D44\u6E90"
			),
			React.createElement(
				"ul",
				{ className: "chooseList" },
				b.map(function (result, index) {
					var imgSrc = "assets/img/" + result[2] + ".png";
					return React.createElement(
						"li",
						{ key: index },
						React.createElement("img", { src: imgSrc, className: "icon" }),
						React.createElement(
							"p",
							null,
							result[0]
						),
						React.createElement(
							"span",
							null,
							result[1]
						),
						React.createElement(
							"span",
							null,
							result[2]
						),
						React.createElement(
							"span",
							null,
							result[3]
						),
						React.createElement(
							"span",
							null,
							result[4]
						),
						React.createElement("img", { src: "assets/img/close.png", className: "close", name: index })
					);
				})
			)
		);
	}
});
var InfoBox4 = React.createClass({
	displayName: "InfoBox4",

	getInitialState: function getInitialState() {
		return {
			index: 0
		};
	},
	listHandeler: function listHandeler(e) {
		this.setState({ index: e.target.id });
	},
	render: function render() {
		var self = this;
		return React.createElement(
			"div",
			{ className: "infoBox" },
			React.createElement(
				"h3",
				null,
				"\u7A97\u53E3\u8DE8\u5C4F\u5C5E\u6027"
			),
			React.createElement(
				"div",
				{ className: "infoList" },
				React.createElement(
					"ul",
					{ className: "titileList" },
					titleList.map(function (result, index) {
						var cla = self.state.index == index ? "selected" : "";
						var imgSrc = "assets/img/" + titleList[index][0] + ".png";
						return React.createElement(
							"li",
							{ key: index, className: cla },
							React.createElement("img", { src: imgSrc }),
							React.createElement(
								"p",
								{ id: index, onClick: self.listHandeler },
								result[1]
							)
						);
					})
				),
				React.createElement(
					"ul",
					{ className: "contentList" },
					this.props.softWare.map(function (result, index) {
						var cla = self.state.index == index ? "selected" : "";
						var imgSrc = "assets/img/" + titleList[index][0] + ".png";
						return React.createElement(
							"li",
							{ key: index, className: cla },
							result.arr.map(function (result2, index2) {
								return React.createElement(
									"div",
									{ className: "contentBtn", key: index2 },
									React.createElement("img", { src: imgSrc, className: "icon", name: titleList[index][1] }),
									React.createElement(
										"span",
										null,
										result2[0]
									),
									React.createElement(
										"p",
										null,
										result2[1]
									),
									React.createElement(
										"p",
										null,
										result2[2]
									),
									React.createElement(
										"p",
										null,
										result2[3]
									),
									React.createElement(
										"p",
										null,
										result2[4]
									),
									React.createElement("img", { src: "assets/img/add.png", className: "add" })
								);
							})
						);
					})
				)
			)
		);
	}
});
var DrawBox1 = React.createClass({
	displayName: "DrawBox1",

	getInitialState: function getInitialState() {
		var screenInfo = this.props.obj.screenInfo;
		var drawInfo = this.props.obj.drawInfo;
		return {
			drawInfo: drawInfo,
			screenInfo: screenInfo
		};
	},
	clickHandeler: function clickHandeler(e) {
		this.props.changeIndex(e.target.id);
	},
	clickHandeler2: function clickHandeler2(e) {
		if (e.target.nodeName.toLowerCase() == "li") {
			this.props.changeIndex2(e.target.id);
		}
	},
	componentWillUpdate: function componentWillUpdate() {
		if (!this.state.drawInfo[this.props.index]) {
			this.props.changeIndex(parseInt(this.props.index) - 1);
		}
	},
	render: function render() {
		var self = this;
		var hei = this.props.obj.screenInfo.hei;
		var wid = this.props.obj.screenInfo.wid;
		var row = this.props.obj.screenInfo.row;
		var col = this.props.obj.screenInfo.col;
		return React.createElement(
			"div",
			{ id: "drawBox" },
			React.createElement(
				"div",
				{ className: "btnGroup" },
				React.createElement(
					"p",
					null,
					"\u5E03\u5C40\u5C5E\u6027"
				),
				React.createElement(
					"span",
					null,
					"\u6DFB\u52A0\u5E03\u5C40"
				)
			),
			React.createElement(
				"ul",
				{ className: "drawTitle" },
				this.state.drawInfo.map(function (result, index) {
					var cla = index == self.props.index ? "selected" : "";
					return React.createElement(
						"li",
						{ key: index, className: cla },
						React.createElement(
							"p",
							{ id: index, onClick: self.clickHandeler },
							result.title
						),
						React.createElement("img", { src: "assets/img/close.png", className: "close" })
					);
				})
			),
			React.createElement(
				"ul",
				{ className: "drawContent" },
				this.state.drawInfo[this.props.index].screens.map(function (result, index) {
					var styleInfo = result.screenInfo;
					var styleObj = {
						height: styleInfo[1] / hei / row * 100 + "%",
						width: styleInfo[0] / wid / col * 100 + "%",
						top: styleInfo[2] / hei / row * 100 + "%",
						left: styleInfo[3] / wid / col * 100 + "%"
					};
					return React.createElement(
						"li",
						{ key: index, style: styleObj, id: index, onClick: self.clickHandeler2 },
						React.createElement(
							"span",
							null,
							index
						),
						React.createElement("img", { src: "assets/img/close.png", className: "close" }),
						React.createElement("div", { className: "change1 change" }),
						React.createElement("div", { className: "change2 change" }),
						React.createElement("div", { className: "change3 change" })
					);
				})
			)
		);
	}
});

var LayoutName1 = React.createClass({
	displayName: "LayoutName1",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "layoutName" },
			React.createElement("img", { src: "assets/img/close.png", className: "close" }),
			React.createElement(
				"h1",
				null,
				"\u5E03\u5C40\u5C5E\u6027"
			),
			React.createElement(
				"div",
				{ className: "inputGroup" },
				React.createElement(
					"h2",
					null,
					"\u540D\u79F0:"
				),
				React.createElement("input", { type: "text" })
			),
			React.createElement(
				"p",
				null,
				"\u5B8C\u6210"
			)
		);
	}
});

var view5Dom = {
	layoutShow: $at.GetDomId("layoutShow")
};
var Part5 = React.createClass({
	displayName: "Part5",

	render: function render() {

		var info = this.props.info;
		var screenInfo = info.screenInfo;
		return React.createElement(
			"div",
			null,
			React.createElement(LayoutTop, { title: screenInfo.title }),
			React.createElement(LayoutShow, { obj: { info: info } })
		);
	}
});
var LayoutBottom = React.createClass({
	displayName: "LayoutBottom",

	render: function render() {
		var drawInfo = this.props.obj.drawInfo;
		var index = this.props.index;
		var smallIndex = this.props.smallIndex;
		var info = drawInfo[index].screens[smallIndex].medias;
		return React.createElement(
			"div",
			{ id: "layoutBottom" },
			React.createElement(FunTitle, { title: info }),
			React.createElement(
				"div",
				{ className: "layoutContent" },
				info.map(function (result, index) {
					var htmls = chooseType(result[2], result[0], index);
					return htmls;
				})
			),
			React.createElement(
				"p",
				{ className: "layout2" },
				"\u7F16\u8F91\u5E03\u5C40"
			)
		);
	}
});
var LayoutTop = React.createClass({
	displayName: "LayoutTop",

	render: function render() {
		return React.createElement(
			"div",
			{ id: "showTop" },
			React.createElement(
				"h1",
				null,
				this.props.title
			)
		);
	}
});
var LayoutShow = React.createClass({
	displayName: "LayoutShow",

	getInitialState: function getInitialState() {
		return {
			info: this.props.obj.info,
			index: 0,
			smallIndex: 0
		};
	},
	changeIndex: function changeIndex(num) {
		this.setState({ index: num });
	},
	changeSmallIndex: function changeSmallIndex(num) {
		this.setState({ smallIndex: num });
	},
	render: function render() {
		var info = this.state.info;
		var drawInfo = info.drawInfo;
		var row = info.screenInfo.row;
		var col = info.screenInfo.col;
		var num = row * col;
		var bil = info.screenInfo.hei / info.screenInfo.wid;
		var wid = 100 / col + "%";
		var hei = bil * 100 / col + "%";
		var b = [];
		for (var i = 0; i < num; i++) {
			b.push(i);
		}
		return React.createElement(
			"div",
			{ id: "LayoutScreen" },
			React.createElement(
				"div",
				{ id: "screenUl" },
				React.createElement(
					"ul",
					{ className: "screenUl" },
					b.map(function (result, index) {
						return React.createElement("li", { key: index + 1, style: { width: wid, paddingBottom: hei } });
					})
				),
				React.createElement(DrawBox, { obj: info, index: this.state.index, smallIndex: this.state.smallIndex, changeIndex: this.changeIndex, changeIndex2: this.changeSmallIndex }),
				React.createElement(LayoutBottom, { obj: info, index: this.state.index, smallIndex: this.state.smallIndex })
			)
		);
	}
});
var DrawBox = React.createClass({
	displayName: "DrawBox",

	getInitialState: function getInitialState() {
		var screenInfo = this.props.obj.screenInfo;
		var drawInfo = this.props.obj.drawInfo;
		return {
			drawInfo: drawInfo,
			screenInfo: screenInfo
		};
	},
	clickHandeler: function clickHandeler(e) {
		this.props.changeIndex(e.target.id);
	},
	clickHandeler2: function clickHandeler2(e) {
		if (e.target.nodeName.toLowerCase() == "li") {
			this.props.changeIndex2(e.target.id);
		}
	},
	componentWillUpdate: function componentWillUpdate() {
		if (!this.state.drawInfo[this.props.index]) {
			this.props.changeIndex(parseInt(this.props.index) - 1);
		}
	},
	render: function render() {
		var self = this;
		var hei = this.props.obj.screenInfo.hei;
		var wid = this.props.obj.screenInfo.wid;
		var row = this.props.obj.screenInfo.row;
		var col = this.props.obj.screenInfo.col;
		return React.createElement(
			"div",
			{ id: "drawBox1" },
			React.createElement(
				"ul",
				{ className: "drawTitle1" },
				this.state.drawInfo.map(function (result, index) {
					var cla = index == self.props.index ? "selected" : "";
					return React.createElement(
						"li",
						{ key: index, className: cla },
						React.createElement(
							"p",
							{ id: index, onClick: self.clickHandeler },
							result.title
						)
					);
				})
			),
			React.createElement(
				"ul",
				{ className: "drawContent1" },
				this.state.drawInfo[this.props.index].screens.map(function (result, index) {
					var styleInfo = result.screenInfo;
					var styleObj = {
						height: styleInfo[1] / hei / row * 100 + "%",
						width: styleInfo[0] / wid / col * 100 + "%",
						top: styleInfo[2] / hei / row * 100 + "%",
						left: styleInfo[3] / wid / col * 100 + "%"
					};
					return React.createElement(
						"li",
						{ key: index, style: styleObj, id: index, onClick: self.clickHandeler2 },
						React.createElement(
							"span",
							null,
							index
						)
					);
				})
			)
		);
	}
});
function chooseType(type, name, index) {
	switch (type.toUpperCase()) {
		case "VIDEO":
			return React.createElement(VideoFun, { title: name, key: index });
		case "PPT":
			return React.createElement(PptFun, { title: name, key: index });
		case "PDF":
			return React.createElement(PdfFun, { title: name, key: index });
		case "FLASH":
			return React.createElement(FlashFun, { title: name, key: index });
		case "WEB":
			return React.createElement(WebFun, { title: name, key: index });
		case "SHIPIN":
			return React.createElement(FlashFun, { title: name, key: index });
		default:
			break;
	}
}
var FunTitle = React.createClass({
	displayName: "FunTitle",

	render: function render() {
		var title = this.props.title;
		return React.createElement(
			"ul",
			{ className: "funTitle" },
			title.map(function (result, index) {
				var cla = index == 0 ? "selected" : "";
				var imgSrc = "assets/img/" + result[2] + ".png";
				return React.createElement(
					"li",
					{ key: index, className: cla },
					React.createElement("img", { src: imgSrc }),
					React.createElement(
						"p",
						{ className: "p" },
						result[0]
					),
					React.createElement(
						"p",
						null,
						result[1]
					),
					React.createElement(
						"p",
						null,
						result[2]
					),
					React.createElement(
						"p",
						null,
						result[3]
					),
					React.createElement(
						"p",
						null,
						result[4]
					)
				);
			})
		);
	}
});
var VideoFun = React.createClass({
	displayName: "VideoFun",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "videoFun fun" },
			React.createElement(
				"div",
				{ className: "controllerBox" },
				React.createElement(
					"h1",
					null,
					"\u52A8\u4F5C"
				),
				React.createElement(
					"div",
					{ className: "controller" },
					React.createElement(
						"div",
						{ className: "onBtn onBtn1" },
						React.createElement(
							"p",
							{ className: "selected" },
							"\u6253\u5F00"
						),
						React.createElement(
							"p",
							null,
							"\u5173\u95ED"
						)
					)
				)
			),
			React.createElement(
				"div",
				{ className: "controllerBox" },
				React.createElement(
					"h1",
					null,
					"\u63A7\u5236\u754C\u9762"
				),
				React.createElement(
					"div",
					{ className: "controller" },
					React.createElement(
						"h2",
						null,
						"\u64AD\u653E\u6A21\u5F0F"
					),
					React.createElement(
						"div",
						{ className: "onBtn" },
						React.createElement(
							"p",
							{ className: "selected", id: "play" },
							"\u9ED8\u8BA4"
						),
						React.createElement(
							"p",
							{ id: "pause" },
							"\u5FAA\u73AF"
						)
					)
				),
				React.createElement(
					"div",
					{ className: "controller" },
					React.createElement(
						"h2",
						null,
						"\u64AD\u653E\u8FDB\u5EA6"
					),
					React.createElement(
						"div",
						{ className: "pro1" },
						React.createElement("img", { src: "assets/img/action.png" }),
						React.createElement(
							"div",
							null,
							React.createElement("p", null)
						)
					)
				),
				React.createElement(
					"div",
					{ className: "controller" },
					React.createElement(
						"h2",
						null,
						"\u97F3\u91CF"
					),
					React.createElement(
						"div",
						{ className: "pro1" },
						React.createElement("img", { src: "assets/img/sound.png" }),
						React.createElement(
							"div",
							null,
							React.createElement("p", null)
						)
					)
				)
			)
		);
	}
});
var PptFun = React.createClass({
	displayName: "PptFun",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "pptFun fun" },
			React.createElement(
				"div",
				{ className: "controllerBox" },
				React.createElement(
					"h1",
					null,
					"\u52A8\u4F5C"
				),
				React.createElement(
					"div",
					{ className: "controller" },
					React.createElement(
						"div",
						{ className: "onBtn onBtn1" },
						React.createElement(
							"p",
							{ className: "selected" },
							"\u6253\u5F00"
						),
						React.createElement(
							"p",
							null,
							"\u5173\u95ED"
						)
					)
				)
			),
			React.createElement(
				"div",
				{ className: "controllerBox" },
				React.createElement(
					"h1",
					null,
					"\u63A7\u5236\u754C\u9762"
				),
				React.createElement(
					"div",
					{ className: "controller" },
					React.createElement(
						"h2",
						null,
						"\u8DF3\u8F6C\u9875\u9762"
					),
					React.createElement(
						"div",
						{ className: "nomalBtn" },
						React.createElement(
							"p",
							null,
							"\u9996\u9875"
						),
						React.createElement(
							"p",
							null,
							"\u4E0A\u4E00\u9875"
						),
						React.createElement(
							"p",
							null,
							"\u4E0B\u4E00\u9875"
						),
						React.createElement(
							"p",
							null,
							"\u5C3E\u9875"
						)
					),
					React.createElement(
						"div",
						{ className: "inputBtn" },
						React.createElement(
							"p",
							null,
							"\u8DF3\u8F6C\u81F3"
						),
						React.createElement("input", { type: "number" })
					)
				)
			)
		);
	}
});
var PdfFun = React.createClass({
	displayName: "PdfFun",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "pdfFun fun" },
			React.createElement(
				"div",
				{ className: "controllerBox" },
				React.createElement(
					"h1",
					null,
					"\u52A8\u4F5C"
				),
				React.createElement(
					"div",
					{ className: "controller" },
					React.createElement(
						"div",
						{ className: "onBtn onBtn1" },
						React.createElement(
							"p",
							{ className: "selected" },
							"\u6253\u5F00"
						),
						React.createElement(
							"p",
							null,
							"\u5173\u95ED"
						)
					)
				)
			),
			React.createElement(
				"div",
				{ className: "controllerBox" },
				React.createElement(
					"h1",
					null,
					"\u63A7\u5236\u754C\u9762"
				),
				React.createElement(
					"div",
					{ className: "controller" },
					React.createElement(
						"h2",
						null,
						"\u8DF3\u8F6C\u9875\u9762"
					),
					React.createElement(
						"div",
						{ className: "nomalBtn" },
						React.createElement(
							"p",
							null,
							"\u9996\u9875"
						),
						React.createElement(
							"p",
							null,
							"\u4E0A\u4E00\u9875"
						),
						React.createElement(
							"p",
							null,
							"\u4E0B\u4E00\u9875"
						),
						React.createElement(
							"p",
							null,
							"\u5C3E\u9875"
						)
					),
					React.createElement(
						"div",
						{ className: "inputBtn" },
						React.createElement(
							"p",
							null,
							"\u8DF3\u8F6C\u81F3"
						),
						React.createElement("input", { type: "number" })
					)
				),
				React.createElement(
					"div",
					{ className: "controller" },
					React.createElement(
						"h2",
						null,
						"\u5E03\u5C40\u6A21\u5F0F"
					),
					React.createElement(
						"div",
						{ className: "nomalBtn" },
						React.createElement(
							"p",
							null,
							"\u5355\u9875"
						),
						React.createElement(
							"p",
							null,
							"\u5355\u5217"
						),
						React.createElement(
							"p",
							null,
							"\u53CC\u5217(\u5DE6)"
						),
						React.createElement(
							"p",
							null,
							"\u53CC\u5217(\u53F3)"
						),
						React.createElement(
							"p",
							null,
							"\u9002\u5E94"
						)
					)
				),
				React.createElement(
					"div",
					{ className: "controller" },
					React.createElement(
						"h2",
						null,
						"\u7F29\u653E"
					),
					React.createElement(
						"div",
						{ className: "pro1" },
						React.createElement(
							"span",
							null,
							"100"
						),
						React.createElement(
							"div",
							null,
							React.createElement("p", null)
						)
					)
				)
			)
		);
	}
});
var FlashFun = React.createClass({
	displayName: "FlashFun",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "flashFun fun" },
			React.createElement(
				"div",
				{ className: "controllerBox" },
				React.createElement(
					"h1",
					null,
					"\u52A8\u4F5C"
				),
				React.createElement(
					"div",
					{ className: "controller" },
					React.createElement(
						"div",
						{ className: "onBtn onBtn1" },
						React.createElement(
							"p",
							{ className: "selected" },
							"\u6253\u5F00"
						),
						React.createElement(
							"p",
							null,
							"\u5173\u95ED"
						)
					)
				)
			),
			React.createElement(
				"div",
				{ className: "controllerBox" },
				React.createElement(
					"h1",
					null,
					"\u63A7\u5236\u754C\u9762"
				),
				React.createElement(
					"div",
					{ className: "controller" },
					React.createElement(
						"h2",
						null,
						"\u8C03\u7528\u65B9\u6CD5"
					),
					React.createElement(
						"div",
						{ className: "inputBtn" },
						React.createElement(
							"p",
							null,
							"\u65B9\u6CD5\u540D"
						),
						React.createElement("input", { type: "text" })
					)
				)
			)
		);
	}
});
var WebFun = React.createClass({
	displayName: "WebFun",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "flashFun fun" },
			React.createElement(
				"div",
				{ className: "controllerBox" },
				React.createElement(
					"h1",
					null,
					"\u52A8\u4F5C"
				),
				React.createElement(
					"div",
					{ className: "controller" },
					React.createElement(
						"div",
						{ className: "onBtn onBtn1" },
						React.createElement(
							"p",
							{ className: "selected" },
							"\u6253\u5F00"
						),
						React.createElement(
							"p",
							null,
							"\u5173\u95ED"
						)
					)
				)
			),
			React.createElement(
				"div",
				{ className: "controllerBox" },
				React.createElement(
					"h1",
					null,
					"\u63A7\u5236\u754C\u9762"
				),
				React.createElement(
					"div",
					{ className: "controller" },
					React.createElement(
						"h2",
						null,
						"\u8C03\u7528\u65B9\u6CD5"
					),
					React.createElement(
						"div",
						{ className: "inputBtn" },
						React.createElement(
							"p",
							null,
							"\u65B9\u6CD5\u540D"
						),
						React.createElement("input", { type: "text" })
					)
				)
			)
		);
	}
});
var ZoolonFun = React.createClass({
	displayName: "ZoolonFun",

	render: function render() {
		return React.createElement("div", { className: "zoolonFun" });
	}
});

function loginController(Dom) {
	Dom.submite.on("click", function () {
		connect();
		socket.onopen();
		var name = $("#userName input").val();
		var pass = $("#passWord input").val();
		if (name == "" || pass == "") {
			alert("请输入用户名密码");
		} else {
			initLayInfo(Dom, name, pass);
		}
	});
}
function initLayInfo(Dom, user, password) {
	$at.getJson($at.url + "/interfaces/login", { name: user, password: password }, onComplete);
	function onComplete(json) {
		if (!json.state) {
			alert("用户名密码错误");
			return;
		}
		$Animate.complete($Animate.loginHide, $Animate.wrapShow);
		var data = layParseDate(json);
		$at.allInfo = data;
		$at.screenInfo = data[$at.menuIndex];
		$at.getJson($at.url + "/interfaces/entry/content", "", onComplete2);
		function onComplete2(json2) {
			$at.softWare = ParseSoft(json2.data);
			initSoft(Dom);
			layShowController(Dom);
			layChangeController(Dom);
			setScreen(Dom, data);
			$(".layoutContent .fun").eq(0).addClass("selected");
		}
		$at.getJson($at.url + "/interfaces/entry/device", "", onComplete3);
		function onComplete3(json3) {
			$at.entryHard = ParseHard(json3.data);
			initHard(Dom);
		}
	}
}
var loginDom = {
	userName: $at.GetDomId("userName"),
	passWord: $at.GetDomId("passWord"),
	submitBtn: $at.GetDomId("submitBtn"),
	forgotPass: $at.GetDomId("forgotPass"),
	logBtn: $at.GetDomId("logBtn")
};
var UserName = React.createClass({
	displayName: "UserName",

	render: function render() {
		return React.createElement("input", { type: "text", placeholder: this.props.placehoder });
	}
});
var PassWord = React.createClass({
	displayName: "PassWord",

	render: function render() {
		return React.createElement("input", { type: "password", placeholder: this.props.placehoder });
	}
});
var SubmiteBtn = React.createClass({
	displayName: "SubmiteBtn",

	getInitialState: function getInitialState() {
		return { result: true };
	},
	handleClick: function handleClick(event) {
		if (this.state.result) {
			FormCheck(this);
		}
	},
	render: function render() {
		var text = this.state.result ? "SIGN IN" : "WAITING......";
		return React.createElement(
			"div",
			{ className: "submite" },
			React.createElement(
				"p",
				null,
				text,
				React.createElement("span", { className: this.props.name })
			)
		);
	}
});
var ForgotPass = React.createClass({
	displayName: "ForgotPass",

	render: function render() {
		return React.createElement(
			"span",
			null,
			"FORGOT PASSWORD?"
		);
	}
});
var LogBtn = React.createClass({
	displayName: "LogBtn",

	render: function render() {
		return React.createElement(
			"span",
			null,
			"CREATE AN ACCOUNT"
		);
	}
});

ReactDOM.render(React.createElement(UserName, { placehoder: "User Name" }), loginDom.userName);
ReactDOM.render(React.createElement(PassWord, { placehoder: "Password" }), loginDom.passWord);
ReactDOM.render(React.createElement(SubmiteBtn, { name: "icon iconfont icon-jiantou-copy-copy" }), loginDom.submitBtn);
ReactDOM.render(React.createElement(ForgotPass, null), loginDom.forgotPass);
ReactDOM.render(React.createElement(LogBtn, null), loginDom.logBtn);

//用户名提交验证
function FormCheck(next) {
	var userVal = $("#userName input").val();
	var passVal = $("#passWord input").val();
	if (userVal == '' || !userVal) {
		alert("用户名不能为空");
	} else if (passVal == '' || !passVal) {
		alert("密码不能为空");
	} else {
		var onComplete = function onComplete(json) {
			if (json.state) {
				//				next(json.data.name);
				$Animate.complete($Animate.loginHide, $Animate.wrapShow);
			} else {
				alert("用户名或密码错误，请重新输入");
			}
		};

		var data = { name: userVal, password: passVal };
		$at.getJson($at.staicUrl + "interfaces/login", data, onComplete);
	}
}

function initScreenInfo() {
	var view5Info = {
		screenInfo: {
			title: "虚拟桌面1",
			col: "4",
			row: "2",
			wid: "1920",
			hei: "1080"
		},
		drawInfo: [{
			title: "屏幕1",
			screens: [{
				across: true,
				screenInfo: [1920, 1080, 0, 0],
				medias: [["SHIPIN", "叮当1"], ["FLASH", "叮当2"], ["PDF", "叮当3"], ["PPT", "叮当4"], ["WEB", "叮当5"]]
			}, {
				across: false,
				screenInfo: [1920, 1080, 0, 1920],
				medias: [["PPT", "叮当2"], ["FLASH", "叮当2"]]
			}]
		}, {
			title: "屏幕2",
			screens: [{
				across: false,
				screenInfo: [1920, 1080, 0, 1920],
				medias: [["PPT", "叮当3"], ["FLASH", "叮当2"]]
			}, {
				across: false,
				screenInfo: [1920, 1080, 0, 3840],
				medias: [["PPT", "叮当4"], ["FLASH", "叮当2"]]
			}]
		}, {
			title: "屏幕3",
			screens: [{
				across: false,
				screenInfo: [1920, 1080, 1080, 0],
				medias: [["PPT", "叮当5"], ["FLASH", "叮当2"]]
			}, {
				across: false,
				screenInfo: [1920, 1080, 0, 0],
				medias: [["PPT", "叮当6"], ["FLASH", "叮当2"]]
			}]
		}]
	};
	$at.getJson("dataDemo.json", "", onComplete);
	function onComplete(json) {
		ReactDOM.render(React.createElement(Part5, { info: view5Info }), view5Dom.layoutShow);
	}
}

function partController(Dom) {
	Dom.addBtnGroup.find(".btn").eq(1).on("click", function () {
		initPart1(Dom);
	});
	Dom.addBtnGroup.find(".btn").eq(0).on("click", function () {
		var screenInfo = {
			screenInfo: { title: "未命名", col: 4, row: 2, wid: 1920, hei: 1080, id: "s2 ", host: [] },
			drawInfo: [{
				title: "未命名",
				id: "l1",
				controlUrl: "1",
				usePercent: "1",
				screens: [{
					id: "w1",
					scale: 1,
					across: false,
					screenInfo: [0, 0, 0, 0],
					medias: [],
					items: ['[]']
				}]
			}]
		};
		var data1 = { data: JSON.stringify(screenInfo) };
		$.post($at.url + "/interfaces/screenInfo/addScreen", data1, onComplete);
		function onComplete(json) {
			screenInfo.screenInfo.id = json.data.screenId;
			screenInfo.drawInfo[0].id = json.data.layoutId;
			screenInfo.drawInfo[0].screens[0].id = json.data.winId;
			$at.screenInfo = screenInfo;
			$at.allInfo.push($at.screenInfo);
			ReactDOM.render(React.createElement(MenuList, null), setScreenDom.screenList);
			initPart1(Dom);
			$("#screenList ul li").removeClass("selected");
			$("#screenList ul li").last().addClass("selected");
		}
	});
	function initPart1(Dom) {
		Dom.layShow.hide();
		Dom.layChange.hide();
		$("#addPart1").css({ "left": "0" });
		$("#addPart2").css({ "left": "100%" });
		$("#addPart3").css({ "left": "100%" });
		PartChange(0);
		var name = $at.screenInfo.screenInfo.title;
		var row = $at.screenInfo.screenInfo.row;
		var col = $at.screenInfo.screenInfo.col;
		var wid = $at.screenInfo.screenInfo.wid;
		var hei = $at.screenInfo.screenInfo.hei;
		$("#addPart1").html("");
		ReactDOM.render(React.createElement(Part1, { row: row, col: col, hei: hei, wid: wid }), view1Dom.inputGroup);
		$("#inputGroup .input").eq(0).find("input").val(name);
		$("#inputGroup .input").eq(1).find("input").val(row);
		$("#inputGroup .input").eq(2).find("input").val(wid);
		$("#inputGroup .input").eq(3).find("input").val(col);
		$("#inputGroup .input").eq(4).find("input").val(hei);

		$("#btnPart1").on("click", ".next", function () {
			$at.screenInfo.screenInfo.title = $("#inputGroup .input").eq(0).find("input").val();
			$at.screenInfo.screenInfo.row = $("#inputGroup .input").eq(1).find("input").val();
			$at.screenInfo.screenInfo.col = $("#inputGroup .input").eq(3).find("input").val();
			$at.screenInfo.screenInfo.wid = $("#inputGroup .input").eq(2).find("input").val();
			$at.screenInfo.screenInfo.hei = $("#inputGroup .input").eq(4).find("input").val();
			$Animate.complete($Animate.Part1Hide, $Animate.Part2Show);
			PartChange(1);
			initPart2(Dom);
		});
	}
	function initPart2(Dom) {
		$("#addPart2").html("");
		ReactDOM.render(React.createElement(Part2, null), view2Dom.addPart2);
		var host = $("#addPart2 ul li");
		for (var i = 0; i < $at.screenInfo.screenInfo.host.length; i++) {
			for (var j = 0; j < host.length; j++) {
				if (host.eq(j).find("span").eq(3).html() == $at.screenInfo.screenInfo.host[i].id) {
					host.eq(j).addClass("selected");
				}
			}
		}
		$("#btnPart2").find(".pre").on("click", function () {
			$Animate.complete($Animate.Part2Hide1, $Animate.Part1Show);
			PartChange(0);
		});
		$("#btnPart2").find(".next").on("click", function () {
			var selected = $("#addPart2 ul .selected");
			var deviceList = [];
			for (var i = 0; i < selected.length; i++) {
				var obj = {
					name: selected.eq(i).find("p").eq(0).html(),
					macAddress: selected.eq(i).find("span").eq(0).html(),
					daemonId: selected.eq(i).find("span").eq(1).html(),
					remark: selected.eq(i).find("span").eq(2).html(),
					deviceId: selected.eq(i).find("span").eq(3).html()
				};
				deviceList.push(obj);
			}
			if (deviceList.length == 0) {
				alert("你还没有选择设备");
			} else {
				$Animate.complete($Animate.Part2Hide2, $Animate.Part3Show);
				PartChange(2);
				initPart3(Dom, deviceList);
			}
		});
		$("#addPart2").find("ul").on("click", function (e) {
			var event = e || window.event;
			var dom = event.target || event.srcElement;
			dom = dom.parentNode.parentNode;
			if (dom.tagName.toLowerCase() == "li") {
				if (dom.getAttribute("class") == "selected") {
					dom.setAttribute("class", "");
				} else {
					dom.setAttribute("class", "selected");
				}
			}
		});
	}
	function initPart3(Dom, deviceList) {
		$("#addPart3").html("");
		var nums = $at.screenInfo.screenInfo.row * $at.screenInfo.screenInfo.col;
		ReactDOM.render(React.createElement(Part3, { arr: deviceList, num: nums }), view3Dom.addPart3);
		drawController(Dom);
		$("#addPart3").find(".pre").on("click", function () {
			$Animate.complete($Animate.Part3Hide, $Animate.Part2Show);
			PartChange(1);
		});
		$("#addPart3").find(".next").on("click", function () {
			changeSrceen();
			$Animate.LayoutShow();
		});
		function changeSrceen() {
			var host = addHost();
			$at.screenInfo.screenInfo.host = host;
			var data1 = { data: JSON.stringify($at.screenInfo) };
			$.post($at.url + "/interfaces/screenInfo/changeScreen", data1, onComplete);
			function onComplete(json) {
				ReactDOM.render(React.createElement(Part5, { info: $at.screenInfo }), view5Dom.layoutShow);
				ReactDOM.render(React.createElement(Part4, { info: $at.screenInfo, softWare: $at.softWare }), view4Dom.layout);
				ReactDOM.render(React.createElement(MenuList, null), setScreenDom.screenList);
				bindController();
			}
		}
		function addHost() {
			var deviceList = $("#entryList ul li");
			var hostlist = $("#screenPlan ul li");
			var host = [];
			for (var i = 0; i < deviceList.length; i++) {
				var obj = {
					deviceId: deviceList.eq(i).find("span").eq(3).html(),
					id: "222"
				};
				var describe = [];
				for (var j = 0; j < hostlist.length; j++) {
					if (hostlist.eq(j).find("span").eq(3).html() == obj.deviceId) {
						describe.push(j);
					}
				}
				var describeJson = describe.join(",");
				obj.describeJson = describeJson;
				host.push(obj);
			}
			return host;
		}
	}
	function PartChange(index) {
		var title = ["新建虚拟桌面", "选择主机", "分配屏幕"];
		$("#levNum li").removeClass("selected");
		$("#levNum li").eq(index).addClass("selected");
		$("#pageTitle h1").html(title[index]);
	}
}
function setScreen(Dom, data) {
	var LevTitleArr = ["新建虚拟桌面", "选择主机", "分配屏幕"];
	ReactDOM.render(React.createElement(Menu, { imgSrc: "assets/img/logo.png", name: "ZOOLON" }), setScreenDom.userInfo);
	ReactDOM.render(React.createElement(MenuList, null), setScreenDom.screenList);
	ReactDOM.render(React.createElement(LevTitle, { arr: LevTitleArr }), setScreenDom.levNum);
	ReactDOM.render(React.createElement(PageTitle, { title: "\u65B0\u5EFA\u5C4F\u5E55" }), setScreenDom.pageTitle);
	$("#screenList").on("click", "li", function () {
		$("#screenList").find("li").removeClass("selected");
		$(this).addClass("selected");
		Dom.layShow.show();
		Dom.layChange.hide();
		$at.menuIndex = $("#screenList").find("li").index($(this));
		$at.screenInfo = $at.allInfo[$at.menuIndex];
		selectedMenu(Dom);
	});
}
function selectedMenu(Dom) {
	$("#layoutShow").html("");
	$("#layout").html("");
	layShowController(Dom);
	layChangeController(Dom);
	$(".layoutContent .fun").eq(0).addClass("selected");
}

var setScreenDom = {
	title: $at.GetDomId("toptitle"),
	userInfo: $at.GetDomId("userInfo"),
	screenList: $at.GetDomId("screenList"),
	levNum: $at.GetDomId("levNum"),
	pageTitle: $at.GetDomId("pageTitle")
};
var Menu = React.createClass({
	displayName: "Menu",

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement("img", { src: this.props.imgSrc, alt: this.props.name }),
			React.createElement(
				"h1",
				null,
				this.props.name
			)
		);
	}
});
var MenuList = React.createClass({
	displayName: "MenuList",

	render: function render() {
		var obj = [];
		for (var i = 0; i < $at.allInfo.length; i++) {
			obj.push($at.allInfo[i].screenInfo.title);
		}
		return React.createElement(
			"ul",
			null,
			obj.map(function (result, index) {
				if (index == 0) {
					return React.createElement(
						"li",
						{ key: index, title: result, className: "selected" },
						result
					);
				} else {
					return React.createElement(
						"li",
						{ key: index, title: result },
						result
					);
				}
			})
		);
	}
});

var LevTitle = React.createClass({
	displayName: "LevTitle",

	render: function render() {
		var LevTitleArr = this.props.arr;
		return React.createElement(
			"ul",
			null,
			LevTitleArr.map(function (result, index) {
				if (index == 0) {
					return React.createElement(
						"li",
						{ key: index, title: result, className: "selected" },
						React.createElement(
							"p",
							null,
							React.createElement(
								"span",
								null,
								index
							),
							result
						)
					);
				} else {
					return React.createElement(
						"li",
						{ key: index, title: result },
						React.createElement(
							"p",
							null,
							React.createElement(
								"span",
								null,
								index
							),
							result
						)
					);
				}
			})
		);
	}
});

var PageTitle = React.createClass({
	displayName: "PageTitle",

	render: function render() {
		return React.createElement(
			"h1",
			null,
			this.props.title
		);
	}
});

},{}]},{},[1]);
