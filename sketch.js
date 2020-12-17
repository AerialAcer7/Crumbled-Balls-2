var ball;
var binImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  binImg = loadImage("dustbingreen.png");   
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ball = new Ball(50,350,50);
     ground = new Ground(350,700,width,20);
     bin = new Bin(500,630,20,100);
     bin1 = new Bin(575,680,150,20);
     bin2 = new Bin(650,630,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
   ball.display();
   ground.display();
   bin.display();
   bin2.display();
   bin1.display();
   image(binImg,488,580,175,110);
   

   if(keyDown(UP_ARROW)){
     Matter.Body.applyForce(ball.body,ball.body.position,{x:2,y:-2}) 
}
}


