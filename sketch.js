// ref -> https://stackoverflow.com/questions/43741561/how-do-i-is-it-posssible-to-keep-different-picture-in-each-side-of-box-in-p5
//https://en.wikipedia.org/wiki/Isometric_projection#Mathematics
//https://www.youtube.com/watch?v=oqgrKWAo24M&ab_channel=KevinWorkman

//todo make it a cube and shine light and texture

let angle = 0;
BOX_WIDTH = 1083;
BOX_HEIGHT = 1457;
BOX_DEPTH = 345;

function setup() {

    createCanvas(400, 400, WEBGL);
    SCALE_FACTOR = windowHeight / 2 /
        Math.max(Math.max(BOX_WIDTH, BOX_HEIGHT), BOX_DEPTH);
}

function draw() {

    background(50);
    rotateX(mouseY);
    rotateY(-mouseX);


    drawTempBot();

}

function drawTempBot(){
    angleMode(DEGREES);
    let w = BOX_WIDTH * SCALE_FACTOR;
    let h = BOX_HEIGHT * SCALE_FACTOR;
    let d = BOX_DEPTH * SCALE_FACTOR;

    // Center the box.
    //front
    translate(-w / 2, -h / 2);
    quad(0, 0, w, 0, w, h, 0, h);
    color(151,233, 233)

    // left
    push();
    translate(0, 0, -d);
    rotateY(-90);
    quad(0, 0, d, 0, d, h, 0, h);

    //top
    pop();
    push();
    translate(0, 0, -d);
    rotateX(90);
    quad(0, 0, w, 0, w, d, 0, d);

    //right
    pop();
    push();
    translate(w, 0, 0);
    rotateY(90);
    quad(0, 0, d, 0, d, h, 0, h);

    //bottom
    pop();
    push();
    translate(0, h, 0);
    rotateX(-90);
    quad(0, 0, w, 0, w, d, 0, d);

    //back
    pop();
    push();
    rotateY(180);
    translate(-w, 0, d);
    quad(0, 0, w, 0, w, h, 0, h);

}


