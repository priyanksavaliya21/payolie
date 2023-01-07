$(document).ready(function() {

    // Side Bar
    $('.side-bar-open-trigger').on('click', function() {
        $('body').css('overflow', 'hidden');
        $('.side-bar').addClass('active');
    });

    $('.side-bar-close-trigger').on('click', function() {
        $('body').css('overflow', 'auto');
        $('.side-bar').removeClass('active');
    });

    $('.side-bar .side-bar-top ul').on('scroll', function() {
        if($('.side-bar .side-bar-top ul').scrollTop() > 0) {
            $('.sidebar-scroll-btn-desktop-v').html('Scroll Down');
            $('.sidebar-scroll-btn-mobile-v').html('Swipe Down');
        } else {
            $('.sidebar-scroll-btn-desktop-v').html('Scroll Up');
            $('.sidebar-scroll-btn-mobile-v').html('Swipe Up');
        }
    });

});