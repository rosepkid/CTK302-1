function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);

}

function draw() {


  if (mouseIsPressed) {
    background('#2D936C');
    // scene code

  } else {
    background("yellow");
  }

  rectMode(CENTER) ;
  rect(width / 2, height / 2, 200, 100);

  rectMode(CORNER) ;
  text("\\n Lucas ipsum dolor sit amet calamari solo solo skywalker biggs greedo solo skywalker grievous kenobi. Yavin ponda hutt organa. Bothan obi-wan mara r2-d2 aayla ventress endor dagobah. Mon darth skywalker darth darth moff k-3po. Jango windu padmé ponda padmé. Darth mandalorians skywalker padmé jango mon thrawn fisto. Wedge mace antilles wedge calamari calrissian. Jade wicket luke twi'lek antilles dooku mandalorians ben coruscant. Lobot lando thrawn twi'lek skywalker. Darth sith amidala moff. Moff sidious anakin ponda yoda.", 10, 10, 200, 200) ;


}
