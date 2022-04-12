var bubbles = [];
let url = "";

function setup() {
//  let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0"; // this is KEY of the URL from the sheet
let key = "1D4ExwGjILEfaddOVgA13BPnZpfZntcKcrzODJkMDAWg" ;

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.
//  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1";

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

//  add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["What energy level are you at?"],
        data[i]["Cake or Pie"],
        data[i]["Your name here"],
        data[i]["Which avenger are you?"])); // THESE NEED TO MATCH SPREADSHEET

  }
}

function draw() {
  background("blue");

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}



// my Bubble class
class Bubble {
  constructor(energy, cake, name, avenger) {
    // only the order of these parameters matters!
    this.energy = energy;
    this.cake = cake;
    this.name = name;
    this.avenger = avenger;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    stroke("red");
    noFill();
    ellipse(this.pos.x, this.pos.y+10, 120, 120);
    fill("white");
    text(
      this.energy + "\n" + this.cake + "\n" + this.name + "\n" + this.avenger,
      this.pos.x,
      this.pos.y
    );

    this.pos.add(this.vel) ;
    if (this.pos.x > width) this.pos.x = 0 ;

  }


}
