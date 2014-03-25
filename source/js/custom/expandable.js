$(document).ready(function(){
    /*
        Each usage may have unique rules, so walk through
        them and provide a generic fallback.
    */
    $('.expandable').each(function(index, element) {
        /*
            Accordian
            The expand/collapse feature is only triggered when the
            ex-handler is clicked. The ex-panel may contain clickable
            items, so we don't want this to unnecessarily close.
            Close only if javascript is enabled to not hide content.
        */
        //if ( $(element).parent().hasClass('accordion') ) {
        if ( $(element).parent().hasClass('accordion') ) {
            // Begin Closed
            $(element).not('.is-closed').toggleClass('is-closed');

            // Click Event
            $(element).children('.ex-handle').click(function(e) {
                e.preventDefault();
                $(this).parent().toggleClass('is-closed is-open');
            });
        }

        /*
            Block Listing
            Add extra content to the block listing with the expandable
            feature. Expansion will slide the 'hidden' content into
            the blocks' container.
        */

        else if ( $(element).parent().hasClass('block_listing') ) {
            // Listen for click
            $(element).children('.ex-handle').click(function(e) {
                e.preventDefault();
                $(this).parents('.block_listing').toggleClass('is-closed is-open');
            });
        }

        /*
            Navigation
            Close only if javascript is enabled to not hide content.
        */
        else if ( $(element).hasClass('nav-main') ) {
            // Begin closed
            $(element).not('.is-closed').toggleClass('is-closed');

            // Click Event
            $(element).click(function(e) {
                e.preventDefault();
                $(this).toggleClass('is-closed is-open');
            });
        }

        /*
            Default Expansion
        */
        else {
            $(element).click(function(e) {
                e.preventDefault();
                $(this).toggleClass('is-closed is-open');
            });
        }
    });
});