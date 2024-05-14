function setup() {
    createCanvas(400, 400);
    background("blue")
  }
  
  function draw() {
    stroke("red");
    fill("red");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 10, 15);
    }
  }
  