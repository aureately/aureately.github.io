$(document).ready(function() {

// For page load
	$('.featured').fadeIn(700, function() {
		$('.work').fadeIn(700, function() {
			$('footer').fadeIn(300);
		});
	});

	$('.page img').fadeIn(700);
	$('.descacross').fadeIn(700);
	$('.projectdesc').fadeIn(700, function() {
		$('footer').fadeIn(300);
	});
	$('.rslides').fadeIn(700);
	$('.viewer').fadeIn(700);

// For thumbnails

	$('.entry').mouseenter(function() {
		$(this).find('.thumbnail').fadeTo('fast',0.7);
	});
	$('.entry').mouseleave(function() {
		$(this).find('.thumbnail').fadeTo('fast',1);
	});

// For social icons

	$('.footericon').mouseenter(function() {
		$(this).fadeTo("fast",0.7);
	});

	$('.footericon').mouseleave(function() {
		$(this).fadeTo("fast",1);
	});

});