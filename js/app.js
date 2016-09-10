$(document).ready(function() {
  var draw = SVG('map').size(500, 500);
  var stars = draw.set();
  var i = 0;
  while (i < 40) {
    x = getRandomInt(10, 490);
    y = getRandomInt(10, 490);

    if (notOverlapping(stars, x, y)) {
      var star = draw.circle(10).attr({cx: x, cy: y}).addClass('star');
      stars.add(star);
      i++;
    }
  }
});

var notOverlapping = function(set, x, y) {
  return set.each(function() {
    if      (this.inside(x - 5, y - 5)) { return false; }
    else if (this.inside(x + 5, y - 5)) { return false; }
    else if (this.inside(x - 5, y + 5)) { return false; }
    else if (this.inside(x + 5, y + 5)) { return false; }

    else if (this.inside(x, y - 5)) { return false; }
    else if (this.inside(x, y + 5)) { return false; }
    else if (this.inside(x - 5, y)) { return false; }
    else if (this.inside(x + 5, y)) { return false; }
  })
}

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
