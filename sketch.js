let array = [];
let stamp = [];
let drawingbook;
let currentStampImage;
let eyeMarker;
let winkMarker;
let asteriskMarker;
let exclamationMarker;
let kissMarker;
let spiralMarker;


function preload() {
  drawingbook = loadImage('images/drawingbook.png')
  stamp[1] = loadImage('images/stamp1.png');
  stamp[2] = loadImage('images/stamp2.png');
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

  currentStampImage = stamp[2];

  eyeMarker = select('#eyeMarker')
  eyeMarker.mousePressed(changeStampToEye);

  winkMarker = select('#winkMarker')
  winkMarker.mousePressed(changeStampToWink);

  asteriskMarker = select('#asteriskMarker')
  asteriskMarker.mousePressed(changeStampToAsterisk);

  exclamationMarker = select('#exclamationMarker')
  exclamationMarker.mousePressed(changeStampToExclamation);

  kissMarker = select('#kissMarker')
  kissMarker.mousePressed(changeStampToKiss);

  spiralMarker = select('#spiralMarker')
  spiralMarker.mousePressed(changeStampToSpiral);

  noFill();
}

function changeStampToEye() {
  currentStampImage = stamp[10];
  console.log("clicked")
}

function changeStampToWink(){
  currentStampImage = stamp[2];

}
function changeStampToAsterisk(){
  currentStampImage = stamp[8];

}
function changeStampToExclamation(){
  currentStampImage = stamp[11];

}
function changeStampToKiss(){
  currentStampImage = stamp[9];

}
function changeStampToSpiral(){
  currentStampImage = stamp[12];

}




function draw() {

}


function mousePressed() {
  // for (let i = 1; i < stamp.length; i++){
  //   stamp[i].clicked(mouseX, mouseY);

  image(currentStampImage, mouseX, mouseY, 25, 25);


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
