var density = 50;
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

var notOverlapping = function(set, x, y) {
  var offset = starDiam - (starDiam / 4); // This gives each star a bit of space
  var b
  set.each(function() {
    if (this.inside(x - offset, y - offset)
     || this.inside(x + offset, y - offset)
     || this.inside(x - offset, y + offset)
     || this.inside(x + offset, y + offset)
     || this.inside(x, y - offset)
     || this.inside(x, y + offset)
     || this.inside(x + offset, y)
     || this.inside(x - offset, y)) { b = false; }
  });
  return b === undefined ? true : b;
}

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
