
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var p1;
var b1,b2,b3;
var g1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    background("black")

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    p1= new Paper(100,100,2)
    b1= new Dustbin(680,590,20,100)
    b2= new Dustbin(780,590,20,100)
    b3= new Dustbin(730,630,130,20)
    g1= new Ground(400,650,800,20)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  
  p1.display();
  b1.display();
  b2.display();
  b3.display();
  g1.display();
  drawSprites();
 
}
function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(p1.body,p1.body.position,{x:85,y:85});
  }
}




