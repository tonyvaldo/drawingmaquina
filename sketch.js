// let noiseOffset = 0.0;
// let strokeWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  rectMode(CENTER);
  // createCanvas(600, 600);
  // background(220, 550, 250);
  background(255);

// drawGrid();
// noFill();

}

function draw() {
  // background(220, 550, 250, 5);
  strokeWeight(1);


  // noiseOffset += 0.01;
  // strokeWidth = noise(noiseOffset) * 55;

  // stroke(map(mouseX, 0, 600, 0, 255, true))
  // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  // line(mouseX, mouseY, pmouseX, pmouseY);


  for (var i = 0; i < height + 40; i += 40) {
      // draw one line of 20 rectangles across the x-axis
      for (var j = 0; j < width + 40; j += 40) {
        var lightBlue = color(30,139,195);
        var range = 80;
        var d = dist(mouseX,mouseY,i,j);
        var r = map(d,0,25,0,20);
        //var r = map(d,0,mouseX,0,20);
        stroke(0, 0, 255);
        if (i > (mouseX - range) && i < (mouseX + range) && j > (mouseY - range) && j < (mouseY + range)) {
          noStroke();
          //fill(255);
          rect(i,j,40,40);
          stroke(lightBlue);
          rect(i, j, r, r);
        } else {
          noFill();
          stroke(lightBlue);
          rect(i, j, 40, 40);
          //print("HERE");
        }
      }
    }
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

// function drawGrid(){
// numCells = 20;
// fillColor = 255
// strokeWeight(0);
//
// for (let i = 0; i<= width; i+= width / numCells) {
//   for (let j = 0; j <= height; j += height / numCells);{
//     if (fillColor === 255) {
//       fillColor = 200;
//     } else {
//       fillColor = 255;
//     }
//     fill(fillColor);
//     rect(i,j,width / numCells, height / numCells);
//   }
// }
//
// strokeWeight(5);
// }
