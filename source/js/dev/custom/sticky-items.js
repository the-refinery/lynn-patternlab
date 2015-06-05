/**
 *  Sticky Items
 *
 *  Looks for page elements with a class `js-sticky`,
 *  and toggles a class `fixed` to allow them to 
 *  stick once they reach the top off the page. 
**/

$(document).ready(function() {
    var stickyItems = $('.js-sticky'),
        origOffsetY =  [];

    // Function to get original position of items
    function origOffset(items) {
        items.each(function(index, element) {
            origOffsetY[index] = $(this).offset().top;
        });
    }

    // Function to toggle sticky class
    function stickEm(items) {
        // Run once to get initial values
        if (origOffsetY[0] == null) {
            origOffset(items);
        }

        // Loop the sticky items to determine when to stick
        return items.each(function(index, element) {
            $(window).scrollTop() >= origOffsetY[index] ?
                $(this).addClass('fixed') :
                $(this).removeClass('fixed');
        });
    }

    // Initial state
    // If pre-scrolled, see if anything sticks
    stickEm(stickyItems);

    // Scroll should trigger sticky check
    $(window).scroll(
        debounce(function(e) {
            stickEm(stickyItems);
        }, 10)
    );

    // Window resize should recalculate positions
    $(window).resize(
        debounce(function(e) {
            // Remove all fixed tags to get true original position
            stickyItems.each(function(index, element) {
                $(this).removeClass('fixed');
            });

            // New original position
            origOffset(stickyItems);

            // Check if anything should be stuck
            stickEm(stickyItems);
        }, 500)
    );
});
