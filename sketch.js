const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var score=0;
var bg,bgImage;
function preload(){
  getTime()
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1100,400);
  engine = Engine.create();
  world = engine.world;
 // Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(490,300,250,10);
  stand2 = new Stand(800,200,200,10);
 
  //level one
  block1 = new Block(400,275,30,40);
  console.log(block1);
  block2 = new Block(430,275,30,40);
  block3 = new Block(460,275,30,40);
  block4 = new Block(490,275,30,40);
  block5 = new Block(520,275,30,40);
  block6 = new Block(550,275,30,40);
  block7 = new Block(580,275,30,40);
  //level two
  block8 = new Block(430,235,30,40);
  block9 = new Block(460,235,30,40);
  block10 = new Block(490,235,30,40);
  block11 = new Block(520,235,30,40);
  block12 = new Block(550,235,30,40);
  //level three
  block13 = new Block(460,195,30,40);
  block14 = new Block(490,195,30,40);
  block15 = new Block(520,195,30,40);
  //top
  block16 = new Block(490,155,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Block(740,175,30,40);
  blocks2 = new Block(770,175,30,40);
  blocks3 = new Block(800,175,30,40);
  blocks4 = new Block(830,175,30,40);
  blocks5 = new Block(860,175,30,40);
  //level two
  blocks6 = new Block(770,135,30,40);
  blocks7 = new Block(800,135,30,40);
  blocks8 = new Block(830,135,30,40);
  //top
  blocks9 = new Block(800,95,30,40);

  //ball holder with slings
  ball = Bodies.circle(150,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:200,y:200});

}
function draw() {
  if(bgImage){
    background(bgImage)
  }
  
  Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);
  text("Score = "+ score/100,100,80)
  //slingShot.display();

}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  Matter.Body.setStatic(this.ball,false)
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32 ){
    ball = Bodies.circle(100,200,20);
    World.add(world,ball);
  //console.log("hello")
  //this.ball.position.x=100
  //this.ball.position.y=200
  //Matter.Body.setStatic(this.ball,true)
  slingShot = new Slingshot(this.ball,{x:200,y:200});

  //slingShot.attach(this.ball);

  }
}

async function getTime(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
  //console.log(response)
  var date = await response.json();
  //console.log(datetime)
  var time = date.datetime
  console.log(time)
  var hour =time.slice(11,13)
  console.log(hour)
  if(hour>18){
bg=("night.jpg")
  }
  else
  bg=("download.jpg")
  bgImage=loadImage(bg)
}
