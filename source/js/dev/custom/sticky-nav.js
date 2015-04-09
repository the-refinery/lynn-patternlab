$(document).ready(function() {
	$(window).bind('scroll', function() {
		var clearHeader = $('header.header').height();
		if ($(window).scrollTop() > clearHeader) {
			$('.nav-sticky').addClass('fixed');
		}
		else {
			$('.nav-sticky').removeClass('fixed');
		}
	});
});