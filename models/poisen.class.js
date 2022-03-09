class Poisen extends DrawableObject {

    // POISEN_IMAGES = [

    //     'img/4. Marcadores/Posión/Animada/1.png',
    //     'img/4. Marcadores/Posión/Animada/2.png',
    //     'img/4. Marcadores/Posión/Animada/3.png',
    //     'img/4. Marcadores/Posión/Animada/4.png',
    //     'img/4. Marcadores/Posión/Animada/5.png',
    //     'img/4. Marcadores/Posión/Animada/6.png',
    //     'img/4. Marcadores/Posión/Animada/7.png',
    //     'img/4. Marcadores/Posión/Animada/8.png'
    // ];

    constructor(x, y) {

        super().loadImg('img/4. Marcadores/Posión/Dark - Left.png');
        // this.loadImages(this.POISEN_IMAGES)
        this.x = x;
        this.y = y;
        this.height = 75;
        this.width = 75;
        // this.animate();
    }

    animate() {

        setInterval(() => {
            this.playAnimation(this.POISEN_IMAGES);
        }, 200);
    }
}