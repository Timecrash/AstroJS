# AstroJS

A random starmap generator built in JavaScript. Generates a pre-set number of stars in a field, none too close to each other.

Currently implements the following nonstandard libraries:

- jQuery 3.1.0
- SVG.js 2.3.4

Will eventually have the following features (in no order):

- A navbar for custom settings.
  - Star density, map size, star diameters, star names, star colors.
  - After setting everything to what you want, the map will recreate.
- Tooltips
  - Mousing-over will display the star name, maybe the type of star.
  - Clicking will show details, like stellar info, planets, and notes.
  - An edit button to change the details of that star right there.
- Named stars (with a tooltip showing the name when moused over)
  - Displayed on the navbar somewhere.
  - These will be normally randomly generated, based off constellations, real stars, etc.
  - Alternatively, clicking the star will allow you to rename it.
  - Double alternatively, you can set names prior to generation.
- Star colors (based on real-world colors, so red, blue, yellow, etc.)
  - Randomly decided on generation or input/changed by user.
- Seeds (since most decent generators implement them)
- Travel lines between stars
  - For a set legend (1 pixel = x light years), draw lines between stars within a certain number of LY (15 LY)
- Constellations (Separately colored lines than the travel lines)
  - Close stars will be connected like this.
  - Possibly also connect similar names (Eridani, Draconi, etc.) but I have no idea how to do this.
- Export to image/JSON/plain text file.
- Planets, though this would just be a simple table.
- Interstellar alliances.
  - Setting alliances will give the star an outline of a color you decide, and will also color the tooltip.
  - Spheres of Influence would be a similar idea, but a circle around the stars.
- User accounts, accessible via the navbar.
  - This will only save and load starmaps for that user.
  - If this thing really takes off, it'll also allow viewing of other users' saved maps.
- AJAX searching, stars will glow or something as you type.
- Zoom in/out functionality.
