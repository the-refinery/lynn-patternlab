/**
 *  Featherlight
 *
 *  Custom script to enable featherlight.js lightbox
**/

$(document).ready(function(){
    var $featherlightItems = $('.js-featherlight');

    // Find all featherlight objects and store basic info
    $featherlightItems.each(function(index, element) {
        var videoSources = [
            "iframe[src*='player.vimeo.com']",
            "iframe[src*='www.youtube.com']"
        ];

        var $videoObj = $(this).find(videoSources.join(','));

        // Save a copy of the original html
        this.baseHTML = this.innerHTML;

        if ($videoObj) {
            this.videoImage = $(this).data('image');
            this.videoSrc = $videoObj.attr('src');
        }
    });

    // function to swap content based on body size
    function featherlightVideoSwitcher(width) {
        // Large screens use featherlight 
        if (width >= 768) {
            $featherlightItems.each(function(index, element) {
                // Create the html for the featherlight trigger
                this.featherlightHTML = '<span data-featherlight=\".js-featherlight-switch\" class=\"js-featherlight-switch\"><img src=\"' + this.videoImage + '\" class=\"full-width\" alt=\"Play video\" /></span>';

                // Initiate featherlight
                $(this).html(this.featherlightHTML).featherlight({
                    iframe: this.videoSrc,
                    root: this,
                    iframeWidth: 700,
                    iframeHeight: 429
                });
            });
        }
        // Small screens just display the video
        else if (width < 768) {
            $featherlightItems.each(function(index, element) {
                $(this).html(this.baseHTML);

                /*
                    Fitvid should be used by default,
                    but best to make sure.
                */
                if ($(this).hasClass('js-fitvid')) {
                    $(this).fitVids();
                }
            });
        }
    }


    // initial size check
    featherlightVideoSwitcher(window.innerWidth);


    // if window is resized, check for changes
    $(window).resize(debounce(function (event) {
            featherlightVideoSwitcher(window.innerWidth);
    }, 500));

});
