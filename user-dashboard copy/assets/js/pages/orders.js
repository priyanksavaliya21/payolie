$(document).ready(function() {

    // Tabs
    $('.tabs button').on('click', function() {
        $('.tabs button').removeClass('active');
        $(this).addClass('active');
    });

    // Orders
    $('.order .order-top .order-top-right .order-top-right-bottom .details-btn').on('click', function() {
        $(this).parent().parent().parent().parent().toggleClass('collapsed');
    });

});