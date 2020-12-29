
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   bobObject1 = new Bob()



	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.run(engine);
  
  drawSprites();
 
}



