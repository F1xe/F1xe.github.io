
$(window).on("resize", function () {
	var banner_height = $('.banner').height();
	$('.header').css('height', banner_height);
	console.log(banner_height)
}).resize();


$( document ).ready(function() {

	$('.menu_icon').on('click', function(){
		$(this).toggleClass('active');
		$('.top_mob_menu').slideToggle();
	});


// 	$(window).on("resize", function () {
//     var maxH = 0;  
//     $('.review_item').each(function(){
         
//         $(this).css('height','auto');
         
//         if ( $(this).height() > maxH ) {
//             maxH = $(this).height();
//         }
         
//     });
     
//     $('.review_item').height(maxH);
//     console.log(maxH);
// }).resize();



    $('.reviews_wrap').slick({
    	infinite: true,
 		slidesToShow: 3,
 		slidesToScroll: 3,
 		dots: true,
 		arrows: true,
 		// prevArrow: "<img src='img/arrow.png' class='prev' alt='1'>",
 		// nextArrow: "<img src='img/arrow.png' class='next' alt='2'>",
 		responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true
      }
    }
  ]
    });


    $('.question').on('click', function(){

    	if($(this).hasClass('active')){
    		$(this).removeClass('active');
    	}
    	else{
    		$(this).addClass('active');
    	}
    	
    	$(this).parent().find($('.answer')).slideToggle();
    	
    });



});