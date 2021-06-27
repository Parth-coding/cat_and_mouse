var cat,cat_image,cat_lastimage,cat_runningimage,mouse;
var mouse_image,mouse_teasing,mouse_lastimage,moveLeft;
 var moveRight,garden,garden_image;

function preload() {
    cat_image=loadImage("cat1.png");
    cat_lastimage=loadImage("cat4.png");
    cat_runningimage=loadAnimation("cat2.png","cat3.png");
    mouse_image=loadImage("mouse1.png");
    mouse_lastimage=loadImage("mouse4.png");
    mouse_teasing=loadAnimation("mouse2.png","mouse3.png");
    garden_image=loadImage("garden.png");
}

function setup(){
    createCanvas(600,600);

    garden=createSprite(300,300,300,300);
    garden.addImage("garden",garden_image);
    
    



    
 cat = createSprite(500,500,20,50);
 cat.addImage("standing", cat_image);
 cat.scale=0.1;

 mouse = createSprite(200,500,20,50);
 mouse.addImage("standing", mouse_image);
 mouse.scale=0.1;

 
    

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x === 20 ){
        cat.addImage("lastImage",cat_lastimage);
        cat.changeImage("lastImage");
        mouse.addImage("M_lastImage",mouse_lastimage);
        mouse.changeImage("M_lastImage");
        cat.x=cat.x+10;
        cat.velocityX=0;
    }
 



    drawSprites();

}


function keyPressed(){

    if(keyCode===LEFT_ARROW)
   {
      cat.velocityX=-1;
        cat.addAnimation("running",cat_runningimage);
        cat.changeAnimation("running")
       
        mouse.addAnimation("teasing",mouse_teasing);
       mouse.changeAnimation("teasing");
       
     

    }

  //For moving and changing animation write code here


}
