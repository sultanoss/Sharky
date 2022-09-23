class PufferFish3 extends MovableObjects {

    BUBBLESWIM_IMAGES = [

        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png'
    ];

    constructor(x, y) {

        super().loadImg('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
        this.loadImages(this.BUBBLESWIM_IMAGES);
        this.x = x;
        this.speed = 0.5 + Math.random() * 0.3;
        this.y = y;
    }

    animate() {

        this.enemyInt = setInterval(() => {

            this.moveLeft();
            this.playAnimation(this.BUBBLESWIM_IMAGES);

        }, 120);
    }

    isColliding(mo) { // collusionscheck funktion

        return this.x-20 + this.width-20 > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height-50;
    }

}