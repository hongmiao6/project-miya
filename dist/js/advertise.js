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
//  上方隐藏图 滚动显示
$(window).scroll(function(){
    var tp = $(document).scrollTop();
    if(tp >= 600){
        $('.showtop').show();
    }else{
        $('.showtop').hide();
    }
})
