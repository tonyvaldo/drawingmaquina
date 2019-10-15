let array = [];

function setup() {
  createCanvas(600, 600);
  background(220, 550, 250);

  strokeWeight(5);
  noFill();
}


function draw() {

  if (mouseIsPressed) {
    // line(mouseX, mouseY, pmouseX, pmouseY);
    background(0);
    array.push([mouseX, mouseY]);
  }

}

function keyTyped() {

  if (key === 's') {
    //save this image
    saveCanvas('filename', 'png');
  } else if (key === 'd') {
    // display image
    background(0);
    background(220, 550, 250);

beginShape();
for(let i = 0; i < array.length; i++){
  // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
curveVertex(array[i][0], array[i][1])
}
endShape();
}

return false;

}
