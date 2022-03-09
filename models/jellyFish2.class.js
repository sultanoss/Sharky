class JellyFish2 extends MovableObjects {

    height = 75;
    width = 75;

    DANGEROUS2_IMAGES = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png'
    ];

    constructor(x,y){

        super().loadImg('img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png');
        this.loadImages(this.DANGEROUS2_IMAGES);
        this.x = x;
        this.y = y;
        this.speed = 0.7 + Math.random() * 0.3;
        this.animate();
    }

    animate() {

        this.enemyInt = setInterval(() => {

            this.playAnimation(this.DANGEROUS2_IMAGES);
            this.moveUp2();

        }, 120);
    }

}