
var thickness,wall;
var bullet,speed,weight;

function setup() {
  thickness = random(28,83);
  weight=random(30,52);
  speed=random(223,321);
 
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1200,200,thickness,height/2);
  bullet.velocityX=speed;
}


function draw() {
  background(255,255,255);  
  //if(wall.x-car.x<(car.width+wall.width)/2){
  //  var deformation=(0.5*weight*speed*speed)/22500;
    //car.velocityX=0;
    //if(deformation<100){
     // car.shapeColor="green";
   // }
    //if(deformation>100 && deformation<180){
     // car.shapeColor="yellow";
  //  }
   // if(deformation>180){
     // car.shapeColor="red";
   // }
 // }

 if(hasColided(bullet,wall)){
    bullet.velocityX=0;
    var damage=(0.5*weight*speed*speed)/thickness*thickness*thickness;

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
 }

  drawSprites();
} 
function hasColided(lbullet,lwall){
 var bulletRightEdge=lbullet.x+lbullet.width;
 var wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
    return false;
}
