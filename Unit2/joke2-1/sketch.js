let state = 0;
let timer = 0 ;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER) ;
  rectMode(CENTER) ;
  textSize(28) ;
  textFont("Georgia") ;
}

function draw() {

  timer++ ;
  if (timer > 2*60) {
    timer = 0 ;
    state = (state + 1) % 2;
  }

  switch (state) {

    case 0:
      background("yellow");
      text("why?", width/2, height/2) ;
      break;

    case 1:
      background("red");
        text("because I said so", width/2, height/2, 400, 500) ;
      break;
  }
}


function mouseReleased() {
  state = (state + 1) % 2;

  // state++ ;
  // if (state > 2) {
  //   state = 0 ;
  // }
}
