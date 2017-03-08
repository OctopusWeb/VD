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
		return (<div className = "submite"><p>{text}<span className={this.props.name}></span></p></div>)
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
function FormCheck(next){
	var userVal = $("#userName input").val();
	var passVal = $("#passWord input").val();
	if(userVal =='' || !userVal){
		alert("用户名不能为空")
	}else if(passVal =='' || !passVal){
		alert("密码不能为空")
	}else{
		var data = {name:userVal,password:passVal}
		$at.getJson($at.staicUrl+"interfaces/login",data,onComplete);
		function onComplete(json){  
			if(json.state){ 
//				next(json.data.name);
				$Animate.complete($Animate.loginHide,$Animate.wrapShow); 
			}else{
				alert("用户名或密码错误，请重新输入");
			}
			
		}
	}
}
$(function(){
	$(".submite").on("click",function(){
		FormCheck();
	})
})
function getScreenInfo(names){
	var obj = ["测试数据1","测试数据2","测试数据3","测试数据4"];
	$at.getJson($at.staicUrl+"interfaces/screenInfo",onComplete);
	function onComplete(json){
		var data = json.data;
		var obj = [];
		for (var i=0;i<json.length;i++) {
			obj.push(json)
		}
		ReactDOM.render(<Menu imgSrc = "assets/img/logo.png" name = names/> , setScreenDom.userInfo);
		ReactDOM.render(<MenuList obj={obj}/>,setScreenDom.screenList);
		ReactDOM.render(<LevTitle />,setScreenDom.levNum); 
		ReactDOM.render(<PageTitle title = "新建屏幕" />,setScreenDom.pageTitle);
	}
	
}
