var man, man_img;
var arrow, ar_img;
var bg_img;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var obstaclesGroup;


function preload(){

    man_img = loadImage("man1.jpg");
    ar_img = loadImage("arrow.jpg");
    obstacle1 = loadImage("obs1.jpg");
    obstacle2 = loadImage("obs2.jpg");
    obstacle3 = loadImage("obs3.jpg");
    //obstacle4 = loadImage("");
    //obstacle5 = loadImage("");
    //obstacle6 = loadImage("");

}


function setup(){

createCanvas(900, 500);
obstaclesGroup = createGroup();

man = createSprite(200, 220, 50, 50);
man.addImage(man_img);
man.scale = 1.25;


} 


function draw(){

//createedgesSprite()

    background("white");

if(keyDown("space")){

arrow = createSprite(260, 199, 50, 50);
arrow.addImage(ar_img);
arrow.scale = 0.5;
arrow.velocityX = 5;
arrow.y = man.y;
}

if(keyDown(DOWN_ARROW)){

   man.y = man.y+4;
}

if(keyDown(UP_ARROW)){

    man.y = man.y-4;
}

spawnObstacles();




    drawSprites();
}


function spawnObstacles() {
    if (frameCount % 60 === 0) {
      var obstacle = createSprite(600, 165, 10, 40);
      //obstacle.velocityX = -(6 + score / 100);
      obstacle.velocityX = -6
      //generate random obstacles
      var rand = Math.round(random(1, 6));
      switch (rand) {
        case 1:
          obstacle.addImage(obstacle1);
          break;
        case 2:
          obstacle.addImage(obstacle2);
          break;
        case 3:
          obstacle.addImage(obstacle3);
        
      }
  
      //assign scale and lifetime to the obstacle           
      obstacle.scale = 0.5;
      obstacle.lifetime = 300;
  
      //add each obstacle to the group
      obstaclesGroup.add(obstacle);
    }
  }
  