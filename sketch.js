var sprite;
var bg;
var sp;
var snow;
var si;
function preload(){
  bg=loadImage("snow1.jpg")
sp=loadImage("walking.png")
si=loadImage("snow4.webp")
}
function setup() {
  createCanvas(800,400);
    sprite=createSprite(400, 300, 50, 50);
    sprite.addImage(sp)
    sprite.scale=0.5
   

}

function draw() {
  background(bg);  
  if(frameCount%20===0)
  {
     snow=createSprite(Math.round(random(0,800)),0,10,10)
     snow.addImage(si)
   snow.velocityY = 5;
   snow.scale=0.1
  }

  drawSprites();
}
function snow1(){

  snowgroup.add(snow)
}