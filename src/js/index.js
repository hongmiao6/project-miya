var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 水平切换选项
    speed: 400,
    loop: true, // 循环模式选项 r
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