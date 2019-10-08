let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220, 550, 250);


}

function draw() {
  background(220, 550, 250, 5);
  strokeWeight(strokeWidth);


  noiseOffset += 0.01;
  strokeWidth = noise(noiseOffset) * 55;

  stroke(map(mouseX, 0, 600, 0, 255, true))
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  line(mouseX, mouseY, pmouseX, pmouseY);

}



function keyTyped() {

  if (key === 's') {
    //save this image
    saveCanvas('filename', 'png');
  } else if (key === 'c') {
    clear();
    // display image


    // // for my own reference vvvvv
    // beginShape();
    // for (let i = 0; i < array.length; i++) {
    //   // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    //   curveVertex(array[i][0], array[i][1])
    // }
    // endShape();

  }

  return false;

}

function mousePressed() {
  array = [];
  backgroundColor = 255;
}
