
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
    createCanvas(600, 400);

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 100,50);
  obstacle=createSprite(600,330,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
    obstacle.velocityX=-4;
  obstacle.x=obstacle.width/2;
      var rand = Math.round(random(obstacle));
  banana=createSprite(600,310,20,20);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-4;
    
        
 spawnObstacles = createGroup();
    spawnBanana = createGroup();

    


  
}


function draw() {
  background("green");
      if (ground.x < 0){
      ground.x = ground.width/2;
      }
  if(keyDown("space")) {
  monkey.addAnimation("jumping",monkey_running);

    monkey.velocityY = -8;
  }
      monkey.velocityY = monkey.velocityY + 0.8


  monkey.collide(ground);
  ground.visible=true;
  if(keyDown("RIGHT_ARROW")) {
      monkey.addAnimation("moving",monkey_running);

    monkey.velocityX=2;
  }
  if (keyDown("LEFT_ARROW")) {
      monkey.addAnimation("sprite_5.png",monkey_running);

    monkey.velocityX=-2;
  }
  if (monkey.isTouching(banana)) {
    banana.visible=false;
  }


  drawSprites();
}

function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,310,20,20);
  banana.y = Math.round(random(600,310));
   banana.addImage(bananaImage);
  banana.scale = 0.5;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
   banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
   bananaGroup.add(banana);
    drawSprites();
  }
}




