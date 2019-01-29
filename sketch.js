//flatgame template by Lee2sman 2018-2019
//leetusman.com
//code=MIT license. artistic work = cc 3.0


let frame;
let item = [];
let worldW = 2000, worldH = 1000;
let player, playerAnimation;
let img = [], animations = [];
let totalImages = 15, totalAnimations = 11;

function preload(){

    //load images
    for (let i =0; i<totalImages; i++){
     img[i] = loadImage('assets/images/'+i+'.png');
     img[i].x = random(200,worldW-200);
     img[i].y = random(200,worldH-200);
   }

   //load animations - not in a loop!
    animations[0] = loadAnimation('assets/animations/bow01.png','assets/animations/bow02.png')
    animations[1] = loadAnimation('assets/animations/cat01.png','assets/animations/cat02.png')
    animations[2] = loadAnimation('assets/animations/cool01.png','assets/animations/cool04.png')
    animations[3] = loadAnimation('assets/animations/cube01.png','assets/animations/cube02.png')
    animations[4] = loadAnimation('assets/animations/hopper01.png','assets/animations/hopper02.png')
    animations[5] = loadAnimation('assets/animations/lefty01.png','assets/animations/lefty02.png')
    animations[6] = loadAnimation('assets/animations/money01.png','assets/animations/money04.png')
    animations[7] = loadAnimation('assets/animations/palette01.png','assets/animations/palette02.png')
    animations[8] = loadAnimation('assets/animations/panda01.png','assets/animations/panda02.png')
    animations[9] = loadAnimation('assets/animations/sun01.png','assets/animations/sun03.png')
    animations[10] = loadAnimation('assets/animations/tree01.png','assets/animations/tree03.png')
    animations[11] = loadAnimation('assets/animations/walker01.png','assets/animations/walker02.png')

    for (let i=0; i<totalAnimations;i++){
      animations[i].x = random(200,2*worldW);
      animations[i].y = random(200,worldH);
    }

    playerAnimation = loadAnimation('assets/animations/walker01.png','assets/animations/walker02.png');
}

function setup() {
  createCanvas(worldW,worldH); //how big is our world? (in pixels!)

  player = createSprite(width, height, 50, 100);
  //player.addAnimation('playerAnimation');
  player.addAnimation('moving', 'assets/animations/walker01.png','assets/animations/walker02.png');
  player.changeAnimation('moving');
  player.animation.frameDelay = 15; //slow down the player animation
}

function draw(){
  background(5,5,5);

  for (let i=0; i<15; i++){
    image(img[i],img[i].x,img[i].y,200,200);
  }

  //added some volcanos!
    image(img[13],300,300,300,300);
    image(img[13],100,700,300,300);
    image(img[13],1300,300,300,300);
    image(img[13],900,900,300,300);
    image(img[13],1800,800,300,300);
    image(img[13],800,500,300,300);
    image(img[13],1100,700,300,300);
    image(img[13],1500,500,300,300);

  //animation(animations[0],100,100);
   for(let i=0; i<totalAnimations; i++){
      animation(animations[i],animations[i].x,animations[i].y);
      animations[i].frameDelay = 15;
   }

  movePlayer();

  //set the camera position to the player position
  camera.position.x = player.position.x;
  camera.position.y = player.position.y;

  //limit the player movements
  if(player.position.x < 0)
    player.position.x = 0;
  if(player.position.y < 0)
    player.position.y = 0;
  if(player.position.x > 2*width)
    player.position.x = 2*width;
  if(player.position.y > 2*height)
    player.position.y = 2*height;


  //character on the top
  drawSprite(player);

  fill(255);
  textSize(36);
  text("The volcano was filled with cookies... ",0,00);
  textSize(18);
  text("--a collaborative Flatgame at Processing Community Day Los Angeles 2019",0,25);
  text("Made by 30+ people including Lee Tusman, Moon Jang, R. Wolfson, Lizzy Brooks, Nicole Thayer, Daniel Shiffman, Aliki Caloyeras, Elias, Olympia, Devon Frost, Angi Chau, Masood Kamandy and many more!",0,50);
}

function movePlayer(){
 if (keyIsDown(LEFT_ARROW)) {
    player.position.x -= 25;
    player.mirrorX(-1); //flip sprite/animation horizontally
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.position.x += 25;
    player.mirrorX(1); //show normal sprite/animation
  }

  if (keyIsDown(UP_ARROW)) {
    player.position.y -= 25;
  }
  if (keyIsDown(DOWN_ARROW)) {
    player.position.y += 25;
  }
}
