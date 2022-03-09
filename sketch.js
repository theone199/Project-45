var bg
var rocket, rocketImg
var ufo, ufo_Img
var astroids, astroids_Img
var laser, laser_Img
var ufolaser
var edges

function preload() {
  bg = loadImage("Assets/Space Bg.jpeg");
  rocketImg = loadImage("Assets/Rocket.png");
  laser_Img = loadImage("Assets/Laser.png");
  ufo_Img = loadImage("Assets/UFO.png");
}

function setup() {
  createCanvas(1400,800);
  rocket = createSprite(700, 700, 50, 50);
  rocket.addImage(rocketImg);
  rocket.scale = 0.5;
}

function draw() {
  background(bg);
  edges = createEdgeSprites();
  if(keyDown("right")) {
    rocket.x = rocket.x + 4;
  }
  if(keyDown("left")) {
    rocket.x = rocket.x - 4;
  }
  spawnUFOS();
  drawSprites();
}

function shootlaser() {
  laser = createSprite(rocket.x, rocket.y - 70);
  laser.addImage(laser_Img);
  laser.scale = 0.1;
  laser.velocityY = -3;
  if(laser.y == -100) {
    laser.remove();
  }
}
function keyPressed() {
  if(keyCode == 32) {
    //if(frameCount % 3 == 0) {
      shootlaser();
    //}
  }
}
function UFOlaser() {
  ufolaser = createSprite(ufo.x, ufo.y);
  ufolaser.addImage(laser_Img);
  ufolaser.scale = 0.1;
  ufolaser.velocityY = 3;
  if(ufolaser.y == 900) {
    ufolaser.remove();
  }
}

function spawnUFOS() {
  if(frameCount % 120 === 0) {
  ufo = createSprite(200,200, 50, 50)
  ufo.velocityX = 2.5
  ufo.addImage(ufo_Img);
  ufo.scale = 1;
  if(laser == ufo.x & ufo.y) {
    ufo.remove(ufo);
  }
  }
}