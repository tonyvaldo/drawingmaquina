let array = [];
let stamp = [];
let img;
let drawingbook;

function preload() {

  img = loadImage('images/stamp2.png')
  drawingbook = loadImage('images/drawingbook.png')
  stamp[1] = loadImage('images/stamp1.png');
stamp[3] = loadImage('images/stamp3.png');
stamp[4] = loadImage('images/stamp4.png');
stamp[5] = loadImage('images/stamp5.png');
stamp[6] = loadImage('images/stamp6.png');
stamp[7] = loadImage('images/stamp7.png');
stamp[8] = loadImage('images/stamp8.png');
stamp[9] = loadImage('images/stamp9.png');
stamp[10] = loadImage('images/stamp10.png');
stamp[11] = loadImage('images/stamp11.png');
stamp[12] = loadImage('images/stamp12.png');
stamp[13] = loadImage('images/stamp13.png');

}


function setup() {
  createCanvas(800, 600);
  image(drawingbook, 0, 0, width, height);
  noStroke();
  imageMode(CENTER);

  noFill();
}


function draw() {

}


function mousePressed() {
  // for (let i = 1; i < stamp.length; i++){
  //   stamp[i].clicked(mouseX, mouseY);

  image(stamp[12], mouseX, mouseY, 25, 25);


}



function keyTyped() {

  if (key === 's') {
    //save this image
    saveCanvas('filename', 'png');
  }
  // else if (key === 'd') {
  //   // display image


  // beginShape();
  // for(let i = 0; i < array.length; i++){
  //   line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
  // curveVertex(array[i][0], array[i][1])
  // }
  // endShape();
  // }
  //
  // // return false;
}
// }
