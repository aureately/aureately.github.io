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

// For Personal Projects
	$('.personalprojects img').mouseenter(function() {
		$(this).fadeTo("fast",0.7);
	});

	$('.personalprojects img').mouseleave(function() {
		$(this).fadeTo("fast",1);
	});

// For social icons

	$('.followme img').mouseenter(function() {
		$(this).fadeTo("fast",0.7);
	});

	$('.followme img').mouseleave(function() {
		$(this).fadeTo("fast",1);
	});
	
	$('.footericon').mouseenter(function() {
		$(this).fadeTo("fast",0.7);
	});

	$('.footericon').mouseleave(function() {
		$(this).fadeTo("fast",1);
	});

});


  // Get the .gif images from the "data-alt".
	var getGif = function() {
		var gif = [];
		$('img').each(function() {
			var data = $(this).data('alt');
			gif.push(data);
		});
		return gif;
	}

	var gif = getGif();

	// Preload all the gif images.
	var image = [];

	$.each(gif, function(index) {
		image[index]     = new Image();
		image[index].src = gif[index];
	});

	// Change the image to .gif when clicked and vice versa.
	$('figure').on('click', function() {

		var $this   = $(this),
				$index  = $this.index(),
				
				$img    = $this.children('img'),
				$imgSrc = $img.attr('src'),
				$imgAlt = $img.attr('data-alt'),
				$imgExt = $imgAlt.split('.');
				
		if($imgExt[1] === 'gif') {
			$img.attr('src', $img.data('alt')).attr('data-alt', $imgSrc);
		} else {
			$img.attr('src', $imgAlt).attr('data-alt', $img.data('alt'));
		}

		// Add play class to help with the styling.
		$this.toggleClass('play');

	});
