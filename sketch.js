var car,wall;
var speed,weight 

function setup() {
  createCanvas(800,400);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50, 200, 50, 50)
  wall=createSprite(700, 200, 60, height/2)
  car.shapeColor = "blue";
}

function draw() {
  background(255,255,255);
  if(keyDown("space"))car.velocityX = speed;
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX = 0
    var deformation = 0.5 * speed * speed * weight / 22500
    if(deformation > 180){
      car.shapeColor = "red";
    }
    if(deformation < 180 && deformation > 100){
      car.shapeColor = "yellow";
    }
    if(deformation < 100){
      car.shapeColor = "green";
    }
  }   

  drawSprites();
}