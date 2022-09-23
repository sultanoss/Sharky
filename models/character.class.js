class Character extends MovableObjects {
    world;
    x = 0;
    y = 120;
    width = 200;
    height = 200;
    speed = 25;
    sharkSwim = new Audio('audio/sharkSwim.wav');

    BREAK_IMAGES = [
        'img/1.Sharkie/2.Long_IDLE/i1.png',
        'img/1.Sharkie/2.Long_IDLE/I2.png',
        'img/1.Sharkie/2.Long_IDLE/I3.png',
        'img/1.Sharkie/2.Long_IDLE/I4.png',
        'img/1.Sharkie/2.Long_IDLE/I5.png',
        'img/1.Sharkie/2.Long_IDLE/I6.png',
        'img/1.Sharkie/2.Long_IDLE/I7.png',
        'img/1.Sharkie/2.Long_IDLE/I8.png',
        'img/1.Sharkie/2.Long_IDLE/I9.png',
        'img/1.Sharkie/2.Long_IDLE/I10.png',
        'img/1.Sharkie/2.Long_IDLE/I11.png',
        'img/1.Sharkie/2.Long_IDLE/I12.png',
        'img/1.Sharkie/2.Long_IDLE/I13.png',
        'img/1.Sharkie/2.Long_IDLE/I14.png'
    ];

    MOVE_IMAGES = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png'
    ];

    FIN_SLAP = [

        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        'img/1.Sharkie/4.Attack/Fin slap/2.png',
        'img/1.Sharkie/4.Attack/Fin slap/3.png',
        'img/1.Sharkie/4.Attack/Fin slap/4.png',
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png'
    ];


    ELECTRIC_SHOCK_IMAGES = [
        'img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/3.png'
    ];

    Poisoned_IMAGES = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png'
    ];

    DEAd_IMAGES = [

        'img/1.Sharkie/6.dead/1.Poisoned/1.png',
        'img/1.Sharkie/6.dead/1.Poisoned/2.png',
        'img/1.Sharkie/6.dead/1.Poisoned/3.png',
        'img/1.Sharkie/6.dead/1.Poisoned/4.png',
        'img/1.Sharkie/6.dead/1.Poisoned/5.png',
        'img/1.Sharkie/6.dead/1.Poisoned/6.png',
        'img/1.Sharkie/6.dead/1.Poisoned/7.png',
        'img/1.Sharkie/6.dead/1.Poisoned/8.png',
        'img/1.Sharkie/6.dead/1.Poisoned/9.png',
        'img/1.Sharkie/6.dead/1.Poisoned/10.png',
        'img/1.Sharkie/6.dead/1.Poisoned/11.png',
        'img/1.Sharkie/6.dead/1.Poisoned/12.png',
    ];

    THROW_POISEN_BUBBLES = [
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/7.png'
    ];

    constructor() {
        super().loadImg('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.BREAK_IMAGES);
        this.loadImages(this.MOVE_IMAGES);
        this.loadImages(this.FIN_SLAP);
        this.loadImages(this.ELECTRIC_SHOCK_IMAGES);
        this.loadImages(this.Poisoned_IMAGES);
        this.loadImages(this.DEAd_IMAGES);
        this.loadImages(this.THROW_POISEN_BUBBLES);
        this.animate();
    }

    animate() {
        this.characterInt = setInterval(() => {
            this.sharkSwim.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEnd) {
                this.playAnimation(this.MOVE_IMAGES);
                this.moveRight();
                this.sharkSwim.play();
                this.otherDirection = false;
            } else if (this.world.keyboard.LEFT && this.x > -300) {
                this.playAnimation(this.MOVE_IMAGES);
                this.moveLeft();
                this.sharkSwim.play();
                this.otherDirection = true;
            } else if (this.world.keyboard.UP) {
                this.playAnimation(this.MOVE_IMAGES);
                this.moveUp();
                this.sharkSwim.play();
            } else if (this.world.keyboard.DOWN) {
                this.playAnimation(this.MOVE_IMAGES);
                this.moveDown();
                this.sharkSwim.play();
            } else if (this.world.keyboard.D) {
                this.playAnimation(this.THROW_POISEN_BUBBLES);
            } else if (this.world.keyboard.SPACE) {
                this.playAnimation(this.THROW_POISEN_BUBBLES);
            } else {
                this.playAnimation(this.BREAK_IMAGES);
            }
            this.world.camera_x = -this.x + 100;
        }, 100);
        this.characterInt2 = setInterval(() => {
            this.checkcharacter();
        }, 100);

    }

    checkcharacter() {

        if (this.isHurt()) {
            this.playAnimation(this.ELECTRIC_SHOCK_IMAGES);
        }
        if (this.isDead()) {
            this.playAnimation(this.DEAd_IMAGES);
        }
    }


    isColliding(mo) { // collusionscheck funktion bearbeitet damit es genauer mit der collision klappt.

        return this.x - 20 + this.width - 20 > mo.x &&
            this.y + 90 + this.height - 150 > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height - 120;
    }
}
