// Growth Chart
var options = {
    chart: {
        height: 280,
        type: "area",
        toolbar: {
            show: false,
        },
        fontFamily: 'Poppins, sans-serif',
        foreColor: '#A2A3A5',
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

var chart = new ApexCharts(document.querySelector("#growth-chart_1"), options);

chart.render();




// Growth Chart
var options = {
    chart: {
        height: 280,
        type: "area",
        toolbar: {
            show: false,
        },
        fontFamily: 'Poppins, sans-serif',
        foreColor: '#A2A3A5',
    },

    dataLabels: {
        enabled: false
    },

    colors: ['#E266ED'],

    series: [
        {
            name: "Views",
            data: [2200, 3800, 2500, 4200, 6300, 6700, 4200]
           
        }
    ],

    grid: {
        show: true,
        padding: {
            right: 0
        },
        xaxis: {
            lines: {
                
            }
        },   
        yaxis: {
            lines: {
                
            },
            
        }
    },

    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.1,
            opacityTo: 0.9,
            stops: [0, 1000, 2000]
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
    },
  yaxis: {
    min: 2000,
    max: 8000,
    tickAmount: 3,
  },
    
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

     // Model Open
     // $('#widthdrawalModalCenter').hide();
     // $('.widthdrawal_common_btn').click(function(){
     //     $('#widthdrawalModalCenter').show();
     // });
     // $('.cancel_model_btn').click(function(){
     //    $('#widthdrawalModalCenter').hide();
     // });

     $('.widthdrawal_common_btn').on('click', function(e) {
        $('.model_warp').addClass('active');
        $('.cm_modal_bckdrop').addClass('active');
     });

     $('.cancel_model_btn').on('click', function(e) {
        $(".model_warp").removeClass("active");
        $('.cm_modal_bckdrop').removeClass('active');
     });

     $(document).click(function(event) {
      //if you click on anything except the modal itself or the "open modal" link, close the modal
      if (!$(event.target).closest(".widthdrawalModal,.widthdrawal_common_btn").length) {
        $("body").find(".model_warp").removeClass("active");
        $('.cm_modal_bckdrop').removeClass('active');
      }
    });



});