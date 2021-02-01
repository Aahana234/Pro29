const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var slingShot,ball;
var stand1, stand2;
var polygon;
function preload(){
polygonImage = loadImage("polygon.png")

}


function setup(){
var canvas = createCanvas(1200,900);
engine = Engine.create();
world = engine.world;
//create a ground
ground = new Ground(600,600,1200,20);


//level one 

block1 = new Block(750,470);
block2 = new Block(800,470);
block3 = new Block(850,470);
block4 = new Block(800,420);
block5 = new Block(750,420);
block6 = new Block(850,419);
block7 = new Block(805,370);


//level two

block8 = new Block(330,235);
block9 = new Block(360,235);
block10 = new Block(390,235);
block11 = new Block(420,235);
block12 = new Block(450,235);

//level three

block13 = new Block(360,195);
block14 = new Block(390,195);
block15 = new Block(420,195);


//top

block16 = new Block(390,155);
polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingshot = new SlingShot(polygon,{x:150,y:200})

stand1 = new Stand(390,270,400,20);
stand2 = new Stand(800,500,300,20);


} 




function draw(){
    background(255);
    Engine.update(engine);
ground.display();


    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display()
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    imageMode(CENTER)
    image(polygonImage,polygon.position.x,polygon.position.y,40,40);

    slingshot.display();
    stand1.display();
    stand2.display();
    
}

function mouseDragged(){
Matter.Body.setPosition(polygon,{x:mouseX, y:mouseY});

}
function mouseReleased(){

slingshot.fly();

}

