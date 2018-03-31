$(document).ready(function() {


// Hover Equals Arrow

    $('.thumbnail a').mouseover(function() {
        $(this).find('.arrowthumb').fadeIn('slow');
        $(this).mouseout(function() {
        	$(this).find('.arrowthumb').css('display', 'none').fadeOut('slow');
        });
    });


// Overlay for Nodebots

	$('.layout1').click(function() {
		$('.overlay1').fadeIn('fast');
		$('.overlay1').click(function() {
			$('.overlay1').fadeOut('fast');
		});
	});

	$('.layout2').click(function() {
		$('.overlay2').fadeIn("fast");
		$('.overlay2').click(function() {
			$('.overlay2').fadeOut('fast');
		});
	});

});





