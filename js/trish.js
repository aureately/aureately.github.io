$(document).ready(function() {

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


});