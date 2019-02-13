//  左边商品列表数据
$.ajax("http://localhost:8888/php/index.json", {
   dataType: "json"
 }).then(renders);
 function renders(res) {
   console.log(res);
   var aside = res.aside;
   // console.log(aside)
   var hhtml = template("botm",{list0:aside});
      $(".left-list").html(hhtml);
 }

 $('#ospan').click(function(){
    $('.lines-1').toggle()
});
$('#spans').click(function(){
   $('.lines-2').toggle()
});
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

 $('#last-lis').mouseenter(function(){
    // $('#move-pic').slideToggle(1000);
    $('#move-pic').css("display","block")
    $('#move-pic').animate({'right':'75px'})
 })
 $('#last-lis').mouseleave(function(){
    $('#move-pic').css("display","none")
    $('#move-pic').animate({'right':'105px'})
 })
//  回到顶部
$('.triangle_border_down').on('click',function(){
    $('html,body').animate({scrollTop:0},100);
 })

// 商品筛选吸顶效果
$(window).scroll(function () {
   var top = $(document).scrollTop();
   // console.log(top);
   
   if(top >= 650 && top < 2650){
      $(".choose").css({"position":"fixed","top":"630"})
   }else{
      $(".choose").css({"position":"absolute","top":"0"}) 
   }
})

//  请求商品信息数据
$.ajax("http://localhost:8888/php/product.json", {
    dataType: "json"
  }).then(render);

  function render(res) {
      console.log(res);
      var lists = res.pro;
      // console.log(lists);
      var html = template("product",{list:lists});
      $("#pro").html(html);
  }
  $(".swiper-pagination").pagination({
   totalData : 80,
   showData : 20,
   // callback : page
 });
 

 