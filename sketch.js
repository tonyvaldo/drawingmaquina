let array = [];
let stamp = [];
let img;
let drawingbook;


function preload() {

img = loadImage('images/stamp2.png')
drawingbook = loadImage('images/drawingbook.png')

}

function setup() {
  bg = loadImage('images/drawingbook.png');
  let cnv = createCanvas(700, 600);
  // cnv.parent('container')
noStroke();
imageMode(CENTER);

  noFill();
}


function draw() {
imageMode(CENTER);
image (drawingbook, width/2, height/2, width, height);
}


function mousePressed(){
  // for (let i = 1; i < stamp.length; i++){
  //   stamp[i].clicked(mouseX, mouseY);

  image(img, mouseX, mouseY, 50, 50);
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
