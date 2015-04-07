/*!
 *	Outbound links
 */

$(document).ready(function(){
    $('a.tracker').click(function(){
          _gaq.push(['_trackPageview', '/outgoing/' + $(this).attr('href')]);
    });
});