$(function(){
    
// back to top js
   $('.back2top').on('click', function(){
      $('html, body').animate({scrollTop:0},1500); 
   }); 
    
   $(window).on('scroll',function(){
       var scrolling = $(this).scrollTop();
       if(scrolling > 200){
           $('.back2top').fadeIn();
       }
       else {
           $('.back2top').fadeOut(1000);
       }
   });
    
// Sticky Menu js
$(window).on('scroll',function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 150){
        $('.header-bg').addClass('bg');
    }
    else{
        $('.header-bg').removeClass('bg');
    }
});  
    
// Smooth scroll js
    var html_body = $('html, body');
    $('.menu a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 101
                }, 1500);
                return false;
            }
        }
    });    
    
    
});