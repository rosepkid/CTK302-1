let capo;
let knit;
let sour, stonks;


function setup() {
  createCanvas(500, 500);

  capo = loadImage("assets/capoeira.png");
  knit = loadImage("assets/knitting.png");
  sour = loadImage("assets/sourdough.png");
  stonks = loadImage("assets/stonks.png");

}

function draw() {
  image(capo, width/2, 100, 100, 100);
  image(knit, width/2, 210, 100, 100);
  image(sour, width/2, 320, 100, 100);
  image(stonks, width/2, 430, 100, 100);
}
