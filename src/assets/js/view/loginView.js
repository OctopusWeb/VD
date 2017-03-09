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

function initScreenInfo(){
	var view5Info = { 
		screenInfo:{
			title:"虚拟桌面1",
			col:"4",
			row:"2",
			wid:"1920",
			hei:"1080"
		},
		drawInfo:[
			{
				title: "屏幕1",
				screens:[
					{
						across:true,
						screenInfo:[1920,1080,0,0],
						medias:[["SHIPIN","叮当1"],["FLASH","叮当2"],["PDF","叮当3"],["PPT","叮当4"],["WEB","叮当5"]],
					},
					{
						across:false,
						screenInfo:[1920,1080,0,1920],
						medias:[["PPT","叮当2"],["FLASH","叮当2"]],
					}
				]
			},
			{
				title: "屏幕2",
				screens:[
					{
						across:false,
						screenInfo:[1920,1080,0,1920],
						medias:[["PPT","叮当3"],["FLASH","叮当2"]],
					},
					{
						across:false,
						screenInfo:[1920,1080,0,3840],
						medias:[["PPT","叮当4"],["FLASH","叮当2"]],
					}
				]
			},
			{
				title: "屏幕3",
				screens:[
					{
						across:false,
						screenInfo:[1920,1080,1080,0],
						medias:[["PPT","叮当5"],["FLASH","叮当2"]],
					},
					{
						across:false,
						screenInfo:[1920,1080,0,0],
						medias:[["PPT","叮当6"],["FLASH","叮当2"]],
					}
				]
			}
		]
	}
	$at.getJson("dataDemo.json","",onComplete);
	function onComplete(json){
		console.log(json)
		ReactDOM.render(<Part5 info={view5Info}/>,view5Dom.layoutShow);
	}
}

