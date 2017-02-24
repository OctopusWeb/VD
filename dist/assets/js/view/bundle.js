(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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
			React.createElement(ScreenShow, { row: this.state.row, col: this.state.col }),
			React.createElement(BtnPart1, null)
		);
	},
	getInitialState: function getInitialState() {
		return {
			row: 1,
			col: 1
		};
	},
	handlerRow: function handlerRow(row1, col1) {
		this.setState({ row: row1, col: col1 });
	}
});

var InputGroup = React.createClass({
	displayName: "InputGroup",

	getInitialState: function getInitialState() {
		return {
			row: 0,
			col: 0
		};
	},
	handlerChange: function handlerChange(event) {
		if (event.target.name == InputName[1]) {
			this.setState({ row: event.target.value });
			this.props.rowChange(event.target.value, this.state.col);
		} else if (event.target.name == InputName[3]) {
			this.setState({ col: event.target.value });
			this.props.rowChange(this.state.row, event.target.value);
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
		var wid = 100 / col + "%";
		var hei = 300 / row;
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
					return React.createElement("li", { key: index + 1, style: { width: wid, height: hei } });
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

},{}],4:[function(require,module,exports){
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
						React.createElement("img", { src: "assets/img/facility.png", alt: "PC8189", id: "aa" })
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

},{}],5:[function(require,module,exports){
"use strict";

},{}]},{},[1,2,3,4,5]);
