$(document).ready(function() {

<<<<<<< HEAD
// For gallery images
	$('.work').mouseenter(function() {
		$(this).find('.thumb').fadeTo("fast",0.5);
		$(this).find('h4 a').css("color","rgb(216,165,95)");
	});

	$('.work').mouseleave(function() {
		$(this).find('.thumb').fadeTo("fast",1);
		$(this).find('h4 a').css("color","rgb(175,142,96)");
	});

	$('#social img').mouseenter(function() {
		$(this).fadeTo("fast",1);
	});

	$('#social img').mouseleave(function() {
		$(this).fadeTo("fast",0.7);
	});

=======
>>>>>>> gh-pages
// Navigation animation when scrolling
	var header_up = false;

	$(window).scroll(function() {
		
	console.log("scroll");

		if($(window).scrollTop() > 30) {
			if(header_up === false) {
				$('.headermain').css("border-bottom","1px solid rgb(243,231,217)").stop().animate({marginTop:"-2.25em"},"fast");
				header_up = true;
			}
		} else {
			if(header_up === true) {
			$('.headermain').css("border-bottom","none").stop().animate({marginTop:"0em"},"fast");
			header_up = false;
		}
	}

	});

<<<<<<< HEAD
// For project page navigation

	$('.pagenav img').mouseenter(function() {
		$(this).fadeTo("fast",1);
	});

	$('.pagenav img').mouseleave(function() {
		$(this).fadeTo("fast",0.7);
	});
=======
>>>>>>> gh-pages

});