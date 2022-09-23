class PufferFish extends MovableObjects {

    SWIM_IMAGES = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];

    constructor(x, y) {

        super().loadImg('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.SWIM_IMAGES);
        this.x = x;
        this.speed = 1 + Math.random() * 0.3;
        this.y = y;
    }

    animate() {

        this.enemyInt = setInterval(() => {

            this.moveLeft();
            this.playAnimation(this.SWIM_IMAGES);

        }, 120);
    }

}