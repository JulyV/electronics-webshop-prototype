$(document).ready(function() {
var movementStrength = 50;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$(".b-content").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 50;
          $('.b-gallery').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
});
