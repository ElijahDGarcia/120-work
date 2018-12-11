//this is a class for clicking objects which will delete words//


class RedButton{
    constructor() {
      this.buttonX = windowWidth / 2;
      this.buttonY = windowHeight / 2;
      this.buttonR = 100;
      this.buttonColor = 'red';

    }

    showButton() {
      stroke( 'brown' );
      fill(this.buttonColor);
      ellipse(this.buttonX, this.buttonY, this.buttonR);
    }

    overRedButton() {
      let d = dist(this.buttonX, this.buttonY, mouseX, mouseY);

      if( d < this.buttonR / 2 ) {
        this.buttonColor = 'crimson';
       };

      }

    clickRedButton() {
        let d = dist(this.buttonX, this.buttonY, mouseX, mouseY);
        if( d < this.buttonR / 2 && mouseIsPressed ) {
        this.buttonColor = 'white';}
}
}
class GreenButton{
    constructor() {
      this.buttonX = windowWidth / 2.5;
      this.buttonY = windowHeight / 2;
      this.buttonR = 100;
      this.buttonColor = 'green';
      this.text = "Reset."
      this.textsize = 40
      this.textColor = 'black'
    }

    showButton() {
      stroke( 'brown' );
      fill(this.buttonColor);
      ellipse(this.buttonX, this.buttonY, this.buttonR);

      textSize(40, this.buttonx, this.buttony);
      text("goodbye", this.buttonx, this.buttony);
      fill("black");
      text("goodbye", this.buttonx, this.buttony);
    }


    overGreenButton() {
      let d = dist(this.buttonX, this.buttonY, mouseX, mouseY);

      if( d < this.buttonR / 2 ){
        this.buttonColor = 'teal';
      };
    }

    clickGreenButton() {
        let d = dist(this.buttonX, this.buttonY, mouseX, mouseY);
        if( d < this.buttonR / 2 && mouseIsPressed ) {
        this.buttonColor = 'white'
        actualW.length = 0;

        }
      }
    }



class BlueButton{
    constructor() {
      this.buttonX = windowWidth / 1.66;
      this.buttonY = windowHeight / 2;
      this.buttonR = 100;
      this.buttonColor = 'blue';

    }

    showButton() {
      stroke( 'brown' );
      fill(this.buttonColor);
      ellipse(this.buttonX, this.buttonY, this.buttonR);
    }

    overBlueButton() {
      let d = dist(this.buttonX, this.buttonY, mouseX, mouseY);

      if( d < this.buttonR / 2 ) {
        this.buttonColor = 'cyan';}}

        clickBlueButton() {
            let d = dist(this.buttonX, this.buttonY, mouseX, mouseY);
            if( d < this.buttonR / 2 && mouseIsPressed ) {
            this.buttonColor = 'white';;

}}
}
