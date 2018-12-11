//this is the canvas//

let actualW = [];

function setup() {
    createCanvas (windowWidth, windowHeight);
    let t = new Words();
    let blood = new RedButton();
    let grass = new GreenButton();
    let water = new BlueButton();


    actualW.push(t);

}

setInterval(
  function letsgoboy() {
  let t = new Words();
  actualW.push(t);
}, 100)


function draw() {

    background( 'white')
    frameRate(60);

    ellipse(mouseX, mouseY, 200);
    fill('white');
    // redbluegreen functions from classes//
    let blood = new RedButton();
    let grass = new GreenButton();
    let water = new BlueButton();
    blood.overRedButton();
    blood.clickRedButton();
    grass.overGreenButton();
    grass.clickGreenButton();
    water.overBlueButton();
    water.clickBlueButton();
    blood.showButton();
    grass.showButton();
    water.showButton();
    //word functions
    function mousePressed() {}
    for( let i = 0; i < actualW.length; i++){
      actualW[i].moveDown();
      actualW[i].showWord();
      actualW[i].highLight();
    }

  }
