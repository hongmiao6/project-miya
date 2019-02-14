var mySwiper = new Swiper(".swiper-container", {
  direction: "horizontal", // 水平切换选项
  speed: 400,
  loop: true, // 循环模式选项
  autoplay: true,
  // 如果需要分页器
  pagination: {
    el: ".swiper-pagination"
  }
});
//  右边固定小图效果
$("#last-lis").mouseenter(function() {
  // $('#move-pic').slideToggle(1000);
  $("#move-pic").css("display", "block");
  $("#move-pic").animate({ right: "75px" });
});
$("#last-lis").mouseleave(function() {
  $("#move-pic").css("display", "none");
  $("#move-pic").animate({ right: "105px" });
});
// 获取屏幕滚动条高度
$(window).scroll(function() {
  //开始监听滚动条
  //获取当前滚动条高度
  var topp = $(document).scrollTop();
  if (topp > 200) {
    $("#left-icon img").show();
    $("#rit-icon").show();
  } else {
    $("#left-icon img").hide();
    $("#rit-icon").hide();
  }
});
//  回到顶部
$(".triangle_border_down").on("click", function() {
  $("html,body").animate({ scrollTop: 0 }, 100);
});

//   请求为你推荐数据
$.ajax("http://localhost:8888/php/index.json", {
  dataType: "json"
}).then(render);
function render(res) {
  //  console.log(res)
  var aside = res.aside;
  // console.log(aside);
  var hhtml = template("botm", { list0: aside });
  $(".left-list").html(hhtml);
  var list = res.foryou;
  // console.log(list)
  var list2 = res.dapai;
  // console.log(list2)
  var html = template("list1", { list: list });
  $(".foto").html(html);
  var html2 = template("list2", { list2: list2 });
  $(".cont").html(html2);
  var list3 = res.beibei;
  //  console.log(list3)
  var html3 = template("list3", { list3: list3 });
  $(".cont3").html(html3);
  var list4 = res.duoweixi;
  //  console.log(list4)
  var html4 = template("list4", { list4: list4 });
  $(".cont4").html(html4);
  var list5 = res.daiweibeila;
  //  console.log(list5)
  var html5 = template("list5", { list5: list5 });
  $(".cont5").html(html5);
  var list6 = res.aiyimei;
  //  console.log(list6)
  var html6 = template("list6", { list6: list6 });
  $(".cont6").html(html6);
}

//  搜索框接口
var Search = document.getElementById("search");
var List = document.getElementById("list");
// function clear (){
//   if(Search.value =""){
//     //console.log(Search.value);
//     //console.log(1);
//    // alert(1);
//     //list.style.display="none";
//   }
// }
// 键盘按下 下拉框出现
Search.onkeydown = function() {
  list.style.display="block";
  list.style.border = "2px solid #ff3893";
  list.style.borderbottom = 0;
  list.style.background = "#fff";
};
Search.onkeyup = function(){
  if(!Search.value){
    //console.log(1);
    list.style.display="none";
  }
}

// 事件委托 点击目标对象li委托给父元素ul
$("#list").on("mousedown","li",function(){
$("#search").val($(this).html());
list.style.display="none";
})

// 搜索框失焦 下拉框隐藏
Search.onblur = function(){
  list.style.display="none";
}

// 添加监听事件 input => 输入时间
Search.addEventListener("input",baidu);
// 利用函数节流实现百度搜索;
var showNum = 4;
var timer = null;
function baidu() {
  if (timer !== null) {
    //如果在规定时间之内已经执行过一次了,就不用在执行了;
    return false;
  }
  //设置一个定时器，让input触发事件，100毫秒执行一次，不必一直触发
  timer = setTimeout(function() {
    // console.log(search.value);
    // 1. 发送一个jsonp请求; 请求回来的数据渲染页面 即将数据库返回的数据进行页面布局 将搜索信息放到ul li中;
    var url = `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${
      search.value
    }&json=1&p=3&sid=1422_21089_28131_26350_28266&req=2&csor=2`;

    jsonp(url, "cb") //cb是百度接口定义的回调函数 我们就以这个回调来接收响应的数据
      .then(function(res) {
        //console.log(res.s); //res是后端相应的数据 res里的s（key）才是我们需要用到的数据
        var html = "";
        res.s.every((item, index) => {
          html += `<li>${item}</li>`;
          return index < showNum;
        });
        list.innerHTML = html;
      });
    timer = null;
  }, 100);
}
// 鼠标移入左边列表 侧边显示隐藏

$(".left-list").mouseenter(function(){
   $('.showbox').css({"display":"block"})
})
$(".showbox").mouseenter(function(){
   $('.showbox').css({"display":"block"})
})
$(".inner a").mouseenter(function(){
   $(this).css({"color":"#ff3893"})
})
$(".inner a").mouseleave(function(){
   $(this).css({"color":"#666666"})
})
$(".showbox").mouseleave(function(){
   $('.showbox').css({"display":"none"})
})
$(".left-list").mouseleave(function(){
   $('.showbox').css({"display":"none"})
})
// 购物车
$(".shop").click(function(){
  location.href = "http://localhost:8888/html/cart.html"
})
$(".shop").mouseenter(function(){
  $(".shop").css({"borderLeft":"1px solid #ff3893","borderRight":"1px solid #ff3893","borderTop":"1px solid #ff3893","borderBottom":"1px solid #fff"});
  // $(".hide-content").css({"borderTop":"0"})
  $(".hide-content").show();
})
$(".shop").mouseleave(function(){
  $(".shop").css({"border":"1px solid #e5e5e5"});
  $(".hide-content").hide();
})
