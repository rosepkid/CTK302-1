let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  textSize(28);
  textFont("Georgia");
}

function draw() {

  switch (state) {

    case 0:
      background("yellow");
      text("why?", width / 2, height / 2);
      break;

    case 1:
      background("red");
      text("because I said so", width / 2, height / 2, 400, 500);
      break;
  }

  push();
  fill("purple");
  rectMode(CORNER) ;
  rect(100, 100, 100, 100);
  pop();

}


function mouseReleased() {
  if ((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)) {
    state = (state + 1) % 2;
  }
}
