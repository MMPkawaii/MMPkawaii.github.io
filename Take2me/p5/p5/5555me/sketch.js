
let clouds = []
let billows = 40;

function setup() {
  createCanvas(windowWidth,windowHeight);

  let w = width;
  let h = height;

  for (let i=0; i<billows; i++){
    clouds.push(new cloudMaker(w/3,h*.30,
                              30,0,50)); // x and y postion of 
    //cloud with area and mini and max volume//

  }
}

function draw() {
  backgrounf(0,175,255,255);
  push();
  translate(w/2,h*.30);
  stroke(200,175,0,200);
  fill(255,255,0,255);
  ellipse(0,0,12,0); //sun maybe
  pop();

 
}

function cloudMaker(xc,yc,a,zlo,zhi); {
  // body...
}