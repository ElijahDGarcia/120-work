let matrixText = [];


function setup() {
  createCanvas ( windowWidth, windowHeight);
  background('black');
  frameRate(60);
  //store class objects in array
  let b = new MatrixNumber ();
  matrixText.push(b);

}

//adding a new object to array every 500 milliseconds
    setInterval(
      function letsgoboy() {
      let b = new MatrixNumber();
      matrixText.push(b);
    }, 350)


function draw() {
background( 0, 0, 0, 75);
frameRate(15);
  //run MatrixNumber functions for each stored object as its called from
  //array
print(MatrixNumber.y);


for( let i = 0; i < matrixText.length; i++){
  matrixText[i].rain();
  matrixText[i].show();

}

}








/////Number Class////

class MatrixNumber {
    //defining class variables
    constructor() {
      this.matrixSize = 20;
      this.textGreen = color('green');
      this.x = (random(0, windowWidth));
      this.y = (0);
      this.digit = int(random( 1, 10 ));
    }
    //make matrix text rain down
    rain () {
      this.y = (this.y + 20 % 979);
      this.digit = int(random( 1, 10 ));
    }
    //actually draw the matrix text on canvas
    show() {
      fill('green');
      textSize(this.matrixSize);
      text(this.digit, this.x, this.y);

    }
}
