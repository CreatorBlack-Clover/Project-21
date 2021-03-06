var wall,bullet;
var bulletWeight,bulletSpeed,thickness,damage;

function setup() {
  createCanvas(1300,400);
  // all values
  bulletSpeed = Math.round(random(223,321));
  bulletWeight = Math.round(random(30,52));
  thickness = Math.round(random(22,83));
  damage = Math.round(0.5*bulletWeight*bulletSpeed*bulletSpeed/(thickness*thickness*thickness));

  // walls
  wall = createSprite(1200,200, thickness, 200);
  wall.shapeColor = "brown";
  wall.debug = true;

  // bullet
  bullet = createSprite(50,200, 50, 20);
  bullet.shapeColor = "white";
  bullet.velocityX = bulletSpeed;
  bullet.debug = true;

  // console
  console.log(bulletWeight);
  console.log(bulletSpeed);
  console.log(thickness);
  console.log(damage);

}

function draw() 
{
  background("black");  
  rectMode(CENTER);
  contact(bullet,wall);


  drawSprites();
}

function contact(object1,object2)
{
  if(object1.x + object1.width/2 >= object2.x - object2.width/2 )
  {
    object1.shapeColor = "green";
    object1.velocityX = 0;
    if(damage <= 10)
    {
      object2.shapeColor = "green";
    }
    if(damage > 10)
    {
      object2.shapeColor = "red";
    }
  }

}
