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
			React.createElement(InputGroup, { rowChange: this.handlerRow }),
			React.createElement(ScreenShow, { row: this.state.row, col: this.state.col, wid: this.state.wid, hei: this.state.hei })
		);
	},
	getInitialState: function getInitialState() {
		return {
			row: 2,
			col: 4,
			wid: 1920,
			hei: 1080
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
			row: 2,
			col: 4,
			wid: 1920,
			hei: 1080
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
ReactDOM.render(React.createElement(Part1, null), view1Dom.inputGroup);

},{}],2:[function(require,module,exports){
"use strict";

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
			facilityList.map(function (result, index) {
				return React.createElement(
					"li",
					{ key: index },
					React.createElement(
						"div",
						null,
						React.createElement("img", { src: "assets/img/facility.png", alt: "PC8189" })
					),
					React.createElement(
						"p",
						null,
						result
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

ReactDOM.render(React.createElement(Part2, null), view2Dom.addPart2);

},{}],3:[function(require,module,exports){
"use strict";

var view3Dom = {
	addPart3: $at.GetDomId("addPart3")
};
var facilityList = ["PC1111", "PC2222", "PC3333", "PC4444", "PC5555", "PC6666"];

var Part3 = React.createClass({
	displayName: "Part3",

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(ScreenPlan, { num: "8" }),
			React.createElement(EntrySlected, null),
			React.createElement(EntryList, null),
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
						)
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
							result
						)
					);
				})
			)
		);
	}
});
var EntryList = React.createClass({
	displayName: "EntryList",

	render: function render() {
		return React.createElement(
			"ul",
			{ id: "entryList" },
			facilityList.map(function (result, index) {
				var colorStyle = {
					border: "2px solid " + $at.staticColors[index]
				};
				return React.createElement(
					"li",
					{ key: index },
					React.createElement("img", { src: "assets/img/facility.png", alt: "PC8189", style: colorStyle }),
					React.createElement(
						"p",
						null,
						result
					)
				);
			})
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
ReactDOM.render(React.createElement(Part3, null), view3Dom.addPart3);

},{}],4:[function(require,module,exports){
"use strict";

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
			React.createElement(InputList, { name: this.props.name })
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
			React.createElement(InputList, { name: this.props.name })
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
									results
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
			)
		);
	}
});

$(function () {
	var entryArr = [["ppt1", "PPT"], ["pdf1", "PDF"], ["flash1", "FLASH"], ["web1", "WEB"], ["zoolonweb1", "ZoolonWEB"], ["video1", "Video"]];
	var entryName = ["展项名称", "展项类型", "资源URL", "总控命令地址"];
	var entryList = [{
		"name": "PPT",
		"img": "ppt1",
		"arr": ["AAAA", "BBBB"]
	}, {
		"name": "PDF",
		"img": "pdf1",
		"arr": ["CCCC", "DDDD"]
	}, {
		"name": "FLASH",
		"img": "flash1",
		"arr": ["DDDD", "EEEE"]
	}, {
		"name": "WEB",
		"img": "web1",
		"arr": ["FFFF", "GGGG"]
	}, {
		"name": "ZoolonWEB",
		"img": "zoolonweb1",
		"arr": ["HHHH", "IIII"]
	}, {
		"name": "Video",
		"img": "video1",
		"arr": ["JJJJ", "KKKK"]
	}];

	var softArr = [["shebei1", "PC"]];
	var softName = ["设备名称", "mac地址", "daemonld", "备注"];
	var softList = [{
		"name": "PC",
		"img": "shebei1",
		"arr": ["AAAA", "BBBB"]
	}];
	ReactDOM.render(React.createElement(EntryHard, { arr: entryArr, list: entryList, name: entryName }), document.getElementById("entryHard"));
	ReactDOM.render(React.createElement(EntrySoft, { arr: softArr, list: softList, name: softName }), document.getElementById("entrySoftware"));
	$(".entryList").on("click", "li", function () {
		$(".entryList").find("li").removeClass("selected");
		$(".chooseList").find("li").removeClass("selected");
		$(this).addClass("selected");
		$("#entryHard input").eq(0).val("");
		$("#entrySoftware input").eq(0).val("");
	});
	$("#entryAdd").on("click", function () {
		var name = $("#entryHard input").eq(0).val();
		name = name == "" ? "未定义" : name;
		var type = $(".entryList .selected").find("h3").html();
		for (var i = 0; i < entryList.length; i++) {
			if (type == entryList[i].name) {
				entryList[i].arr.push(name);
			}
		}
		ReactDOM.render(React.createElement(EntryHard, { arr: entryArr, list: entryList, name: entryName }), document.getElementById("entryHard"));
		$("#entryHard input").eq(0).val("");
	});
	$("#entryHard .chooseList").on("click", "li", function () {
		$(".entryList").find("li").removeClass("selected");
		$(".chooseList").find("li").removeClass("selected");
		$(this).addClass("selected");
		var type = $(this).parent().attr("class");
		var name = $(this).find("h3").html();
		$("#entryHard input").eq(0).val(name);
	});

	$("#softAdd").on("click", function () {
		var name = $("#entrySoftware input").eq(0).val();
		name = name == "" ? "未定义" : name;
		var type = $(".entryList .selected").find("h3").html();
		for (var i = 0; i < softList.length; i++) {
			if (type == softList[i].name) {
				softList[i].arr.push(name);
			}
		}
		ReactDOM.render(React.createElement(EntrySoft, { arr: softArr, list: softList, name: softName }), document.getElementById("entrySoftware"));
		$("#entrySoftware input").eq(0).val("");
	});

	$("#entrySoftware .chooseList").on("click", "li", function () {
		$(".entryList").find("li").removeClass("selected");
		$(".chooseList").find("li").removeClass("selected");
		$(this).addClass("selected");
		var type = $(this).parent().attr("class");
		var name = $(this).find("h3").html();
		$("#entrySoftware input").eq(0).val(name);
	});
});

},{}],5:[function(require,module,exports){
"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var view4Dom = {
	layout: $at.GetDomId("layout")
};
var titleList = [["SHIPIN", "视频"], ["PPT", "PPT"], ["PDF", "PDF"], ["FLASH", "FLASH"], ["WEB", "WEB"], ["ZOOLONWEB", "ZOOLONWEB"]];
var Part4 = React.createClass({
	displayName: "Part4",

	render: function render() {
		var info = this.props.info;
		var screenInfo = info.screenInfo;

		return React.createElement(
			"div",
			null,
			React.createElement(LayoutTop, { title: screenInfo.title }),
			React.createElement(LayoutScreen, { obj: { info: info }, softWare: this.props.softWare }),
			React.createElement(LayoutName, null)
		);
	}
});
var LayoutTop = React.createClass({
	displayName: "LayoutTop",

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

var LayoutScreen = React.createClass({
	displayName: "LayoutScreen",

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
				React.createElement(DrawBox, { obj: info, index: this.state.index, smallIndex: this.state.smallIndex, changeIndex: this.changeIndex, changeIndex2: this.changeSmallIndex })
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
					var imgSrc = "assets/img/" + result[0] + ".png";
					return React.createElement(
						"li",
						{ key: index },
						React.createElement("img", { src: imgSrc, className: "icon" }),
						React.createElement(
							"p",
							null,
							result[1]
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
							result.map(function (result2, index2) {
								return React.createElement(
									"div",
									{ className: "contentBtn", key: index2 },
									React.createElement("img", { src: imgSrc, className: "icon", name: titleList[index][0] }),
									React.createElement(
										"span",
										null,
										result2
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

var LayoutName = React.createClass({
	displayName: "LayoutName",

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

$(function () {
	var view4Info = {
		screenInfo: {
			title: "虚拟桌面1",
			col: "4",
			row: "2",
			wid: "1920",
			hei: "1080"
		},
		drawInfo: [{
			title: "屏幕1",
			index: 0,
			screens: [{
				across: true,
				screenInfo: [1920, 1080, 0, 0],
				medias: [["SHIPIN", "叮当1"], ["FLASH", "叮当2"]]
			}, {
				across: false,
				screenInfo: [1920, 1080, 0, 1920],
				medias: [["PPT", "叮当2"], ["FLASH", "叮当2"]]
			}]
		}, {
			title: "屏幕2",
			index: 1,
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
			index: 1,
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
	var softWare = [["叮当1", "叮当1"], ["叮当2", "叮当2"], ["叮当3", "叮当3"], ["叮当4", "叮当4"], ["叮当5", "叮当5"], ["叮当6", "叮当6"]];
	ReactDOM.render(React.createElement(Part4, { info: view4Info, softWare: softWare }), view4Dom.layout);
	layoutController(view4Info, softWare);
});

function layoutController(infoArr, softWare) {
	var _dom;

	var infoArr = infoArr;
	var screenLen = 0;
	var smallIndex = 0;
	var dom = (_dom = {
		drawBox: $("#drawBox"),
		drawTitle: $(".drawTitle"),
		btnGroup: $(".btnGroup"),
		infoBox1: $(".infoBox1"),
		drawContent: $(".drawContent"),
		infoBox2: $(".infoBox2"),
		chooseList: $(".chooseList"),
		addBuju: $("#layoutInfo h2")
	}, _defineProperty(_dom, "drawContent", $(".drawContent")), _defineProperty(_dom, "contentList", $(".contentList")), _defineProperty(_dom, "layoutName", $(".layoutName")), _defineProperty(_dom, "addLayout", $(".addLayout")), _dom);
	dom.addLayout.on("click", function () {
		console.log(JSON.stringify(infoArr));
	});
	dom.drawTitle.on("click", "li", function () {
		screenLen = dom.drawTitle.find("li").index($(this));
	});
	dom.drawTitle.on("click", ".close", function (e) {
		var index = dom.drawTitle.find("close").index($(this));
		infoArr.drawInfo.splice(index, 1);
		ReactDOM.render(React.createElement(Part4, { info: infoArr, softWare: softWare }), view4Dom.layout);
	});
	dom.btnGroup.find("span").on("click", function () {
		var num = parseInt(infoArr.drawInfo.length) + 1;
		var addScreen = {
			title: "屏幕" + num,
			index: num,
			screens: [{
				across: true,
				screenInfo: [1920, 1080, 0, 0],
				medias: []
			}]
		};
		infoArr.drawInfo.push(addScreen);
		ReactDOM.render(React.createElement(Part4, { info: infoArr, softWare: softWare }), view4Dom.layout);
	});
	dom.btnGroup.find("p").on("click", function () {
		dom.layoutName.find("input").val("");
		dom.layoutName.show();
	});
	dom.layoutName.find(".close").on("click", function () {
		dom.layoutName.hide();
	});
	dom.layoutName.find("p").on("click", function () {
		var value = dom.layoutName.find("input").val();
		if (value) {
			infoArr.drawInfo[screenLen].title = value;
			ReactDOM.render(React.createElement(Part4, { info: infoArr, softWare: softWare }), view4Dom.layout);
			dom.layoutName.hide();
		}
	});
	dom.infoBox1.on("click", "p", function () {
		dom.infoBox1.find("p").removeClass("selected");
		$(this).addClass("selected");
		infoArr.drawInfo[screenLen].screens[smallIndex].across = dom.infoBox1.find("p").index($(this)) == 0;
		ReactDOM.render(React.createElement(Part4, { info: infoArr, softWare: softWare }), view4Dom.layout);
	});
	dom.drawContent.on("click", "li", function () {
		var num = parseInt($(this).find("span").html());
		smallIndex = num;
		var arr = infoArr.drawInfo[screenLen].screens[smallIndex].screenInfo;
		dom.infoBox2.find("input").eq(1).val(arr[2]);
		dom.infoBox2.find("input").eq(0).val(arr[3]);
		dom.infoBox2.find("input").eq(2).val(arr[0]);
		dom.infoBox2.find("input").eq(3).val(arr[1]);
		dom.drawContent.find("li").removeClass("selected");
		$(this).addClass("selected");
		ReactDOM.render(React.createElement(Part4, { info: infoArr, softWare: softWare }), view4Dom.layout);
	});
	dom.infoBox2.find("input").eq(0).on("change", function () {
		var x = $(this).val();
		infoArr.drawInfo[screenLen].screens[smallIndex].screenInfo[3] = parseInt(x);
		ReactDOM.render(React.createElement(Part4, { info: infoArr, softWare: softWare }), view4Dom.layout);
	});
	dom.infoBox2.find("input").eq(1).on("change", function () {
		var y = $(this).val();
		infoArr.drawInfo[screenLen].screens[smallIndex].screenInfo[2] = parseInt(y);
		ReactDOM.render(React.createElement(Part4, { info: infoArr, softWare: softWare }), view4Dom.layout);
	});
	dom.infoBox2.find("input").eq(2).on("change", function () {
		var wid = $(this).val();
		infoArr.drawInfo[screenLen].screens[smallIndex].screenInfo[0] = parseInt(wid);
		ReactDOM.render(React.createElement(Part4, { info: infoArr, softWare: softWare }), view4Dom.layout);
	});
	dom.infoBox2.find("input").eq(3).on("change", function () {
		var hei = $(this).val();
		infoArr.drawInfo[screenLen].screens[smallIndex].screenInfo[1] = parseInt(hei);
		ReactDOM.render(React.createElement(Part4, { info: infoArr, softWare: softWare }), view4Dom.layout);
	});
	dom.chooseList.on("click", ".close", function () {
		var num = dom.chooseList.find("li .close").index($(this));
		infoArr.drawInfo[screenLen].screens[smallIndex].medias.splice(parseInt(num), 1);
		ReactDOM.render(React.createElement(Part4, { info: infoArr, softWare: softWare }), view4Dom.layout);
	});
	dom.addBuju.on("click", function () {
		var data = {
			across: true,
			screenInfo: [1920, 1080, 0, 0],
			medias: []
		};
		infoArr.drawInfo[screenLen].screens.push(data);
		ReactDOM.render(React.createElement(Part4, { info: infoArr, softWare: softWare }), view4Dom.layout);
	});
	dom.drawContent.on("click", ".close", function () {
		infoArr.drawInfo[screenLen].screens.splice(smallIndex, 1);
		smallIndex = 0;
		ReactDOM.render(React.createElement(Part4, { info: infoArr, softWare: softWare }), view4Dom.layout);
	});
	dom.contentList.on("click", ".contentBtn", function () {
		dom.contentList.find(".contentBtn").removeClass("selected");
		$(this).addClass("selected");
	});
	dom.contentList.on("click", ".add", function () {
		var type = $(this).parent().find(".icon").attr("name");
		var name = $(this).parent().find("span").html();
		var arr = [type, name];
		infoArr.drawInfo[screenLen].screens[smallIndex].medias.push(arr);
		ReactDOM.render(React.createElement(Part4, { info: infoArr, softWare: softWare }), view4Dom.layout);
	});
}

},{}],6:[function(require,module,exports){
"use strict";

var view5Dom = {
	layoutShow: $at.GetDomId("layoutShow")
};
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
					var htmls = chooseType(result[0], result[1], index);
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
	switch (type) {
		case "SHIPIN":
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
				var imgSrc = "assets/img/" + result[0] + ".png";
				return React.createElement(
					"li",
					{ key: index, className: cla },
					React.createElement("img", { src: imgSrc }),
					React.createElement(
						"p",
						null,
						result[1]
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
						{ className: "onBtn" },
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
							{ className: "selected" },
							"\u9ED8\u8BA4"
						),
						React.createElement(
							"p",
							null,
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
						{ className: "onBtn" },
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
						{ className: "onBtn" },
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
						{ className: "onBtn" },
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
						{ className: "onBtn" },
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

ReactDOM.render(React.createElement(Part5, { info: view5Info }), view5Dom.layoutShow);
$(function () {
	$(".drawContent1").on("click", "li", function () {
		$(".drawContent1").find("li").removeClass("selected");
		$(this).addClass("selected");
	});
});

},{}],7:[function(require,module,exports){
"use strict";

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
			{ onClick: this.handleClick },
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
function FormCheck(self) {
	var userVal = $("#userName input").val();
	var passVal = $("#passWord input").val();
	if (userVal == '' || !userVal) {
		alert("用户名不能为空");
	} else if (passVal == '' || !passVal) {
		alert("密码不能为空");
	} else {
		var onComplete = function onComplete(json) {
			if (json.state) {
				self.setState({ result: true });
				$Animate.complete($Animate.loginHide, $Animate.wrapShow);
			} else {
				alert("用户名或密码错误，请重新输入");
				self.setState({ result: true });
			}
		};

		self.setState({ result: false });
		var data = { name: userVal, password: passVal };
		$at.getJson($at.staicUrl + "interfaces/login", data, onComplete);
	}
}

},{}],8:[function(require,module,exports){
"use strict";

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

var obj = ["测试数据1", "测试数据2", "测试数据3", "测试数据4"];
var LevTitleArr = ["新建虚拟桌面", "选择主机", "分配屏幕"];

ReactDOM.render(React.createElement(Menu, { imgSrc: "assets/img/logo.png", name: "HU" }), setScreenDom.userInfo);
ReactDOM.render(React.createElement(MenuList, null), setScreenDom.screenList);
ReactDOM.render(React.createElement(LevTitle, null), setScreenDom.levNum);
ReactDOM.render(React.createElement(PageTitle, { title: "\u65B0\u5EFA\u5C4F\u5E55" }), setScreenDom.pageTitle);

},{}]},{},[1,2,3,4,5,6,7,8]);
