$(document).ready(function() {

    // Info Popup
    $('.table .row').on('click', function() {
        $('body').css('overflow', 'hidden');
        $('.info-popup').addClass('active');
    });

    $('.info-popup-close-trigger').on('click', function() {
        $('body').css('overflow', 'auto');
        $('.info-popup').removeClass('active');
    });

});