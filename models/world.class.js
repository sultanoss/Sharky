class World {

    ctx;
    canvas;
    character = new Character();
    keyboard;
    camera_x = 0;
    currentTime = new Date().getTime();
    level = level1;
    life = new Life();
    coins = new Coins();
    poisen = new Poisen();
    lifeBar = new LifeBrar();
    coinsBar = new CoinsBar();
    poisenBar = new PoisenBar();
    endBossLifeBar = new EndBossLifeBrar();
    throwableObjects1 = [];
    throwableObjects2 = [];
    backgroundMusic = new Audio('audio/backgroundMusic.mp3');
    electricShock = new Audio('audio/electricShock.wav')
    sharkyPainSound = new Audio('audio/sharkyPaisSound.mp3');
    pickLifeSound = new Audio('audio/pickLife.wav');
    collectCoinsSound = new Audio('audio/collectCoinsSound.wav')
    collectBottlesSound = new Audio('audio/poisenBottleSound.wav');
    killedEnemySound = new Audio('audio/killedEnemySound.wav');
    winGameSound = new Audio('audio/winGameSound.mp3');
    lostGameSound = new Audio('audio/lostGameSound.mp3');


    constructor(canvas, keyboard) {

        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.addCoinsBonus();
        this.checkGame();
        this.gameMusic();
        this.start();
    }

    start() {
        this.level.enemies1.forEach(e => e.animate());
        this.level.enemies2.forEach(e => e.animate());
        this.level.endBoss.forEach(e => e.animate());
    }


    setWorld() {

        this.character.world = this;

    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // wir löschen unser world damit wir keine doppelte bilder haben
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.background);
        this.addObjectsToMap(this.level.life);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.poisen);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.lifeBar);
        this.addToMap(this.coinsBar);
        this.addToMap(this.poisenBar);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.endBossLifeBar);

        this.addToMap(this.character);
        this.addObjectsToMap(this.throwableObjects1);
        this.addObjectsToMap(this.throwableObjects2);
        this.addObjectsToMap(this.level.enemies1);
        this.addObjectsToMap(this.level.enemies2);
        this.addObjectsToMap(this.level.endBoss);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    addToMap(mo) {


        if (mo.otherDirection) {

            this.flipImage(mo); // um das Bild zu spiegeln
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        mo.drawFrame(this.ctx); // funktiom um den viereck zu erstellen
        if (mo.otherDirection) {
            this.flipImageBack(mo);// das gespiegelte bild zu restoren
        }
    }


    flipImage(mo) {

        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }



    flipImageBack(mo) {

        mo.x = mo.x * -1;
        this.ctx.restore();
    }


    addObjectsToMap(objects) {

        objects.forEach(object => {
            this.addToMap(object);
        });
    }


    run() {

        this.runInt = setInterval(() => {

            this.checkCollitionsEnemies1();
            this.checkCollitionsEnemies2();
            this.checkCollitionsEndBoss();
            this.checkCollitionsLife();
            this.checkCollitionsCoins();
            this.checkCollitionsPoisen();
            this.checkThrowObjects1();
            this.checkThrowObjects2();
            this.endBossAttack();
        }, 200);
    }


    checkThrowObjects1() {

        if (this.keyboard.SPACE && this.character.energy3 > 20 && this.poisenBar.percentage > 0) {
            let bubble = new ThrowableObjects1(this.character.x + 150, this.character.y + 100);
            this.throwableObjects1.push(bubble);
            this.poisenBar.setPercentage(this.character.energy3 -= 16);
        }
    }


    checkThrowObjects2() {

        if (this.keyboard.D) {
            let bubble2 = new ThrowableObjects2(this.character.x + 150, this.character.y + 100);
            this.throwableObjects2.push(bubble2);
        }
    }


    checkCollitionsEnemies1() {

        this.level.enemies1.forEach((enemy1) => {
            this.characterHitEnemies1(enemy1);
            this.killEnemy1(enemy1);
        });
    }


    checkCollitionsEnemies2() {

        this.level.enemies2.forEach((enemy2) => {
            this.characterHitEnemies2(enemy2);
            this.killEnemy2(enemy2);
        });
    }


    characterHitEnemies1(enemy1) {

        if (this.character.isColliding(enemy1)) {
            this.character.hit1();
            this.sharkyPainSound.play();
            this.lifeBar.setPercentage(this.character.energy);
        }
    }


    characterHitEnemies2(enemy2) {

        if (this.character.isColliding(enemy2)) {
            this.character.hit2();
            this.electricShock.play();
            this.lifeBar.setPercentage(this.character.energy);
        }
    }


    killEnemy1(enemy1) {

        this.throwableObjects2.forEach(throwableObject => {
            let fish = this.level.enemies1.indexOf(enemy1);
            if (throwableObject.isColliding(enemy1)) {
                this.throwableObjects2.splice(throwableObject, 1);
                this.level.enemies1.splice(fish, 1);
                this.killedEnemySound.play();
            }

        });
    }


    killEnemy2(enemy2) {

        this.throwableObjects2.forEach(throwableObject => {
            let fish = this.level.enemies2.indexOf(enemy2);
            if (throwableObject.isColliding(enemy2)) {
                this.throwableObjects2.splice(throwableObject, 1);
                this.level.enemies2.splice(fish, 1);
                this.killedEnemySound.play();
            }

        });
    }



    checkCollitionsEndBoss() {

        this.level.endBoss.forEach((enemy) => {
            this.characterHitEndBoss(enemy);
            this.killEndBoss(enemy);
        });
    }


    characterHitEndBoss(enemy) {

        if (this.character.isColliding(enemy)) {
            this.character.hit2();
        }
    }


    killEndBoss(enemy) {

        this.throwableObjects1.forEach(throwableObject1 => {
            if (throwableObject1.isColliding(enemy)) {
                this.throwableObjects1.splice(throwableObject1, 1);
                enemy.hit2();
                this.endBossLifeBar.setPercentage(enemy.energy);
            }
        });
    }

    endBossAttack() {
        this.level.endBoss.forEach(endboss => {

            if (endboss.energy < 100) {
                endboss.moveLeft();
            }
        });
    }


    checkCollitionsLife() {

        this.level.life.forEach((life) => {
            this.characterHitLife(life);
        });
    }


    characterHitLife(life) {

        if (this.character.isColliding(life)) {
            this.character.energy = 100;
            this.lifeBar.setPercentage(100);
            this.level.life.splice(life, 1);
            this.pickLifeSound.play();
        }
    }


    checkCollitionsCoins() {

        this.level.coins.forEach((coin) => {
            this.characterHitCoins(coin);
        });
    }


    characterHitCoins(coin) {
        if (this.character.isColliding(coin)) {
            this.character.hitObjeckt();
            this.coinsBar.setPercentage(this.character.energy2);
            this.level.coins.splice(coin, 1);
            this.collectCoinsSound.play();
        }
    }


    addCoinsBonus() {
        this.test = setInterval(() => {
            if (this.level.coins.length == 0) {
                this.character.energy += 25;
                this.lifeBar.setPercentage(this.character.energy);
                this.pickLifeSound.play();
                console.log(this.character.energy);
                setTimeout(() => {
                    clearInterval(this.test);
                }, 150);
            }
        }, 200);
    }


    checkCollitionsPoisen() {

        this.level.poisen.forEach((poisen) => {
            this.characterHitPoisen(poisen);
        });
    }


    characterHitPoisen(poisen) {
        if (this.character.isColliding(poisen)) {
            this.character.hitObjeckt2();
            this.poisenBar.setPercentage(this.character.energy3);
            this.level.poisen.splice(poisen, 1);
            this.collectBottlesSound.play();
        }
    }


    endBossDead() {
        this.winGameSound.play();
        this.winGameSound.volume = 0.2;
        setTimeout(() => {
            this.backgroundMusic.pause();
            clearInterval(this.gameOverInterval);
            this.level.enemies1.forEach(enemy1 => {
                clearInterval(enemy1.enemyInt);
            });
            this.level.enemies2.forEach(enemy2 => {
                clearInterval(enemy2.enemyInt);
            });
            clearInterval(this.character.characterInt);
            clearInterval(this.level.endBoss[0].endBossInt);
            clearInterval(this.runInt);
            document.getElementById('gameOver-win').classList.remove('d-none');
            document.getElementById('start-btn').classList.remove('d-none');
        }, 3000);
    }


    characterDead() {
        setTimeout(() => {
            this.lostGameSound.play();
            this.lostGameSound.volume = 0.2;
            this.backgroundMusic.pause();
            this.sharkyPainSound.pause();
            clearInterval(this.gameOverInterval);
            this.level.enemies1.forEach(enemy1 => {
                clearInterval(enemy1.enemyInt);
            });
            this.level.enemies2.forEach(enemy2 => {
                clearInterval(enemy2.enemyInt);
            });
            clearInterval(this.character.characterInt);
            clearInterval(this.character.characterInt2);
            clearInterval(this.level.endBoss[0].endBossInt);
            clearInterval(this.runInt);
            document.getElementById('gameOver-lost').classList.remove('d-none');
            document.getElementById('tryAgain').classList.remove('d-none');
        }, 100);

    }



    checkGame() {
        this.gameOverInterval = setInterval(() => {
            if (this.level.endBoss[0].isDead()) {
                this.endBossDead();
            } else if (this.character.isDead()) {
                this.characterDead();
            }
        }, 500);
    }


    gameMusic() {

        this.backgroundMusic.play();
        this.backgroundMusic.loop = true;
        this.backgroundMusic.volume = 0.1;
    }
}