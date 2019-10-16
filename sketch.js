let array = [];
let stamp = [];
let img;
let drawingbook;


function preload() {

img = loadImage('images/stamp4.png')
drawingbook = loadImage('images/drawingbook.png')

}

function setup() {
  createCanvas(800, 600);
  image(drawingbook, 0,0, width, height);
noStroke();
imageMode(CENTER);

  noFill();
}


function draw() {

}


function mousePressed(){
  // for (let i = 1; i < stamp.length; i++){
  //   stamp[i].clicked(mouseX, mouseY);

  image(img, mouseX, mouseY, 25, 25);
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
