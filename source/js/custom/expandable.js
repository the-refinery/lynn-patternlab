/*$(document).ready(function(){
    alert('testing');
    var expansions = $('.expandable');
    expansions.toggleClass('on');
    
    expansions.children('header').click(function(){
        $(this).parent().toggleClass('on');
    });
    expansions.children('ul').click(function(){
        alert('hello');
        $(this).parent().toggleClass('on');
    });
});*/

$(document).ready(function(){
    alert('hello');
    var expansions = $('.expandable');
    expansions.toggleClass('on');
    
    expansions.children('header').click(function(){
        $(this).parent().toggleClass('on');
    });
    expansions.children('ul.menu-vertical').click(function() {
        $(this).parent().toggleClass('on');
    });
});

