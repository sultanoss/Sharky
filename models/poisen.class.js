class Poisen extends DrawableObject {

    constructor(x, y) {

        super().loadImg('img/4. Marcadores/Posión/Dark - Left.png');
        this.x = x;
        this.y = y;
        this.height = 75;
        this.width = 75;
    }

    animate() {

        setInterval(() => {
            this.playAnimation(this.POISEN_IMAGES);
        }, 200);
    }
}