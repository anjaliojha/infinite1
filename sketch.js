
var robot, robot_img;
var bg_img, bg;
//var ufo_img, ufo;
var invisibleGround
var score = 0;
function preload(){
	bg_img = loadImage("background techno.jpg");
	robot_img = loadAnimation("robot-run.gif");
	//ufo_img = loadAnimation("ufo.gif");
}

function setup(){
	createCanvas(400,400);
	
	
	canvas = createCanvas(displayWidth - 20, displayHeight-30);

	robot = createSprite(20,300,30,30);
	robot.addAnimation("walking",robot_img);
	robot.scale = 0.5;

	bg = createSprite(displayWidth, displayHeight);
	bg = addAnimation("background", bg_img);

	invisibleGround = createSprite(200,190,400,10);
  	invisibleGround.visible = false;

	  ufoGroup = new Group();
}


function draw(){


	camera.position.x = displayWidth/2;
    camera.position.y = cars[index-1].y

	text("Score:  "+score, 300,100);
	if(keyDown("space")&&robot.y>100) {
		robot.velocityY = -10;
		robot.velocityY = monkey.velocityY + 0.8
		monkey.collide(invisibleGround);
	  }

	  spawnUFOs();

	  if(keyDown(UP_ARROW)&& robot.x-200 === ufo.x){
		  ufo.hide();
		score = score + 1;
	  }

	  if(robot.x - ufo.x > 1){
		  score = score - 10;
	  }
	  function spawnUFOs() {
		if (frameCount % 100 === 0) {
		  var ufo = createSprite(600,120,40,10);
		  ufo.y = Math.round(random(80,120));
		  ufo.addAnimation("ufo",ufo_image);
		 ufo.scale = 0.5;
		  ufo.velocityX = 0;
		 ufo.lifetime = 200;
		}
		}
	}
