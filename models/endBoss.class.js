class Endboss extends MovableObjects {

    speed = 7;
    endBossInt;
    hitEndbossSound = new Audio('audio/hitEndbossSound.wav');



    Endboss_FLOATING = [

        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png'
    ];

    Endboss_HURT = [

        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png',
    ];

    Endboss_DEAD = [

        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png'
    ];

    constructor(x, y) {

        super().loadImg('img/2.Enemy/3 Final Enemy/1.Introduce/10.png');
        this.loadImages(this.Endboss_FLOATING);
        this.loadImages(this.Endboss_HURT);
        this.loadImages(this.Endboss_DEAD);
        this.x = x;
        this.y = y;
        this.height = 300;
        this.width = 300;
    }

    animate() {

        this.endBossInt = setInterval(() => {
            if (this.isHurt()) {
                this.playAnimation(this.Endboss_HURT);
                this.hitEndbossSound.play();
            } else if (this.isDead()) {
                this.speed = 20;
                this.playAnimation(this.Endboss_DEAD);
                this.moveDown();
            } else {
                this.playAnimation(this.Endboss_FLOATING);
            }

        }, 180);
    }
}