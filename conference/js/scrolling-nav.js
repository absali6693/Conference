//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 450) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-fixed-top").removeClass("transparent-color");
        $(".navbar-fixed-top").addClass("black-color");
        $(".a-color").removeClass("white-color");
        $(".a-color").addClass("blue-color");
       
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-fixed-top").removeClass("black-color");
        $(".navbar-fixed-top").addClass("transparent-color");
        $(".a-color").addClass("white-color");
        $(".a-color").removeClass("blue-color");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
