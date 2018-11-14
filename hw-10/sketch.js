let rain = {
  x : 0,
  y : 0,
  wi : 10,
  hi : 10,
};
let rainColor = 0;
function bigDot() {
  if ( rain.y >= windowHeight / 2) {
  rain.wi = rain.wi + 1 % 20 }
  else { rain.wi = 10}
  print(rain.y)
};
//above makes the dots get big when below halfway point
//above defining rain variables//

function setup() {
  createCanvas( windowWidth, windowHeight );
  //creating a canvas//
  frameRate(60);
  //setting framerate//
  background('white');
  let dotBlue = color( 0, 100, 0, 100);
  let dotGreen = color( 0, 0, 100, 100);
  let dotRed = color( 100, 0, 0, 100);
  let rainArray = [dotBlue, dotGreen, dotRed];
//defining rain array variables for canvas


}
//create dots that slowly go down the screen with random transparency and blue coloration//
function draw() {
//below function makes rain go down by one pixel per loop, then reset once it reaches the bottom//
let dotBlue = color( 0, 100, 0, 100);
let dotGreen = color( 0, 0, 100, 100);
let dotRed = color( 100, 0, 0, 100);
  let rainArray = [dotBlue, dotGreen, dotRed];
  rain.y = rain.y + 1;
  rain.y = rain.y % windowHeight;
  rain.x = random(0 , width);
// defining rain variables for draw
  noStroke();
  fill ( rainArray[rainColor] );
  ellipse ( rain.x, rain.y, rain.wi, rain.hi );
  //print(rain.y)
};

function mousePressed() {
  let dotBlue = color( 0, 100, 0, 100);
  let dotGreen = color( 0, 0, 100, 100);
  let dotRed = color( 100, 0, 0, 100);
    let rainArray = [dotBlue, dotGreen, dotRed];
  rainColor = rainColor + 1;
//defining rain variables for mousepressed
  if (rainColor == rainArray.length) {
    rainColor = 0;

  };




};
