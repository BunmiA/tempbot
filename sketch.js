// ref -> https://stackoverflow.com/questions/43741561/how-do-i-is-it-posssible-to-keep-different-picture-in-each-side-of-box-in-p5
//https://en.wikipedia.org/wiki/Isometric_projection#Mathematics
//https://www.youtube.com/watch?v=oqgrKWAo24M&ab_channel=KevinWorkman

//todo make it a cube and shine light and texture

let angle = 0;
BOX_WIDTH = 200;
BOX_HEIGHT = 200;
BOX_DEPTH = 200;

function setup() {

    createCanvas(600, 600, WEBGL);
    SCALE_FACTOR = windowHeight / 4 /
        Math.max(Math.max(BOX_WIDTH, BOX_HEIGHT), BOX_DEPTH);
}

function draw() {

    background(255);
    rotateX(mouseY);
    rotateY(-mouseX);


    drawTempBot();

}

function drawTempBot(){
    angleMode(DEGREES);
    let w = BOX_WIDTH * SCALE_FACTOR;
    console.log(w)
    let h = BOX_HEIGHT * SCALE_FACTOR;
    let d = BOX_DEPTH * SCALE_FACTOR;

    //fill(143, 232, 239)
    //normalMaterial()
    ambientLight(255)
    ambientMaterial(143, 232, 239)
    noStroke()

    // Center the box.
    //front
    translate(-w / 2, -h / 2);
    quad(0, 0, w, 0, w, h, 0, h);
    color(151,233, 233)
    //eyes
    ambientMaterial(77, 115, 176);
    circle(h/3, w/3, 15);
    circle(h/1.5, w/3, 15);
    //mouth
    push();
    translate(0, h/3);
    // //scale(mouseX/400);
    beginShape();
    curveVertex(0, 50);
    curveVertex(20, 0);
    curveVertex(100, 25);
    curveVertex(180, 0);

    curveVertex(200, 50);

    curveVertex(180, 100);
    curveVertex(100, 125);
    curveVertex(20, 100);

    curveVertex(0, 50);
    curveVertex(20, 0);
    curveVertex(100, 25);
    endShape();
    pop();

    // side of box colour
    ambientMaterial(112,	174	,195)
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


