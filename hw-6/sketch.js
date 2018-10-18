let rain = {
  x : 0,
  y : 0,
  wi : 10,
  hi : 10,
  red : 0,
  blue : 20,
  green : 0,
  alpha : 0,
};
//above defining rain variables//

function setup() {
  createCanvas( windowWidth, windowHeight );
  //creating a canvas//
  frameRate(50);
  //setting framerate//
  background('white');
};
//create dots that slowly go down the screen with random transparency and blue coloration//
function draw() {
//below function makes rain go down by one pixel per loop, then reset once it reaches the bottom//
  rain.y = rain.y + 1;
  rain.y = rain.y % windowHeight;
  rain.x = random(0 , width);
  rain.blue = random( 0, 100 )
  rain.alpha = random( 100, 255 );
  noStroke();
  fill ( rain.red, rain.green, rain.blue, rain.alpha );
  ellipse ( rain.x, rain.y, rain.wi, rain.hi );

}
