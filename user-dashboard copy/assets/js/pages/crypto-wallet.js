// Growth Chart
var options = {
    chart: {
        height: 280,
        type: "area",
        toolbar: {
            show: false,
        }
    },

    dataLabels: {
        enabled: false
    },

    colors: ['#E266ED'],

    series: [
        {
            name: "Views",
            data: [6435, 10435, 7435, 10435, 5688, 3457, 9345]
        }
    ],

    grid: {
        show: false,
        padding: {
            right: 0
        },
        xaxis: {
            lines: {
                show: false
            }
        },   
        yaxis: {
            lines: {
                show: false
            }
        }
    },

    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.1,
            opacityTo: 0.9,
            stops: [0, 90, 100]
        },
        colors: ['#E266ED'],
    },

    markers: {
        colors: ['#E266ED']
    },

    xaxis: {
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Jun",
            "Jul",
            "Aug",
        ]
    }
};

var chart = new ApexCharts(document.querySelector("#growth-chart"), options);

chart.render();

$(document).ready(function() {

    // Crypto List
    $('.content-left-top .crypto-list .crypto').on('click', function() {
        $('.content-left-top .crypto-list .crypto').removeClass('active');
        $(this).addClass('active');
    });

    // View More Buttons
    $('.content-left-bottom .crypto-list .view-more-btn').on('click', function() {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');

            $('.content-left-bottom .crypto-list .crypto').removeClass('active');
            $('.content-left-bottom .crypto-list .crypto-visible').addClass('active');

            $(this).html('View More...');
        } else {
            $(this).addClass('active');

            $('.content-left-bottom .crypto-list .crypto').addClass('active');

            $(this).html('View Less');
        }
    });

    $('.content-left-bottom .transaction-list .view-more-btn').on('click', function() {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');

            $('.content-left-bottom .transaction-list .transaction').removeClass('active');
            $('.content-left-bottom .transaction-list .transaction-visible').addClass('active');

            $(this).html('View More...');
        } else {
            $(this).addClass('active');

            $('.content-left-bottom .transaction-list .transaction').addClass('active');

            $(this).html('View Less');
        }
    });

});