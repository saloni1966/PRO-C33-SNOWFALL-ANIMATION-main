const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var snow1, snow2, snow3, snow4, snow5;
var maxDrops=70;
var drops=[];

function preload()
{
  snow1 = loadImage("snow1.jpg");
  snow2 = loadImage("snow2.jpg");
    //snow3 = loadImage("snow3.png");
    //snow3 = loadImage("snow3.jpg");
    //snow3 = loadImage("snow3.jpeg");
    //snow3 = loadImage("snow.jpgy");
 
}

function setup() 
{
  createCanvas(800, 400);
    //engine = create();
  //engine = Engine.create();
  //engine = Engine();
  //engine = Engine.show();
  world  = engine.world;
  if(frameCount%100===0){
    for(var i=0; i<maxDrops;i++){
      drops.push(new Snow(random(0,700),random(0,700)));
     }
    }
  
}

function draw() 
{
  background(snow2);
  Engine.update(engine); 
  for(var i=0; i<maxDrops;i++){
   // drops[i].display();
   // drops[m].display();
   // drops[i].display;
  //  drops.display();
    drops[i].update();
  }
}
