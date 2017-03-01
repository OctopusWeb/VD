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
			React.createElement(ScreenShow, { row: this.state.row, col: this.state.col, wid: this.state.wid, hei: this.state.hei }),
			React.createElement(BtnPart1, null)
		);
	},
	getInitialState: function getInitialState() {
		return {
			row: 1,
			col: 1,
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
			row: 0,
			col: 0,
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
				"h1",
				null,
				"\u9884\u89C8"
			),
			React.createElement(
				"ul",
				null,
				b.map(function (result, index) {
					return React.createElement("li", { key: index + 1, style: { width: wid, paddingBottom: hei } });
				})
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
			React.createElement(FacilityList, null),
			React.createElement(BtnPart2, null)
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
			})
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

},{}],5:[function(require,module,exports){
"use strict";

var view4Dom = {
	layout: $at.GetDomId("layout")
};
var titleList = [["assets/img/SHIPIN.png", "视频"], ["assets/img/PPT.png", "PPT"], ["assets/img/PDF.png", "PDF"], ["assets/img/FLASH.png", "FLASH"], ["assets/img/WEB.png", "WEB"], ["assets/img/ZOOLONWEB.png", "ZOOLONWEB"]];
var contentList = [["叮当", "叮当"], ["叮当", "叮当"], ["叮当", "叮当"], ["叮当", "叮当"], ["叮当", "叮当"], ["叮当", "叮当"]];
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
			screenInfo: [102, 102, 102, 102],
			medias: [["PPT", "叮当1"], ["FLASH", "叮当2"]]
		}, {
			across: true,
			screenInfo: [10, 10, 10, 10],
			medias: [["PPT", "叮当1"], ["FLASH", "叮当2"]]
		}]
	}, {
		title: "屏幕2",
		index: 1,
		screens: [{
			across: true,
			screenInfo: [10, 10, 10, 10],
			medias: [["PPT", "叮当1"], ["FLASH", "叮当2"]]
		}, {
			across: true,
			screenInfo: [10, 10, 10, 10],
			medias: [["PPT", "叮当1"], ["FLASH", "叮当2"]]
		}]
	}]
};
var Part4 = React.createClass({
	displayName: "Part4",

	render: function render() {
		var info = this.props.info;
		var screenInfo = info.screenInfo;

		return React.createElement(
			"div",
			null,
			React.createElement(LayoutTop, { title: screenInfo.title }),
			React.createElement(LayoutScreen, { obj: { info: info } })
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
			info: this.props.obj.info
		};
	},
	acrossHandelers: function acrossHandelers(bol) {
		var info = this.state.info.drawInfo;
		console.log(JSON.stringify(info));
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
				React.createElement(DrawBox, { obj: info })
			),
			React.createElement(LayoutInfo, { obj: { drawInfo: drawInfo }, acrossHandelers: this.acrossHandelers })
		);
	}
});
var LayoutInfo = React.createClass({
	displayName: "LayoutInfo",

	getInitialState: function getInitialState() {
		var drawInfo = this.props.obj.drawInfo[0];
		return {
			across: drawInfo.screens[0].across,
			screenInfo: drawInfo.screens[0].screenInfo,
			medias: drawInfo.screens[0].medias
		};
	},
	acrossHandelers: function acrossHandelers(bol) {
		this.props.acrossHandelers(bol);
		console.log(bol);
	},
	render: function render() {
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
				React.createElement(InfoBox1, { texts: this.state.across, acrossHandeler: this.acrossHandelers }),
				React.createElement(InfoBox2, { texts: this.state.screenInfo })
			),
			React.createElement(
				"div",
				{ id: "sources" },
				React.createElement(InfoBox3, { texts: this.state.medias })
			),
			React.createElement(
				"div",
				null,
				React.createElement(InfoBox4, { arr: titleList })
			)
		);
	}
});
var InfoBox1 = React.createClass({
	displayName: "InfoBox1",

	getInitialState: function getInitialState() {
		return {
			bol: this.props.texts
		};
	},
	handelerClick: function handelerClick() {
		this.setState({ bol: !this.state.bol });
		this.props.acrossHandeler(this.state.bol);
	},
	render: function render() {
		if (this.state.bol) {
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
						{ onClick: this.handelerClick },
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
						{ onClick: this.handelerClick },
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

	getInitialState: function getInitialState() {
		return {
			left: this.props.texts[0],
			top: this.props.texts[1],
			wid: this.props.texts[2],
			hei: this.props.texts[3]
		};
	},
	xhanderler: function xhanderler(e) {
		this.setState({ left: event.target.value, top: this.state.top, wid: this.state.wid, hei: this.state.hei });
	},
	yhanderler: function yhanderler(e) {
		this.setState({ left: this.state.left, top: event.target.value, wid: this.state.wid, hei: this.state.hei });
	},
	whanderler: function whanderler(e) {
		this.setState({ left: this.state.left, top: this.state.top, wid: event.target.value, hei: this.state.hei });
	},
	hhanderler: function hhanderler(e) {
		this.setState({ left: this.state.left, top: this.state.top, wid: this.state.wid, hei: event.target.value });
	},
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
				React.createElement("input", { type: "number", value: this.state.left, onChange: this.xhanderler })
			),
			React.createElement(
				"div",
				{ className: "inputGroup" },
				React.createElement(
					"p",
					null,
					"Y"
				),
				React.createElement("input", { type: "number", value: this.state.top, onChange: this.yhanderler })
			),
			React.createElement(
				"div",
				{ className: "inputGroup" },
				React.createElement(
					"p",
					null,
					"\u5BBD\u5EA6"
				),
				React.createElement("input", { type: "number", value: this.state.wid, onChange: this.whanderler })
			),
			React.createElement(
				"div",
				{ className: "inputGroup" },
				React.createElement(
					"p",
					null,
					"\u9AD8\u5EA6"
				),
				React.createElement("input", { type: "number", value: this.state.hei, onChange: this.hhanderler })
			)
		);
	}
});
var InfoBox3 = React.createClass({
	displayName: "InfoBox3",

	getInitialState: function getInitialState() {
		return {
			medias: this.props.texts
		};
	},
	clickHandeler: function clickHandeler(e) {
		var arr = this.state.medias;
		arr.splice(e.target.name, 1);
		this.setState({ medias: arr });
	},
	render: function render() {
		var b = this.state.medias;
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
						React.createElement("img", { src: "assets/img/close.png", className: "close", onClick: self.clickHandeler, name: index })
					);
				})
			)
		);
	}
});
var InfoBox4 = React.createClass({
	displayName: "InfoBox4",

	render: function render() {
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
					this.props.arr.map(function (result, index) {
						var cla = index == 0 ? "selected" : "";
						return React.createElement(
							"li",
							{ key: index, className: cla },
							React.createElement("img", { src: result[0] }),
							React.createElement(
								"p",
								null,
								result[1]
							)
						);
					})
				),
				React.createElement(
					"ul",
					{ className: "contentList" },
					contentList.map(function (result, index) {
						var cla = index == 0 ? "selected" : "";
						var imgSrc = titleList[index][0];
						return React.createElement(
							"li",
							{ key: index, className: cla },
							result.map(function (result2, index2) {
								return React.createElement(
									"div",
									{ className: "contentBtn", key: index2 },
									React.createElement("img", { src: imgSrc }),
									React.createElement(
										"span",
										null,
										result2
									)
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
			screenInfo: screenInfo,
			index: 0,
			smallIndex: 0
		};
	},
	clickHandeler: function clickHandeler(e) {
		this.setState({ index: e.target.id });
	},
	render: function render() {
		var self = this;
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
					var cla = index == self.state.index ? "selected" : "";
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
				this.state.drawInfo[this.state.index].screens.map(function (result, index) {
					var styleInfo = result.screenInfo;
					var styleObj = {
						height: styleInfo[0],
						width: styleInfo[1],
						top: styleInfo[2],
						left: styleInfo[3]
					};
					return React.createElement(
						"li",
						{ key: index, style: styleObj },
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

ReactDOM.render(React.createElement(Part4, { info: view4Info }), view4Dom.layout);

},{}],6:[function(require,module,exports){
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
			setTimeout(function () {
				self.setState({ result: true });
				$Animate.complete($Animate.loginHide, $Animate.wrapShow);
			}, 1500);
		};

		self.setState({ result: false });
		$at.getJson("dataDemo.json", "", onComplete);
	}
}

},{}],7:[function(require,module,exports){
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

},{}]},{},[1,2,3,4,5,6,7]);
