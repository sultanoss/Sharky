class PoisenBar extends DrawableObject{

    POISEN_BAR_IMAGES = [

     'img/4. Marcadores/orange/0_ copia.png',
     'img/4. Marcadores/orange/20_ copia.png',
     'img/4. Marcadores/orange/40_ copia.png',
     'img/4. Marcadores/orange/60_ copia.png',
     'img/4. Marcadores/orange/80_ copia.png',
     'img/4. Marcadores/orange/100_ copia.png'
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.POISEN_BAR_IMAGES);
        this.x = 430;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);
    }

    setPercentage(percentage) { // eine funktion um % von statusbar zu zeigen

        this.percentage = percentage; // bilder vom array => 0 bis 5 gesamt 6 bilder
        let path = this.POISEN_BAR_IMAGES[this.resolveImgIndex()]; //resolveImgIndex ist die stelle 0 bis 6 vom array
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
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }


}