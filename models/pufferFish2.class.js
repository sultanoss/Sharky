class PufferFish2 extends MovableObjects {

    TRANSITION_IMAGES = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png'
    ];
    constructor(x,y){

        super().loadImg('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png');
        this.loadImages(this.TRANSITION_IMAGES);
        this.x = x;
        this.speed = 0.7 + Math.random() * 0.3;
        this.y = y;
        this.animate();
    }

    animate() {

        this.enemyInt = setInterval(() => {

            this.moveLeft();
            this.playAnimation(this.TRANSITION_IMAGES);

        }, 120);
}

}