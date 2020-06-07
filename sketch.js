var car1,wall;
function setup() {
  createCanvas(800,400);
  car1= new car(50,2260,60,"red");
  car2= new car(150,1522,50,"red");
wall=createSprite(400,200,60,400);
wall.shapeColor="green";

}

function draw() {
  background(255,255,255);  
 
car1.bounceoff(wall,car1);
car2.bounceoff(wall,car2);
    drawSprites();
}