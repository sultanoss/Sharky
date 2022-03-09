class BackgroundObject extends DrawableObject {

    width = 720;
    height = 480;

    BACKGROUND_IMAGES = [
        'img/3. Background/Dark/1.png'
    ];

    constructor(imagesPath,x) {

        super().loadImg(imagesPath);
        this.x = x;
        this.y = 480 - this.height; // 480 ist die standart höhe von unseren canvas - die höhe von dem objekt den wir einfügen
    }
}