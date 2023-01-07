
$(window).resize(function(){

	/*--------- founder slider Js ----------*/
	founder();
	working();

});
 $(document).ready(function(){

 	/*--------- Wow Js ----------*/
    new WOW().init();

  

    /*--------- menu js ----------*/
    $('.menu_toggle_btn').click(function(){
        $('.main_header').toggleClass('menu_open');
        $("body").toggleClass("cm_overflow");
    });

    /*--------- founder slider Js ----------*/
	founder();
	working();

    /*--------- minus and plus Js ----------*/
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 0 ? 0 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

    /*--------- Frequently asked questions Js ----------*/
	$(".set > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
        
    } else {
        
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });

	/*--------- rangeslider Js ----------*/
	  // $('input[type="range"]').rangeslider({
   //      polyfill: false
   //    });

   // var = range_slider = document.getElementById('range_slider');
   // var = selectvalue = document.getElementById('selectvalue');

   // selectvalue.innerHTML = range_slider.value;

   // slider.oninput = function(){
   // 	selectvalue.innerHTML = this.value;
   	 
   // }

      /*--------- dropdown Js ----------*/
    $('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });

});

 /*--------- founder slider Js ----------*/
 function founder() {
    var checkWidth = $(window).width();

    var owlPost = $(".founder_slider_1");

    if (checkWidth >= 1200) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel');

    } else if (checkWidth <= 1199) {
        owlPost.addClass('owl-carousel');

        owlPost.owlCarousel({
        	navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
            loop:true,
            dots:false,
		    margin:10,
		    nav:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        380:{
		            items:2
		        },
		        575:{
		            items:2
		        },
		        650:{
		            items:3
		        },
		        768:{
                    items:4
		        },
		        992:{
		            items:4
		        }
		    }
        });
    }
}

 /*--------- founder slider Js ----------*/
 function working() {
    var checkWidth = $(window).width();

    var owlPost = $(".founder_slider_2");

    if (checkWidth >= 1200) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel');

    } else if (checkWidth <= 1199) {
        owlPost.addClass('owl-carousel');

        owlPost.owlCarousel({
        	navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
            loop:true,
            dots:false,
		    margin:10,
		    nav:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        380:{
		            items:2
		        },
		        575:{
		            items:2
		        },
		        650:{
		            items:3
		        },
		        768:{
                    items:4
		        },
		        992:{
		            items:4
		        }
		    }
        });
    }
}	

