const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ballImage;
var fidgetSpinnerImage,fidgetSpinnerGroup;
var leftArrowImage,leftArrowGroup;
var rightArrowImage,rightArrowGroup;
var starImage,starGroup;
var tableImage,tableGroup;
var restart,restartImage;
var ground, invisibleGround;

var gameState = play;
var play = 1 , end = 0;

var distance = 0;
var score = 0;

function preload() {
ballImage=loadImage("sprites/ball.png");
fidgetSpinnerImage= loadImage("sprites/fidgetSpinner.jpg");
leftArrowImage= loadImage("sprites/leftArrow.png");
rightArrowImage= loadImage("sprites/rightArrow.png");
starImage= loadImage("sprites/star.png");
tableImage= loadImage("sprites/table.jpg");
restartImage = loadImage("sprites/restartImage.jpg");
}

function setup() {
  createCanvas(800, 700);

  //The ball
  ball = createSprite(100,300,40,40);
  ball.addImage(ballImage);
  ball.scale = 0.2;
	
  //Ground
  ground = createSprite(400,420,800,3);
  ground.x = ground.width/2;
  ground.velocityX = -10;

  invisibleGround = createSprite(400,410,800,3);
  invisibleGround.visible = false;

  //Groups for different obstacle types
  fidgetSpinnerGroup = new Group();
  leftArrowGroup = new Group();
  rightArrowGroup = new Group();
  starGroup = new Group();
  tableGroup = new Group();
}

function draw(){
  background("blue");

  //Calculating and displaying distance
  text("Distance:"+ Math.round(distance),650,50);

  distance += 0.4;

/*
  //Scoring points with stars
  text("Score:" + score, 150,50);

  if(starGroup.isTouching(ball)){
      score++;
  }
*/

  //Creating an infinite ground
  if (ground.x < 400) {
    ground.x = ground.width/2;
  }

  //The ball's ability to jump with gravity making it fall again
  ball.collide(invisibleGround);

  if (keyCode === 32){
    ball.velocityY = -12;
  }
  ball.velocityY += 1; 

  //Ground speed when ball interacts with the speed arrows
   /* if(leftArrowGroup.isTouching(ball)){
     ground.velocityX = ground.velocityX - 0.5;
    } else if (rightArrowGroup.isTouching(ball)) {
     ground.velocityX += 0.5;        
    } */

    

  createFidgetSpinners();
  //createleftArrows();
  //createRightArrows();
  //createStars();
  //createTables();

  drawSprites();
}

function createFidgetSpinners(){
    //Spawning fidget spinners
    if (frameCount % 80 === 0) {
      var randY = random(10,407);
      var fidgetSpinner = createSprite(800,randY,20,20);
      fidgetSpinner.addImage("fidgetSpinner",fidgetSpinnerImage);
      fidgetSpinner.velocityX = -4;
      fidgetSpinner.scale = 0.03;
  
      fidgetSpinnerGroup.add(fidgetSpinner);
  
  //Speed arrows will change the complete environment, not just the speed of the ground
      /*if(leftArrowGroup.isTouching(ball)){
          fidgetSpinner.velocityX = fidgetSpinner.velocityX - 0.5;
      } else if (rightArrowGroup.isTouching(ball)) {
          fidgetSpinner.velocityX += 0.5;        
      }*/
    }
  }

function createleftArrows(){
  //Spawning left arrows
  var randomFrames = random(70,120);
  if (frameCount % randomFrames === 0 ) {
    var leftArrow = createSprite(800,407,25,25);
    leftArrow.addImage("leftArrow",leftArrowImage);
    leftArrow.velocityX = -4;

    leftArrowGroup.add(leftArrow);

//Speed arrows will change the complete environment, not just the speed of the ground
    /*if(leftArrowGroup.isTouching(ball)){
        leftArrow.velocityX = leftArrow.velocityX - 0.5;
    } else if (rightArrowGroup.isTouching(ball)) {
        leftArrow.velocityX += 0.5;        
    }*/
  }
}

function createRightArrows(){
  //Spawning right arrows
  var randomFrames = random(70,120);
  if (frameCount % randomFrames === 0 ) {
    var rightArrow = createSprite(800,407,25,25);
    rightArrow.addImage("rightArrow",rightArrowImage);
    rightArrow.velocityX = -4;
  
    rightArrowGroup.add(rightArrow);

//Speed arrows will change the complete environment, not just the speed of the ground
    /* if(leftArrowGroup.isTouching(ball)){
        rightArrow.velocityX = rightArrow.velocityX - 0.5;
    } else if (rightArrowGroup.isTouching(ball)) {
        rightArrow.velocityX += 0.5;        
    }*/
  }
}

function createStars(){
  //Spawning stars
  var randomFrames = random(100,120);
  if (frameCount % randomFrames === 0 ) {
    var randY = random(350,410);
    var star = createSprite(800,randY,20,20);
    star.addImage("star",starImage);
    star.velocityX = -4;

    starGroup.add(star);

//Speed arrows will change the complete environment, not just the speed of the ground
    /*if(leftArrowGroup.isTouching(ball)){
        star.velocityX = star.velocityX - 0.5;
    } else if (rightArrowGroup.isTouching(ball)) {
        star.velocityX += 0.5;        
    }*/
  }
}

function createTables(){
  //Spawning tables
  var randomFrames = random(100,130);
  if (frameCount % randomFrames === 0 ) {
  var table = createSprite(800,410,40,20);
  table.addImage("table",tableImage);
    table.velocityX = -4;
  
    tableGroup.add(table);

//Speed arrows will change the complete environment, not just the speed of the ground
    /*if(leftArrowGroup.isTouching(ball)){
        table.velocityX = table.velocityX - 0.5;
    } else if (rightArrowGroup.isTouching(ball)) {
        table.velocityX += 0.5;        
    }*/
  }
}