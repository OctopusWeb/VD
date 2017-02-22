(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var loginDom = {
	userName: GetDomId("userName"),
	passWord: GetDomId("passWord"),
	submitBtn: GetDomId("submitBtn"),
	forgotPass: GetDomId("forgotPass"),
	logBtn: GetDomId("logBtn")
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

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"p",
				null,
				"SIGN IN",
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

function GetDomId(name) {
	var dom = document.getElementById(name);
	return dom;
}

},{}]},{},[1]);
