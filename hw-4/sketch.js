//Let's make a self-portrait!

function setup() {
  //Canvas Creation
  createCanvas( 500, 500 );
}

function draw() {
  //background
  background( 'rgb(149, 252, 252)')

  //Sandbox start//
  push();

  //Centering the grid
  translate(250,250);

  //body start//
  push();
  //bodytube right half
  noStroke();
  fill('rgb(231, 121, 24)');
  rect(0, -30, 30, 100);
  //bodytube left half
  fill('rgb(231, 121, 24)');
  rect(0, -30, -30, 100);
  //tummy circle
  fill( 'rgb(228, 228, 228)');
  ellipse(0, 20, 30, 70);
  pop();
  //body end//

 //----------------------------//
  //head start//
  push();
  noStroke();
//base head shape
  fill ( 'rgb(255, 133, 17)');
  triangle( -40, -100, 40, -100, 0, 0 );
// left ear
  fill ( 'rgb(0, 0, 0)');
  triangle( -40, -100, -20, -100, -45, -125);
// right ear
  fill ( 'rgb(0, 0, 0)');
  triangle( 40, -100, 20, -100, 45, -125)
//nose
  fill( 'rgb(0, 0, 0)')
  triangle( -10, -25, 10, -25, 0, 0 )
//eye left
  fill( 'rgb(255, 255, 255)')
  arc(-15, -70, -20, -20, 0, PI, CHORD);
//eye right
  fill( 'rgb(255, 255, 255)')
  arc(15, -70, -20, -20, 0, PI, CHORD);
  //head end//
  pop();

  //--------------//
  //paws start

  //paw template//
  push();
  fill ('rgb(255, 133, 17)');
  ellipse (25, 0, 10, 40);
  //black//
  fill('rgb(0, 0, 0)');
  arc(25, 10, 8, 18, 0, PI, CHORD);
  //paw left
  fill ('rgb(255, 133, 17)');
  ellipse (-25, 0, 10, 40);
  fill('rgb(0, 0, 0)');
  arc(-25, 10, 8, 18, 0, PI, CHORD);
  //lower paw template
  fill ('rgb(255, 133, 17)');
  ellipse (25, 80, 10, 40);
  //black//
  fill('rgb(0, 0, 0)');
  arc(25, 90, 8, 18, 0, PI, CHORD);
  //left lower paw
  fill ('rgb(255, 133, 17)');
  ellipse (-25, 80, 10, 40);
  //black//
  fill('rgb(0, 0, 0)');
  arc(-25, 90, 8, 18, 0, PI, CHORD);
  pop();
  //----//
  //tail start//
  push();
  noStroke();
  fill('rgb(231, 121, 24)');
  triangle(0, 55, 20, 150, -20, 150);
  //whitepof
  fill('rgb(255, 255, 255)');
  triangle(20, 150, -20, 150, 0, 190);
  pop();
}
