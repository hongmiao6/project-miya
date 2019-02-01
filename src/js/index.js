var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 水平切换选项
    speed: 400,
    loop: true, // 循环模式选项
    autoplay: true,
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
 })
//  右边固定小图效果
$('#last-lis').mouseenter(function(){
    // $('#move-pic').slideToggle(1000);
    $('#move-pic').css("display","block")
    $('#move-pic').animate({'right':'75px'})
 })
 $('#last-lis').mouseleave(function(){
    $('#move-pic').css("display","none")
    $('#move-pic').animate({'right':'105px'})
 })
 // 获取屏幕滚动条高度
$(window).scroll(function () {//开始监听滚动条
   //获取当前滚动条高度
   var topp = $(document).scrollTop()
   if(topp > 200){
      $("#left-icon img").show()
      $("#rit-icon").show()
   }else{
      $("#left-icon img").hide()
      $("#rit-icon").hide()
   }
});
//  回到顶部
$('.triangle_border_down').on('click',function(){
   $('html,body').animate({scrollTop:0},100);
})

//   请求为你推荐数据
 $.ajax("http://localhost:8888/php/index.json", {
       dataType: "json"
     }).then(render);
     function render(res) {
      //  console.log(res)
      var aside = res.aside;
      // console.log(aside);
      var hhtml = template("botm",{list0:aside});
      $(".left-list").html(hhtml);
      var list = res.foryou;
      // console.log(list)
      var list2 = res.dapai;
      // console.log(list2)
      var html = template("list1",{list:list});
       $(".foto").html(html);
      var html2 = template("list2",{list2:list2});
       $('.cont').html(html2);
       var list3 = res.beibei;
      //  console.log(list3)
       var html3 = template("list3",{list3:list3});
       $('.cont3').html(html3);
       var list4 = res.duoweixi;
      //  console.log(list4)
       var html4 = template("list4",{list4:list4});
       $('.cont4').html(html4);
       var list5 = res.daiweibeila;
      //  console.log(list5)
       var html5 = template("list5",{list5:list5});
       $('.cont5').html(html5);
       var list6 = res.aiyimei;
      //  console.log(list6)
       var html6 = template("list6",{list6:list6});
       $('.cont6').html(html6);
     }
