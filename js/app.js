// Enemies our player must avoid
var Enemy = function(x,y,speed) {
  this.x= x;
  this.y= y;
  this.speed= speed;
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

/*You should multiply any movement by the dt parameters
  which will ensure the game runs at the same speed for
  all computers.*/
    if (this.x < 505) {
      this.x += this.speed * dt;
    } else {
      this.x = -100; //set enemy back to start once complete its run
    }

    //check for collisions
    if (player.x< (this.x +80) && (player.x +80)> this.x &&
    player.y< (this.y + 70) && (player.y + 70) > this.y){
           player.x=202;
           player.y=405;
         }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Creates player
var Player= function(x, y) {
  this.x= x;
  this.y= y;
  this.sprite= 'images/char-pink-girl.png';
};

//Determines when the game is won
Player.prototype.update= function(){

    if(this.y<=0){
      setTimeout(function(){
      player.x=202;
      player.y=405;
    },600);
}};

//Draws player on screen
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Allows player move along board
//and sets limits to avoid moving out of board
Player.prototype.handleInput = function(allowedKeys){
  if(allowedKeys ==='left' && this.x > 0){
    this.x -= 101;
  }
  if(allowedKeys === 'right' && this.x <400){
    this.x += 101;
  }
  if(allowedKeys === 'up' && this.y > 0 ){
    this.y -= 83;
  }
  if(allowedKeys === 'down' && this.y < 400 ){
    this.y += 83;
  }

}

// Now instantiate your objects.
var player= new Player(202,405);// Place the player object in a variable called player
var enemiesY= [63, 147, 230]; //Lanes(y) where enemies can run
var enemy;
var allEnemies=[]; // Place all enemy objects in an array called allEnemies

enemiesY.forEach(function(y) {
  //create enemies(off-screen) for each lane and their random speed
    enemy = new Enemy(-101, y, 100 + Math.floor(Math.random() * 300));
    allEnemies.push(enemy);
});




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
