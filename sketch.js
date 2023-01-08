let x = 0;
let y = 0;
let thicc = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(250, 250, 250);
};

function draw() {
  stroke(0)
  strokeWeight(1 + thicc)
  if (random(1) < 0.5) {
    line(x, y + 20, x + 20, y)
  } else {
    line(x + 20, y + 20, x, y)
  }

  x += 20

  if (x > width) {
    x = 0
    y += 20
    thicc += 0.25
  }
};

