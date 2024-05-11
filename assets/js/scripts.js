$(document).ready(function(){

	// Banner Carousel
	$('.strick_carousel').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:true, 
		navText: ["<img src='assets/images/strike/left.png'>","<img src='assets/images/strike/right.png'>"]
		// autoplay:true,
	});

	$(".menu ul li a, .down_arrow a").click(function () {
		$("html,body").animate(
		  {
			scrollTop: $($(this).attr("href")).offset().top,
		  },
		  1000
		);
		return false;
	  });


	  
	// $(document).on('click','.mobile_bars',function(){
	// 	$('.header_menu').slideToggle();
	// });

	var count = 0;

	$(document).on('click','.mobile_bars a',function(){
		if(count == 0){ 
			$('.menu').fadeIn(); 
			$(this).html('<i class="fa-solid fa-xmark"></i>');
			count = 1;
		}else{
			$('.menu').fadeOut(); 
			$(this).html('<i class="fas fa-bars"></i>');
			count = 0;
		}
	})



});