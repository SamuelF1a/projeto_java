function setup() {
  createCanvas(600, 400);
background("darkblue");
}
  function draw(){
  stroke("black")
  fill("blue")
  
  if(mouseIsPressed){
  rect(mouseX,mouseY,100,100);
}
  }
