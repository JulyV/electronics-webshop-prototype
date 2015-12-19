$(document).ready(function() {
var movementStrength = 25;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$("main").mousemove(function(e) {
    var pageX = e.pageX - ($(window).width() / 2);
    var pageY = e.pageY - ($(window).height() / 2);
    var newvalueX = width * pageX * -1 - 25;
    var newvalueY = height * pageY * -1 - 50;
    $('.gallery').css("background-position", newvalueX+"px     "+newvalueY+"px");
});

$(".main-menu li").click(function(){
	$('li > ul').not($(this).children("ul").toggle()).hide();
});

});

