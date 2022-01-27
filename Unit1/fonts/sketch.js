let font1, font2 ;
let x = 20 ;

function setup() {
  createCanvas(500, 500);
  font1 = loadFont("assets/Aloha.ttf") ;
  font2 = loadFont("assets/honey.otf") ;

  textAlign(CENTER) ;
  angleMode(DEGREES) ;
}

function draw() {
  background(100) ;

  textSize(x) ;
//  x = x + 1;
  textFont(font1) ;
  push() ;
  translate(width/2, height/2) ;
  rotate(60) ;
  text("hello", 0, 0) ;
  pop() ;

  textFont(font2) ;
  text("how are you?", width/2, 200) ;

}
