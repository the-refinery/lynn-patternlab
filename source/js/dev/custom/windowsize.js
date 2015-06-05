$(document).ready(function() {
    var fitItems = $('.js-fitwindow'),
        wHeight = $( window ).height(),
        wWidth = $( window ).width();

    function fitWindow(items) {
        // Loop the items
        return items.each(function(index, element) {

            // Is this a banner with image?
            if ( $(this).hasClass('card_banner') ) {
                var imgHeight = $(this).find('.landscape').height();

                if ( imgHeight > wHeight) {
                    $(this).css('height', wHeight);
                }
                else {
                    $(this).css('height', 'auto');
                }
            }
            else {
                $(this).css('height', wHeight);
            }
        });
    }

    fitWindow(fitItems);

    // Window resize should recalculate positions
    $(window).resize(
        debounce(function(e) {
            // Check if anything changed
            fitWindow(fitItems);
        }, 500)
    );
});