$(function() {
	$('.pullquote').each(function() {
		var $parentObject = $(this).parent();

		$parentObject.css('position', 'relative');
		$(this).clone()
			.addClass('pulledquote')
			.prependTo($parentObject);
	});
});