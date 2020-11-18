//to define the variables
var bow, arrow, green_balloon, red_balloon, pink_balloon, blue_balloon, background;

var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage, blue_balloonImage, backgroundImage;

var score = 0;

var arrowGroup, redb_group, blueb_group, pinkb_group, greenb_group;


function preload() {

  //loading the images
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");

}

function setup() {
  //to create the canvas
  createCanvas(600, 600);

  //creating background
  background = createSprite(0, 0, 600, 600);
  background.addImage(backgroundImage);
  background.scale = 3.0;

  // creating bow to shoot arrow
  bow = createSprite(480, 220, 20, 50);
  bow.addImage(bowImage);
  bow.scale = 1;

  //creating the groups
  redb_group = new Group();
  blueb_group = new Group();
  pinkb_group = new Group();
  greenb_group = new Group();
  arrowGroup = new Group();

}

function draw() {

  //give velocity to background
  background.velocityX = -3;
  
  //resetting the background
  if (background.x < 0) {
    background.x = background.width / 2
  }

  //moving bow with the mouse
  bow.y = World.mouseY

  // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
  }

  //to destroy the arrow and balloon when they touch each other
  if (arrowGroup.isTouching(redb_group)) {
    redb_group.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
  }
  if (arrowGroup.isTouching(blueb_group)) {
    blueb_group.destroyEach();
    arrowGroup.destroyEach();
    score = score + 2;
  }
  if (arrowGroup.isTouching(pinkb_group)) {
    pinkb_group.destroyEach();
    arrowGroup.destroyEach();
    score = score + 2;
  }
  if (arrowGroup.isTouching(greenb_group)) {
    greenb_group.destroyEach();
    arrowGroup.destroyEach();
    score = score + 3;
  }
  //to draw the sprites
  drawSprites();

  //to select random balloons
  var balloon_selection = Math.round(random(1, 4));
  
  //to display the random balloons slected in the console window
  console.log(balloon_selection);

  //to display random balloons
  if (World.frameCount % 80 === 0) {
    if (balloon_selection === 1) {
      redBalloon();
    } else if (balloon_selection === 2) {
      blueBalloon();
    } else if (balloon_selection === 3) {
      greenBalloon();
    } else {
      pinkBalloon();
    }
  }
  textSize = 20;
  textFont = "Arial";
  fill("black");
  stroke("black");
  text("YOUR SCORE IS: " + score, 270, 80);
  
}

// Creating  arrows for bow
function createArrow() {
  var arrow = createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.y = bow.y;
  arrow.scale = 0.3;
  arrow.lifetime = 80;
  arrow.addImage(arrowImage);
  //adding arrows to arrow group
  arrowGroup.add(arrow);

}

//to create the red balloons
function redBalloon() {
  red_balloon = createSprite(0, Math.round(random(20, 370)), 10, 10);
  red_balloon.addImage(red_balloonImage);
  red_balloon.velocityX = 4;
  red_balloon.scale = 0.1;
  red_balloon.lifetime = 150;
  //adding red balloons to the red group
  redb_group.add(red_balloon);
}

//to create the blue balloons
function blueBalloon() {
  blue_balloon = createSprite(0, Math.round(random(50, 400)), 10, 10);
  blue_balloon.addImage(blue_balloonImage);
  blue_balloon.velocityX = 4;
  blue_balloon.scale = 0.1;
  blue_balloon.lifetime = 150;
  //adding blue balloons to the blue group
  blueb_group.add(blue_balloon);
}

//to create the green balloons
function greenBalloon() {
  green_balloon = createSprite(0, Math.round(random(80, 430)), 10, 10);
  green_balloon.addImage(green_balloonImage);
  green_balloon.velocityX = 4;
  green_balloon.scale = 0.1;
  green_balloon.lifetime = 150;
  //adding green balloons to the blue group
  greenb_group.add(green_balloon);
}

//to create the pink balloons
function pinkBalloon() {
  pink_balloon = createSprite(0, Math.round(random(110, 460)), 10, 10);
  pink_balloon.addImage(pink_balloonImage);
  pink_balloon.velocityX = 4;
  pink_balloon.scale = 1.1;
  pink_balloon.lifetime = 150;
  //adding pink balloons to the pink group
  pinkb_group.add(pink_balloon);
}

