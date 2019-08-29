const Enemy = function(x ,y, speed) {
    this.x=x;
    this.y=y;
    this.speed=speed;
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {
    this.x +=this.speed *dt;
    if(this.x>550){
        this.x=-100;
        this.speed=Math.floor(Math.random()*100)+100;
    }
    if (player.x < this.x + 60 &&
        player.x + 40 > this.x &&
        player.y < this.y + 30 &&
        30 + player.y > this.y) {
        player.x = 200;
        player.y = 400;
        document.querySelector('body').style.backgroundColor = 'yellow';
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = 'white';
        }, 200);        
    }
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
const Player = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {
    if (this.y > 400) {
        this.y = 300;
    }
    if (this.x > 400) {
        this.x = 400;
    }
    if (this.x < 0) {
        this.x = 0;
    }
    if (this.y < 0) {
        this.x = 200;
        this.y = 380;
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
        if (key ==='left'){
            this.x -= this.speed + 50;
        }else if(key ==='right'){
            this.x += this.speed + 50;
        }else if(key ==='up'){
            this.y -= this.speed + 30;
        }else{
            this.y += this.speed + 30;
        }
};

const allEnemies = [];
const enemyPos = [60, 140, 220];
const player = new Player(200, 400, 50);
let enemy;
enemyPos.forEach(function(posY) {
    enemy = new Enemy(0, posY, 100 + Math.floor(Math.random() * 512));
    allEnemies.push(enemy);
});

document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
