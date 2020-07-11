var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var Paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  bin_img=loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(1200, 1200);


	engine = Engine.create();
	world = engine.world;


	
	
Paper = new paper(100,100,30); 

	ground = new Ground(width/2, 650, 2*width, 10 , Option );
	 World.add(world, ground);
	 
   log1 = new Log(900,640,200,20);
  
     

	
  log2 = new Log(800,600,20,100 );
 
	
	 
	 log3 = new Log(1000,600,20,100);
	 



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  
  log1.display();
  log2.display();
  log3.display();
  
  Paper.display();

  
  
  
 
}

function keyPressed()
{
  if (keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(Paper.body,Paper.body.position,{x:50,y:-35});
  }
}

