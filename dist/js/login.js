var num = $("#number");
var password = $("#password");
var numval = num.val();
var passwordval = password.val();
var login = $("#log");
// console.log(login);

login.click(function(){
    var numval = num.val();
    var passwordval = password.val();
    var cookiedata = { num: numval, pasw: passwordval };
    var cookieStr = $.cookie("miya", cookiedata);
    console.log(cookieStr);
    if(cookiedata.num == cookiedata.pasw){
        alert('登录成功！');
		location.href = 'http://localhost:8888/html/index.html';
    }else{
		alert('账号与密码不匹配！');
	}
})