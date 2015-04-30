/**
 *  date-time.js
 *
 *  Custom functions for date and time
**/

$(document).ready(function() {
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    var currentMonth = currentDate.getMonth()+1;
    var currentYear = currentDate.getFullYear();

    // Two digit formats
    var twoDigitMonth = ((currentMonth)>=10)? (currentMonth) : '0' + (currentMonth);
    var twoDigitDate = ((currentDay)>=10)? (currentDay) : '0' + (currentDay);
    var twoDigitYear = currentYear.toString().substr(2,2);

    function setCopyright() {
        return '&copy;&nbsp;' + currentYear + '&nbsp;Lynn University';
    }

    function setCopyrightLong() {
        return setCopyright() + '&nbsp;' + twoDigitMonth + '/' + twoDigitYear;
    }

    $('.js-copyright').html(setCopyright());
    $('.js-copyright-long').html(setCopyrightLong());
});