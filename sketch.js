var movingRect,fixedRect;



function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(200,200,80,30);
  movingRect.shapeColor="orange";
  movingRect.debug=true;
  movingRect.velocityX=2;

  fixedRect = createSprite(1000,200,50,80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  fixedRect.velocityX=-2;

  movingRect1 = createSprite(400,0,80,30);
  movingRect1.shapeColor="yellow";
  movingRect1.debug=true;
  movingRect1.velocityY=2;

  fixedRect1 = createSprite(400,800,50,80);
  fixedRect1.shapeColor="red";
  fixedRect1.debug=true;
  fixedRect1.velocityY=-2;
}

function draw() {
  background("black");  
  console.log(fixedRect.x-movingRect.x);
  //movingRect.x = mouseX;
  //movingRect.y = mouseY;

 if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2)
    
  {
    movingRect.velocityX=movingRect.velocityX*(-1);
    fixedRect.velocityX=fixedRect.velocityX*(-1);
  }
  if(movingRect1.y-fixedRect1.y<movingRect1.height/2+fixedRect1.height/2&&fixedRect1.y-movingRect1.y<movingRect1.height/2+fixedRect1.height/2)
    
  {
    movingRect1.velocityY=movingRect1.velocityY*(-1);
    fixedRect1.velocityY=fixedRect1.velocityY*(-1);
  }
  
  drawSprites();
}