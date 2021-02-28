const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;
  ground = Bodies.rectangle(200,390,20,50,{isStatic: true});
  World.add(world, ground);
}

function draw() {
  background("blue");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 20,50);
}