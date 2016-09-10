var density = 30;
var mapSize = 500;
var starDiam = 10;

$(document).ready(function() {
  var draw = SVG('map').size(mapSize, mapSize);
  var stars = draw.set();
  var i = 0;
  while (i < density) {
    x = getRandomInt(starDiam, mapSize - 10);
    y = getRandomInt(starDiam, mapSize - 10);

    if (notOverlapping(stars, x, y)) {
      var star = draw.circle(starDiam).attr({cx: x, cy: y});
      stars.add(star);
      i++;
    }
  }
});

// This presets the overlapping
var notOverlapping = function(set, x, y) {
  var offset = starDiam - (starDiam / 4);
  var b
  set.each(function() {
    if      (this.inside(x - offset, y - offset)) { b = false; }
    else if (this.inside(x + offset, y - offset)) { b = false; }
    else if (this.inside(x - offset, y + offset)) { b = false; }
    else if (this.inside(x + offset, y + offset)) { b = false; }
    else if (this.inside(x, y - offset))          { b = false; }
    else if (this.inside(x, y + offset))          { b = false; }
    else if (this.inside(x + offset, y))          { b = false; }
    else if (this.inside(x - offset, y))          { b = false; }
  });
  return b === undefined ? true : b;
}

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
