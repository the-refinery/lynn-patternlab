/**
 *  Featherlight
 *
 *  Custom script to enable featherlight.js lightbox
**/

$(document).ready(function(){

    // function to swap content based on body size
    function featherlightSwitcher(width) {
        if ((width >= 768) && ($('.video-container iframe').length == 1)) {
            // replace the html chunk for the video iframe with an image
            $('.video-container').toggleClass('fitvidsignore');
            $('.video-container').html('<a href="https://www.youtube-nocookie.com/embed/80RERWJImIM?rel=0&amp;showinfo=0&amp;theme=light" data-featherlight="iframe" id="video"><img src="video-poster.png" width="100%"></a>');
            $('#video').featherlight({iframeWidth: 700, iframeHeight: 429 });
        } else if ((width < 768) && ($('.video-container #video').length == 1)) {
            // replace the image with the iframe of the video
            $('.video-container').toggleClass('fitvidsignore');
            $('.video-container').html('<iframe frameborder="0" src="http://www.youtube-nocookie.com/embed/80RERWJImIM?rel=0&amp;theme=light&amp;showinfo=0&amp;vq=hd1080" id="fitvid103554"></iframe>');
        }
    }


    // initial size check
    featherlightSwitcher(window.innerWidth);


    // if window is resized, check for changes
    $(window).resize(debounce(function (event) {
            featherlightSwitcher(window.innerWidth);
    }, 500));

});
