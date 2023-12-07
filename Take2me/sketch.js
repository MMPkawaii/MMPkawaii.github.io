

let xChange = 0;
let yCloud = 0;

let xChange2 = 0;
let yCloud3 = 0;

let xChange3 = 0;
let yCloud4 = 0;

let xChange4 = 0;
let yCloud5 = 0;

let xChange5 = 0;
let yCloud6 = 0;

let xChange6 = 0;
let yCloud7 = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  
    
}

function draw(){

  background("skyblue");
  fill(255,255,255);
  stroke(255,255,255);



  cloud(100+xChange,100);
  xChange = xChange + 1;
  if (xChange >800){
    xChange = -300;
  }

  cloud(200+xChange2, 200);
  xChange2 = xChange2 + 0.5;
  if (xChange2 > 800){
    xChange2 = -400;
  }
  
  cloud(300+xChange3, 100);
   xChange3 = xChange3 + 0.7;
  if (xChange3 > 800){
    xChange3 = -400;
  }

  cloud(400+xChange4, 200);
  xChange2 = xChange4 + 0.5;
  if (xChange4 > 800){
    xChange4 = -400;
  }
  
  cloud(500+xChange5, 100);
   xChange3 = xChange5 + 0.7;
  if (xChange5 > 800){
    xChange5 = -400;
  }
}


function cloud(x, y){
  ellipse(x, y, 40,40); 
  ellipse(x+30, y, 60,60);
  ellipse(x+20, y+30, 60,60);
  ellipse(x+50, y+20, 60,60);
  ellipse(x+80, y+10, 60,60);
  ellipse(x+100, y-10, 60,60);
  ellipse(x+120, y+30, 60,60);
  ellipse(x+90, y+20, 60,60);
  ellipse(x+60, y+10, 60,60);
  ellipse(x+40, y-10, 60,60);



}