var car, wall;
var speed, weight;
var deformation;
function setup() {
  createCanvas(1600,400);


  speed = random(55,90);
  weight = random(400,1500);

  wall = createSprite(1500,200,60,height/2);
  car = createSprite(50,200,50,50);


  car.velocityX = speed;
}
function draw() {
  background(255,255,255);  

  

  if(car.isTouching(wall)){
    deformation = (0.5 * weight * speed * speed) / 22500
    car.velocityX = 0;


    if(deformation <= 100){
      car.shapeColor = "green";
    }
    if(180 >= deformation && deformation >= 100){
      car.shapeColor = "yellow";
    }
    if(deformation >= 180){
      car.shapeColor = "red";
    }
  }






  drawSprites();
}