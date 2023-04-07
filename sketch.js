// draw a spinning box
// with width, height and depth of 50
// alternative cube from https://editor.p5js.org/flomerboy/sketches/uq7nB_Dy
function setup() {
    createCanvas(800, 800, WEBGL);
}

function draw() {
    background(200);
    // rotateY(frameCount * .01);
    rotateX(mouseY);
    rotateZ(mouseX*0.1);
    roundedCube(200, 10);
    noStroke();
    ambientMaterial(220);
}

function roundedCube(cubeWidth, radius) {
    lights();

    //walls
    box(cubeWidth, cubeWidth - radius, cubeWidth - radius);
    box(cubeWidth - radius, cubeWidth, cubeWidth - radius);
    box(cubeWidth - radius, cubeWidth - radius, cubeWidth);

//   //corners
    translate((cubeWidth - radius) / 2, (cubeWidth - radius) / 2, (cubeWidth - radius) / 2);
    sphere(radius / 2, 10, 10);

    translate(-1 * (cubeWidth - radius), 0, 0);
    sphere(radius / 2, 10, 10);
    translate(0, -1 * (cubeWidth - radius), 0);
    sphere(radius / 2, 10, 10);
    translate((cubeWidth - radius), 0, 0);
    sphere(radius / 2, 10, 10);
    translate(0, 0, -1 * (cubeWidth - radius));
    sphere(radius / 2, 10, 10);
    translate(-1 * (cubeWidth - radius), 0, 0);
    sphere(radius / 2, 10, 10);
    translate(0, (cubeWidth - radius), 0);
    sphere(radius / 2, 10, 10);
    translate((cubeWidth - radius), 0, 0);
    sphere(radius / 2, 10, 10);

//   //edges
    translate(0, -1 * ((cubeWidth - radius) / 2), 0);
    cylinder(radius / 2, cubeWidth - radius, 10, 1, false, false);
    translate(-1 * (cubeWidth - radius), 0, 0);
    cylinder(radius / 2, cubeWidth - radius, 10, 1, false, false);
    translate(0, 0, cubeWidth - radius);
    cylinder(radius / 2, cubeWidth - radius, 10, 1, false, false);
    translate(cubeWidth - radius, 0, 0);
    cylinder(radius / 2, cubeWidth - radius, 10, 1, false, false);

    rotateZ(PI / 2);
    translate((cubeWidth - radius) / 2, (cubeWidth - radius) / 2, -1 * (cubeWidth - radius));
    cylinder(radius / 2, cubeWidth - radius, 10, 1, false, false);
    translate(-1 * (cubeWidth - radius), 0, 0);
    cylinder(radius / 2, cubeWidth - radius, 10, 1, false, false);
    translate(0, 0, cubeWidth - radius);
    cylinder(radius / 2, cubeWidth - radius, 10, 1, false, false);
    translate(cubeWidth - radius, 0, 0);
    cylinder(radius / 2, cubeWidth - radius, 10, 1, false, false);

    rotateX(PI / 2);
    translate(0, -1 * ((cubeWidth - radius) / 2), -1 * ((cubeWidth - radius) / 2));
    cylinder(radius / 2, cubeWidth - radius, 10, 1, false, false);
    translate(-1 * (cubeWidth - radius), 0, 0);
    cylinder(radius / 2, cubeWidth - radius, 10, 1, false, false);
    translate(0, 0, cubeWidth - radius);
    cylinder(radius / 2, cubeWidth - radius, 10, 1, false, false);
    translate(cubeWidth - radius, 0, 0);
    cylinder(radius / 2, cubeWidth - radius, 10, 1, false, false);

}