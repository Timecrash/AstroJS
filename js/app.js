var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function() {
  var draw = SVG('map').size(500, 500);
  for (i = 0; i < 20; i++) {
    x = getRandomInt(10, 490);
    y = getRandomInt(10, 490);

    draw.circle(10).attr({cx: x, cy: y});
  }
});

/**
var star = draw.circle(40).attr({fill: "green"}).addClass("star");
var star2 = draw.circle(50).attr(
  {fill: "steelblue",
   cx: 480,
   cy: 480,
   name: "Delta Pavonis"}).addClass("star");
$(".star").hover(function() {
  var name = $($(this).attr('name'));
  map.append(name).slideToggle();
});
**/
