class CoinsBar extends DrawableObject{

    COINS_BAR_IMAGES = [

     'img/4. Marcadores/Purple/0_ _1.png',
     'img/4. Marcadores/Purple/20_ .png',
     'img/4. Marcadores/Purple/40_ _1.png',
     'img/4. Marcadores/Purple/60_ _1.png',
     'img/4. Marcadores/Purple/80_ _1.png',
     'img/4. Marcadores/Purple/100__1.png'
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.COINS_BAR_IMAGES);
        this.x = 230;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);
    }

    setPercentage(percentage) { // eine funktion um % von statusbar zu zeigen

        this.percentage = percentage; // bilder vom array => 0 bis 5 gesamt 6 bilder
        let path = this.COINS_BAR_IMAGES[this.resolveImgIndex()]; //resolveImgIndex ist die stelle 0 bis 6 vom array
        this.img = this.imageCache[path];

    }

    resolveImgIndex() {

        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;

        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 1) {
            return 1;
        } else {
            return 0;
        }
    }
}
