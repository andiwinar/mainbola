/* Scroll to top */
$(function() {
    $(window).scroll(function() { 
        if($(this).scrollTop()>100) { 
            $('.top').fadeIn()
        } else { 
            $('.top').fadeOut();
        }
    });
    
    $('.top').click(function(){
        $('html,body').animate({scrollTop:0},1000);
        return false
    })
});