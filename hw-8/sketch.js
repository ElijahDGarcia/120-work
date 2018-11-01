let x = 0;
let matrixY = 0;
let matrixTextSize = 0;
let matrixTextColor = 'green';



function setup() {

    createCanvas(windowWidth, windowHeight);
    background(0);
    frameRate(30);
}
function draw() {
  var matrixText = int(random( 1, 10 ));

  background(0, 0, 0, 100);



  for( x = 0; x <= windowWidth; x = x + int(random( 1, windowWidth))) {
        textSize(40);
        text( matrixText, x, windowHeight / 2);
          frameRate(10);
          if(mouseIsPressed) {
            fill('white');
          } else {
          fill('green');
        }
  for( y = 30; y <= windowHeight; y = y + 100 % windowHeight) {
        text(matrixText, x, y )
  }
  }

  }
