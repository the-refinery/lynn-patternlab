$(document).ready(function(){
    /*
        The expand/collapse feature is only triggered when clicked,
        either on the element or a specified ex-handler. The 
        ex-panel may contain clickable items, so we don't want 
        this to unnecessarily close.

        A js-enabled class is inserted as a flag for CSS.

        The default action of the expandable object is blocked.
        (i.e. <a class="expandable" href="http://google.com"> will 
        only trigger open/close of the expandable panel and never 
        go to the URL of the link.) Disable this on a per use basis
        by removing e.preventDefault() from the click event
    */
    $('.js-expand').each(function(index, element) {
        /*
            ex-handle, begin closed, no default

            The expandable class is inside a parent container, 
            which requires the triggers be applied to on the
            parent.

            Types:
                Accordian
                Card (with navigation)
        */
        if (
            $(element).parent().is('.accordion, .card-content, .card-details')
        ) {
            // Start state
            $(element).addClass('js-enabled').not('.is-closed').toggleClass('is-closed');

            // Click event
            $(element).children('.ex-handle').click(function(e) {
                e.preventDefault();
                $(this).parent().toggleClass('is-closed is-open');
            });
        }

        /*
            No ex-handle, begin closed, allow default

            Types:
                Navigation (main)
        */
        else if (
            $(element).hasClass('nav-main')
        ) {
            // Start state
            $(element).addClass('js-enabled').not('.is-closed').toggleClass('is-closed');

            // Click event
            $(element).click(function(e) {
                $(this).toggleClass('is-closed is-open');
            });
        }

        /*
            Default
        */
        else {
            $(element).click(function(e) {
                e.preventDefault();
                $(this).toggleClass('is-closed is-open');
            });
        }
    });
});