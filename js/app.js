$(document).ready(function() {
  var draw = SVG('map').size(500, 500);
  var stars = draw.set();
  var i = 0;
  while (i < 30) {
    x = getRandomInt(10, 490);
    y = getRandomInt(10, 490);

    if (notOverlapping(stars, x, y)) {
      var star = draw.circle(10).attr({cx: x, cy: y});
      stars.add(star);
      i++;
    }
  }
});

var notOverlapping = function(set, x, y) {
  var b
  set.each(function() {
    if      (this.inside(x - 7, y - 7)) { b = false; }
    else if (this.inside(x + 7, y - 7)) { b = false; }
    else if (this.inside(x - 7, y + 7)) { b = false; }
    else if (this.inside(x + 7, y + 7)) { b = false; }
    else if (this.inside(x, y - 7))     { b = false; }
    else if (this.inside(x, y + 7))     { b = false; }
    else if (this.inside(x + 7, y))     { b = false; }
    else if (this.inside(x - 7, y))     { b = false; }
  });
  return b === undefined ? true : b;
}

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
