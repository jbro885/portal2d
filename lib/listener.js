// Action class need canvas  and Player
var Projectile = require('./projectile');

var Listener = function(canvas, player, projectiles) {
  this.canvas = canvas;
  this.player = player;
  this.projectiles = projectiles;
};

Listener.prototype.setListeners = function () {
  this.firing(this.player, this.projectiles);
  this.moveRight(this.player);
  this.moveLeft(this.player);
};

Listener.prototype.firing = function (player, projectiles) {
  function createProjectile(options) {
    projectiles.push(new Projectile(options));
  }
  this.canvas.addEventListener('keydown', function (event) {
    if (event.keyCode === 68) {
      var projectile = player.fireRight();
      createProjectile(projectile);
    } else if (event.keyCode === 65) {
      var projectile = player.fireLeft();
      createProjectile(projectile);
    }
  });
};

Listener.prototype.moveRight = function(player) {
  this.canvas.addEventListener('keydown', function (event) {
    if (event.keyCode === 39) {
      console.log('right key pressed');
      player.x = player.x + 5;
      player.image = player.rightImage;
    }
  });
};

Listener.prototype.moveLeft = function(player) {
  this.canvas.addEventListener('keydown', function (event) {
    if (event.keyCode === 37) {
      console.log('left key pressed');
      player.x = player.x - 5;
      player.image = player.leftImage;
    }
  });
};

module.exports = Listener;