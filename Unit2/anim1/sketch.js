let x = 0 ;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER) ;
}

function draw() {
  background("black");
  fill('white');

//  rect(x, height/2, 10, 50) ;

  x += 5 ;
  if (x > width) {
    x = 0 ;
  }

}
