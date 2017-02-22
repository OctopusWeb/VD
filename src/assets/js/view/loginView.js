var loginDom = {
	userName 	: $at.GetDomId("userName"),
	passWord 	: $at.GetDomId("passWord"),
	submitBtn	: $at.GetDomId("submitBtn"),
	forgotPass	: $at.GetDomId("forgotPass"),
	logBtn		: $at.GetDomId("logBtn")
}
var UserName = React.createClass({
	render : function(){
		return (<input type="text" placeholder={this.props.placehoder}/>)
	}
})
var PassWord = React.createClass({
	render : function(){
		return (<input type="password" placeholder={this.props.placehoder} />)
	}
})
var SubmiteBtn = React.createClass({
	getInitialState : function(){
		return {result : true}
	},
  	handleClick: function(event) {
  		if(this.state.result){
  			FormCheck(this)
  		}
    },
	render : function(){
		var text = this.state.result ? "SIGN IN" : "WAITING......";
		return (<div onClick = {this.handleClick}><p>{text}<span className={this.props.name}></span></p></div>)
	}
})
var ForgotPass = React.createClass({
	render : function(){
		return (<span>FORGOT PASSWORD?</span>)
	}
})
var LogBtn = React.createClass({
	render : function(){
		return (<span>CREATE AN ACCOUNT</span>)
	}
})

ReactDOM.render(
    <UserName placehoder = "User Name"/>,
    loginDom.userName
);
ReactDOM.render(
    <PassWord placehoder = "Password"/>,
    loginDom.passWord
);
ReactDOM.render(
    <SubmiteBtn name="icon iconfont icon-jiantou-copy-copy"/>,
    loginDom.submitBtn
);
ReactDOM.render(
    <ForgotPass />,
    loginDom.forgotPass
);
ReactDOM.render(
	<LogBtn />,
	loginDom.logBtn 
)

//用户名提交验证
function FormCheck(self){
	var userVal = $("#userName input").val();
	var passVal = $("#passWord input").val();
	if(userVal =='' || !userVal){
		alert("用户名不能为空")
	}else if(passVal =='' || !passVal){
		alert("密码不能为空")
	}else{
		self.setState({result : false});
		$at.getJson("dataDemo.json","",onComplete);
		function onComplete(json){  
			setTimeout(function(){
				self.setState({result : true});
				$Animate.complete($Animate.loginHide,$Animate.wrapShow); 
			},1500)
		}
	}
}
