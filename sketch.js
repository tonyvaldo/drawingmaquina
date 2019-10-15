let array = [];
let wink;
let stamp = [];
let img;

function preload() {

img = loadImage('images/stamp1.png')
}

function setup() {
  let cnv = createCanvas(800, 600);
  cnv.parent('container')
noStroke();
imageMode(CENTER);

  noFill();
}


function draw() {

}


function mousePressed(){
  // for (let i = 1; i < stamp.length; i++){
  //   stamp[i].clicked(mouseX, mouseY);

  image(img, mouseX, mouseY, 50, 50);
  }



// function keyTyped() {

  // if (key === 's') {
  //   //save this image
  //   saveCanvas('filename', 'png');
  // } else if (key === 'd') {
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
// }
// }
