let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      background("yellow");
      text("0", 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          rect(i * 20, j * 20, 12, 12);
        }
      }
      break;

    case 1:
      text("1", 100, 100);
      break;

    case 2:
      text("2", 100, 100);
      break;

    case 3:
      text("3", 100, 100);
      break;

    case 4:
      text("4", 100, 100);
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 4) state = 0;

}
