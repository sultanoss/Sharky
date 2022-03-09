class JellyFish extends MovableObjects {

    height = 75;
    width = 75;

    DANGEROUS_GREEN = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png'
    ];
    constructor(x, y) {

        super().loadImg('img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png');
        this.loadImages(this.DANGEROUS_GREEN);
        this.x = x;
        this.y = y;
        this.speed = 0.7 + Math.random() * 0.3;
        this.animate();
    }

    animate() {

        this.enemyInt = setInterval(() => {

            this.playAnimation(this.DANGEROUS_GREEN);
            this.moveUp2();

        }, 120);
    }

}