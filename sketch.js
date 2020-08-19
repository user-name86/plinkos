  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
 
var world,engine;
var particles = [];
var plinkos = [];
var divisions =[];
var turn=0;
var particle;
var gameState;

var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  gameState ="play";


   for (var k = 10; k <=width; k = k + 93) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 70; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75,10,10));
    }

    for (var j = 40; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175,10,10));
    }

     for (var j = 70; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275,10,10));
    }

     for (var j = 40; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375,10,10));
    }
}
 


function draw() {
  Engine.update(engine);
  background("black");
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
  ground.display();
  for (var j = 0; j < plinkos.length; j++) {
    
    plinkos[j].display();
     
  } 
   if(turn>=5){
    gameState="over";
  }
 
  
    
  
   
  drawSprites();
  if(gameState ==="over"){
    textSize(20);
    fill("red");
    text("GAME OVER",220,400 );
  }
  textSize(20);
  stroke(220,192,102);
  strokeWeight(5);
  line(0,490,480,490);
   
  textSize(20);
  fill("red");
  stroke(8);
  text("Score : "+score,20,30);

}

function mousePressed(){
   if (gameState !== "over" && frameCount%60===0){
    particle= new Particle(random(50,350,),random(0,50),10,10);
    score++
    turn++
    particle.display();
    
  }
}