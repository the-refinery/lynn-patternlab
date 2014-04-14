$(function() {
	$('.pullquote').each(function() {
		var $parentObject = $(this).parent();

		// Ensure the parent will accept the float
		$parentObject.css('position', 'relative');

		// Make the pullquote
		$(this).clone()
			.addClass('pulledquote')
			.removeClass('pullquote')
			.prependTo($parentObject);

		// Remove any positioning from original span
		$(this).removeClass().addClass('pullquote');
	});
});