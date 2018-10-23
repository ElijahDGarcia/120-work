

let ball = {};
ball.width = 20;
ball.x = 1 ;
ball.y = 1 ;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

function setup() {
    createCanvas(windowWidth, 400);
    background(255);
    frameRate(60);
}



function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    fill(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
    ellipse(ball.x, ball.y, ball.width, ball.width);

    if (ball.width >= 80 ) {
      ball.width = ball.width - 60
    }
    else {
      ball.width = ball.width + 1
    }

}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
