//  左边商品列表数据
$.ajax("http://localhost:8888/php/index.json", {
  dataType: "json"
}).then(renders);
function renders(res) {
  console.log(res);
  var aside = res.aside;
  // console.log(aside)
  var hhtml = template("botm", { list0: aside });
  $(".left-list").html(hhtml);
}

$(".line8").mouseenter(function() {
  $(".hid").slideToggle();
});
$(".line8").mouseleave(function() {
  $(".hid").slideToggle();
});

// 鼠标移入下方小图 边框变色 
$(".smallbox li").mouseenter(function() {
  $(this).css({ "border-color": "rgb(255, 56, 147)" });
  var index = $(this).index();//获取每个小图的下标
  console.log(index);
  // 鼠标移入下方小图 上方大图根据下标对应显示 
  $("#small img").eq(index).show().siblings("img").hide();
  $(".big img").eq(index).show().siblings().hide();
});

// $("#mark").mouseenter(function(){
//   $(".big").show();
// })

// 鼠标移入左边盒子 触发三个事件 移入 移除 移动
$("#small img").on({
  // 移入左边盒子 遮罩层 右边大图盒子显示
  "mouseenter":function(){
    $(".big").show();
    // $("#mark").css({"display":"block"});
  },
  // 移出左边盒子 右边大图盒子隐藏
  "mouseleave":function(){
    $(".big").hide();
  },
   // 移动 右边图片放大显示
   "mousemove":function(e){
    var e = e || event;
    // 获取遮罩层的left和top值
    var left = e.pageX - $("#mask").width()/2-$("#small").offset().left;
    var top = e.pageY - $("#mask").height()/2-$("#small").offset().top;
    // left和top运动最大边界 大盒子宽(高) - 遮罩自身宽(高)
    var maxL = $("#small").width()-$("#mask").width();
    var maxT = $("#small").height()-$("#mask").height();
    // 获取遮罩运动时的left和top值
    left = Math.min( maxL , Math.max(0,left) );
    top = Math.min( maxT , Math.max(0,top) );
    $("#mask").css({
      left : left,
      top : top
    })
    //右侧图片动起来
    var x1 = left* $(".big img").width()/$("#small").width();
    var y1 = top* $(".big img").height()/$("#small").height();
    
    $(".big img").css({
      left : -x1,
      top : -y1
    })
  }
})





$(".smallbox li").mouseleave(function() {
  $(this).css({ "border-color": "#f7f7f7" });
});
















$(window).scroll(function() {
  var top = $(document).scrollTop();
  // console.log(top);
  if (top > 1700) {
    $(".navs").css({ position: "fixed", top: "0" });
  } else {
    $(".navs").css({ position: "relative", top: "1500" });
  }
});

$(".change").click(function() {
  if ($(this).html("展开")) {
    $("#show").animate({height: "270px"});
    // $("#show").removeClass().addClass("back")
    $(this).html("收起");
  }else if ($(this).html("收起")){
    // $("#show").animate({height: "111px"});
    $("#show").addClass("content")
    $(this).html("展开");
  }
});

