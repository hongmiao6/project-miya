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
      console.log(aside);
      var hhtml = template("botm",{list0:aside});
      $(".left-list").html(hhtml);
      var list = res.foryou;
      // console.log(list)
      var list2 = res.dapai;
      // console.log(list2)
      var html = template("list1",{list:list});
       $(".foto").html(html);
      var html2 = template("list2",{list2:list2});
       $('.foto2').html(html2);
     }
