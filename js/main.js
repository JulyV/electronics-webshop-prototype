$(function() {
var movementStrength = 25;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$("main").mousemove(function(e) {
    var pageX = e.pageX - ($(window).width() / 2);
    var pageY = e.pageY - ($(window).height() / 2);
    var newvalueX = width * pageX * -1 - 25;
    var newvalueY = height * pageY * -1 - 50;
    $(".gallery-layout").css("background-position", newvalueX+"px     "+newvalueY+"px");
});
});

$(function() {
	$(".main-menu li").click(function() {
		$('li > ul').not($(this).children("ul").toggle()).hide();
	});
});

$(function(){
	$(".menu-button img").click(function() {
		$(".main-menu").slideToggle("fast");
	});
});

$(function() {
	$(window).on('resize', function() {
		var elWidth = $(".header-container").width();
		var parentWidth = $(".header").offsetParent().width();
		var percent = 100*elWidth/parentWidth;

		if (percent < 100) {
			$(".main-menu").css("display", "block");
		} else {
			$(".main-menu").css("display", "none");
		};
	});
});
