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
        show: true,
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
                show: true
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

    // Tabs
    $('.request-box .requests .request').on('click', function() {
        $('.request-content-box').addClass('active');
    });

    $('.request-content-box-close-trigger').on('click', function() {
        $('.request-content-box').removeClass('active');
    });

});