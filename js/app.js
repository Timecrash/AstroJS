/* Todo:
* Seeds
* Button that regens the map, similar to etch-a-pad
* Star colors, set up in a const array and selected at generation
** This would have a separate function to randomize it
* Grid, split into the same number of squares based on mapSize
* Navbar for settings (put the button in here)
* Center the map somehow
*/

var density = 40;
var mapSize = 500;
var starDiam = 10;

$(document).ready(function() {
  var draw = SVG('map').size(mapSize, mapSize);
  generateStars(draw);
});

var generateStars = function(draw) {
  var stars = draw.set();
  var i = 0;
  while (i < density) {
    x = getRandomInt(starDiam, mapSize - starDiam);
    y = getRandomInt(starDiam, mapSize - starDiam);

    if (notOverlapping(stars, x, y)) {
      var star = draw.circle(starDiam).attr({cx: x, cy: y});
      stars.add(star);
      i++;
    }
  }
};

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
