var canvas, backgroundImage;



var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

var check;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
}

function setup(){
 createCanvas(displayWidth - 20, displayHeight-30);
  car1 = createSprite(100,200);
  car1.addImage("car1",car1_img);
  car2 = createSprite(300,200);
  car2.addImage("car2",car2_img);
  car3 = createSprite(500,200);
  car3.addImage("car3",car3_img);
  car4 = createSprite(700,200);
  car4.addImage("car4",car4_img);
  cars = [car1, car2, car3, car4];
  check=createSprite(400,400,200,200);
  check.shapeColor="red";
  
}


function draw(){
  background(255);

  drawSprites();

  
}
