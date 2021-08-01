var garden,rabbit;
var gardenImg,rabbitImg;
var apple, applepng;
var leave, leaves, oleaves, rleaves;
var rand;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applepng = loadImage("apple.png");
  leaves = loadImage("leaf.png",);
  oleaves = loadImage("orangeleaf.png")
  rleaves = loadImage("redimage.png")
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
  rabbit.x = World.mouseX
  
  var select_sprites = Math.round(random(1, 2));

  if(frameCount % 60 == 0){
    if(select_sprites == 1){
    create_leaves();
    }

    if(select_sprites == 2){
    create_appples();
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
  var leafs = Math.round(random(0, 2));
    rand = Math.round(random(1, 3))
    
    
    switch(rand){
    case 1:
     leave.addImage(leaves);
      break;
    case 2:
      leave.addImage(oleaves);
     break;
    case 3:
      leave.addImage(rleaves);
    default:
      break;
    }
  
    

  leave.scale = 0.05;
  leave.velocityY = 2
}

