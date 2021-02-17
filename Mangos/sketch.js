
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1000,100,30);
	mango2 =new mango(1170,88,30);
	mango3 =new mango(1150,134,30);
	mango4 =new mango(900,123,30);
	mango5=new mango(1050,144,30);
	stone = new Stone(235, 420, 30)
	launcher = new Lancher(stone.body, {x:235, y:420})

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  launcher.display();
  groundObject.display();
  detectCollision(stone, mango1)
  detectCollision(stone, mango2)
  detectCollision(stone, mango3)
  detectCollision(stone, mango4)
  detectCollision(stone, mango5)




}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})

}
function mouseReleased(){
    launcher.fly();
    
}
function detectCollision(object1, object2){
	distance = dist(object1.body.position.x,object1.body.position.y, object2.body.position.x, object2.body.position.y)
if(distance<= object1.r +object2.r){
	Matter.Body.setStatic(object2.body, false)
}

}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:235, y:420})
		lanucher.attach(stone.body)
	}
}

