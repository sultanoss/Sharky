class EndBossLifeBrar extends DrawableObject{

    LIFE_BAR_IMAGES = [

     'img/4. Marcadores/green/Life/0_  copia 3.png',
     'img/4. Marcadores/green/Life/20_ copia 4.png',
     'img/4. Marcadores/green/Life/40_  copia 3.png',
     'img/4. Marcadores/green/Life/60_  copia 3.png',
     'img/4. Marcadores/green/Life/80_  copia 3.png',
     'img/4. Marcadores/green/Life/100_  copia 2.png'
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.LIFE_BAR_IMAGES);
        this.x = 3050;
        this.y = 70;
        this.width = 200;
        this.height = 60;
        this.setPercentage(100);
    }

    setPercentage(percentage) { // eine funktion um % von statusbar zu zeigen

        this.percentage = percentage; // bilder vom array => 0 bis 5 gesamt 6 bilder
        let path = this.LIFE_BAR_IMAGES[this.resolveImgIndex()]; //resolveImgIndex ist die stelle 0 bis 6 vom array
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