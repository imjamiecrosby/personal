/* Loading Script */

$(window).load(function() {
  $(".loader").delay(500).fadeOut();
  $("#mask").delay(1000).fadeOut("slow");
  $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $('.navbar').addClass('opaque');
        } else {
            $('.navbar').removeClass('opaque');
        }
    });
});


jQuery(function($) {
 $('.parallax-1').waypoint(function() {
    $('.chart').easyPieChart({
    barColor: '#2c3e50', 
    lineWidth: 13, 
    scaleColor: false, 
    trackColor: '#bdc3c7', 
    lineCap : 'square',    
    });
  },
  {
    offset: '40%',
    triggerOnce: true
  });
 
});


$(document).ready(function(){
  $(".fancybox").fancybox({
    helpers : {
        title: {
            type: 'inside'
        }
    }
  });
  $('.bxslider').bxSlider({
        auto: true,
        controls: false,
        pager: false
      });
});






