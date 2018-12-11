//This is the class for the words we're pulling out of the array//


class Words {
    constructor() {
      this.wordHue = int(random(0, threeColors.length));
      this.wordX = random(0, windowWidth);
      this.wordY = 0;
      this.wordTextSize = random( 33, 80 );
      this.wordString = int(random(0, wordArray.length));
      this.realWordHue = threeColors[this.wordHue];
      this.textWidth = textWidth(wordArray[this.wordString])
}
//-----------------------
  moveDown() {
      this.wordY = this.wordY + 5;
  }
//--------------------------------
  showWord() {

    noStroke();
    textSize(this.wordTextSize);
    text(wordArray[this.wordString], this.wordX, this.wordY);
    fill(this.realWordHue);
  }
//----------------------------
highLight() {

   let d = dist(windowWidth, windowHeight, mouseX, mouseY);

    if( d < windowWidth / 2 ) {
    this.realWordHue = 'white'}
  }






//-----------------------------
}
