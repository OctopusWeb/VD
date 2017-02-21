var loginDom = {
	userName 	: GetDomId("userName"),
	passWord 	: GetDomId("passWord"),
	submitBtn	: GetDomId("submitBtn"),
	forgotPass	: GetDomId("forgotPass") 
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
	render : function(){
		return (<div>
					<p>SIGN IN<span className={this.props.name}></span></p>
					
				</div>)
	}
})
var ForgotPass = React.createClass({
	render : function(){
		return (<span>FORGOT PASSWORD?</span>)
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

function GetDomId(name){
	var dom = document.getElementById(name);
	return dom
}
