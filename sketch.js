const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var line1,line2,line3,line4,ball;
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacle7,obstacle8,obstacle9;
var obstacle10,obstacle11,obstacle12,obstacle13;
var bk_song,button,starImage,star;

function preload() {
  bk_song=loadSound("sound1.mp3");
  starImage=loadImage("star.png");
}

function setup() {
  createCanvas(1280,600);
 
  bk_song.play();
  bk_song.setVolume(0.5);

  engine = Engine.create(); 
  world = engine.world; 

  star=createSprite(1120,470,20,20)
  star.addImage(starImage);
  star.scale=0.03;

  

 line1=new Line(590,510,1010,20);
 line2=new Line(95,300,20,400);
 line3=new Line(535,100,900,20);
 line4=new Line(1090,270,20,360);
 ball=new Ball(1040,140,30,30);

 obstacle1=new OBSTACLE(680,420,840,10);
 obstacle2=new OBSTACLE(830,300,400,10);
 obstacle3=new OBSTACLE(980,160,10,100)
 obstacle4=new OBSTACLE(450,370,350,10)
 obstacle5=new OBSTACLE(400,260,360,10)
 obstacle6=new OBSTACLE(200,260,10,140)
 obstacle7=new OBSTACLE(260,325,210,10)
 obstacle8=new OBSTACLE(260,160,210,10)
 obstacle9=new OBSTACLE(300,345,10,39)
 obstacle10=new OBSTACLE(600,170,160,10)
 obstacle11=new OBSTACLE(685,230,10,140)
 obstacle12=new OBSTACLE(395,400,10,50)
}


function draw() {
  background(225,255,255);  
  Engine.update(engine);

  drawSprites();
  
  line1.show();
  line2.show();
  line3.show();
  line4.show();
  ball.show();

  obstacle1.show();
  obstacle2.show();
  obstacle3.show();
  obstacle4.show();
  obstacle5.show();
  obstacle6.show();
  obstacle7.show();
  obstacle8.show();
  obstacle9.show();
  obstacle10.show();
  obstacle11.show();
  obstacle12.show();
  blow_up();
  blow_right();
  blow_left();

}

function blow_up(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:-0.09});
}

}

function blow_right(){
  if(keyCode===RIGHT_ARROW){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0.08,y:0});
  }
}

function blow_left(){
  if(keyCode===LEFT_ARROW){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:-0.08,y:0});
  }
}
