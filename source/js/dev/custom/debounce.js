/**
 *  Debounce
 *
 *  Limits how often a function is triggered.
 *  Pass immediate to trigger the function at the start
 *  of the timer, instead of the end.
 *
 *  Modified from Underscore.js
 *  http://davidwalsh.name/function-debounce
**/

function debounce(fn, delay, immediate) {
    var timeout;

    return function() {
        var context = this,
            args = arguments;

        clearTimeout(timeout);

        if (immediate && !timeout) fn.apply(context, args);

        timeout = setTimeout(function() {
            timeout = null;
            if (!immediate)
            fn.apply(context, args);
        }, delay);
    };
};
