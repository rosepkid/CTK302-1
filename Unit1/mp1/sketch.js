function setup() {
  createCanvas(400, 400);
//  rectMode(CENTER);

}

function draw() {

  fill('purple') ;
  rect(100, 100, 100, 100);

  if (mouseIsPressed) {
    background('#2D936C');
    // scene code

  } else {
    background("yellow");
  }

  rectMode(CENTER);
  rect(width / 2, height / 2, 200, 100);






}
