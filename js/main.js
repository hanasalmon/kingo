
(function(){
  "use strict";


$(function ($) {

    //Detecting viewpot dimension
     var vH = $(window).height();
     var vW = $(window).width();
     var cW = $('.container').width();
     var fH = $('.sticky-foot').height();


    $('.fullheight').css('height',vH);


     //Adjusting Intro Components Spacing based on detected screen resolution
     $('#intro, .fullheight, .text-anim-container, .pace-running').css('height',vH);
    

    
    $('.foot-pad').css('margin-bottom',fH);



    //Navigation Sub Menu Triggering
    $('.trigger-sub-nav').click(function(){
        $('.sub-nav').slideUp('fast');
        $(this).find('.sub-nav').slideDown('slow');
    })


    //Mobile Menu (multi level)
    $('ul.slimmenu').slimmenu({
        resizeWidth: '1200',
        collapserTitle: 'King Oak College',
        easingEffect:'easeInOutQuint',
        animSpeed:'medium',
    });



});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends


