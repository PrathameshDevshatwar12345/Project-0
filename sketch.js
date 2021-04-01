//create global variables here
var tom;
var jerry;

var tomrest_img,tomwalk_img,tomhappy_img;
var jerryrest_img,jerrytease_img,jerryhappy_img;

var background1,background1_img;

function preload() {
    //load the images here
    tomrest_img=loadImage("images/cat1.png");
    jerryrest_img=loadImage("images/mouse1.png");

    tomwalk_img=loadAnimation("images/cat2.png","images/cat3.png");
    jerrytease_img=loadAnimation("images/mouse2.png","images/mouse3.png");

    tomhappy_img=loadAnimation("images/cat4.png");
    jerryhappy_img=loadAnimation("images/mouse4.png");

    background1_img=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);

    background1=createSprite(500,400,1000,800);
    background1.addImage("forest",background1_img);
    background1.scale=1.0;
    
    //create tom and jerry sprites here
    tom=createSprite(750,600,40,40);
    tom.addImage("cat",tomrest_img);
    tom.scale=1.0;

    jerry=createSprite(300,600,20,20);
    jerry.addImage("mouse",jerryrest_img);
    jerry.scale=1.0;
}

function draw() {

    background("background1_img");
    //Write condition here to evalute if tom and jerry collide

    if (tom.x-jerry.x<tom.width/2-jerry.width/2){
        tom.x=jerry.x+15;
        tom.addAnimation("happyone",tomhappy_img);
        tom.setVelocity(0,0);

        jerry.addAnimation("HAAPPY",jerryhappy_img);
    }

    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
  if (keyCode===LEFT_ARROW) {
    jerry.addAnimation("teasethecat",jerryhappy_img);
  
    tom.addAnimation("walking",tomwalk_img);
    tom.setVelocity(-10,0);

  }
}