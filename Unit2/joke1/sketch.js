let myState = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER) ;
  rectMode(CENTER) ;
}

function draw() {

  switch (myState) {
    case 0:
    background('grey') ;
    fill('black') ;
    textSize(48) ;
    text("why did the chicken?", width/2, height/2, 400, 300) ;
    break ;

    case 1:
    background('yellow') ;
    fill('black') ;
    textSize(48) ;
    text("because", width/2, height/2, 400, 300) ;
    break ;

  }
}

function mouseReleased(){
  // myState++ ;
  // if (myState > 1) myState = 0 ;
  myState = (myState + 1) % 2 ;
}
