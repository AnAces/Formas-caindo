
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var forma1;
var forma2;
var forma3;
var chão;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
 var chão_options = {
	isStatic:true
 }
 var forma1_options = {
  restutition: 0.5,
  friction : 0.02,
  frictionAir : 0
 }

 var forma2_options = {
  restutition: 0.7,
  friction : 0.01,
  frictionAir : 0.1
 }

 var forma3_options = {
  restutition: 0.01,
  friction : 1,
  frictionAir : 0.3
 }

forma1 = Bodies.circle(220,10,10,forma1_options)
 World.add(world,forma1);
  
 forma2 = Bodies.rectangle(110,50,10,10,forma2_options);
 World.add(world,forma2);

 forma3 = Bodies.rectangle(350,50,10,10,forma3_options);
 World.add(world,forma3);

  chão = Bodies.rectangle(600,580,1200,2,chão_options);
  World.add(world,chão);
  
	Engine.run(engine);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  
  background("lightblue");
  
  Engine.update(engine);
rect (chão.position.x,chão.position.y,1200);
ellipse(forma1.position.x, forma1.position.y,30);
rect ( forma2.position.x, forma2.position.y, 50,50);
rect ( forma3.position.x, forma3.position.y,100,50);
  drawSprites();
 
}



