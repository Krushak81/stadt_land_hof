/*
var moveByElem = function(elem) {
    $(".animate-prev").removeClass("animate-prev");
    $(".animate-next").removeClass("animate-next");
    $('.prev').addClass("animate-prev").removeClass("prev");
    $('.next').addClass("animate-next").removeClass("next");
    var $prev = elem.prev()[0] != null ? elem.prev() : $('li:last-child');
    var $next = elem.next()[0] != null ? elem.next() : $('li:first-child');
    elem.attr('class', 'card active');
    $next.attr('class', 'card next');
    $prev.attr('class', 'card prev');
};



$(".card").swipe( {
    swipe:function(event, direction) {
        var $elem = direction == 'right' ? $('.prev') : $('.next');
        moveByElem($elem);
    }
});
*/




