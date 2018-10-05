//defining variables//
let ballOrbit = 0;
let ballColor1;
let ballColor2;
let ballColor3;

function setup() {
  createCanvas( windowWidth, windowHeight );
  //creating a canvas background//
  frameRate(60);
  //setting framerate//
}
//drawing the circle//
function draw() {
  //--- Mouse Ball ---//

  noCursor();
  //make the ball turn more purple as it moves further right//
  var ballColor1 = ( mouseX*.5 - ( windowHeight*.2 ) );
  var ballColor2 = ( mouseX - ( windowHeight*.8 ) );

  push();
  //coloring the background//
  background( 100, 120, 250 );
  //coloring the ball//
  fill( ballColor1, 0, ballColor2 );
  //ball follows mouse//
  translate( mouseX, mouseY );
  //this is the ball//
  ellipse( 10, 10, 100, 100 );
  pop();
  //--- Mouse Ball End ---//

  //--- Constrained Ball Template Begin ---//
  push();
  translate( mouseX, mouseY );

  push();
    ballOrbit = ballOrbit - 3;
  //ball same color as one above//
  fill( ballColor1-100, 0, ballColor2-100 );
  //ball origin inside main ball//
  translate( -10, -20 );
  //orbit Mouse Ball//
  rotate( radians(ballOrbit) )
  ellipse( 150, 0, 75 );
  pop();
  pop();
  //--- Constrained Ball Template End ---//

  //---Mini Constrained Ball Start ---//
  push();
  translate( mouseX, mouseY );

  push();
  
}
