var car,wall;

var speed,weight;


function setup() {
  createCanvas(1600,400);
  speed = Random(55,90);
 weight = Random(400,1500);


 car = createSprite(50,200,50,50);
 car.velocityx = speed;
 wall = createSprite(1500,200,60,height/2)
 wall.shapeColor (80,80,80);


}

function draw() {
  background(255,245,255);

  if (wall.x - car.x < (car.width+wall.width/2)) 
  {
car.velocityx=0;
var deformation = 0.5 * weight * speed *speed/22509;
if (deformation > 180) 
{
  car.shapeColor = "green";
}
if(deformation < 180 &&  deformation > 100)
{
  car.shapeColor = "red";
  } 
  if(deformation < 100)
{
  car.shapeColor = "blue";
  }
}
  drawSprites();
}