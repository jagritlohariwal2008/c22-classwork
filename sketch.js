//renaming or nick-naming
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world, ground,ball;

function setup() {
  createCanvas(400,400);

//creating my engine
engine= Engine.create();
world= engine.world;

var options={
  isStatic:true
}

ground= Bodies.rectangle(200,380,400,20, options); 
World.add(world,ground);

var ball_options={
  restitution:100
}
ball= Bodies.circle(200,100,20,ball_options);
World.add(world,ball);
console.log(ball);
}

function draw() {
  background(255); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20)
}