$(document).ready(function() {
  var draw = SVG('map').size(500, 500);
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
});
