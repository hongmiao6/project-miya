var num = $("#number");
var password = $("#password");
var numval = num.val();
var passwordval = password.val();
var reg = $("#log");
// console.log(reg);
var list = [];
var cookie = null;
// var cookieStr ="";
num.blur(function() {
  var numval = num.val();
  // console.log(numval);
  var mynum = /^[1][3,4,5,7,8][0-9]{9}$/;
  if (!mynum.test(numval)) {
    $(".tip1").css("display", "block");
    numval = "";
  } else {
    $(".tip1").css("display", "none");
  }
});

password.blur(function() {
  var passwordval = password.val();
  // console.log(passwordval);
  var mypasw = /^\w{6,12}$/;
  if (!mypasw.test(passwordval)) {
    $(".tip2").css("display", "block");
    passwordval = "";
  } else {
    $(".tip2").css("display", "none");
  }
});

reg.click(function() {
  var numval = num.val();
  var passwordval = password.val();
  if (!numval || !passwordval) {
    alert("用户名或密码不能为空!");
    return;
  }
  var cookiedata = { num: numval, pasw: passwordval };
  var cookieStr = $.cookie("miya", cookiedata);
  // console.log(cookieStr);
  alert("注册成功！");
  // 判断  没有cookie就创建 有就取出再转对象 是否重复的判断
  if ((cookieStr = null)) {
    var miyalist = [
      {
        num: numval,
        pasw: passwordval
      }
    ];
    $.cookie("miya", cookiedata);
  } else if ((cookie = $.cookie("miya"))) {
    var miyaarr = JSON.parse(cookieStr);
    var hasSamenum = miyalist.some(function(item, index) {
      if (item.num === cookiedata.num) {
        alert("该手机号码已被注册！");
      }
      if (!hasSamenum) {
        var item = {
          num: numval,
          pasw: passwordval
        };
        miyaarr.push(item);
      }
      $.cookie("carts", JSON.stringify(cartslist));
    });
  }
});
