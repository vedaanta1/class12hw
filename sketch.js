var garden,rabbit;
var gardenImg,rabbitImg;
var apple, applepng;
var leave, leaves;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applepng = loadImage("apple.png");
  leaves = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}



function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  var select_sprites = Math.round(random(1, 2));

  if(frameCount % 80 == 0){
  
    if(select_sprites == 1){
    create_appples();
    }

    if(select_sprites == 2){
    create_leaves();
    }


    
}

  drawSprites();
}

function create_appples(){
  apple = createSprite(random(50, 350), 40, 10, 10);
  apple.addImage(applepng);
  apple.scale = 0.05;
  apple.velocityY = 2
}

function create_leaves(){
  leave = createSprite(random(50, 350), 40, 10, 10);
  leave.addImage(leaves);
  leave.scale = 0.05;
  leave.velocityY = 2
}

