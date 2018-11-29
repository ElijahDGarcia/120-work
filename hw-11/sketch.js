let matrixText = [];


function setup() {
  createCanvas ( windowWidth, windowHeight);
  background('black');
  frameRate(60);
  //store class objects in array
  for (let i = 0; i < 50; i++) {
    matrixText[i] = new MatrixNumber();
  }

}

function draw() {
background(0, 0, 0, 100);
  //run MatrixNumber functions for each stored object as its called from
  //array
  for (let i = 0; i < 50; i++){
  matrixText[i].rain();
  matrixText[i].show();
  }
}







/////Number Class////

class MatrixNumber {
    //defining class variables
    constructor() {
      this.matrixSize = random(10, 50);
      this.textGreen = color('green');
      this.x = (random(0, windowWidth));
      this.y = (0 + 10);
      this.digit = int(random( 1, 10 ));
    }
    //make matrix text rain down
    rain () {
      this.y = (this.y - 10 & windowHeight);
      this.digit = int(random( 1, 10 ));
    }
    //actually draw the matrix text on canvas
    show() {
      fill('green');
      textSize(this.matrixSize);
      text(this.digit, this.x, this.y);
        frameRate(10);
    }
}
