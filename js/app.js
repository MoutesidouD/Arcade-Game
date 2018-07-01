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

    // You should multiply any movement by the dt parameter
    this.x= this.speed * dt;

    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player= function(x, y) {
  this.x= x;
  this.y= y;
  this.sprite= 'images/char-pink-girl.png';
};

Player.prototype.update= function(){

};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key){ //relative values.need to be fixed
  if(key ==='left' && this.x > 0){
    this.x -= 101;
  }
  if(key === 'right' && this.x <400){
    this.x += 101;
  }
  if(key === 'up' && this.y > 0 ){
    this.y -= 83;
  }
  if(key === 'down' && this.y < 400 ){
    this.y += 83;
  }

}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player= new Player(202,405);
var enemy1= new Enemy(20, 60,40);
var enemy2= new Enemy(100,145,50);
var enemy3= new Enemy(250,229,60);
var allEnemies=[];
allEnemies.push(enemy1, enemy2, enemy3);


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
