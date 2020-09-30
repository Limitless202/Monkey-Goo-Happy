var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime=0;
var q;
var ground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  monkey=createSprite(100,540,10,10);
  monkey.addAnimation("q",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(0,550,1200,10);
  ground.velocityX=-6; 

  bananaGroup = new Group();
  obstaclesGroup = new Group();
  
score=0;
  

}


function draw() {
  
  background(225);
  
 
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,250,30);
  
  
  //
  if(keyDown("space") && monkey.y >= 500) {
      monkey.velocityY = -12;     
    }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  //
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
   
  monkey.collide(ground);
  
  spawnBanana();
  spawnObstacles();
  drawSprites();
}

function spawnBanana(){
  //write code here to spawn the clouds
  if (frameCount % 120 === 0) {
    var banana = createSprite(600,530,40,10);
    banana.x = Math.round(random(400,600));
    banana.y = Math.round(random(400,500));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    bananaGroup.add(banana);
  }
}
function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(600,530,10,40);   
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -(6 + 3*score/100);
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;    
    obstaclesGroup.add(obstacle);
  }
}

