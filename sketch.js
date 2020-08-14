
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var log1,log2,log3;
var ground;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,590,30,{isStatic:false});

			  
	log1 = new Log(600,600,100,15);
	log2 = new Log(546,555,15,100);
	log3 = new Log(650,555,15,100);

	ground = new Ground(400,610,1200,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();

  log1.display();
  log2.display();
  log3.display();

  ground.display();

  
  //drawSprites();
 
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Body.applyForce(paper.body,paper.body.position,{x:85,y:-60})
	}

}
