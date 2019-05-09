//  game constants like size of the stage (used for calculations below)
var GAME_HEIGHT = 450;
var GAME_WIDTH = 750;
var PLAYER_MOVEMENT_VELOCITY = 150;
var PLAYER_JUMP_VELOCITY = 350;
console.log("running game.js")

var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.CANVAS, 'game-stage', { preload: preload, create: create, update: update });

function restartMusic(){
  music.restart()
}

function preload() {
  console.log("running preload")
  // load all the game assest in before we create the stage 
  game.load.image('ground','images/100x100.png');
  game.load.image('ground2', 'images/200x100.png')
  game.load.image('ground4' , 'images/400x100.png')
  game.load.image('Square', 'images/Circle.jpg');
  game.load.image('City', 'images/Game Background.png');
  game.load.image('door', 'images/Door4Josh.png');
  game.load.spritesheet('player', 'images/avatar still 2.png',20,50);
  game.load.spritesheet('cowboy', 'images/cowboyWalk.png', 30, 38);
  game.load.spritesheet('trigger', 'images/jf2small.png', 50, 50, 1);
  game.load.spritesheet('msgBox', 'images/Light-Blue-Box.jpg', 450, 150, 1);
  game.load.spritesheet('speaker', 'images/Square.jpg', 80, 100, 1);
  game.load.spritesheet('coin', 'images/coin.png', 50,50);
  game.load.audio('music', music);

  game.load.bitmapFont('gem', 'gem.png', 'images/gem.xml');
  game.load.atlas('dpad', 'images/dpad.png', 'images/dpad.json');
}

//  global variables for game world (this is what changes between levels ) (x,y,type) (type not implimented yet )

// move level into testLevel.js, same variable name for the list tho 







//  global variables for the game 
var player;       //  holds the player object
var facing = 'left';
var platforms;    //  holds the platforms 
var background;  //  holds all the background decorations
var triggers;     //  holds all of the event trrigers (dialog)
var buttons;
var cursors;      //  holds the state of the keys 
var hitPlatform;  //  t or f if we are hitting a platform
var runkey;
var background;
var shiftkey;
var nextDialogueKey;
var wallJumpCounter = 0;
var music;
var loopCount = 0;
var buttonGroup
var speedMod = 1
var pressCounter = 0

function create() {
console.log("running create")
  //  create an object to capture all the keyboard input 
  cursors = game.input.keyboard.createCursorKeys();
  shiftkey = game.input.keyboard.addKey(Phaser.Keyboard.SHIFT);
  nextDialogueKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  //  set the type of physics 
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.stage.backgroundColor = '#000000';
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  background = game.add.tileSprite(0, -3000, 4000, 4000, 'City');
  music = game.sound.add('music');
  // set the gravity of the stage 
  //game.physics.arcade.gravity.y = 250;
  buttonGroup = game.add.group()
  for (var i = 0; i < buttonPosition.length; i++) {
    //  spawn the platform and make sure its static 
    var button = game.make.button(buttonPosition[i][0], buttonPosition[i][1], buttonPosition[i][2], buttonPosition[i][3]);
    buttonGroup.add(button)
    console.log("buttonadded")
  }

  //  created the player sprite
  player = game.add.sprite(playerPosition[0], playerPosition[50], 'player');

  player.animations.add('right', 0, 0,true);
  player.animations.add('left', 0, 0, true);
  player.animations.add('idle', 0, 0, true);
  player.animations.play('idle');
  //   enable physics on the player sprite
  game.physics.enable(player, Phaser.Physics.ARCADE);
  player.body.collideWorldBounds = true;
  player.body.gravity.y = 500;
  player.body.bounce.y = 0.2;

  //  make a group to hold all of the platforms created in the world 
  platforms = game.add.group();

  //  enable physics on the platforms so the player will colids with them 
  platforms.enableBody = true;

  //  create the platforms from the list above 
  for (var i = 0; i < singlePlatformPositions.length; i++) {
    //  spawn the platform and make sure its static 
    var plat = platforms.create(singlePlatformPositions[i][0], singlePlatformPositions[i][1], singlePlatformPositions[i][2]);
    plat.body.immovable = true;
  }
  //spawn all the docrations 
  //spawn all the triggers 
  triggers = new TriggerList();
  initTriggers(triggers);

  music.play()
  game.time.events.loop(133000, restartMusic, this)
  pad = game.plugins.add(Phaser.VirtualJoystick);
  stick = pad.addDPad(0,0,200, 'dpad');
  stick.alignBottomLeft(0);
  buttonJump = pad.addButton(700, 300, 'dpad', 'button1-up', 'button1-down');
  buttonSprint = pad.addButton(700, 400, 'dpad', 'button2-up', 'button2-down');
  buttonSelect = pad.addButton(600, 400, 'dpad', 'button3-up', 'button3-down');
  buttonJump.onDown.add(jump)
  buttonSprint.onDown.add(sprint)
  buttonSelect.onDown.add(spaceReplace)
}
function jump(){
  if(player.body.touching.down && hitPlatform){
    player.body.velocity.y = -485;
    //pause the animation
    player.animations.stop();
  }
}
function sprint(){
  pressCounter += 1
  if(pressCounter%2 === 0){
    speedMod = 2
  }
  else{
    speedMod = 1
  }
}
function spaceReplace(){
  triggers.checkTrigger(player);
  //now check to see if the next dialoug button is pressed
  if (!messageBeingWritten && messageBoxVisible) {
    messageBoxNext()
  }
}


function update() {
  console.log("running update")
  if (phaser.device.android) {
    dpad.visible = false
  }
  //  Reset the players velocity (movement)
  //  Collide the player and the stars with the platforms
  hitPlatform = game.physics.arcade.collide(player, platforms);
  //console.log(hitPlatform);
  if (shiftkey.isDown) {
    sprint();
  }
  //  
  player.body.velocity.x = 0;

   if (cursors.left.isDown || stick.direction === Phaser.LEFT) {
    player.animations.play('left');
    //  Move to the left
    player.body.velocity.x = (-200 * speedMod);
    //player.animations.play('left')

  }
  else if (cursors.right.isDown || stick.direction === Phaser.RIGHT) {
    player.animations.play('right');


    //  Move to the right
    player.body.velocity.x = (200 * speedMod);
    //player.animations.play('right');

  }
  else {
    player.body.velocity.x = 0;
    player.animations.play('idle');
  }

  //  Allow the player to jump if they are touching the ground.
  if ((cursors.up.isDown || stick.direction === Phaser.UP) && player.body.touching.down && hitPlatform) {
    player.body.velocity.y = -485;
    player.animations.stop();
    if (cursors.left.isDown) {
      player.frame = 18;
    } else if (cursors.right.isDown) {
      player.frame = 17;
    }
  }

  //allow the player to jump if touching a wall 
  //if ((cursors.up.isDown) && (player.body.touching.left || player.body.touching.right) && hitPlatform) {
    // now that we know we are in a valid place to wall jump see if our counter is below max jumps 
    //if (true) {
      //  add jump velocity 
      //player.body.velocity.y = -285;
      //  add some velocity to the other side 
      //if (player.body.touching.right) {
        //player.body.velocity.x -= 200;
      //} else {
        //player.body.velocity.x += 200;
      //}
      //wallJumpCounter++;
    //}
  //}
  //reset the wall jump 
  //if (player.body.touching.down && hitPlatform) {
    //wallJumpCounter = 0;
  //}

  //  check player bounds and make sure the stage moves with it 
  if (player.body.x < (GAME_WIDTH / 2)) { // check the left bounds (player is less than middle - 100)

    // set the player to the edge of the bounds and move everything else over by the differnce 
    var screenMovmentAmmount = ((GAME_WIDTH / 2) - 100) - player.body.x;
    platforms.x += screenMovmentAmmount;
    background.tilePosition.x += (screenMovmentAmmount / 2);
    buttonGroup.x += screenMovmentAmmount
    player.body.x = (GAME_WIDTH / 2) - 100;

    //  move all of the triggers 
    triggers.moveTriggers(screenMovmentAmmount, 0);
  }
  else if (player.body.x > (GAME_WIDTH / 2)) { // check the rights bounds (player is greater than middle + 100)
    var screenMovmentAmmount = player.body.x - ((GAME_WIDTH / 2) + 100);
    platforms.x -= screenMovmentAmmount;

    player.body.x = (GAME_WIDTH / 2) + 100;
    //  move all of the triggers 
    triggers.moveTriggers(-screenMovmentAmmount, 0);
  }
  if (player.body.y < (GAME_HEIGHT / 2)) { // check the upper bounds
    var screenMovmentAmmount = player.body.y - ((GAME_HEIGHT / 2) - 100);
    platforms.y -= screenMovmentAmmount;
    buttonGroup.y -= screenMovmentAmmount
    background.tilePosition.y += -(screenMovmentAmmount / 2);
    player.body.y = (GAME_HEIGHT / 2) - 100;

    triggers.moveTriggers(0, -screenMovmentAmmount);
  } else if (player.body.y > (GAME_HEIGHT / 2)) { // check the lower bounds 
    var screenMovmentAmmount = ((GAME_HEIGHT / 2 + 100)) - player.body.y;
    platforms.y += screenMovmentAmmount;

    player.body.y = ((GAME_HEIGHT / 2) + 100);

    //  move all of the triggers 
    triggers.moveTriggers(0, screenMovmentAmmount);

  }
  //  check any trigger here to see if they apply to the player
  triggers.checkTrigger(player);
  //now check to see if the next dialoug button is pressed
  if (!messageBeingWritten && messageBoxVisible) {

    if (nextDialogueKey.isDown) {
      console.log("Pressed");
      messageBoxNext();
    }

    // do a check for the state of the indicator 
    if (framesInState == flipAfterFrames) {
      framesInState = 0;
      showNextIndication();
    } else {
      framesInState++;
    }

  } else {
    if (nextMessageIndicator != null) {
      nextMessageIndicator.destroy();
      nextMessageIndicator = null;
    }
  }
  
}



function testTrigger() {
  console.log("triggered");
  addMessageToQueue("asd asd asd asd as ");

}
